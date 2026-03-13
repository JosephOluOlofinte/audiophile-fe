import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/audiophile.png'
import { ImFacebook2 } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';


const Footer = () => {
  return (
    <footer className="bg-brandBlack w-full">
      <div className="inner-container h-full pt-[100px] pb-[70px] flex flex-col gap-[45px]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="h-[25px]" />

          <nav className="text-brandWhite">
            <ul className="flex items-center gap-[35px] text-[13px] font-bold tracking-[2px]">
              <li>
                <NavLink to="">HOME</NavLink>
              </li>
              <li>
                <NavLink to="">HEADPHONES</NavLink>
              </li>
              <li>
                <NavLink to="">SPEAKERS</NavLink>
              </li>
              <li>
                <NavLink to="">EARPHONES</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-deepGray text-[15px] max-w-[540px] font-medium opacity-80">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className='text-brandWhite flex items-center gap-[30px]'>
            <ImFacebook2 size={28}/>
            <FaXTwitter size={28} />
            <IoLogoInstagram size={36} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer