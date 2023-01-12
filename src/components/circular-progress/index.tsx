import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import { useAppTheme } from '../../app-hooks/use-app-theme';

export type CircularProgressProps = {
  size: number;
  strokeWidth: number;
  progressPercent: number;
  bgColor?: string;
  pgColor?: string;
  style?: StyleProp<ViewStyle>
};

export const CircularProgress = (props: CircularProgressProps) => {
  const { theme } = useAppTheme();
  const {
    size, strokeWidth, bgColor = theme.colors.grey, pgColor = theme.colors.primaryColor, progressPercent, style,
  } = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = progressPercent - 100;

  return (
    <View style={[style]}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={bgColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {/* Progress Circle */}
        <Circle
          stroke={pgColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />
      </Svg>
    </View>
  );
};
