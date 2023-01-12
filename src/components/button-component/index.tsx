import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { createStyleSheet } from "./style";

export interface ButtonComponentProps extends TouchableOpacityProps {
	ctaLabel: string
	buttonStyle?: StyleProp<ViewStyle>
	disabled?: boolean
}

export const ButtonComponent = (props: ButtonComponentProps) => {
	const { theme } = useAppTheme()
	const styles = createStyleSheet(theme)
	const { ctaLabel, buttonStyle, disabled = false, ...remainingProps } = props || {}

	return (
		<View style={buttonStyle}>
			<TouchableOpacity
				activeOpacity={0.8}
				disabled={disabled}
				style={[styles.container, disabled && styles.disabled]}
				{...remainingProps}
			>
				<Text style={styles.label}>{ctaLabel}</Text>
			</TouchableOpacity>
		</View>
	)
}