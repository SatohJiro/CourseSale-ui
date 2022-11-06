import classNames from "classnames/bind";
import Topic from "~/components/Topic";
import style from "./TopicList.module.scss"

export const TopicList = (props) => {

    const { topics, title } = props;

    const cx = classNames.bind(style);

    return (
        <div className={cx("topic-list")}>
            <h2 className={cx("topic-heading")}>{title}</h2>
            <ul className={cx("list")}>
                {
                    topics.map((topic, index) => {
                        return (<Topic key={index} topic= {topic} />);
                    })
                }
            </ul>
        </div>
    );
}