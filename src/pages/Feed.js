import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Feed() {
  const name = localStorage.getItem("name");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const createPost = async () => {
    if (content.trim() === "") return alert("Post cannot be empty");

    await axios.post("https://linkdln-backend.onrender.com/post/create", {
      user: name,
      content,
    });

    setContent("");
    loadPosts();
  };

  const loadPosts = async () => {
    const res = await axios.get(
      "https://linkdln-backend.onrender.com/post/all"
    );
    setPosts(res.data);
  };

  const likePost = async (id) => {
    await axios.post("https://linkdln-backend.onrender.com/post/like", { id });
    loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>Welcome, {name}</h2>

        <textarea
          placeholder="Write a post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "80px", padding: "10px" }}
        ></textarea>
        <br />
        <button onClick={createPost}>Post</button>
        <hr />

        <h3>Feed</h3>

        {posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "6px",
            }}
          >
            <b>{post.user}</b>
            <p>{post.content}</p>

            <button onClick={() => likePost(post._id)}>
              ❤️ Like ({post.likes})
            </button>

            <br />
            <small style={{ color: "gray" }}>
              {new Date(post.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
