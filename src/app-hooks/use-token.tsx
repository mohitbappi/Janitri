import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API } from '../network/api';
import { persistKeys } from '../network/constant';

const onSetToken = async (value: string) => {
  await AsyncStorage.setItem(persistKeys.token, value);

  axios.defaults.headers.common.authorization = `Bearer ${value}`;
  API.initService();
};

export const useToken = () => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const tok = await AsyncStorage.getItem(persistKeys.token) || '';
      setToken(tok);
      setLoading(false);
    };

    checkToken();
  }, []);

  return { token, loading, onSetToken };
};
