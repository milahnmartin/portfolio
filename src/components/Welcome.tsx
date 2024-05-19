const Welcome = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/milahnmartin', '_blank');
  };
  return (
    <div
      id="home-top"
      className="flex items-start justify-center gap-y-5 px-0 flex-col w-full h-[90vh] md:px-40"
    >
      <span className="text-secondary text-lg">Hi, my name is</span>
      <h1 className="text-text text-6xl font-bold md:text-7xl">
        Milahn Martin
      </h1>
      <h1 className="text-text2 text-5xl font-black md:text-7xl">
        I build Software
      </h1>
      <p className="text-text font-mono font-bold">
        I’m a Full Stack Software Engineer specializing in building (and
        occasionally designing) exceptional digital experiences. Recenly I was
        able to work on the prominent startup {''}
        <a
          className="text-secondary hover:underline"
          href="https://yoco.com/"
          target="_blank"
        >
          Yoco
        </a>
        .
      </p>
      <button
        onClick={handleGithubClick}
        className="px-6 py-4 outline-none animation-all duration-300 border-[1px] border-secondary rounded-md text-secondary hover:bg-secondary/10"
      >
        View My Github !
      </button>
    </div>
  );
};

export default Welcome;
