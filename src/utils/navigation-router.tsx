import { getNavigator } from '../config/app-navigation/root-navigation';

export interface Params {
  isResetNavigation?: boolean
}

export interface Route {
  name: string
  params?: object
}

const checkIsResetNavigation = (params: Params = {}) => params?.isResetNavigation;

export const navigationRouter = (newRoutes: Route[]) => {
  const navigation = getNavigator()

  if (newRoutes.length === 1) {
    const screenName = newRoutes[0].name;
    const isResetNavigation = checkIsResetNavigation(newRoutes[0].params);
    if (isResetNavigation) {
      navigation.reset({
        index: newRoutes.length - 1,
        routes: newRoutes,
      });
      return;
    }
    navigation.navigate(screenName, newRoutes[0].params);
    return;
  }

};
