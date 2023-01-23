import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";

export const createStyleSheet = (theme: ThemeProps) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.white,
		},
		padding: {
			paddingHorizontal: normalScale(16),
		},
		buttonView: {
			shadowColor: theme.colors.black,
			shadowOpacity: theme.opacity.opacity2,
			shadowRadius: theme.borderRadius.radius4,
			shadowOffset: {
				width: 0,
				height: verticalScale(1),
			},
			elevation: 5,
			position: "absolute",
			right: normalScale(20),
			top: verticalScale(30),
			backgroundColor: theme.colors.white,
			paddingHorizontal: normalScale(10),
			paddingVertical: verticalScale(10),
		},
		delete: {
			fontSize: theme.fontSize.font10,
			color: theme.colors.black,
			fontWeight: "700",
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
