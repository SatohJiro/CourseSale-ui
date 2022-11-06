import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from './Header.module.scss'

function Header(props) {
  const {value, handleChangeValue} = props;
  const cx = classNames.bind(style);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("logo")}>
        <a href="/">
          <img
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt="F8"
          />
        </a>
        <h4 className={cx("logo-heading")}>Học Lập Trình Để Đi Làm</h4>
      </div>

      <div className={cx("body")}>
        <div className={cx("search-wrapper")} aria-expanded="false">
          <div className={cx("search-icon")}>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </div>
          <input
            className={cx("search-input")}
            placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            spellCheck={false}
            value={value}
            onChange={handleChangeValue}
          />
        </div>
      </div>

      <div className={cx("actions")}>
        <button className={cx("mylearn-btn")} aria-expanded="false">
          Khóa học của tôi
        </button>
        <div className={cx("action-btn")} aria-expanded="false">
          <FontAwesomeIcon
            icon={faBell}
            className={cx("icon")}
          ></FontAwesomeIcon>
        </div>
        <img
          className={cx("avatar")}
          src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
          alt="Anh nguyễn trần"
        ></img>
      </div>
    </header>
  );
}

export default Header;
