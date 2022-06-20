import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {/* This is article {article.id} */}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export default article;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
