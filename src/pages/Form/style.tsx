import styled from "styled-components";

export const FormCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(20, 20, 20);

  height: 100vh;
  img {
    width: 200px;
    height: auto;
  }
  header {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 10px;

    width: 90vw;
  }
  header button {
    width: 79.54px;
    height: 31.95px;

    background: #212529;
    border-color: #212529;
    border-radius: 4px;

    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
  }
  header button:hover {
    border-color: #7843e6;
  }
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 22px;
    color: white;
    margin: 0;
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.6911px 17.6477px;
    gap: 10px;

    background-color: grey;

    width: 320px;
    height: fit-content;
    max-height: 90vh;
    overflow-y: auto;

    background: #212529;
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 3.20867px;
    margin-top: 50px;
  }
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 10px;
    margin: 0px;
    width: 264px;
    height: fit-content;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;

    color: #f8f9fa;
  }
  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 8.12132px 0px;

    background: #343b41;

    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;

    color: #f8f9fa;
  }
  input::placeholder {
    padding-left: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;
    /* identical to box height, or 162% */

    /* grey-0 */

    color: #f8f9fa;
  }

  select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 8.12132px 0px;

    background: #343b41;

    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;

    color: #f8f9fa;
  }
  option {
    padding-left: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;
    /* identical to box height, or 162% */

    /* grey-0 */

    color: #f8f9fa;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 259.9px;
    height: 38.5px;

    background: #7843e6;
    border: 1.2182px solid #7843e6;
    border-radius: 4.06066px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    /* identical to box height, or 165% */

    color: #ffffff;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;

    color: #868e96;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    text-align: left;
  }
  @media (min-width: 450px) {
    header {
      justify-content: space-between;
      width: 351px;
    }
    form {
      margin-top: 50px;
      height: max-content;
      max-height: 400px;
      overflow: auto;
    }
  }
`;
