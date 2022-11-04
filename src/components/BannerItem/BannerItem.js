import styles from './BannerItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function BannerItem() {
    return ( 
        <div className={cx("banner")}>
        <div className={cx("banner-content")}>
          <div className={cx("banner-body")}>
            <div className={cx("banner-body-left")}>
              <h2 className={cx("banner-heading")}>
                <a
                  rel="noreferrer noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/f8vnofficial"
                >
                  F8 trên Facebook
                </a>
              </h2>
              <p className={cx("banner-desc")}>
                F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho
                nghề IT và có những con người yêu thích lập trình F8 sẽ ở
                đó.
              </p>
              <div>
                <a
                  rel="noreferrer noopener noreferrer"
                  className={cx("banner-btn")}
                  target="_blank"
                  href="https://www.facebook.com/f8vnofficial"
                >
                  Truy cập Facebook
                </a>
              </div>
            </div>

            <div className={cx("banner-body-right")}>
              <a
                rel="noreferrer noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/f8vnofficial"
              >
                <img
                  className={cx("banner-img")}
                  src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png"
                  alt="F8 trên Facebook"
                  title="F8 trên Facebook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
     );
}

export default BannerItem;