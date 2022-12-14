import styled from 'styled-components';

export const MyContainer = styled.div`
  margin-top: 140px;
  /* width: 600px; */

  button {
    width: 144px;
    height: 40px;
    border: solid 1px #ccc;
    background: #fff;
    font-size: 15px;
    border-radius: 5px;
    margin-top: 5px;
  }

  .my-header {
    padding: 0 0 43px 0;
    font-size: 18px;
    font-weight: bold;
  }

  .my-img {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 42px;

    img {
      width: 128px;
      height: 128px;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.32);
    }
  }

  .my-nickname-box {
    margin-bottom: 50px;
    .my-nickname {
      display: flex;

      p {
        font-size: 18px;
        padding-right: 80px;
      }

      .nickname {
        color: #5d5d5d;
      }
    }
  }

  .my-reservation-name {
    margin-bottom: 50px;

    .username {
      display: flex;

      p {
        font-size: 18px;
      }

      .user {
        margin-right: 50px;
      }
      .name {
        color: #5d5d5d;
      }
    }
  }

  .my-phone {
    margin-bottom: 50px;

    .my-tel {
      display: flex;
      margin-bottom: 7px;

      p {
        padding-right: 50px;
        font-size: 18px;
      }
      .tel {
        color: #5d5d5d;
      }
    }

    .description {
      margin-bottom: 6px;
      font-size: 14px;
      color: #5d5d5d;
    }
  }

  .container {
    height: 50px;
    border: 1px solid lightgray;
    border-left: none;
    border-right: none;
  }

  .my-logout {
    display: flex;
    margin-top: 30px;

    p {
      margin-right: 50px;
      color: #5d5d5d;
    }

    a {
      margin-right: 20px;
      color: #000;
      text-decoration: underline;
    }
  }
  /* toggle scss */
  .hidden-nickname {
    margin: 10px 0;
    input {
      width: 374px;
      height: 45px;
      border: 1px solid #00000014;
      border-radius: 5px;
    }

    .button {
      background: #01aef0;
      color: #fff;
      cursor: pointer;
    }
    .disabled {
      background: #ccc;
      color: #fff;
    }

    .nickname-btn {
      background-color: #000;
      margin: 0;
      width: 100px;
      height: 45px;
      border: none;
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: white;
    }

    .change-nickname {
      display: flex;

      input {
        margin-right: 7px;
      }
    }

    button {
      margin-top: 20px;
      margin-right: 15px;
    }
  }

  .btn-blue {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
  }
`;
