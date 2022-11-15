const Contacts = () => {
  return (
    <div
      id='contacts'
      className='w-full h-fit font-bold text-3xl font-mono flex flex-col items-center'
    >
      <h1 className='text-text flex items-center justify-start space-x-4'>
        <span className='text-secondary text-2xl font-light tracking-wide'>
          03. What's Next?
        </span>
      </h1>
      <div className='flex w-fit h-full p-4 flex-col items-center space-y-10'>
        <h1 className='text-text text-6xl text-center'>Get In Touch</h1>
        <h2 className='w-full text-text/50 text-center text-[1.1rem] font-light md:w-[50%]'>
          Although I'm not currently looking for opportunites for 2023 while I complete by
          Honours Degree, I am open for 2024 offers. Intern and Junior Development jobs
          specializing in Full Stack or Mobile Development.{" "}
        </h2>
        <a href='mailto:milahnmartin.develop@gmail.com'>
          <button className='py-4 px-6 outline-none animation-all duration-300 border-[1px] text-sm font-normal border-secondary rounded-md text-secondary hover:bg-secondary/10'>
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
