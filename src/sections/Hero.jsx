import bg from "../assets/hero.svg"
import Search from "../Components/Search"

const Hero = () => {
  return (
    <div className="relative h-72 md:h-96 flex justify-center items-center bg-[#ebf3fa]">
      <div className="h-full">
        <img src={bg} className="h-full" alt="hero" />
      </div>
      
      <div className="absolute z-10 -bottom-24 w-full px-10 sm:w-fit sm:-bottom-8">
        <Search />
      </div>
    </div>
  )
}

export default Hero