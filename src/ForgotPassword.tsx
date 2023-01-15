import Button from "./Button";
import { ContainerStyle, InputStyle } from "./Form";

interface IProps {
  forgotPassword: () => void;
  updateFormState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ForgotPassword: React.FC<IProps> = (props) => {
  const { forgotPassword, updateFormState } = props;
  return (
    <ContainerStyle>
      <InputStyle
        name="username"
        placeholder="Username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />
      <Button onClick={forgotPassword} title="Reset password" />
    </ContainerStyle>
  );
};

export default ForgotPassword;
