import { StyleSheet } from "react-native";
import {
	lineHeightScale,
	normalScale,
	verticalScale,
} from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";
import { hexToRgbA } from "../../utils/hex-to-rgba";

export const createStyleSheet = (theme: ThemeProps) =>
	StyleSheet.create({
		tableBody: {
			flexDirection: "row",
			borderBottomColor: hexToRgbA(theme.colors.black, 20),
			borderBottomWidth: theme.borderWidth.borderWidth1p5,
			paddingVertical: verticalScale(10),
			paddingHorizontal: normalScale(16),
		},
		value: {
			color: theme.colors.black,
			fontSize: theme.fontSize.font14,
			width: normalScale(94),
		},
		start: {
			width: normalScale(94),
		},
		duration: {
			width: normalScale(101),
		},
		kicks: {
			marginLeft: normalScale(20),
		},
		container: {
			flex: 1,
			backgroundColor: theme.colors.white,
		},
		header: {
			paddingRight: normalScale(16),
			paddingLeft: normalScale(10),
			borderTopColor: hexToRgbA(theme.colors.black, 20),
			borderTopWidth: theme.borderWidth.borderWidth1p5,
			borderBottomColor: hexToRgbA(theme.colors.black, 20),
			borderBottomWidth: theme.borderWidth.borderWidth1p5,
			paddingVertical: verticalScale(6),
		},
		bottomView: {
			position: "absolute",
			paddingBottom: verticalScale(30),
			paddingTop: verticalScale(10),
			backgroundColor: theme.colors.white,
			width: "100%",
			zIndex: 1000,
			bottom: 0,
		},
		bottom: {
			fontSize: theme.fontSize.font14,
			color: theme.colors.black,
			textAlign: "center",
			maxWidth: normalScale(280),
			lineHeight: lineHeightScale(14),
			alignSelf: "center",
		},
		tableHeader: {
			backgroundColor: hexToRgbA(theme.colors.grey, 80),
			paddingVertical: verticalScale(10),
			paddingHorizontal: normalScale(16),
			borderBottomColor: hexToRgbA(theme.colors.black, 20),
			borderBottomWidth: theme.borderWidth.borderWidth1p5,
			flexDirection: "row",
			justifyContent: "space-between",
		},
		key: {
			color: hexToRgbA(theme.colors.black, 50),
			fontWeight: "500",
		},
		scrollView: {
			paddingBottom: verticalScale(100),
		},
	});
