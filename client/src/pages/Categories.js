import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../styles/collectionPage.css";

const Categories = () => {
  const categories = useCategory();
  const sorted = [...categories].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Layout title="All Genres">
      <div className="genres-page">
        <h1>All Genres</h1>
        <p className="genres-subtitle">{sorted.length} genres in our collection</p>
        <div className="genres-grid">
          {sorted.map((c) => (
            <Link key={c._id} to={`/category/${c.slug}`} className="genre-card">
              <span className="genre-icon">📚</span>
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;