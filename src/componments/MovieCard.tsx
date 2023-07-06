import { BiTime } from "react-icons/bi";
import { Movie } from "./moviesData";

const MoiveCard = ({ movie }: { movie: Movie }) => {
  const { src, title, main, runtime } = movie;
  return (
    <div className="bg-blue-950 rounded-md shadow-md shadow-blue-400 relative overflow-hidden hover:shadow-lg hover:shadow-red-500">
      <img src={src} alt="" className="w-full" />
      <div className="p-4 text-white">
        <h4 className="text-2xl">{title}</h4>
        <p>{main}</p>
      </div>
      <div className="flex justify-between items-center bg-cyan-50 rounded-md absolute top-2 left-2 min-w-[25%]">
        <BiTime />
        <p className="text-xs">{runtime}</p>
      </div>
    </div>
  );
};
export default MoiveCard;
