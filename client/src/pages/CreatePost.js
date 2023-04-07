import React from "react";
import "./CreatePost.css";
import { supabase } from "../client.js";

const createPost = async (event) => {
  event.preventDefault();
  const post = event.target;
  await supabase
    .from("Posts")
    .insert({
      title: post.title.value,
      author: post.author.value,
      description: post.description.value,
    })
    .select();

  window.location = "/";
};

const CreatePost = () => {
  return (
    <div>
      <form onSubmit={createPost}>
        <label for="title">Title</label> <br />
        <input type="text" id="title" name="title" />
        <br />
        <br />
        <label for="author">Author</label>
        <br />
        <input type="text" id="author" name="author" />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea rows="5" cols="50" id="description"></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreatePost;
