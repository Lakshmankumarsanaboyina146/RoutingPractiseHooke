import { React, useState, useEffect } from "react";
import Loader from "react-js-loader";

import "./index.css";
import { useParams } from "react-router-dom";

const BlogItemDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBlogItemData = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      const data = await response.json();
      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      };
      setIsLoading(false);
      setBlogData(updatedData);
    };

    getBlogItemData();
  }, [id]);

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  const renderLoaderSpinner = () => (
    <div data-testid="loader">
      <Loader
        type="spinner-circle"
        bgColor={"red"}
        title={"Loading..."}
        size={50}
      />
    </div>
  );

  return (
    <div className="blog-container">
      {isLoading ? renderLoaderSpinner() : renderBlogItemDetails()}
    </div>
  );
};

export default BlogItemDetails;
