import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import BannerItem from "../BannerItem";

const cx = classNames.bind(styles);
function Banner() {
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("prev-banner", "banner-arrow")}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            className="svg-inline--fa fa-chevron-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
            ></path>
          </svg>
        </div>

        <div className={cx("body")}>
          <div className={cx("list-banner-wrapper")}>
            <BannerItem></BannerItem>
            <BannerItem></BannerItem>
            <BannerItem></BannerItem>
            <BannerItem></BannerItem>
          </div>
        </div>

        <div className={cx("next-banner", "banner-arrow")}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            ></path>
          </svg>
        </div>
      </div>

      <ul className={cx("slider-dots")}>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>4</button>
        </li>
        <li className={cx("active")}>
          <button>5</button>
        </li>
      </ul>
    </div>
  );
}

export default Banner;
