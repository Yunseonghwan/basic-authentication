import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Profile from "./Profile";
import Protected from "./Protected";
import Public from "./Public";

interface IProps {}

const Router: React.FC<IProps> = () => {
  const [current, setCurrent] = useState<string>("home");

  useEffect(() => {
    setRoute();
    window.addEventListener("hashchange", setRoute);
    return () => window.removeEventListener("hashchange", setRoute);
  }, []);

  const setRoute = () => {
    const location = window.location.href.split("/");
    const pathname = location[location.length - 1];
    setCurrent(pathname ? pathname : "home");
  };
  return (
    <HashRouter>
      <Nav current={current} />
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
