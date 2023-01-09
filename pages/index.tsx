import {GetStaticProps} from "next";
import Link from "next/link";

export interface HomeProps {
  formattedDate: string
}

export const getStaticProps: GetStaticProps = async () => {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long"
  }).format(buildDate);
  return {
    props: {
      formattedDate
    }
  }
}

export default function Home({formattedDate}: HomeProps) {
  return (
      <>
        <h1>Static page</h1>
        <p>This page is static. It was built on {formattedDate}</p>
        <p>
          <Link href="/ssr">View a server-side rendered page.</Link>
        </p>
      </>
  )
}
