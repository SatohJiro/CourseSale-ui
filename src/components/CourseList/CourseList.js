import classNames from "classnames/bind";
import styles from "./CourseList.module.scss";

import Course from "~/components/Course";

const cx = classNames.bind(styles);

function CourseList({data}) {
    return (
        <div className={cx("wrapper")}>
            <div>
                <div className={cx("heading-wraper")}>
                    <h2 className={cx("heading")}>
            <span rel="noreferrer" target="_self">
              Khóa học Pro
              <span className={cx("label")}>Mới</span>
            </span>
                    </h2>
                </div>
            </div>
            <div className={cx("body")}>
                <Course></Course>
                <Course></Course>
                <Course></Course>
                <Course></Course>
            </div>
        </div>
    );
}

export default CourseList;
