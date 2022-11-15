import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <div>
            <img src="assets/HomeIMG.png" className="HomeIMG w-100"></img>
            <img src="assets/HomeLogo.svg" className="HomeLogo"></img>
            <div className="HomeDesc">서울과학기술대학교<br /><span className="fw-bold">산업정보시스템전공</span> 학술 동아리</div>
            <div className="Project_Tag">우리의,<br />우수 프로젝트</div>
            <div className="bar"></div>
            <div className="Project_Container d-flex justify-content-center w-100">
                <div className="row">
                    <ProjectCard img="assets/temp_image.png" title="1111111" />
                    <ProjectCard img="assets/temp_image.png" title="22222222" />
                    <ProjectCard img="assets/temp_image.png" title="33333333" />
                </div>
            </div>
        </div>
    )
}

export default HomePage