import { StyleSheet } from "react-native";
import { normalScale, verticalScale } from "../../theme/device/normalize";
import { ThemeProps } from "../../theme/theme";
import { hexToRgbA } from "../../utils/hex-to-rgba";

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    track: {
        fontSize: theme.fontSize.font22,
        fontWeight: '500',
    },
    cardContainer: {
        paddingVertical: verticalScale(16),
        paddingHorizontal: normalScale(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: hexToRgbA(theme.colors.black, 20),
        borderBottomWidth: theme.borderWidth.borderWidth1p5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: normalScale(28),
        width: normalScale(28)
    },
    text: {
        fontSize: theme.fontSize.font16,
        color: hexToRgbA(theme.colors.black, 90),
        marginLeft: normalScale(24)
    },
    arrowBack: {
        height: normalScale(24),
        width: normalScale(24),
    },
})
