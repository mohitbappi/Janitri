import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";
import { hexToRgbA } from "../../utils/hex-to-rgba";

export const createStyleSheet = (theme: ThemeProps) =>
	StyleSheet.create({
		question: {
			fontSize: theme.fontSize.font16,
			color: theme.colors.black,
			fontWeight: "700",
			marginTop: verticalScale(20),
			marginHorizontal: normalScale(16),
		},
		answer: {
			fontSize: theme.fontSize.font14,
			color: theme.colors.black,
			fontWeight: "400",
			marginTop: verticalScale(10),
			marginHorizontal: normalScale(16),
			textAlign: "justify",
		},
		container: {
			flex: 1,
			backgroundColor: theme.colors.white,
		},
	});
