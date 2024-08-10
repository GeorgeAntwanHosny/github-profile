import { useContext, useEffect } from "react";
import { GitHubContext } from "../context/githubContext";

const ProfileDetails = () => {
  const { searchProfileData,  getProfileData} = useContext(GitHubContext);
  useEffect(()=>{
    getProfileData('github')
  },[])
  return (
    <div className="grid grid-flow-row max-lg:gap-20">
      <div className=" grid grid-flow-col gap-5 h-32 max-sm:gap-2">
        <div className="flex border-color_1 p-2 rounded-2xl bg-color_4 w-[128px] max-sm:w-[100px] aspect-square justify-center">
          <div className="p-2 rounded-2xl bg-black w-28 max-sm:w-20 aspect-square">
            <img
              src={searchProfileData.data.avatar_url}
              alt="image-profile"
              className="aspect-square w-24 max-sm:w-16 rounded-full bg-black"
            />
          </div>
        </div>
       <div className="grid grid-flow-col gap-5 max-lg:grid-flow-row max-lg:pt-12 max-sm:justify-items-start">
       <div className="self-end bg-color_1 rounded-2xl w-56 h-14 flex gap-4 justify-center items-center text-color_5 font-sans ">
            <span>Followers</span><span>|</span><span className="text-color_6">{searchProfileData.data.followers}</span>
        </div>
        <div className="self-end bg-color_1 rounded-2xl w-56 h-14 flex gap-4 justify-center items-center text-color_5 font-sans">
            <span>Following</span><span>|</span><span className="text-color_6">{searchProfileData.data.following}</span>
        </div>
        <div className="self-end bg-color_1 rounded-2xl w-72 max-sm:w-[250px] h-14 flex gap-4 justify-center items-center text-color_5 font-sans">
            <span>Location</span><span>|</span><span className="text-color_6">{searchProfileData.data.location}</span>
        </div>
       </div>
      </div>
        <div className="text-color_6 grid grid-flow-row justify-start  grid-rows-[35px_50px] max-lg:pt-10  max-sm:pt-16">
            <p className="font-sans text-3xl">{ searchProfileData.data.name }</p>
            <p>{ searchProfileData.data.bio }</p>
        </div>
    </div>
  );
};
export default ProfileDetails;
