import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

interface IProps {
  current: string;
}

const Nav: React.FC<IProps> = (props) => {
  const { current } = props;
  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">
            <ProfileOutlined /> profile
          </Link>
        </Menu.Item>
        <Menu.Item key="protected">
          <Link to="/protected">
            <FileProtectOutlined /> protected
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
