import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoPlayer from "../../components/Multimedia/VideoPlayer";
import MainBioSection from "./MainBioSection";
import CTAButton from "../../components/UI/Buttons/CTAButton";

function Bio() {
  return (
    <div className="flex flex-col items-center">
      <MainBioSection />
      <div className="my-[75px] text-center">
        <h2 className="font-josefin font-light text-5xl text-gray-100">
          Algunas de mis presentaciones
        </h2>
      </div>
      <VideoPlayer
        url={
          "https://www.youtube.com/watch?v=3c8z0TDxuXQ&feature=youtu.be&ab_channel=FundacionVillanueva"
        }
      />
      <div className="my-[30px]"></div>
      <Link to="/contact">
        <CTAButton text={"Agenda una Clase"} />
      </Link>
    </div>
  );
}

export default Bio;
