import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";
import { hexToRgbA } from "../../utils/hex-to-rgba";

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
	container: {
		marginBottom: verticalScale(20),
	},
	label: {
		color: theme.colors.black,
		fontSize: theme.fontSize.font12,
		marginBottom: verticalScale(8)
	},
	textInput: {
		backgroundColor: theme.colors.white,
		borderRadius: theme.borderRadius.radius8,
		borderColor: hexToRgbA(theme.colors.black, 20),
		borderWidth: theme.borderWidth.borderWidth1p5,
		height: verticalScale(36),
		alignItems: 'center',
		paddingHorizontal: normalScale(16),
		color: theme.colors.black,
		fontSize: theme.fontSize.font14,
		width: '100%'
	}
})
