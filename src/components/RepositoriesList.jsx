import { useContext } from "react";
import Repository from "./Repository";
import { GitHubContext } from "../context/githubContext";

const RepositoriesList =()=>{
   const {searchProfileData} = useContext(GitHubContext);
   const repositories = searchProfileData?.data?.repositories || [];
   return (<>
  <div className=" grid grid-flow-row justify-center gap-4 ">
  <div className="grid grid-cols-2 gap-y-12 gap-x-10 max-md:grid-flow-row max-lg:grid-cols-1 ">
  {!searchProfileData.loading && repositories.length > 0 ? (
                  repositories.map((repository) => (
                     <Repository 
                        key={repository.id} // Ensure each Repository has a unique key
                        name={repository.name} 
                        description={repository.description} 
                        forks={repository.forks}
                        stargazers_count={repository.stargazers_count}
                        license={repository.license?.spdx_id ?? ''}
                        updated_at={repository.updated_at}
                     />
                  ))
               ) : (
                  <p>No repositories available.</p> // Add fallback if no repositories
               )}
   
   
   </div>
   <p className=" text-color_5 text-sm font-sans justify-self-center">View all repositories</p>
  </div>
   </>)
};
export default RepositoriesList;