import Button from "./Button";
import { ContainerStyle, InputStyle } from "./Form";

interface IProps {
  signUp: () => void;
  updateFormState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUp: React.FC<IProps> = (props) => {
  const { signUp, updateFormState } = props;
  return (
    <ContainerStyle>
      <InputStyle
        name="username"
        placeholder="username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />
      <InputStyle
        type="password"
        name="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />
      <InputStyle
        name="email"
        placeholder="email"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />
      <Button onClick={signUp} title="Sign Up" />
    </ContainerStyle>
  );
};

export default SignUp;
