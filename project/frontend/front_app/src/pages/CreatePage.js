import BlogForm from "../components/BlogForm"
import { useParams } from "react-router-dom"


const CreatePage = () => {
    const type = useParams().type
    return (
        <div>
            <BlogForm type={type} />
        </div>
    )
}

export default CreatePage