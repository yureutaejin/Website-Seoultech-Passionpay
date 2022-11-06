import { useParams } from "react-router-dom"
import EditForm from "../components/EditForm"

const EditPage = () => {
    const id = useParams().id
    const type = useParams().type
    return (
        <div>
            <EditForm id={id} type={type}/>
        </div>
    )
}

export default EditPage