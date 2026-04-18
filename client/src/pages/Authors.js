import React from "react";
import { Link } from "react-router-dom";
import useAuthor from "../hooks/useAuthor";
import Layout from "../components/Layout/Layout";
import "../styles/collectionPage.css";

const Authors = () => {
  const authors = useAuthor();
  const sorted = [...authors].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Layout title="All Authors">
      <div className="authors-page">
        <h1>All Authors</h1>
        <p className="authors-subtitle">{sorted.length} authors in our collection</p>
        <div className="authors-grid">
          {sorted.map((a) => (
            <Link key={a._id} to={`/author/${a.slug}`} className="author-card">
              {a.name}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Authors;
