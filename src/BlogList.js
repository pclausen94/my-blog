import React from "react";

export default function BlogList({ blogs }) {
  //   const blogs = props.blogs;

  return (
    <div>
      <div className="home">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
