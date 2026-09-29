import { SearchOpt } from './SearchField';

const HeroSect = () => {
  return (
    <div className="flex flex-col h-screen bg-primary text-white text-center py-0 md:py-20 px-4 md:px-0">
      <div>
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold font-poppins">Get Access to Hundreds <br /> Courses Available</h1>
        <p className="text-md md:text-lg font-light font-satoshi py-8">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
      </div>

      <div>
        <SearchOpt />
      </div>
    </div>
  );
};

export default HeroSect;