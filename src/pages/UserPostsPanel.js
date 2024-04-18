import React, {useEffect, useState} from "react";
import axios from "axios";
import async from "async";


export default function UserPostsPanel() {
    const [posts, setPosts] = useState([]);
    const authHeader = localStorage.getItem("auth-token");

    useEffect(() => {
        const fetchData = async () => {
            const respone = await axios.get("http://127.0.0.1:8000/articles/by-user/", {
                headers: {
                    Authorization: authHeader
                }
            });
            setPosts(respone.data);
        }
        fetchData();
    }, []);


    const handleDelete = async (postId) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/articles/${postId}`, {
                headers: {
                    Authorization: authHeader
                }
            });

            if(response.status === 204){
                console.log(`Post with id: ${postId} deleted.`)
                // После успешного удаления поста, обновляем список постов
                setPosts(posts.filter(post => post.id !== postId));
            }

        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    // add if posts array is empty - <h3>There are no posts yet.</h3>
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