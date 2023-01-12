import { useToken } from "../../app-hooks/use-token";
import { useUserRegistered } from "../../app-hooks/use-user-registered";
import { Loader } from "../../components/loader";
import { navigations } from "../../config/app-navigation/constant";
import { navigationRouter } from "../navigation-router";

export interface Params {
  params: {
    routes: []
  }
}

export interface NavigationProps {
  route: Params;
}

export type NavigationRoute = {
  [value in string]: string
};

export const DeeplinkNavigation = () => {
  const { token, loading: tokenLoading } = useToken();
  const { isUserRegistered, loading } = useUserRegistered()

  const routes = [{ name: navigations.LOGIN, params: { isResetNavigation: true } }];
  let initialScreen = navigations.LOGIN;
  let params = {};

  if (tokenLoading || loading) {
    return <Loader visible={tokenLoading || loading} />;
  }



  if (token) {
    if (isUserRegistered === 'true') {
      initialScreen = navigations.TRACK;
    }
    else {
      initialScreen = navigations.PERSONAL_DETAILS
    }
  }

  if (routes?.length) {
    navigationRouter([{ name: initialScreen, params }]);
  }

  return null;
};
