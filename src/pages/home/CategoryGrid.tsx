import { NavLink } from "react-router-dom";
import headphone from '../../assets/images/headphones.png'
import speaker from "../../assets/images/speakers.png";
import earphone from "../../assets/images/earphones.png";
import { SlArrowRight } from "react-icons/sl";


type CardProps = {
  img: string;
  imgAlt: string;
  title: string;
  url: string;
}

const Card = (props: CardProps) => {
  return (
    <NavLink
      to={props.url}
      className="w-[350px] h-[205px] bg-deepGray rounded-lg flex flex-col items-center justify-end relative"
    >
      <div className="h-[165px] w-auto absolute -translate-y-[60%]">
        <img src={props.img} alt={props.imgAlt} className="max-h-full" />
      </div>
      <div className="mb-[25px]">
        <p className="text-center text-lg font-bold tracking-[1.29px] mb-[15px]">
          {props.title}
        </p>
        <p className="text-center text-[13px] font-bold text-brandBlack/50 tracking-[1px] flex justify-center items-center gap-1">
          SHOP <SlArrowRight className="text-deepOrange" />
        </p>
      </div>
    </NavLink>
  );
}


const CategoryGrid = () => {
  return (
    <section>
      <div className="inner-container py-[120px] flex justify-center items-center gap-[15px]">
        <Card
          img={headphone}
          imgAlt="image of an heaphone"
          title="HEADPHONES"
          url="/"
        />

        <Card
          img={speaker}
          imgAlt="image of a studio speaker"
          title="SPEAKERS"
          url="/"
        />

        <Card
          img={earphone}
          imgAlt="image of an earpod"
          title="EARPHONES"
          url="/"
        />
      </div>
    </section>
  );
}

export default CategoryGrid