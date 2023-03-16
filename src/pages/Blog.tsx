import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styles from "../styles/Blog.module.css";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    setSearchParams({ post: target.search.value });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className={styles.section}>
      <form onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <input type="submit" value="Search" />
      </form>
      <h2>Posts</h2>
      {posts
        .filter((item) => item.title.includes(postQuery))
        .map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <h3>{post.title}</h3>
          </Link>
        ))}
    </div>
  );
};

export default Blog;
