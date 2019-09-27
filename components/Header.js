import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a style={linkStyle} title="Home">
            Home
          </a>
        </Link>
      </li>

      <li>
        <Link href="about">
          <a style={linkStyle} title="About Us">
            About
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
