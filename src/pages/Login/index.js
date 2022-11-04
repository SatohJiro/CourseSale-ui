import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.jpg";

import { GoogleLogin } from 'react-google-login';

// import "./LoginStyle.module.scss";
import classNames from "classnames/bind";
import styles from "./LoginStyle.module.scss";
const cx = classNames.bind(styles);

const responseGoogle = (response) => {
    console.log(response);
}


function Login() {
    return (

        <div>
            <div className={cx("background-container")}>
                <div className={cx("box")}>
                    <div className={cx("logo")}>
                        <img src={logo}></img>
                    </div>
                    <div className={cx("box-name")}> <h2>Đăng nhập vào F8</h2></div>
                    <div className={cx("login-options-box")}>
                        <div className={cx("login-option")}>
                            <button >
                                <FontAwesomeIcon icon={faUser} className={cx("icon")} />
                                <span>Sử dụng email/số điện thoại</span>
                            </button>
                        </div>

                        <GoogleLogin
                            className={cx("login-option")}
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Đăng nhập bằng Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                        {/* <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook} /> */}

                    </div>

                    <p>Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>

                    <div className={cx("term")}>
                        <p> Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với</p> <p><a href=""><u> Điều khoản sử dụng</u></a> của chúng tôi.</p>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Login;