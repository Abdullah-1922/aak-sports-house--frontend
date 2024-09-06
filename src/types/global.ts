import { SerializedError } from "@reduxjs/toolkit";
import { BaseQueryApi, FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TError = {
  status: number;
  data: TErrorData;
};

export type TProps = {
  name: string;
  value: string;
};

export type TErrorData = {
  success: boolean;
  statusCode: number;
  message: string;
  errorMessages: ErrorMessage[];
  stack: string;
};

export interface ErrorMessage {
  path: string;
  message: string;
}

export type TResponse<T> = {
  data?: {
    data: T;
    message: string;
    success: boolean;
    token: string;
  };
  error?:
    | {
        status: number;
        data: TErrorData;
      }
    | FetchBaseQueryError
    | SerializedError;
  meta?: TMeta;
};
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
