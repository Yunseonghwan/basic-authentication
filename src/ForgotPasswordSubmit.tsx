import Button from "./Button";
import { ContainerStyle, InputStyle } from "./Form";

interface IProps {
  forgotPasswordSubmit: () => void;
  updateFormState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ForgotPasswordSubmit: React.FC<IProps> = (props) => {
  const { forgotPasswordSubmit, updateFormState } = props;
  return (
    <ContainerStyle>
      <InputStyle
        name="confirmmationCode"
        placeholder="confirmmation code"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />
      <InputStyle
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />
      <Button onClick={forgotPasswordSubmit} title="Save new password" />
    </ContainerStyle>
  );
};

export default ForgotPasswordSubmit;
