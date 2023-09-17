import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handleAddtoBookmark = blog =>{
    // console.log('bookmark adding soon', blog);
       const newBookmarks = [...bookmarks, blog];
      //  console.log(newBookmarks);
      setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time) =>{
    // console.log('reading time is clicked', time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
  <Header></Header>
  <main className=' max-w-[1176px] mt-5 flex flex-col items-center  md:flex-col lg:items-start  lg:mx-auto lg:flex-row  '>
  <Blogs handleAddtoBookmark={handleAddtoBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
  <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
  </main>
    </>
  )
}

export default App
