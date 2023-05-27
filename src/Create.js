import { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [isPending,setisPending]=useState(false);
    const history=useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setisPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setisPending(false);
            history.push('/');
        });
    }
    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog-title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog-body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea> 
                <label>Blog-author</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yashi">yashi</option>
                </select>
                {isPending?<button disabled>Adding blog..</button>:<button>Add Blog</button>}
            </form>
        </div>
        
     );
}
 
export default Create;