import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    container: {
        height: verticalScale(36),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.radius8,
        borderColor: theme.colors.primaryColor,
        borderWidth: theme.borderWidth.borderWidth1,
        flexDirection: 'row',
    },
    image: {
        marginRight: normalScale(6),
        height: normalScale(16),
        width: normalScale(16)
    },
    label: {
        color: theme.colors.primaryColor,
        fontSize: theme.fontSize.font16,
    },
})
