import React, {useState} from "react";
import axios from "axios";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authString = `${formData.email}:${formData.password}`;
            const authHeader = "Basic " + btoa(authString);
            const response = await axios.post(
                "http://127.0.0.1:8000/users/login/",
                {},
                {
                    headers: {
                        Authorization: authHeader
                    }
                }
            );
            if (response.status === 200) {
                localStorage.setItem('auth-token', authHeader);
            }
            console.log("Registration successful:", response.data);
        } catch (error) {
            console.error("Error registering:", error);
        }
    };

    return (
        <div className="registrationPage">
            <h2>Форма регистрации</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Пароль:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </label>
                <br />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}


// ДОБАВИТЬ ФУНКЦИЮ ЛОГАУТА ЯКА ЧИСТИТЬ ЛОКАЛ СТОРАГЕ