import { moderateScale, normalize, normalScale } from './device/normalize';

const type = {};

const size = {
  font8: normalize(8),
  font10: normalize(10),
  font12: normalize(12),
  font14: normalize(14),
  font16: normalize(16),
  font18: normalize(18),
  font20: normalize(20),
  font22: normalize(22),
  font24: normalize(24),
  font26: normalize(26),
  font28: normalize(28),
  font30: normalize(30),
};

const opacity = {
  opacity2: 0.2,
  opacity4: 0.4,
  opacity6: 0.6,
  opacity8: 0.8,
};

const borderWidth = {
  borderWidth1: normalScale(1),
  borderWidth2: normalScale(2),
  borderWidth1p5: normalScale(1.5),
};

const borderRadius = {
  radius4: moderateScale(4),
  radius6: moderateScale(6),
  radius8: moderateScale(8),
  radius10: moderateScale(10),
  radius12: moderateScale(12),
  radius16: moderateScale(16),
};

export {
  type, size, opacity, borderWidth, borderRadius,
};
