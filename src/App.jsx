import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Search from './components/Search'
import { getGitHubProfile } from './Services/GithubProfile';
import { GitHubContext } from './context/githubContext';
function App() {
 
 const [ searchProfileData, setSearchProfileData] = useState({
  loading:false,
  search:'',
  data:{}
 })
  const getProfileData = async(search='github')=>{
    setSearchProfileData((prevState)=>({...prevState, loading:true}));
    const reponseData= await getGitHubProfile(search ?? 'github');
    setSearchProfileData((prevState)=>({...prevState, search:search, data:reponseData, loading:false}));
  }
  return (
    <GitHubContext.Provider value={{ searchProfileData,setSearchProfileData,getProfileData }} >
      <div className='grid grid-flow-row p-5 pt-10 justify-center justify-items-center gap-10 grid-rows-[60px_auto] max-xl:grid-rows-[40px_auto] max-lg:grid-rows-[50px_auto] w-[100%]'>
         <Search/>
         <Profile/>
      </div>
    </GitHubContext.Provider>
  )
}

export default App
