import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const BlogForm = ({type}) => {
    const mode = {
        "blogs" : "posts",
        "notification" : "notidb"
    }
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const onSubmit = () => {
        axios.post(`http://localhost:3001/${mode[type]}`, {
            title,
            body
        }
        ).then(() => {
            history.push(`/${type}`)
        })
    }
    return (
        <div>
            <h1>Create a post</h1>
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
                className="btn btn-primary"
                onClick={onSubmit}
            >
                Post
            </button>
        </div>
    )
}

export default BlogForm