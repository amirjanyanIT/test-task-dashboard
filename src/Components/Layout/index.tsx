import ReactDOM from "react-dom";
import { useCallback, useState } from "react";
import { Container, SideBarContainer } from "./styles";
import { LayoutT, SideBarT } from "./types";
import { TfiAlignJustify } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { MdLogout  } from 'react-icons/md';

export const SideBar: SideBarT = ({ open, requestToClose }) => {

  const navigate = useNavigate();

  const sideRoutes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Analytics",
      link: "/analytics",
    },
    {
      name: "Report",
      link: "/report",
    },
    {
      name: "User",
      link: "/user",
    },
  ];

  return ReactDOM.createPortal(
    <SideBarContainer open={open}>
      <div className="header">
        <button onClick={() => requestToClose()}>X</button>
      </div>
      <ul>
        {sideRoutes.map((c, key) => (
          <li onClick={() => navigate(c.link)} key={key}>{c.name}</li>
        ))}
      </ul>
    </SideBarContainer>,
    document.getElementById("root") as HTMLElement
  );
};

export const Layout: LayoutT = ({ children, title }) => {
  const [sideBarState, setSideBarState] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('auth');
    navigate('/login');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container sideBarState={sideBarState}>
      <div className="header">
        <button onClick={() => setSideBarState(!sideBarState)}>
          <TfiAlignJustify />
        </button>
        <div className="content">
          <div className="title">{title}</div>
          <div className="logout" onClick={() => handleLogout()}><MdLogout /></div>
        </div>
      </div>
      <SideBar
        open={sideBarState}
        requestToClose={() => setSideBarState(false)}
      />
      <div className="main">{children}</div>
    </Container>
  );
};
