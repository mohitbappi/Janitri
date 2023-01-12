import { AxiosResponseHeaders } from 'axios';

export type ResObj = {
  response: unknown
  error: string
};

type DataObj = {
  data: ResObj
  status: number
  headers: AxiosResponseHeaders
};

export const getApiResponse = (data: DataObj) => {

  const {
    error, response
  } = data?.data || {};
  const isSuccess = data?.status === 200

  const res = {
    data: response,
    message: error,
    statusCode: 200,
    isError: !isSuccess,
    isSuccess,
    headers: data?.headers,
  };

  if (data?.status !== 200) {
    res.statusCode = data?.status;
    res.isError = true;
    res.isSuccess = false;
  }

  return res;
};

export type APIResponseType = ReturnType<typeof getApiResponse>;
