import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import CourseList from "~/components/CourseList";
import Banner from '~/components/Banner';

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('wrapper')}>
      <Banner></Banner>
      <CourseList isNew></CourseList>
      <CourseList haveNumLearned></CourseList>
    </div>
  );
}

export default Home;
