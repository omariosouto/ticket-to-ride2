import React from "react";


const baseUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'https://ticket-to-ride2.vercel.app';


export default function TicketPage(props) {
  const title = `${baseUrl}/api/thumbnail.png?title=${props.slug}`;
  return (
    <div>
      <img src={title} style={{ maxWidth: '100%' }} />
      {props.slug}
    </div>
  )
}

export async function getStaticProps(context) {
  console.log(context)
  return {
    props: context.params, // will be passed to the page component as props
  }
}


// pages/blog/[slug].js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'second-post' } },
    ],
    fallback: true,
  }
}