import { useCallback, useContext, useEffect, useState } from 'react';
import searchIcon from '../assets/images/Search.svg'
import { GitHubContext } from '../context/githubContext';
import ImageProfile from "../assets/images/github-logo.jpeg";


// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
const Search = ()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { getProfileData, searchProfileData } = useContext(GitHubContext);

    // Debounced function to call the API
  const debouncedGetProfileData = useCallback(
    debounce(async (search) => {
      if (search) {
        await getProfileData(search);
         console.log("search:", search)
      }
    }, 400),
    []
  );

  useEffect(() => {
    debouncedGetProfileData(searchTerm);
  }, [searchTerm, debouncedGetProfileData]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
    return (
      <div className='grid grid-flow-row gap-4'>
        <div className=' flex bg-color_4 text-color_5 rounded-xl px-4 gap-4 h-16 items-center  w-[450px] max-sm:w-[350px]'>
        <img src={searchIcon} alt='icon-search' className='h-12 '/>
         <input 
            type='text' name='search'
            value={searchTerm}   onChange={handleInputChange} 
            placeholder='username' 
            className='border-none bg-color_4 rounded h-16 w-[450px] outline-none text-color_6 placeholder:text-color_5 font-sans placeholder:font-sans'
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
       </div>
      {searchProfileData.data&& isFocused&&<div className='bg-color_1 rounded-xl grid grid-flow-col grid-cols-[75px_auto]   h-[75px] p-2 w-[450px] max-sm:w-[350px]'>
          <div className="p-2 rounded-2xl bg-black w-16 max-sm:w-24 aspect-square ">
            <img src={searchProfileData.data.avatar_url} alt="image profile" className='aspect-square  w-14 max-sm:w-16 rounded-full bg-black'/>
          </div>
          <div className='grid grid-flow-row text-color_6'>
            <p>{searchProfileData.data.name}</p>
            <p className='truncate'> {searchProfileData.data.bio}</p>
          </div>
       </div>}
      </div>
    )
};
export default Search;