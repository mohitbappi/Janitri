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
		subHeader: {
			paddingHorizontal: normalScale(32),
			paddingVertical: verticalScale(16),
			flexDirection: "row",
			justifyContent: "space-between",
			borderBottomColor: hexToRgbA(theme.colors.black, 20),
			borderBottomWidth: theme.borderWidth.borderWidth1p5,
			alignItems: "center",
		},
		value: {
			fontSize: theme.fontSize.font20,
			color: theme.colors.primaryColor,
			alignSelf: "center",
			fontWeight: "700",
			marginBottom: verticalScale(5),
		},
		black: {
			color: theme.colors.black,
			fontWeight: "500",
			fontSize: theme.fontSize.font14,
			marginTop: verticalScale(6),
		},
		label: {
			fontSize: theme.fontSize.font16,
			color: hexToRgbA(theme.colors.black, 50),
			fontWeight: "500",
			alignSelf: "center",
		},
		timerView: {
			alignSelf: "center",
			marginTop: verticalScale(30),
			marginBottom: verticalScale(60),
		},
		rowOnly: {
			flexDirection: "row",
			alignItems: "center",
		},
		clock: {
			height: normalScale(18),
			width: normalScale(18),
			marginRight: normalScale(4),
		},
		timer: {
			fontSize: theme.fontSize.font18,
			fontWeight: "500",
		},
		maxHrs: {
			fontSize: theme.fontSize.font10,
			textAlign: "center",
		},
		desc: {
			marginTop: verticalScale(32),
			fontSize: theme.fontSize.font14,
			color: theme.colors.black,
			textAlign: "center",
			fontWeight: "400",
			alignSelf: "center",
			maxWidth: normalScale(280),
			marginBottom: verticalScale(60),
		},
		progress: {
			alignSelf: "center",
		},
		recordView: {
			position: "absolute",
			bottom: verticalScale(40),
			alignSelf: "center",
		},
		record: {
			alignSelf: "center",
		},
		records: {
			fontSize: theme.fontSize.font16,
			color: theme.colors.primaryColor,
			textDecorationLine: "underline",
		},
		row: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: verticalScale(20),
		},
		margin: {
			marginRight: normalScale(10),
		},
		buttonStyle: {
			width: normalScale(160),
		},
	});
