import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaForm({
  instagramLink,
  setInstagramLink,
  facebookLink,
  setFacebookLink,
  tiktokLink,
  setTiktokLink,
  youtubeLink,
  setYoutubeLink,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-center md:text-start font-josefin font-bold text-white text-3xl uppercase mb-7">
          Tus Redes
        </h1>
        <form method="POST" action="#login" className="w-[90%] md:w-[500px]">
          <div className="mb-8">
            <div className="mt-1 relative rounded-md shadow-sm flex">
              <FontAwesomeIcon
                className="text-white text-4xl relative mr-5"
                icon={["fab", "instagram"]}
              />
              <input
                id="instagram"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="mt-1 relative rounded-md shadow-sm flex">
              <FontAwesomeIcon
                className="text-white text-4xl relative mr-5"
                icon={["fab", "facebook"]}
              />
              <input
                id="facebook"
                value={facebookLink}
                onChange={(e) => setFacebookLink(e.target.value)}
                className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="mb-8">
            <div className="mt-1 relative rounded-md shadow-sm flex">
              <FontAwesomeIcon
                className="text-white text-4xl relative mr-5"
                icon={["fab", "tiktok"]}
              />
              <input
                id="tiktok"
                value={tiktokLink}
                onChange={(e) => setTiktokLink(e.target.value)}
                className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="mb-8">
            <div className="mt-1 relative rounded-md shadow-sm flex">
              <FontAwesomeIcon
                className="text-white text-4xl relative mr-5"
                icon={["fab", "youtube"]}
              />
              <input
                id="youtube"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SocialMediaForm;
