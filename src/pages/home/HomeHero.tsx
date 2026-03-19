import heroImg from '../../assets/images/hero-img.png'
import Button from '../../components/block/Button';


const HomeHero = () => {
  return (
    <main className="h-[calc(100vh-80px)] max-h-[750px] bg-[#131313]">
      <div className="inner-container h-full border-t border-[#f7f7f7] flex items-center justify-between">
        <div>
          <p className="font-manrope text-brandWhite/50 text-sm tracking-[10px]">
            NEW PRODUCT
          </p>
          <h1 className="max-w-[400px] text-[56px] font-manrope text-brandWhite tracking-[2px] leading-[58px] font-bold">
            XX99 MARK II HEADPHONES
          </h1>
          <p className='max-w-[350px]'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button text="SEE PRODUCT" url="#" />
        </div>
        <img src={heroImg} alt="" className="block max-h-full" />
      </div>
    </main>
  );
}

export default HomeHero