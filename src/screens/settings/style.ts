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
		settings: {
			fontSize: theme.fontSize.font22,
			color: theme.colors.black,
			fontWeight: "500",
		},
		sectionView: {
			flexDirection: "row",
			justifyContent: "space-between",
			paddingHorizontal: normalScale(16),
			borderBottomColor: hexToRgbA(theme.colors.black, 20),
			borderBottomWidth: theme.borderWidth.borderWidth1p5,
			paddingVertical: verticalScale(16),
			alignItems: "center",
		},
		label: {
			fontSize: theme.fontSize.font14,
			color: theme.colors.black,
		},
		arrowBack: {
			height: normalScale(24),
			width: normalScale(24),
		},
		version: {
			position: "absolute",
			bottom: verticalScale(30),
			alignSelf: "center",
		},
	});
