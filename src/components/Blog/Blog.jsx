import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types'; 
const Blog = ({blog, handleAddtoBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    // console.log(handleReadingTime)
    const {title, cover, author, author_img, publish_date, reading_time, hashtag} = blog;
    return (
        <div className='flex flex-col gap-3 mb-3'>
            <h1 className='text-4xl text-center '>{title}</h1>
            <img className='rounded-xl' src={cover} alt="cover image" />
            <div className='flex justify-between'>
                <div className='flex  gap-3'>
                    <div className='w-12'>
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p>{publish_date}</p>
                        <p className='mt-2 font-bold text-gray-600'>{hashtag}</p> 
                        <small  className='text-purple-600 font-bold cursor-pointer underline' onClick={()=> handleMarkAsRead(reading_time)} >Mark as read</small>
                    </div>
                </div>
                <div className='flex gap-3'>
                       <div>
                       <p>{`${reading_time} mins read`}</p>
                       </div>
                       <div>
                       <button  onClick={()=> handleAddtoBookmark(blog)} className='text-red-600 text-xl cursor-pointer'><FaBookmark></FaBookmark></button>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}