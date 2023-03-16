import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
} | null;

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);
  return (
    <div>
      <h1>Single Page</h1>
      {post && (
        <div>
          {" "}
          <h2>{post.title}</h2> <p>{post.body}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default SinglePage;
