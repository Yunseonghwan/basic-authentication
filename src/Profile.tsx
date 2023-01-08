import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import Container from "./Container";

interface IProps {}

const Profile: React.FC<IProps> = () => {
  useEffect(() => {
    checkUser();
  }, []);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone_number: "",
  });
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log("error:", err);
    }
  }
  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h3>Email: {user.email}</h3>
      <h4>Phone: {user.phone_number}</h4>
      <Authenticator>
        {({ signOut }) => (
          <div>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </Container>
  );
};

export default withAuthenticator(Profile);
