import Link from "next/link";

export default function Home() {
    return (
      <div>
      welcome User
      <div>
      <Link href={"/about"}>About</Link>
      <br />
      <Link href={"/profile"}>Profile</Link>
      
      </div>
      </div>
    );
  }
  