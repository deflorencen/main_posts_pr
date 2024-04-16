import React, {useState} from "react";
import axios from "axios";
import async from "async";


export default function Home() {
    const [posts, setPosts] = useState([]);

    const checkData = async () => {
        const respone = await axios.get("http://127.0.0.1:8000/articles/");
        setPosts(respone.data);
        console.log(respone.data)
    }




    return (
        <div>
            <button onClick={checkData}>GET DATA</button>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.name}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .post {
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f8f8f8;
        }
        .post:hover {
            background-color: #eaeaea;
        }
    `}</style>
        </div>
    );
}