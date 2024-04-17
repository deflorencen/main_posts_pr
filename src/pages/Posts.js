import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Posts() {
    const [name, setTitle] = useState('');
    const [content, setContent] = useState('');
    const authToken = localStorage.getItem("auth-token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!authToken) {
            navigate('/login');
        }
    }, [authToken, navigate]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/articles/', {
                name: name,
                content: content
            }, {
                headers: {
                    Authorization: authToken
                }
            });
            console.log('Post submitted:', response.data);
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h2>Create A Post</h2>
                <div className="inputGp">
                    <label> Title:</label>
                    <input value={name} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="inputGp">
                    <label> Post:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Submit Post</button>
            </div>
        </div>
    );
}
