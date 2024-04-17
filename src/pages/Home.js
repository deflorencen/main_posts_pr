import React, {useEffect, useState} from "react";
import axios from "axios";
import async from "async";


export default function Home() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const respone = await axios.get("http://127.0.0.1:8000/articles/");
            setPosts(respone.data);
        }
        fetchData();
    }, []);


    const handleDelete = async (postId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/articles/${postId}`);
            // После успешного удаления поста, обновляем список постов
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.name}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}