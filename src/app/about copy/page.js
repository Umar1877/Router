import Link from "next/link"

export default async function About() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      <h1>About</h1>
      <Link href={"about/contact"}>Contact</Link>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}