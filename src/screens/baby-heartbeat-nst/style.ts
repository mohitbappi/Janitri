import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";

export const createStyleSheet = (theme: ThemeProps) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.white,
		},
		comingSoonView: {
			shadowColor: theme.colors.black,
			shadowOpacity: theme.opacity.opacity2,
			shadowRadius: theme.borderRadius.radius4,
			shadowOffset: {
				width: 0,
				height: verticalScale(1),
			},
			elevation: 5,
			backgroundColor: theme.colors.white,
			paddingHorizontal: normalScale(16),
			paddingVertical: verticalScale(16),
			marginHorizontal: normalScale(16),
			borderRadius: theme.borderRadius.radius12,
			marginTop: verticalScale(160),
		},
		comingSoon: {
			height: normalScale(150),
			width: normalScale(150),
			alignSelf: "center",
		},
		message: {
			fontSize: theme.fontSize.font16,
			color: theme.colors.primaryColor,
			alignSelf: "center",
			fontWeight: "600",
		},
	});
