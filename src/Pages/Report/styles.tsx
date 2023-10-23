import styled from "styled-components";

export const Container = styled.div`
  .list {
    margin: 0 auto;
    display: flex;
    max-width: 800px;
    gap: 30px;
    flex-direction: column;
    grid-template-columns: auto;
    .item {
      display: flex;
      flex-direction: column;
      gap: 5px;
      background-color: #80808010;
      box-shadow: 2px 2px 6px 1px #80808040;
      padding: 10px;
      .user {
        margin: 5px 0;
        display: flex;
        gap: 10px;
        align-items: center;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 10px;
          background-position: center;
          background-size: cover;
        }
      }
    }
  }
`;
