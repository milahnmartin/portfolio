import { useEffect, useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";
const Footer = () => {
  const [githubdata, setgithubdata] = useState<any>(null);
  const handleFooterClick = () => {
    window.open("https://github.com/milahnmartin", "_blank");
  };
  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.github.com/users/milahnmartin");
      const data = await res.json();
      setgithubdata(data?.public_repos);
    })();
  }, []);
  return (
    <div
      onClick={handleFooterClick}
      className='w-full h-[200px] flex m-auto items-end justify-center text-center pb-5'
    >
      <h1
        onClick={handleFooterClick}
        className='group text-text/60 cursor-pointer hover:text-secondary animation-all duration-500 space-y-2 flex flex-col justify-center items-center'
      >
        Built by Milahn Martin &copy; {new Date().getFullYear()} <br />
        <VscGithubAlt className='group-hover:text-secondary group-hover:animate-pulse animation-all duration-500' />
        Git Repos: {githubdata}
      </h1>
    </div>
  );
};

export default Footer;
