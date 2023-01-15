import Button from "./Button";
import { ContainerStyle, InputStyle } from "./Form";

interface IProps {
  confirmSignUp: () => void;
  updateFormState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConfirmSignUp: React.FC<IProps> = (props) => {
  const { confirmSignUp, updateFormState } = props;
  return (
    <ContainerStyle>
      <InputStyle
        name="confirmationCode"
        placeholder="confirmation Code"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />
      <Button onClick={confirmSignUp} title="Confirm Sign Up" />
    </ContainerStyle>
  );
};

export default ConfirmSignUp;
