import { StyleSheet } from 'react-native';
import { normalScale, verticalScale } from '../../theme/device/normalize';
import { ThemeProps } from '../../theme/theme';
import { hexToRgbA } from '../../utils/hex-to-rgba';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  header: {
    paddingBottom: verticalScale(6)
  },
  webView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
