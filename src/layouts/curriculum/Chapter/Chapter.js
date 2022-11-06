import classNames from 'classnames/bind';
import { useState } from 'react';
import Lesson from '~/components/Lesson';
import style from './Chapter.module.scss';

export const Chapter = (props) => {

    const { number, chapterName, lessions } = props;
    const [open, setOpen] = useState(false);

    const cx = classNames.bind(style);
    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className={cx('chapter')}>
            <div className={cx('chapter-heading')} onClick={toggle}>
                <div className={cx('chapter-heading-left')}>
                    <span className={cx('switch')}>{open ? '-' : '+'}</span>
                    <span className={cx('chapter-heading__name')}>{number}. {chapterName}</span>
                </div>
                <div className={cx('chapter-heading__amountLessons')}>{lessions.length} bài học</div>
            </div>
            {
                open
                    ? <div className={cx('chapter-lessons')}>
                        {lessions.map((lession, index) => {
                            return (
                                <Lesson
                                    key={index}
                                    name={lession.name}
                                    time={lession.time} />
                            )
                        })}
                    </div>
                    : null
            }
        </div>
    )
};