import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://toy-world-server-ashik-faysal.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="text-center">
      <div>
        {blogs.map((blog) => (
          <div className="card border p-4 my-4 bg-slate-500" key={blog.id}>
            <p className="font-bold">
              {blog.id}. &nbsp;{blog.question}
            </p>
            <p className="font-semibold">Answer:{blog.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
