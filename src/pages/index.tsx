import Link from 'next/link'
import { getAllPosts } from './api/posts'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
  }>
}

const baseUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'https://ticket-to-ride2.vercel.app';

export default function Home(props: HomeProps) {
  return (
    <div>
      <ul>
        {['omariosouto', 'peas'].map((post, idx) => {
          const title = `${baseUrl}/api/thumbnail.png?title=${post}`;
          return (
          <li key={idx}>
            <Link href={title}>
              <img src={title} />
            </Link>
          </li>
        )})}
      </ul>
    </div>
  )
}