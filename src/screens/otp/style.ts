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
		innerContainer: {
			paddingHorizontal: normalScale(32),
			flex: 1,
		},
		verify: {
			fontSize: theme.fontSize.font22,
			color: theme.colors.black,
			fontWeight: "700",
			marginTop: verticalScale(40),
			alignSelf: "center",
			marginBottom: verticalScale(40),
		},
		row: {
			flexDirection: "row",
			alignItems: "center",
			alignSelf: "center",
			marginTop: verticalScale(26),
			marginBottom: verticalScale(70),
		},
		otp: {
			fontSize: theme.fontSize.font14,
			color: theme.colors.black,
			marginRight: normalScale(10),
		},
		rowOnly: {
			flexDirection: "row",
		},
		number: {
			color: theme.colors.blue,
			fontSize: theme.fontSize.font14,
		},
		edit: {
			height: normalScale(14),
			width: normalScale(14),
			marginLeft: normalScale(6),
		},
		didntReceive: {
			fontSize: theme.fontSize.font14,
			alignSelf: "center",
		},
		resendIn: {
			marginTop: verticalScale(12),
			alignSelf: "center",
			color: theme.colors.blue,
			fontSize: theme.fontSize.font14,
			fontWeight: "500",
		},
		buttonStyle: {
			position: "absolute",
			bottom: verticalScale(32),
			width: "100%",
			left: normalScale(32),
			right: normalScale(32),
		},
	});
