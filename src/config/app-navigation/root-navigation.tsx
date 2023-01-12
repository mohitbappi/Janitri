import { NavigationContainerRef } from '@react-navigation/native';

export let navigatorRef;

export const setNavigator = (nav: NavigationContainerRef | null) => {
  navigatorRef = nav;
};

export const getNavigator = () => navigatorRef as NavigationContainerRef;
