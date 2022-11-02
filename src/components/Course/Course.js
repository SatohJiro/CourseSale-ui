import classNames from "classnames/bind";
import styles from "./Course.module.scss";

const cx = classNames.bind(styles);
function Course() {
  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("course-item")}
        title="HTML CSS Pro"
        target="_self"
        href="/landing/htmlcss"
        style={{
          backgroundImage: `url("https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png")`,
        }}
      >
        <div className={cx("wrapper-btn")}>
          <button className={cx("view-course-btn")}>Xem khóa học</button>
        </div>
      </div>
      <h3 className={cx("course-title")}>
        <a target="_self" href="/landing/htmlcss">
          HTML CSS Pro
        </a>
      </h3>
      <div className={cx("course-icon")}>
        <img
          src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
          alt=""
        />
      </div>
      <div className={cx("course-price")}>
        <span className={cx("old-price")}>2.499.000đ</span>
        <span className={cx("main-price")}>1.299.000đ</span>
      </div>
    </div>
  );
}

export default Course;
