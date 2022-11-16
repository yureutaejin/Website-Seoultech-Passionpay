import styles from "./ProjectCard.module.css"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const ProjectCard = ({ id, title, img, onClick }) => {
    return (
        <div className={cx("card", "col-4", "m-3", "px-0", "cursor-pointer")} onClick={onClick} >
            <div className={cx("card-body")}>
                <h5 className={cx("card-title")}><div className="mb-1">{id}</div>{title}</h5>
            </div>
            <img src={img} className={cx("card-img-bottom", "mt-2")} alt="assets/temp_image.png" />
        </div>
    )
}

export default ProjectCard
