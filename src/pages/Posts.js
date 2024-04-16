import React, {useState} from "react";
import axios from "axios";

export default function Posts() {
    const [name, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/articles/', {
                name: name,
                content: content
            }, {
                    headers: {
                        Authorization: localStorage.getItem("auth-token")
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