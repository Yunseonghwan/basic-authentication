import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

function Protected(props: any) {
  const navigate = useNavigate();
  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => {
      navigate("/profile");
    });
  }, []);
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default Protected;
