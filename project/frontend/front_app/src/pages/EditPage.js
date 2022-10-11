import { useParams } from "react-router-dom"
import EditForm from "../components/EditForm"

const EditPage = () => {
    const id = useParams().id

    return (
        <div>
            <EditForm id={id} />
        </div>
    )
}

export default EditPage