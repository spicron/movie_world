// import React from 'react'

// function Footer() {
//   return (
//     <footer>
//         <div className=' flex w-full p-4 text-white font-medium bg-[#ff0040] justify-center'>
//         © 2024 Copyright :
//         <a href="" className='text-white font-bold px-1'>Spicron. All rights reserved.</a>
//         </div>

//     </footer>
//   )
// }

// export default Footer
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer>
            <div className="flex sm:flex-wrap w-full p-4 text-white font-medium bg-[#ff0040] justify-center items-center">
                <span>© 2024 Copyright : Spicron</span>
                <span className="ml-2">All rights reserved.</span>
                <a href="mailto:sg133311@gmail.com" className="text-white font-bold px-1">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    
                </a>
                <a href="https://www.linkedin.com/in/shubham-gupta-64601b195/" className="text-white font-bold px-1">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
