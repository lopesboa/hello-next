import Header from "./Header";

const layoutStayle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStayle}>
    <Header />
    {/* {props.children} */}
  </div>
);

export default Layout;
