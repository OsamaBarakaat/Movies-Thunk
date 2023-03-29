import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import "./Login.css";
const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const inputs = [
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Enter Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            patter: `/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/`,
            required: true,
        },

        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Enter Password",
            errorMessage:
                "Password must be 8-20 characters and include at least 1 UpperCase letter, 1lowerCase letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { values };
        console.log(userData);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="row ">
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={(e) => onChange(e)}
                        />
                    ))}
                    <button>Submit</button>

                </form>
            </div>
            <div className="col-3 m-auto">
                <label id="lable">if u dont have email</label>
                <Link to="/Register" >
                    <button>Go to Registration</button>
                </Link>
            </div>

        </div >
    );
};


export default Login