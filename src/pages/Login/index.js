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

                <LoginSignUp />

                {/* <div className={cx("box")}>
                    <div className={cx("logo")}>
                        <img src={logo}></img>
                    </div>
                    <div className={cx("box-name")}> <h2>Đăng nhập</h2></div>
                    <div className={cx("login-options-box")}>
                        
                        <div className={cx("login-option")}>
                            <button >
                                <div className={cx("icon")}>
                                    <img src={user_icon}></img>
                                </div>
                                <span>Đăng nhập bằng email / số điện thoại</span>
                            </button>
                        </div>

                        <div className={cx("login-option")}>
                            <button >
                                <div className={cx("icon")}>
                                    <img src={gg_icon}></img>
                                </div>
                                <span>Đăng nhập bằng Google</span>
                            </button>
                        </div>
                    </div>
                    <p>Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>
                    <div className={cx("term")}>
                        <p> Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với</p> <p><a href=""><u> Điều khoản sử dụng</u></a> của chúng tôi.</p>
                    </div>
                </div> */}
            </div>

        </div>


    );

}

export default Login;