import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold font-poppins">Welcome to Bytespace!</h1>
      <p className="text-lg font-light font-poppins">
        Discover a world of knowledge with our extensive collection of free courses.
      </p>
    </div>
  );
}
