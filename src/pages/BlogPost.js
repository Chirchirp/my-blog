import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  let content;
  if (id === '1') {
    content = {
      title: "Understanding Data Cleaning: The First Step to Reliable Data Analysis",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      body: `
Data is only as good as its quality. In data analysis, the process of cleaning your data—fixing or removing errors, inconsistencies, and inaccuracies—is essential to ensure your insights are valid and reliable.

Imagine building a house on a shaky foundation. Without clean data, any conclusions you draw can lead to misleading or incorrect decisions. In this post, I’ll explain why data cleaning matters and share some simple, human-friendly techniques to get you started.

**Why Clean Your Data?**
- **Accuracy:** Eliminating errors ensures that your analysis reflects true trends and patterns.
- **Efficiency:** Clean data reduces the risk of spending time on debugging and reanalysis later.
- **Trust:** Stakeholders are more likely to trust insights derived from well-maintained data.

**Common Data Cleaning Steps:**
1. **Identify Missing Values:** Find and decide whether to fill in, ignore, or remove missing entries.
2. **Remove Duplicates:** Ensure that your dataset doesn’t include redundant records.
3. **Handle Outliers:** Determine if outliers are errors or important signals.
4. **Standardize Formats:** Make sure data entries are consistent (e.g., date formats, text case).

Taking time to clean your data upfront may seem tedious, but it pays off by building a solid foundation for your analysis. Whether you're new to the field or looking to refine your methods, mastering data cleaning is a critical step in becoming a more effective data analyst.

Let’s transform messy data into meaningful insights together!
      `
    };
  } else if (id === '2') {
    content = {
      title: "Exploring SQL for Data Analysis",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
      {content.image && (
        <img
          src={content.image}
          alt={content.title}
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
        />
      )}
      {content.body.split('\n').map((para, index) =>
        para.trim() && <p key={index}>{para.trim()}</p>
      )}
      <Link to="/blog">Back to Blog</Link>
    </section>
  );
}

export default BlogPost;
