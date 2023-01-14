import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import {
	arrowBack,
	babyFeet,
	heartBeat,
	welcomeLogo,
} from "../../assets/images";
import { strings } from "../../assets/strings";
import { Header } from "../../components/header";
import { ImageComponent } from "../../components/image-component";
import { navigations } from "../../config/app-navigation/constant";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";

export const Track = () => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);

	return (
		<View style={styles.container}>
			<Header title={strings.track} hasBackIcon={false} />
			<TouchableOpacity
				style={styles.cardContainer}
				onPress={() => navigationRouter([{ name: navigations.BABY_KICKS }])}
			>
				<View style={styles.row}>
					<ImageComponent source={babyFeet} style={styles.image} />
					<Text style={styles.text}>{strings.babyKickCounter}</Text>
				</View>
				<ImageComponent source={arrowBack} style={styles.arrowBack} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.cardContainer}
				onPress={() =>
					navigationRouter([{ name: navigations.BABY_HEARTBEAT_NST }])
				}
			>
				<View style={styles.row}>
					<ImageComponent source={heartBeat} style={styles.image} />
					<Text style={styles.text}>{strings.babyHeartbeat}</Text>
				</View>
				<ImageComponent source={arrowBack} style={styles.arrowBack} />
			</TouchableOpacity>
		</View>
	);
};
