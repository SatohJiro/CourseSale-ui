import classNames from 'classnames/bind';
import style from './Topic.module.scss';

export const Topic = (props) => {

    const { topic } = props;

    const cx = classNames.bind(style);

    return (
        <li className={cx("topic")}>
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check"
                className="svg-inline--fa fa-check CourseDetail_icon__sLJtd"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    fill="currentColor"
                    d="M438.6 105.4C451.1 117.9 451.1 
                138.1 438.6 150.6L182.6 406.6C170.1
                419.1 149.9 419.1 137.4 406.6L9.372
                278.6C-3.124 266.1-3.124 245.9 9.372
                233.4C21.87 220.9 42.13 220.9 54.63
                233.4L159.1 338.7L393.4 105.4C405.9
                92.88 426.1 92.88 438.6 105.4H438.6z">
                </path>
            </svg>

            <span>{topic}</span>
        </li>
    )
}