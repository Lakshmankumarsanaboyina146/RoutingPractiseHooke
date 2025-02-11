import BlogList from "../BlogList";
import UserInfo from "../UserInfo";
import "./index.css";
/*
const Home = () => (
  <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
      alt="home"
      className="home-img"
    />
    <h1 className="home-heading">Home</h1>
  </div>
);
*/
/*
const blogsList = [
  {
    id: 1,
    title: "My first post",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Aug 2nd",
  },
  {
    id: 2,
    title: "My second post",
    description:
      "A high quality solution beautifully designed for startups and Bussiness schools",
    publishedDate: "Mar 1st",
  },
  {
    id: 3,
    title: "My third post",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Jan 2nd",
  },
  {
    id: 4,
    title: "My fourth post",
    description:
      "A high quality solution beautifully designed for startups and Bussiness schools. ",
    publishedDate: "Dec 24th",
  },
  {
    id: 5,
    title: "My fifth post",
    description: "A high quality solution beautifully designed for startups",
    publishedDate: "Nov 10th",
  },
];
*/

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
);
export default Home;
