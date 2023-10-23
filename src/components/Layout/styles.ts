import styled from "styled-components";

const sideSpace = 300;

export const Container = styled.div<{ sideBarState: boolean }>`
  .header {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: var(--light);
    color: white;
    button {
      cursor: pointer;
      margin-right: 10px;
      margin-left: 10px;
      border-radius: 10px;
      border: none;
      height: 25px;
      line-height: 2px;
    }
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-left: 5px;
      margin-right: 5px;
      padding-left: ${({ sideBarState }) =>
        sideBarState ? sideSpace - 48 : 0}px;
      transition: 0.3s ease-in-out padding-left;
      .logout {
        cursor: pointer;
      }
    }
  }
  .main {
    padding-left: ${({ sideBarState }) => (sideBarState ? sideSpace : 0)}px;
    margin-left: ${({ sideBarState }) => (sideBarState ? 2 : 10)}px;
    margin-right: ${({ sideBarState }) => (sideBarState ? 2 : 10)}px;
    margin-top: 10px;
    transition: 0.3s ease-in-out padding-left;
  }
`;

export const SideBarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  width: ${sideSpace}px;
  color: white;
  left: ${({ open }) => (open ? 0 : "-300px")};
  transition: 0.3s ease-in-out left;
  background-color: var(--light);
  height: 100vh;
  .header {
    display: flex;
    justify-content: flex-end;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 10px;
    border-top: 1px solid red;
    padding-top: 10px;
    border-color: white;
    li {
      cursor: pointer;
    }
  }
  button {
    cursor: pointer;
    outline: 0;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    margin-top: 12px;
    margin-right: 10px;
    background-color: white;
    color: var(--main);
  }
`;
