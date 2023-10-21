import { ReactPortal } from "react";

interface PropsI {
  children: JSX.Element | string;
}

export type SideBarT = (props: { open: boolean, requestToClose: () => void }) => ReactPortal;

export type ComponentT = (props: PropsI) => JSX.Element;
