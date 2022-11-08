import React, { useState } from 'react';
import logo from "../../assets/images/user-icon.png";
import gg_icon from "../../assets/images/google-icon.jpg";
import user_icon from "../../assets/images/user-icon.png";

import classNames from "classnames/bind";
import styles from "./LoginSignUpStyle.module.scss";
const cx = classNames.bind(styles);

function LoginSignUp(props) {
    const [isShowOptionsBox, setIsShowOptionsBox] = React.useState(true);
    const [action, setAction] = React.useState("login");

    const actionSwapAction = () => {
        (action === "login" ? setAction("signup") : setAction("login"));
        setIsShowOptionsBox(true);
    }

    let inputBox;
    if (action === "login") {
        inputBox = <div className={cx("input-box")}>
            <input type="text" placeholder='Nhập email hoặc số điện thoại'></input>
            <button className={cx("btn-sendCode")}>Gửi mã </button>
            <input type="text" placeholder='Nhập mã xác nhận'></input>
            <input type="submit" value="Đăng nhập" className={cx("submit")}></input>
        </div>
    }
    else {    // action="signup"
        inputBox = <div className={cx("input-box")}>
            <input type="text" placeholder='Họ và tên của bạn'></input>
            <input type="text" placeholder='Nhập email hoặc số điện thoại của bạn'></input>
            <button className={cx("btn-sendCode")}>Gửi mã </button>
            <input type="text" placeholder='Nhập mã xác nhận'></input>
            <input type="submit" value="Đăng ký" className={cx("submit")}></input>
        </div>
    }

    return (
        <div className={cx("box")}>
            <div className={cx("logo")}>
                <img src={logo}></img>
            </div>

            <div className={cx("box-name")}> {action === "login" ? <h2>Đăng nhập</h2> : <h2>Đăng ký</h2>}</div>

            {/* cac cach de dang nhap */}
            {isShowOptionsBox ?
                <div className={cx("login-options-box")}>
                    <div className={cx("login-option")}>
                        <button onClick={() => setIsShowOptionsBox(!setIsShowOptionsBox)}>
                            <div className={cx("icon")}>
                                <img src={user_icon}></img>
                            </div>
                            {action === "login" ? <span>Đăng nhập bằng email / số điện thoại</span> : <span>Đăng ký bằng email / số điện thoại</span>}
                        </button>
                    </div>
                    <div className={cx("login-option")}>
                        <button >
                            <div className={cx("icon")}>
                                <img src={gg_icon}></img>
                            </div>
                            {action === "login" ? <span>Đăng nhập bằng Google</span> : <span>Đăng ký bằng Google</span>}
                        </button>
                    </div>
                </div>
                :
                <> {inputBox} </>
            }



            {action === "login" ? <p>Bạn chưa có tài khoản? <a href="#" onClick={actionSwapAction}>Đăng ký</a></p> : <p>Bạn đã có tài khoản? <a href="#" onClick={actionSwapAction}>Đăng nhập</a></p>}

            <div className={cx("term")}>
                <p> Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với</p> <p><a href=""><u> Điều khoản sử dụng</u></a> của chúng tôi.</p>
            </div>
        </div>

    );

}

export default LoginSignUp;