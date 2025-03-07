document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent successfully!");
    });
});

-- posts/post2.html --
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exploring SQL for Data Analysis</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <h1>Exploring SQL for Data Analysis</h1>
        <nav>
            <a href="../index.html">Home</a>
            <a href="../blog.html">Blog</a>
        </nav>
    </header>
    <article>
        <h2>SQL Techniques Every Data Analyst Should Know</h2>
        <p>SQL is a fundamental skill for any data analyst. In this post, we explore key techniques like JOINs, aggregation, and subqueries.</p>
    </article>
    <footer>
        <p>© 2025 Data Analyst Blog</p>
    </footer>
</body>
</html>
