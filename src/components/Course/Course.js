import classNames from "classnames/bind";
import styles from "./Course.module.scss";

const cx = classNames.bind(styles);
function Course({ haveCountStudent = false }) {
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
      {haveCountStudent && (
        <div className={cx("students-count")}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="users"
            className="svg-inline--fa fa-users "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
            ></path>
          </svg>
          <span>87.064</span>
        </div>
      )}
    </div>
  );
}

export default Course;
