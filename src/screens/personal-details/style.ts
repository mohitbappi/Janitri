import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";
import { hexToRgbA } from "../../utils/hex-to-rgba";

export const createStyleSheet = (theme: ThemeProps) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.white,
		},
		padding: {
			paddingHorizontal: normalScale(16),
		},
		innerContainer: {
			paddingHorizontal: normalScale(32),
			flex: 1,
		},
		letsKnow: {
			fontSize: theme.fontSize.font18,
			color: theme.colors.black,
			fontWeight: "700",
			marginTop: verticalScale(30),
			marginBottom: verticalScale(20),
		},
		buttonStyle: {
			position: "absolute",
			bottom: verticalScale(32),
			left: normalScale(32),
			right: normalScale(32),
		},
		button: {
			left: normalScale(16),
			right: normalScale(16),
		},
	});
