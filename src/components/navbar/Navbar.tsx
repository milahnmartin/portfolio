const Navbar = () => {
  return (
    <div className='w-full h-[5rem] text-white font-mono font-black flex p-6 sticky top-0'>
      <div className='h-full w-fit flex items-center justify-start '>
        <img
          id='logo'
          src={"/public/logo.jpg"}
          alt='logo'
          className='rounded-full w-14 ring-2 ring-secondary cursor-pointer hover:scale-105 animation-all duration-500 hover:drop-shadow-xl'
        />
      </div>
      <div className='h-full w-full flex space-x-6 items-center justify-end text-text'>
        <h1 className='hover:text-secondary cursor-pointer animation-all duration-300'>
          <span className='text-secondary'>01.</span>About
        </h1>
        <h1 className='hover:text-secondary cursor-pointer animation-all duration-300'>
          <span className='text-secondary'>01.</span>Experience
        </h1>
        <h1 className='hover:text-secondary cursor-pointer animation-all duration-300'>
          <span className='text-secondary'>01.</span>Projects
        </h1>
        <h1 className='hover:text-secondary cursor-pointer animation-all duration-300'>
          <span className='text-secondary'>01.</span>Contact
        </h1>
        <button className='px-4 py-2 outline-none animation-all duration-300 border-[1px] border-secondary rounded-md text-secondary hover:bg-secondary/10'>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
