import { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const EditForm = ({ id }) => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const getOrigin = () => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
            setTitle(res.data.title)
            setBody(res.data.body)
        })
    }
    const onSubmit = () => {
        axios.put(`http://localhost:3001/posts/${id}`, {
            title,
            body
        }
        ).then(() => {
            history.push(`/blogs/${id}`)
        })
    }
    useEffect(() => { getOrigin() }, [])
    return (
        <div>
            <h1>Edit a post</h1>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input className="form-control" value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea
                    className="form-control" value={body}
                    onChange={(event) => {
                        setBody(event.target.value)
                    }}
                    rows="20"
                />
            </div>
            <button
                className="btn btn-secondary"
                onClick={onSubmit}
            >
                Edit
            </button>
        </div>
    )
}

export default EditForm