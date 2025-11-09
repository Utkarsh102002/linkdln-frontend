import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { API_BASE } from "../config";

function Feed() {
  const name = localStorage.getItem("name");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await axios.get(`${API_BASE}/post/all`);
    setPosts(res.data);
  };

  const createPost = async () => {
    await axios.post(`${API_BASE}/post/create`, { user: name, content });
    setContent("");
    loadPosts();
  };

  const likePost = async (id) => {
    await axios.post(`${API_BASE}/post/like`, { id });
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button onClick={createPost}>Post</button>

        <hr />

        {posts.map((p) => (
          <div
            key={p._id}
            style={{ border: "1px solid #ddd", padding: 10, margin: "10px 0" }}
          >
            <b>{p.user}</b>
            <p>{p.content}</p>
            <button onClick={() => likePost(p._id)}>❤️ Like ({p.likes})</button>
            <br />
            <small>{new Date(p.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
