export interface ThemeProps {
  fontType: {};
  fontSize: {
    font8: number;
    font10: number;
    font12: number;
    font14: number;
    font16: number;
    font18: number;
    font20: number;
    font22: number;
    font24: number;
    font26: number;
    font28: number;
    font30: number;
  };
  colors: {
    white: string,
    black: string,
    primaryColor: string
    blue: string
    grey: string
    purple: string
    blackOverlay: string
  };
  opacity: {
    opacity2: number;
    opacity4: number;
    opacity6: number;
    opacity8: number;
  };
  borderRadius: {
    radius4: number;
    radius6: number;
    radius8: number;
    radius10: number;
    radius12: number;
    radius16: number;
  };
  borderWidth: {
    borderWidth1: number,
    borderWidth2: number,
    borderWidth1p5: number,
  };
}
