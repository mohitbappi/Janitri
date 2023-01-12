import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useAppTheme } from '../../app-hooks/use-app-theme';
import { babyFeetSingle, welcomeLogo } from '../../assets/images';
import { CircularProgress, CircularProgressProps } from '../circular-progress';
import { ImageComponent } from '../image-component';
import { createStyleSheet } from './style';

interface Props extends Omit<CircularProgressProps, 'style'> {
  size: number;
  style?: StyleProp<ViewStyle>;
}

export const CircularProgressWithImage = (props: Props) => {
  const {
    size, bgColor, pgColor, progressPercent,
    strokeWidth, style,
  } = props || {};
  const { theme } = useAppTheme()
  const styles = createStyleSheet(size, strokeWidth, theme);

  return <View style={[styles.container, style]}>
    <CircularProgress
      bgColor={bgColor}
      pgColor={pgColor}
      progressPercent={-progressPercent}
      strokeWidth={strokeWidth}
      size={size}
      style={styles.progressBar}
    />
    <View style={styles.innerContainer}>
      <ImageComponent
        source={babyFeetSingle}
        style={styles.imageStyles}
        resizeMode="cover"
      />
    </View>
  </View>;
};
