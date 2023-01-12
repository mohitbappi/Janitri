import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		paddingHorizontal: normalScale(32)
	},
	janitriLogo: {
		marginTop: verticalScale(12),
		height: verticalScale(40),
		width: normalScale(130),
		alignSelf: 'center',
		marginBottom: verticalScale(100),
	},
	welcomeLogo: {
		height: normalScale(300),
		width: normalScale(260),
		alignSelf: 'center',
	},
	title: {
		marginTop: verticalScale(52),
		fontWeight: '600',
		fontSize: theme.fontSize.font22,
		color: theme.colors.black,
		marginBottom: verticalScale(6),
	},
	bottom: {
		marginTop: verticalScale(16),
		fontWeight: '500',
		fontSize: theme.fontSize.font12,
		color: theme.colors.black,
		textAlign: 'center'
	},
	footer: {
		flexDirection: 'row'
	},
	hyperlink: {
		textDecorationLine: 'underline',
		color: theme.colors.blue
	}
})
