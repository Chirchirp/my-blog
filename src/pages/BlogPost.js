import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  // Example content for each post based on the id
  let content;
  if (id === '1') {
    content = {
      title: "Understanding Data Cleaning",
      body: "Data cleaning is essential to ensure that data is accurate and analysis-ready. In this post, we cover techniques and best practices for handling messy datasets, dealing with missing values, and ensuring data integrity."
    };
  } else if (id === '2') {
    content = {
      title: "Exploring SQL for Data Analysis",
      body: "SQL is a fundamental skill for any data analyst. In this post, we explore key techniques such as JOINs, aggregation functions, and subqueries that are essential for extracting insights from relational databases."
    };
  } else {
    content = {
      title: "Post Not Found",
      body: "The blog post you are looking for does not exist."
    };
  }

  return (
    <section className="blog-post">
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <Link to="/blog">Back to Blog</Link>
    </section>
  );
}

export default BlogPost;
