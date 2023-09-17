import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks);
    return (
        <div className="w-1/3 mt-5 pt-4">
            <h1 className='text-3xl text-center font-semibold'>Bookmarked Blogs : {bookmarks.length}</h1>
             <div>
                <h3 className='text-center'>Total Reading time: {readingTime}</h3>
            </div>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} readingTime={readingTime}></Bookmark>)
            }
           
        </div>
    );
};

Bookmarks.propTypes = {
bookmarks: PropTypes.array,
readingTime: PropTypes.number
}
export default Bookmarks;