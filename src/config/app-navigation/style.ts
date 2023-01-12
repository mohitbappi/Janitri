import { StyleSheet } from 'react-native';
import { normalScale, verticalScale } from '../../theme/device/normalize';
import { ThemeProps } from '../../theme/theme';

export const createStyleSheet = (theme: ThemeProps) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey,
    height: verticalScale(90),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: normalScale(20),
    height: normalScale(20),
  },
  text: {
    fontSize: theme.fontSize.font14,
    color: theme.colors.black,
    marginTop: verticalScale(5)
  },
  activeText: {
    color: theme.colors.primaryColor,
  },
});
