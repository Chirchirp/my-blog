import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <section className="blog">
      <h2>Blog Posts</h2>
      <div className="post-list">
        <article className="post">
          <h3><Link to="/blog/1">Understanding Data Cleaning</Link></h3>
          <p>Learn why data cleaning is essential for accurate insights.</p>
        </article>
        <article className="post">
          <h3><Link to="/blog/2">Exploring SQL for Data Analysis</Link></h3>
          <p>Discover key SQL techniques to streamline your analysis.</p>
        </article>
      </div>
    </section>
  );
}

export default Blog;
