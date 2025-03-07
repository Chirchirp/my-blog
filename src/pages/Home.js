import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <h2>Latest Posts</h2>
      <div className="post-list">
        <article className="post">
          <h3>
            <Link to="/blog/1">Understanding Data Cleaning</Link>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Data Cleaning"
            width="300"
          />
          <p>A short summary of my first post on data cleaning...</p>
        </article>
        <article className="post">
          <h3>
            <Link to="/blog/2">Exploring SQL for Data Analysis</Link>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="SQL Techniques"
            width="300"
          />
          <p>A short summary of SQL techniques every data analyst should know.</p>
        </article>
      </div>
    </section>
  );
}

export default Home;
