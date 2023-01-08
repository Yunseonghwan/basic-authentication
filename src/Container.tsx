interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = (props) => {
  const { children } = props;
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
    margin: "0 auto",
    padding: "50px 100px",
  },
};

export default Container;
