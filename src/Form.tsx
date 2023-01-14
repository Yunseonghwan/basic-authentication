import { useState } from "react";
import styled from "styled-components";

interface IProps {}

const initalFormState = {
  username: "",
  password: "",
  email: "",
  confimationCode: "",
};

const Form: React.FC<IProps> = (props) => {
  const [formType, updateFormType] = useState("signIn");
  const [formState, updateFromState] = useState(initalFormState);

  const renderForm = () => {
    return <></>;
  };

  return <div>{renderForm()}</div>;
};

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  justify-content: center;
  align-items: center;
`;

export const InputStyle = styled.input`
  height: 45px;
  margin-top: 8px;
  width: 300px;
  max-width: 300px;
  padding: 0 8px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;

export const ToggleFormStyle = styled.form`
  font-weight: 600;
  padding: 0 25px;
  margin-top: 15px;
  margin-bottom: 0;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

export const ResetPassword = styled.div`
  margin-top: 5px;
`;

export const AnchorStyle = styled.div`
  color: #006bfc;
  cursor: pointer;
`;

export default Form;
