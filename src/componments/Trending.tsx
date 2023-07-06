import MoiveCard from "./MovieCard";
import { moviesData } from "./moviesData";

function Trending() {
  return (
    <div>
      <h1 className="border-b text-xl border-blue-950 mt-12 mb-6 font-bold">
        Trending
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 ">
        {moviesData.map((movie, index) => (
          <MoiveCard key={index} movie={movie} />
        ))}
      </section>
      <div className="flex justify-center">
        <button className="border-2 border-blue-950 px-4 py-2 rounded uppercase text-xl mr-2 cursor-pointer  hover:bg-blue-950 hover:text-white hover:scale-125 transition ease-out duration-500">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Trending;
