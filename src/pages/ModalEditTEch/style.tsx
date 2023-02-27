import styled from "styled-components";
interface ModalProps {
  index: string;
  visi: string;
  display: string;
}
export const Modal = styled.div<ModalProps>`
  z-index: ${(props) => props.index};
  position: absolute;
  top: 10%;
  transition: 0.5s;
  form {
    visibility: ${(props) => props.visi};
    display: ${(props) => props.display};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    padding-bottom: 10px;
    gap: 10px;

    background-color: grey;

    width: 300px;
    height: fit-content;

    background: #212529;
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
  }
  header {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #212529;
    border-radius: 15px;
    border-bottom-right-radius: 0px;

    border-bottom-left-radius: 0px;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    margin-right: 47px;
    /* grey-0 */

    color: #f8f9fa;
  }
  .closeModal {
    width: 0px;
    font-weight: bold;

    background: #7843e6;
    border: 1.2182px solid #7843e6;
    border-radius: 4.06066px;
    margin: 10px;
    cursor: pointer;
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
    flex-direction: row;
    align-items: center;
    padding: 8.12132px 0px;
    gap: 10.15px;

    width: 100%;
    height: 40px;

    /* grey-2 */

    background: #343b41;
    /* grey-0 */

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    color: white;
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
    font-weight: bold;
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
  @media (min-width: 500px) {
    .closeModal {
      display: flex;
      margin-right: 0;
    }
  }
`;
