import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import LoadingSpinner from "../components/LoadingSpinner"

const ShowPage = () => {
    const id = useParams().id
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [loading, setLoading] = useState(true)
    const getContents = () => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
            setTitle(res.data.title)
            setBody(res.data.body)
            setLoading(false)
        })
    }
    const renderContents = () => {
        return (
            <div className="d-flex justify-content-between">
                <div>
                    <h1>{title}</h1>
                    <div>{body}</div>
                </div>
                <div>
                    <Link to={`/blogs/edit/${id}`} className="btn btn-secondary">
                        Edit
                    </Link>
                </div>
            </div>
        )
    }
    useEffect(() => { getContents() }, [])
    return (
        <div>
            {loading ? <LoadingSpinner /> : renderContents()}
        </div>
    )
}

export default ShowPage