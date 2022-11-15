import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <img src="assets/HomeIMG.png" className={styles.HomeIMG}></img>
            <img src="assets/HomeLogo.svg" className={styles.HomeLogo}></img>
            <div className={styles.HomeDesc}>서울과학기술대학교<br /><span className="fw-bold">산업정보시스템전공</span> 학술 동아리</div>
            <div className={styles.Project_tag}>우리의,<br />우수 프로젝트</div>
            <div className={styles.bar}></div>
        </div >
    )
}

export default HomePage