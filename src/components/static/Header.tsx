import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/audiophile.png'
import { PiShoppingCartLight } from 'react-icons/pi';


const Header = () => {
  return (
    <header className="bg-brandBlack w-full h-[80px]">
      <div className="inner-container h-full flex items-center justify-between">
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

        <PiShoppingCartLight className="text-brandWhite size-7 stroke-3" />
      </div>
    </header>
  );
}

export default Header