
import branchIcon from '../assets/images/Nesting.svg';
import starIcon from '../assets/images/Star.svg';
import PropTypes from 'prop-types';
import ChieldAltIcon from '../assets/images/Chield_alt.svg';
import { formatTimeDifference } from '../utilities';
const Repository = ({name, description, forks, stargazers_count,license,updated_at })=>{
   return (<>
        <div className="h-auto w-[450px] max-sm:w-[350px]  bg-gradient-to-l from-color_2 to-color_1 rounded-lg px-5 py-4 text-color_5  font-sans grid grid-flow-row gap-4">
               <p className='text-color_6 font-sans text-lg hover:underline-offset-4 hover:underline hover:cursor-pointer'>{name}</p>
               <p>{description}</p>
               <div className='grid grid-flow-col max-sm:grid-rows-2 max-sm:gap-5'>
                   {license && <div className='flex gap-2'>
                     <img src={ChieldAltIcon} alt='Chield Alt Icons'/>
                     <p>{license}</p>
                   </div>}
                   <div className='flex gap-2'>
                     <img src={branchIcon} alt='Nesting Icons'/>
                     <p>{forks}</p>
                   </div>
                   <div className='flex gap-2'>
                     <img src={starIcon} alt='Star Icons'/>
                     <p>{stargazers_count}</p>
                   </div>
                   <div className='text-sm font-sans'>
                     <p>updated {formatTimeDifference(updated_at)}</p>
                   </div>

               </div>
        </div>
   </>)
};
Repository.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  forks: PropTypes.number.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  license: PropTypes.string.isRequired, 
  updated_at: PropTypes.string.isRequired,
};
export default Repository;