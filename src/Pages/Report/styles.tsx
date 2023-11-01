import styled from "styled-components";

export const Container = styled.div`
  .header {
    display: flex;
    justify-content: flex-end;
    background-color: initial;
    margin-bottom: 20px;
    button {
      margin: 0;
    }
  }
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
      min-height: 300px;
      .user {
        margin: 15px 0;
        padding-bottom: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        border-bottom: 1px solid #858585cc;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 10px;
          background-position: center;
          background-size: cover;
        }
      }
      .content {
          font-size: 30px;
          .title {
            line-height: 22px;
          }
      }
    }
  }
`;
