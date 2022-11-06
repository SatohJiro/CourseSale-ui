import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss'

import Header from "~/layouts/Header";
import Sidebar from "~/layouts/Sidebar";

const cx = classNames.bind(style);
export function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}