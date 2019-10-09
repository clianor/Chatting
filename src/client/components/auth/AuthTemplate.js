import React from 'react';
import AuthForm from "./AuthForm";
import './AuthTemplate.css';

/*
 * 로그인 및 회원가입 페이지의 레이아웃을 담당하는 컴포넌트.
 */
const AuthTemplate = (props) => {
    return (
        <div className="AuthTemplate">
            <div className="whiteBox">
                <h1>{props.type}</h1>
                <AuthForm type={props.type} />
            </div>
        </div>
    );
};

export default AuthTemplate;