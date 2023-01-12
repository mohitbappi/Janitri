import React from "react";
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { hexToRgbA } from "../../utils/hex-to-rgba";
import { createStyleSheet } from "./style";

export interface InputComponentProps extends TextInputProps {
	label?: string
	value: string
	hasMobile?: boolean
	textInputStyle?: StyleProp<TextStyle>
	viewStyle?: StyleProp<ViewStyle>
}

export const Input = (props: InputComponentProps) => {
	const { theme } = useAppTheme()
	const styles = createStyleSheet(theme)
	const { label, value, hasMobile = false, textInputStyle, viewStyle, ...remainingProps } = props || {}

	let mobileProps = {};
	if (hasMobile) {
		mobileProps = {
			...mobileProps,
			maxLength: 10,
			keyboardType: 'numeric',
			returnKeyType: 'done',
		};
	}

	return (
		<View style={[styles.container, viewStyle]}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				value={value}
				style={[styles.textInput, textInputStyle]}
				placeholderTextColor={hexToRgbA(theme.colors.black, 0.6)}
				{...mobileProps}
				{...remainingProps}
			/>
		</View>
	)
}