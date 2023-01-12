import { getTheme } from "../theme";

type ThemeProps = 'light' | 'dark';

export const useAppTheme = () => {
	const themeType: ThemeProps = 'light';
	return { themeType, changeAppTheme: (type: ThemeProps) => type, theme: getTheme(themeType) };
};
