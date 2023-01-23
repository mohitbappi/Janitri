import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";

export const createStyleSheet = (theme: ThemeProps) =>
	StyleSheet.create({
		container: {
			height: verticalScale(40),
			justifyContent: "space-between",
			backgroundColor: theme.colors.white,
			flexDirection: "row",
			alignItems: "center",
			shadowColor: theme.colors.black,
			shadowOpacity: theme.opacity.opacity2,
			shadowRadius: theme.borderRadius.radius4,
			shadowOffset: {
				width: 0,
				height: verticalScale(1),
			},
			elevation: 5,
			paddingHorizontal: normalScale(10),
		},
		row: {
			flexDirection: "row",
			alignItems: "center",
		},
		arrowBack: {
			height: normalScale(24),
			width: normalScale(24),
			transform: [{ rotate: "180deg" }],
			marginRight: normalScale(10),
		},
		title: {
			color: theme.colors.black,
			fontSize: theme.fontSize.font16,
			fontWeight: "500",
		},
		info: {
			height: normalScale(20),
			width: normalScale(20),
			marginRight: normalScale(8),
		},
		threeDot: {
			height: normalScale(18),
			width: normalScale(18),
		}
	});
