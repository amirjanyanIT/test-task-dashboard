import styled from "styled-components";

const sideSpace = 300;

export const Container = styled.div<{ sideBarState: boolean }>`
  .header {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: red;
    button {
      margin-right: 10px;
      margin-left: 10px;
    }
    .content {
      padding-left: ${({ sideBarState }) => (sideBarState ? sideSpace - 48 : 0)}px;
      transition: 0.3s ease-in-out padding-left;
    }
  }
  .main {
    padding-left: ${({ sideBarState }) => (sideBarState ? sideSpace : 0)}px;
    margin-left: ${({ sideBarState }) => (sideBarState ? 2 : 10)}px;
    margin-top: 10px;
    transition: 0.3s ease-in-out padding-left;
  }
`;

export const SideBarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  width: ${sideSpace}px;
  left: ${({ open }) => (open ? 0 : "-300px")};
  transition: 0.3s ease-in-out left;
  background-color: grey;
  height: 100vh;
`;
