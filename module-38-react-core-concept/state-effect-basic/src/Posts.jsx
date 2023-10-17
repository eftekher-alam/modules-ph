import { useEffect, useState } from "react";
import Post from "./post";

export default function Posts() {

    // it will handel all the changes.
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 10)));
    }, []);

    return (
        <div>
            <h2>All Posts</h2>
            {
                posts.map(post => <Post post={post} ></Post>)
            }
        </div>
    );
}