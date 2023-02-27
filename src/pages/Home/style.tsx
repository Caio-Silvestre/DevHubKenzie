import styled from "styled-components";
import { BsPlusSquare } from "react-icons/bs";

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(20, 20, 20);

  height: 100vh;
  overflow-x: auto;
  header {
    width: 100%;
    background-color: rgb(20, 20, 20);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 5px;

    border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
  }
  header button {
    width: 70.54px;
    height: 31.95px;

    background: #7843e6;
    border-radius: 4px;
    border: none;
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
    margin-right: 10px;

    color: white;

    cursor: pointer;
  }
  header button:hover {
    border-color: #212529;
  }
  header img {
    width: 200px;
    height: auto;
    margin-left: 10px;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .userData {
    width: 95%;
    height: 200px;
    border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .userData h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }
  .userData p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }

  .techsDiv {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    max-height: 600px;
    overflow-y: autos;
    width: 95%;
    background: #212529;
    border-radius: 4px;
    margin-top: 28px;
    padding-bottom: 10px;
  }
  .techsDiv header {
    width: 90%;
    height: 25px;
    padding: 5%;
    background-color: transparent;
  }
  .tehcTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: #f8f9fa;
  }
  .newTechBtn {
    display: flex;
    align-items: center;
    align-content: center;
    background: #212529;
    border-radius: 4px;
    height: fit-content;
    width: fit-content;
    margin: 0;
    padding: 5px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 500px) {
    header {
      justify-content: space-between;
    }
    header button {
      margin-right: 10px;
      color: white;
      cursor: pointer;
      margin-right: 20%;
    }
    header button:hover {
      border-color: #212529;
    }
    header img {
      width: 200px;
      height: auto;
      margin-left: 20%;
    }
    main {
      width: 100%;
      height: fit-content;
    }
    .userData {
      width: 100%;
      height: 200px;
      border-bottom: solid rgba(0, 0, 0, 0.2) 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .userData h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      width: 60%;

      color: #f8f9fa;
    }
    .userData p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      width: 60%;

      color: #868e96;
    }
    .techsDiv {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: fit-content;
      max-height: 600px;
      overflow-y: autos;
      width: 60%;
      background: #212529;
      border-radius: 14px;
      margin-top: 28px;
    }
  }
`;

export const TehcList = styled.div`
  border: none;
  width: 100%;
  height: 100%;
  background-color: #212529;
  margin-top: 10px;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 12.18px;
    padding-right: 12.18px;
    width: 85%;
    background-color: #121214;
  }
  div:hover {
    background: #343b41;
  }
  div div {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    height: 0px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;

    color: #f8f9fa;
    cursor: pointer;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;

    text-align: right;

    color: #868e96;

    display: flex;
    align-items: center;
  }
  @media (min-width: 500px) {
    header {
      justify-content: space-around;
      width: 100vw;
      height: 118px;
    }
    div {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      padding-left: 12.18px;
      padding-right: 12.18px;
      width: 88%;
      background-color: #121214;
    }
    div:hover {
      background: #343b41;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;

      color: #f8f9fa;
    }
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;

      text-align: right;

      color: #868e96;

      display: flex;
      align-items: center;
    }
  }
`;

export const SquareX = styled(BsPlusSquare)`
  color: "white";
  size: "50px";
`;
// export const Modal = styled.div`
//   position: absolute;
//   top: 10%;
//   transition: 0.5s;
//   form {
//     visibility: ${(props) => props.visi};

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 0px;
//     padding-bottom: 10px;
//     gap: 10px;

//     background-color: grey;

//     width: 300px;
//     height: fit-content;

//     background: #212529;
//     box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
//     border-radius: 15px;
//   }
//   header {
//     display: flex;
//     justify-content: space-around;
//     width: 100%;
//     background-color: #212529;
//     border-radius: 15px;
//     border-bottom-right-radius: 0px;

//     border-bottom-left-radius: 0px;
//   }

//   h1 {
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 24px;
//     /* identical to box height, or 171% */
//     margin-right: 47px;
//     /* grey-0 */

//     color: #f8f9fa;
//   }
//   .closeModal {
//     width: 0px;
//     font-weight: bold;

//     background: #7843e6;
//     border: 1.2182px solid #7843e6;
//     border-radius: 4.06066px;
//     margin: 10px;
//   }
//   label {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     gap: 10px;
//     margin: 0px;
//     width: 264px;
//     height: fit-content;

//     font-family: "Inter", sans-serif;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 13px;

//     color: #f8f9fa;
//   }
//   input {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;

//     padding: 8.12132px 0px;

//     background: #343b41;

//     border: 0.9772px solid #f8f9fa;
//     border-radius: 3.20867px;

//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 13.0293px;
//     line-height: 21px;

//     color: #f8f9fa;
//   }
//   input::placeholder {
//     padding-left: 10px;
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 13.0293px;
//     line-height: 21px;
//     /* identical to box height, or 162% */

//     /* grey-0 */

//     color: #f8f9fa;
//   }
//   select {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 8.12132px 0px;
//     gap: 10.15px;

//     width: 100%;
//     height: 40px;

//     /* grey-2 */

//     background: #343b41;
//     /* grey-0 */

//     border: 1.2182px solid #f8f9fa;
//     border-radius: 4px;

//     color: white;
//   }
//   button {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;

//     padding: 0px 22.3336px;
//     gap: 10.15px;

//     width: 259.9px;
//     height: 38.5px;

//     background: #7843e6;
//     border: 1.2182px solid #7843e6;
//     border-radius: 4.06066px;

//     font-family: "Inter";
//     font-style: normal;
//     font-weight: bold;
//     font-size: 12.8347px;
//     line-height: 21px;
//     /* identical to box height, or 165% */

//     color: #ffffff;
//   }

//   p {
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 9.62602px;
//     line-height: 14px;

//     color: #868e96;
//   }
//   @media (min-width: 500px) {
//     .closeModal {
//       display: flex;
//       margin-right: 0;
//     }
//   }
// `;
