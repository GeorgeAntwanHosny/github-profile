export const getGitHubProfile = async (username = "github") => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if(response.ok){
        
        const data = await response.json();
        const repositoriesListResponse = await fetch(data.repos_url);
        if(repositoriesListResponse.ok){
          const  repositoriesList = await repositoriesListResponse.json();
          return {...data, repositories:repositoriesList};
        }
        
        return {...data, repositories:[]};
    }
  
     return {
        name:'not found'
     }
  } catch (error) {
    return error;
  }
};
