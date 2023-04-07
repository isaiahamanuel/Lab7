import React from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../client";
import { useState } from "react";

const EditPost = ({ data }) => {
  let { id } = useParams();
  id = parseInt(id);
  const post = data.filter((item) => item.id === id)[0];

  const [titles, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [description, setDescription] = useState(post.description);

  const updatePost = async (event) => {
    event.preventDefault();
    console.log(titles);
    await supabase
      .from("Posts")
      .update({
        title: titles,
        author: author,
        description: description,
      })
      .eq("id", id);
    window.location = "http://localhost:3000/";
  };
  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Posts").delete().eq("id", id);

    window.location = "http://localhost:3000/";
  };

  return (
    <div>
      <form onSubmit={updatePost}>
        <label for="title">Title</label> <br />
        <input
          type="text"
          id="titles"
          name="titles"
          value={titles}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="author">Author</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
        <button onClick={deletePost} className="deleteButton">
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
