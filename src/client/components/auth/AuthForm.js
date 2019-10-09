import React from 'react';
import { Link } from "react-router-dom";
import './AuthForm.css';

const AuthForm = (props) => {
    return (
        <React.Fragment>
            <form className="AuthForm">
                <input name="username" placeholder="아이디" />
                <input name="password" placeholder="패스워드" type="password" />
                <button type="submit">{props.type === "Login" ? "로그인" : "회원가입"}</button>
            </form>

            {props.type === "Login" &&
                <div className="footer">
                    <Link to="/register">회원가입</Link>
                </div>
            }
        </React.Fragment>
    );
};

export default AuthForm;