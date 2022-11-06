import classNames from "classnames/bind"
import { CurriculumHeading } from "~/components/CurriculumHeading.js/CurriculumHeading";
import { Chapter } from "../Chapter/Chapter";
import style from "./Curriculum.module.scss";

export const Curriculum = (props) => {
    const {title, chapters} = props;
    const cx = classNames.bind(style);

    return (
        <div className={cx("curriculum")}>
            <h2 className={cx("curriculum__title")}>{title}</h2>
            <CurriculumHeading />
            <div className={cx("curriculum__chapters")}>
                {chapters.map((chapter) => {
                    return (
                        <Chapter 
                            key={chapter.id}
                            number= {chapter.number}
                            chapterName= {chapter.name}
                            lessions={chapter.lessions}/>
                    );
                })}
            </div>
        </div>
    )
}