import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    console.log(blog);
    const {title, cover, author, author_img, publish_date, reading_time, hashtag} = blog;
    return (
        <div className='flex flex-col gap-3 mb-3'>
            <h1 className='text-4xl text-center '>{title}</h1>
            <img src={cover} alt="cover image" />
            <div className='flex justify-between'>
                <div className='flex  gap-3'>
                    <div className='w-12'>
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h4>{author}</h4>
                        <p>{publish_date}</p>
                        <p className='mt-2 font-bold'>{hashtag}</p>
                    </div>
                </div>
                <div className='flex gap-3 justify-center'>
                        <p>{`${reading_time} mins read`}</p>
                        <p>Bookmark</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}