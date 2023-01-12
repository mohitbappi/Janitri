import React from "react";
import {
	StyleProp,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { arrowBack, info } from "../../assets/images";
import { ImageComponent } from "../image-component";
import { createStyleSheet } from "./style";

export interface HeaderProps {
	title?: string;
	viewStyle?: StyleProp<ViewStyle>;
	hasInfoIcon?: boolean;
	onPressInfo?: () => void;
	onPressBack?: () => void;
	hasBackIcon?: boolean;
}

export const Header = (props: HeaderProps) => {
	const { theme } = useAppTheme();
	const styles = createStyleSheet(theme);
	const {
		title,
		viewStyle,
		hasInfoIcon = false,
		onPressInfo,
		onPressBack,
		hasBackIcon = true,
	} = props || {};

	return (
		<View style={[styles.container, viewStyle]}>
			<View style={styles.row}>
				{hasBackIcon && (
					<TouchableOpacity activeOpacity={0.8} onPress={onPressBack}>
						<ImageComponent source={arrowBack} style={styles.arrowBack} />
					</TouchableOpacity>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>
			{hasInfoIcon && (
				<TouchableOpacity activeOpacity={0.8} onPress={onPressInfo}>
					<ImageComponent source={info} style={styles.info} />
				</TouchableOpacity>
			)}
		</View>
	);
};
