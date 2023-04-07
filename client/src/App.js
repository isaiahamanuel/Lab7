import "./App.css";
import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import { Link } from "react-router-dom";
import { supabase } from "./client.js";
import { useState } from "react";

const App = () => {
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("Posts")
      .select()
      .order("created_at", { ascending: true });

    // set state of posts
    setPostsData(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={postsData} />,
    },
    {
      path: "/edit/:id",
      element: <EditPost data={postsData} />,
    },
    {
      path: "/new",
      element: <CreatePost />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>👍 Bet 1.0</h1>
        <Link to="/">
          <button className="headerBtn"> Explore Challenges 🔍 </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Submit Challenge 🏆 </button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
