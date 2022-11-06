import classNames from 'classnames/bind';
import style from './CurriculumHeading.module.scss';

export const CurriculumHeading = (props) => {

    const { chapterNumber, lessionNumber, time } = props;
    const cx = classNames.bind(style);

    return (
        <div className={cx('curriculum-heading')}>
            <ul>
                <li>
                    <strong>{chapterNumber} </strong>
                    chương
                </li>
                <li>•</li>
                <li>
                    <strong>{lessionNumber} </strong>
                    bài học
                </li>
                <li>•</li>
                <li>
                    Thời lượng
                    <strong>{lessionNumber} </strong>
                </li>
            </ul>
            <div className={cx('toggleBtn')}>
                <span>
                    <strong>Mở rộng tất cả</strong>
                </span>
            </div>
        </div>
    );
};