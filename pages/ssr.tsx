// pages/ssr.js
import Link from "next/link";
import {HomeProps} from "./index";

export default function SSR({formattedDate}: HomeProps) {
  return (
      <>
        <h1>Server-side rendered page</h1>
        <p>
          This page is server-side rendered. It was rendered on {formattedDate}.
        </p>
        <p>
          <Link href="/">View a static page.</Link>
        </p>
      </>
  );
}

export async function getServerSideProps(): Promise<{ props: HomeProps }> {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
      `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return {props: {formattedDate}};
}
