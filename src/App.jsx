import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
  <Header></Header>
  <main className=' max-w-[1176px] mt-5 flex flex-col items-center  md:flex-col lg:items-start  lg:mx-auto lg:flex-row  '>
  <Blogs></Blogs>
  <Bookmarks></Bookmarks>
  </main>
    </>
  )
}

export default App
