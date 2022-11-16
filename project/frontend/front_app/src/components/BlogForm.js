import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import mode from '../mode';

const BlogForm = ({ type }) => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const onSubmit = () => {
        axios.post(`http://localhost:3001/${mode[type]}`, {
            title,
            content
        }
        ).then(() => {
            history.push(`/${type}`)
        })
    }
    return (
        <div>
            <h1>글 작성</h1>
            <div className="mb-3">
                <label className="form-label">제목</label>
                <input className="form-control" value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">내용</label>
                <CKEditor
                    className="form-control"
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setContent(data);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={onSubmit}
            >
                작성
            </button>
        </div>
    )
}

export default BlogForm