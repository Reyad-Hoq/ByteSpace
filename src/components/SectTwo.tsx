import Course from "./SectTwo/Course";
import Tags from "./SectTwo/Tags";
const SectTwo = () => {
  return (
    <section className="w-9/12 mx-auto space-y-5 my-15">
      <div className="w-full lg:w-4xl mx-auto text-center space-y-5">
        <h2 className="font-bold text-3xl md:text-5xl font-poppins">
          Discover Your Passion,
          <br /> Build Your Skills
        </h2>
        <p className="text-lg text-[#82868E]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>
      <Tags />
      <Course/>
    </section>
  );
};

export default SectTwo;
