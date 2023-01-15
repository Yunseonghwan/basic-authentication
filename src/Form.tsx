import { Auth } from "aws-amplify";
import { useState } from "react";
import styled from "styled-components";
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface IProps {
  setUser: any;
}

const initalFormState = {
  username: "",
  password: "",
  email: "",
  confimationCode: "",
};

const signIn = async ({ username, password }: any, setUser: any) => {
  try {
    const user = await Auth.signIn(username, password);
    const userInfo = { username: user.username, ...user.attributes };
    setUser(userInfo);
  } catch (err) {
    console.log("error signing in..", err);
  }
};

const signUp = async (
  { username, password, email }: any,
  updateFormType: any
) => {
  try {
    await Auth.signUp({ username, password, attributes: { email } });
    console.log("sign up success!");
    updateFormType("confirmSignUp");
  } catch (err) {
    console.log("error signing up..", err);
  }
};

const confirmSignUp = async (
  { username, confirmationCode }: any,
  updateFormType: any
) => {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    updateFormType("signIn");
  } catch (err) {
    console.log("error signing up..", err);
  }
};

const forgotPassword = async ({ username }: any, updateFormType: any) => {
  try {
    await Auth.forgotPassword(username);
    updateFormType("forgotPasswordSubmit");
  } catch (err) {
    console.log("error submitting username to reset password...", err);
  }
};

const forgotPasswordSubmit = async (
  { username, confirmationCode, password }: any,
  updateFormType: any
) => {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password);
    updateFormType("signIn");
  } catch (err) {
    console.log("error updateing password...", err);
  }
};

const Form: React.FC<IProps> = (props) => {
  const [formType, updateFormType] = useState("signIn");
  const [formState, updateFromState] = useState(initalFormState);

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    updateFromState({
      ...formState,
      [name]: value,
    });
  };

  const renderForm = () => {
    switch (formType) {
      case "signUp":
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "confirmSignUp":
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "signIn":
        return (
          <SignIn
            signIn={() => signIn(formState, props.setUser)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPassword
            forgotPassword={() => forgotPassword(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "forgotPasswordSubmit":
        return (
          <ForgotPasswordSubmit
            forgotPasswordSubmit={() =>
              forgotPasswordSubmit(formState, updateFormType)
            }
            updateFormState={(e) => updateForm(e)}
          />
        );
      default:
        return null;
    }
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
