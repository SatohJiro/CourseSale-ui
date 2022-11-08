// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "./logo.jpg";
// import gg_icon from "../../assets/images/google-icon.jpg";
// import user_icon from "../../assets/images/user-icon.png";

import LoginSignUp from "../../components/LoginSignUp";
import classNames from "classnames/bind";
import styles from "./LoginStyle.module.scss";
const cx = classNames.bind(styles);

function Login() {
    return (
        <div>
            <div className={cx("background-container")}>
                <LoginSignUp action="login" />
            </div>
        </div>
    );
}

export default Login;