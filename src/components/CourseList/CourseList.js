import classNames from "classnames/bind";
import styles from "./CourseList.module.scss";

import Course from "~/components/Course";

const cx = classNames.bind(styles);
function CourseList({ data, isNew = false, haveNumLearned = false }) {
  return (
    <div className={cx("wrapper")}>
      {haveNumLearned && <p  className={cx("sub-heading")}>
        <strong>255.122+</strong> người khác đã học
      </p>}
      <div>
        <div className={cx("heading-wraper")}>
          <h2 className={cx("heading")}>
            <span rel="noreferrer" target="_self">
              Khóa học Pro
              {isNew && <span className={cx("label")}>Mới</span>}
            </span>
          </h2>
        </div>
      </div>
      <div className={cx("body")}>
        <Course haveCountStudent></Course>
        <Course haveCountStudent></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
      </div>
    </div>
  );
}

export default CourseList;
