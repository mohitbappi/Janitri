import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { useAppTheme } from "../../app-hooks/use-app-theme";
import { ImageComponent } from "../image-component";
import { createStyleSheet } from "./style";

export interface SecondaryButtonProps extends TouchableOpacityProps {
    ctaLabel: string
    buttonStyle?: StyleProp<ViewStyle>
    image?: number
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
    const { theme } = useAppTheme()
    const styles = createStyleSheet(theme)
    const { ctaLabel, buttonStyle, image, ...remainingProps } = props || {}

    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.container, buttonStyle]} {...remainingProps}>
            {!!image && <ImageComponent source={image} style={styles.image} />}
            <Text style={styles.label}>{ctaLabel}</Text>
        </TouchableOpacity>
    )
}