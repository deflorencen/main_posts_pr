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

    return (
        <div>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.name}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}