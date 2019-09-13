import Link from "next/link";

const Index = () => (
  <div>
    <p>Hello Nextjs</p>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Index;
