import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const SidebarLeft = () => {
  return (
    <div className='flex flex-col space-y-6 h-fit w-fit'>
      <AiFillGithub
        className='cursor-pointer hover:scale-110 transition-all duration-100'
        size={30}
        fill='#495670'
        onClick={() => window.open("https://github.com/milahnmartin")}
      />
      <AiFillLinkedin
        className='cursor-pointer hover:scale-110 transition-all duration-100'
        size={30}
        fill='#495670'
        onClick={() =>
          window.open("https://www.linkedin.com/in/milahn-martin-376416203/")
        }
      />
      <AiFillTwitterCircle
        className='cursor-pointer hover:scale-110 transition-all duration-100'
        size={30}
        fill='#495670'
        onClick={() => window.open("https://twitter.com/Ultrafyy")}
      />
      <AiFillInstagram
        className='cursor-pointer hover:scale-110 transition-all duration-100'
        size={30}
        fill='#495670'
        onClick={() => window.open("https://www.instagram.com/milahnmartin/")}
      />
    </div>
  );
};

export default SidebarLeft;
