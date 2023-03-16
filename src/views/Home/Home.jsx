import "../../assets/css/Hero.css";
import { useEffect, useContext } from "react";
import HeroSection from "./HeroSection";
import TestimonySection from "./TestimonySection";
import CTAButton from "../../components/Buttons/CTAButton";
import RegistrationModal from "../../components/Modals/RegistrationModal";
import MobileRegistrationModal from "../../components/Modals/MobileRegistrationModal";
import Context from "../../context/Context";

function Home() {
  const context = useContext(Context);

  const {
    showDesktopPopup,
    setShowDesktopPopup,
    showMobilePopup,
    setShowMobilePopup,
    showOverlay,
    setShowOverlay,
  } = useContext(Context);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setTimeout(() => {
        setShowDesktopPopup(!showDesktopPopup);
        setShowOverlay(!showOverlay);
      }, 5000);
    } else {
      setTimeout(() => {
        setShowMobilePopup(!showMobilePopup);
        setShowOverlay(!showOverlay);
      }, 5000);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      <div className="pb-7 lg:pb-1">
        <CTAButton text={"¡Quiero Comenzar!"} />
      </div>

      <TestimonySection />

      <div className="pb-7 lg:pb-1">
        <CTAButton text={"Agenda una Clase"} />
      </div>
      <div className="w-full h-full justify-center items-center">
        {showDesktopPopup && (
          <RegistrationModal
            closePopup={setShowDesktopPopup}
            closeOverlay={setShowOverlay}
          />
        )}
      </div>
      <div className="w-full h-full justify-center items-center">
        {showMobilePopup && (
          <MobileRegistrationModal
            closePopup={setShowMobilePopup}
            closeOverlay={setShowOverlay}
          />
        )}
      </div>
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-40"></div>
      )}
    </div>
  );
}

export default Home;
