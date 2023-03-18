import "../../assets/css/Hero.css";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import TestimonySection from "./TestimonySection";
import CTAButton from "../../components/UI/Buttons/CTAButton";
import RegistrationModal from "../../components/UI/Modals/RegistrationModal";
import MobileRegistrationModal from "../../components/UI/Modals/MobileRegistrationModal";
import { PopupContext } from "../../context/PopupContext";
import { AuthContext } from "../../context/AuthContext";

function Home() {
  const {
    showDesktopPopup,
    setShowDesktopPopup,
    showMobilePopup,
    setShowMobilePopup,
    showOverlay,
    setShowOverlay,
  } = useContext(PopupContext);

  const { hasToken } = useContext(AuthContext);

  useEffect(() => {
    if (!hasToken) {
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
    } else {
      setShowOverlay(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      {!hasToken && (
        <Link to="/login">
          <div className="pb-7 lg:pb-1">
            <CTAButton text={"¡Quiero Comenzar!"} />
          </div>
        </Link>
      )}

      <TestimonySection />

      {!hasToken && (
        <Link to="/contact">
          <div className="pb-7 lg:pb-1">
            <CTAButton text={"Agenda una Clase"} />
          </div>
        </Link>
      )}
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
