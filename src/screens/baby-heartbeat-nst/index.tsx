import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { comingSoon } from "../../assets/images";
import { strings } from "../../assets/strings";
import { Header } from "../../components/header";
import { ImageComponent } from "../../components/image-component";
import { navigations } from "../../config/app-navigation/constant";
import { navigationRouter } from "../../utils/navigation-router";
import { createStyleSheet } from "./style";

export interface BabyHeartbeatNstProps {
	navigation: NavigationContainerRef;
}

export const BabyHeartbeatNst = (props: BabyHeartbeatNstProps) => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const { navigation } = props || {};

	return (
		<View style={styles.container}>
			<Header
				onPressBack={() => navigation.goBack()}
				title={strings.babyHeartbeat}
				hasInfoIcon
				onPressInfo={() =>
					navigationRouter([{ name: navigations.INFORMATION }])
				}
			/>
			<View style={styles.comingSoonView}>
        <ImageComponent source={comingSoon} style={styles.comingSoon} />
				<Text style={styles.message}>{strings.comingSoonMsg}</Text>
			</View>
		</View>
	);
};
