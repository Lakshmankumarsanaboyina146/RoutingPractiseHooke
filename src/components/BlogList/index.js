import { React, useState, useEffect } from "react";
import Loader from "react-js-loader";

import BlogItem from "../BlogItem";

import "./index.css";

const BlogList = () => {
  const [isLoading, setisLoading] = useState(true);
  const [blogsData, setBlogsData] = useState([]);
  /*
  const getFormattedData = (eachItem) => ({
    id: eachItem.id,
    title: eachItem.title,
    imageUrl: eachItem.image_url,
    avatarUrl: eachItem.avatar_url,
    author: eachItem.author,
    topic: eachItem.topic,
  });
  
  const getBlogData = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs");
    const data = await response.json();

    const formattedData = data.map((eachItem) => getFormattedData(eachItem));
    console.log(formattedData);

    setisLoading(false);
    setBlogsData(formattedData);
  };
      <ReactLoading type="Spin" color="#00bfff" height={50} width={50} />

  */

  useEffect(() => {
    const getFormattedData = (eachItem) => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    });

    const getBlogData = async () => {
      const response = await fetch("https://apis.ccbp.in/blogs");
      const data = await response.json();

      const formattedData = data.map((eachItem) => getFormattedData(eachItem));
      console.log(formattedData);

      setisLoading(false);
      setBlogsData(formattedData);
    };

    getBlogData();
  }, []);

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

  const renderBlogDetails = () => {
    return (
      <ul className="blogs-list">
        {blogsData.map((eachBlogItem) => (
          <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
        ))}
      </ul>
    );
  };
  /*
  return (
    <ul className="blog-list">
      {blogsData.map((eachBlog) => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  );
  */
  return (
    <div className="blogs-list-container">
      {isLoading ? renderLoaderSpinner() : renderBlogDetails()}
    </div>
  );
};

export default BlogList;
