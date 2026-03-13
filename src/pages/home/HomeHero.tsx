import heroImg from '../../assets/images/hero-img.png'
import Button from '../../components/block/Button';


const HomeHero = () => {
  return (
    <main className="h-[calc(100vh-80px)] max-h-[750px] bg-[#131313]">
      <div className="inner-container h-full border-t border-[#f7f7f7] flex items-center justify-between">
        <div>
          <p className="">NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button text='SEE PRODUCT' url='#' />
        </div>
        <img src={heroImg} alt="" className="block max-h-full" />
      </div>
    </main>
  );
}

export default HomeHero