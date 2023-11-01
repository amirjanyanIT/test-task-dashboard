import styled from "styled-components";

export const Container = styled.div`
  > form {
    margin: 0 auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 400px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
      input {
        height: 25px;
        width: 100%;
        padding: 0 10px;
        border: 1px solid var(--dark);
        border-radius: 20px;
      }
    }

    button {
      cursor: pointer;
      background-color: var(--dark);
      border: none;
      height: 30px;
      width: 100%;
      color: white;
      border-radius: 10px;
    }
  }
`;
