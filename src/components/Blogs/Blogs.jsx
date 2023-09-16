import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddtoBookmark }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
        .then( res => res.json())
        .then( data => setBlogs(data))
    }, [])
    return (
        <div className=" w-2/3">
            <h1 className="font-bold text-center mb-3">Total Blogs {blogs.length}</h1>
            {
             blogs.map(blog => <Blog
                 key={blog.id}
                  blog={blog}
                    handleAddtoBookmark={handleAddtoBookmark}
                    ></Blog>)
            }
        </div>
    );
};


// declear proptypes for avoid unexpected error
Blogs.propTypes = {
    handleAddtoBookmark: PropTypes.func
}
export default Blogs;