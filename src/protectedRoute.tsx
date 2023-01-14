/* eslint-disable react-hooks/rules-of-hooks */
import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {}

const protectedRoute =
  (Comp: any, route = "/profile") =>
  (props: IProps) => {
    const navigate = useNavigate();
    const checkAuthState = async () => {
      try {
        await Auth.currentAuthenticatedUser();
      } catch (err) {
        navigate(route);
      }
    };
    useEffect(() => {
      checkAuthState();
    }, []);
    return <Comp {...props} />;
  };

export default protectedRoute;
