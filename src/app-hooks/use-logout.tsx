import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { queryClient } from '../../App';
import { strings } from '../assets/strings';
import { navigations } from '../config/app-navigation/constant';
import { API } from '../network/api';
import { persistKeys } from '../network/constant';
import { useUserLogout } from '../network/hooks/user-service/use-user-logout';
import { clearReducer } from '../network/reducers/logout-reducer';
import { alert } from '../utils/alert';
import { navigationRouter } from '../utils/navigation-router';

export const logoutUser = async () => {

  await AsyncStorage.multiRemove([
    persistKeys.isUserRegistered,
    persistKeys.token,
  ]);

  queryClient.getQueryCache().clear();

  axios.defaults.headers.common.authorization = '';
  API.initService();

  navigationRouter([{ name: navigations.LOGIN, params: { isResetNavigation: true } }]);
};

export const useLogout = () => {
  const { mutateAsync: onUserLogout } = useUserLogout()
  const dispatch = useDispatch()

  const userLogout = async () => {
    const res = await onUserLogout()

    if (res?.isSuccess) {
      dispatch(clearReducer())
      logoutUser()
    }
  }

  const onLogout = () => {
    alert(strings.logout, strings.areYouLogout, userLogout)
  };

  return { onLogout };
};
