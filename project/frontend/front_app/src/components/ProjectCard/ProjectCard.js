import "./ProjectCard.scss"

const ProjectCard = ({ title, img }) => {
    return (
        <div className="card col-4 m-3" >
            <img src={img} className="card-img-top" alt="assets/temp_image.png" />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    )
}

export default ProjectCard
