import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import LoadingSpinner from "../components/LoadingSpinner"

const ShowPage = () => {
    const id = useParams().id
    const type = useParams().type
    const mode = {
        "blogs" : "posts",
        "notification" : "notidb"
    }

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(true)
    const getContents = () => {
        axios.get(`http://localhost:3001/${mode[type]}/${id}`).then((res) => {
            setTitle(res.data.title)
            setContent(res.data.content)
            setLoading(false)
        })
    }
    const renderContents = () => {
        return (
            <div className="d-flex justify-content-between">
                <div>
                    <h1>{title}</h1>
                    <div>{content}</div>
                </div>
                <div>
                    <Link to={`/${type}/edit/${id}`} className="btn btn-secondary">
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