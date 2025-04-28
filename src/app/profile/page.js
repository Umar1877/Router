import Link from "next/link";


export default function Profile() {
    return (
      <div>
       Profile Page
       <br/>
      <Link href={"/about"}>about</Link>
     <br/>
     <Link href={"/"}>Home</Link>
      </div>
    );
  }
  