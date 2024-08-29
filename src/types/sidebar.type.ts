import { ReactNode } from "react";

export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: { name: string; path: string; element?: ReactNode }[];
  };
  export type TSideBarItems = {
    key: string;
    label?: ReactNode;
    children?: { key: string; label: ReactNode }[];
  };
  