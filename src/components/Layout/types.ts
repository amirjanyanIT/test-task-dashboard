import { ReactPortal } from "react";


interface SideBarPropsI {
  open: boolean;
  requestToClose: () => void;
}

export type SideBarT = (props: SideBarPropsI) => ReactPortal;

interface LayoutPropsI {
  children: JSX.Element | string;
  title: string;
}

export type LayoutT = (props: LayoutPropsI) => JSX.Element;
