import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./HomePage.module.css";
import { useHistory } from "react-router"
import classNames from "classnames/bind"

const HomePage = () => {
    const history = useHistory()
    const cx = classNames.bind(styles)
    return (
        <div>
            <img src="assets/HomeIMG.png" alt="assets/temp_image.png" className={cx("HomeIMG", "w-100")}></img>
            <img src="assets/HomeLogo.svg" alt="assets/temp_image.png" className={cx("HomeLogo")}></img>
            <div className={cx("HomeDesc")}>서울과학기술대학교<br /><span className="fw-bold">산업정보시스템전공</span> 학술 동아리</div>
            <div className={cx("Project_Container", "d-flex", "justify-content-center", "w-100")}>
                <div className={cx("row", "mx-0")}>
                    <div className={cx("Project_Bunch", "px-0")}>
                        <div className={cx("Project_Tag")}>우리의,<br />우수 프로젝트</div>
                        <div className={cx("bar")}></div>
                    </div>
                </div>
                <div className={cx("row")}>
                    <ProjectCard img="assets/temp_image.png" title="어떤어떤프로젝트" id='1' onClick={() => history.push("blogs")} />
                    <ProjectCard img="assets/temp_image.png" title="어떤어떤프로젝트" id='2' onClick={() => history.push("blogs")} />
                    <ProjectCard img="assets/temp_image.png" title="어떤어떤프로젝트" id='3' onClick={() => history.push("blogs")} />
                </div>
            </div>
        </div>
    )
}

export default HomePage