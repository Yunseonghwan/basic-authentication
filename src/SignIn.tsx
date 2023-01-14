import Button from "./Button";
import { ContainerStyle, InputStyle } from "./Form";

interface IProps {
  signIn: () => void;
  updateFormState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignIn: React.FC<IProps> = (props) => {
  const { signIn, updateFormState } = props;
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
      <Button onClick={signIn} title="Sign In" />
    </ContainerStyle>
  );
};

export default SignIn;
