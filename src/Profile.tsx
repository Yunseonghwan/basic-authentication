import { Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import Container from "./Container";
import Form from "./Form";

interface IProps {}

interface IUserType {
  username: string;
  email: string;
  phone_number: string;
}

const Profile: React.FC<IProps> = () => {
  useEffect(() => {
    checkUser();
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);
  const [user, setUser] = useState<IUserType | null>({
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

  const signOut = () => {
    Auth.signOut().catch((err) => console.log("error signing out", err));
  };
  return user ? (
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
  ) : (
    <Form setUser={setUser} />
  );
};

export default withAuthenticator(Profile);
