import profilePic from '../../assets/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-5 border-b-2'>
        <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
        <img src={profilePic} alt="Profile" />
        </header>
    );
};

export default Header;