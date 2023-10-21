import ReactDOM from "react-dom";
import { useState } from "react";
import { Container, SideBarContainer } from "./styles";
import { ComponentT, SideBarT } from "./types";
import { TfiAlignJustify } from "react-icons/tfi";
export const SideBar: SideBarT = ({ open, requestToClose }) => {
  return ReactDOM.createPortal(
    <SideBarContainer open={open}>
      <div className="header">
        <button onClick={() => requestToClose()}>X</button>
      </div>
      Hello World
    </SideBarContainer>,
    document.getElementById("root") as HTMLElement
  );
};

export const Layout: ComponentT = ({ children }) => {
  const [sideBarState, setSideBarState] = useState<boolean>(false);

  return (
    <Container sideBarState={sideBarState}>
      <div className="header">
        <button onClick={() => setSideBarState(!sideBarState)}>
          <TfiAlignJustify />
        </button>
        <div className="content">
            <div className="title">Test Task App</div>
        </div>
      </div>
      <SideBar open={sideBarState} requestToClose={() => setSideBarState(false)} />
      <div className="main">{children}</div>
    </Container>
  );
};
