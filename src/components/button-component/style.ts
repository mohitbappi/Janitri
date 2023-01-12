import { StyleSheet } from "react-native";
import { verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
	container: {
		height: verticalScale(36),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.primaryColor,
		borderRadius: theme.borderRadius.radius8,
	},
	disabled: {
		backgroundColor: theme.colors.grey,
	},
	label: {
		color: theme.colors.white,
		fontSize: theme.fontSize.font16,
	},
})
