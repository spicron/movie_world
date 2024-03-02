import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faInfoCircle, faSmile } from '@fortawesome/free-solid-svg-icons';


function Service() {
  return (
    <div className="container mx-auto py-8 px-4 bg-gray-100">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faSearch} className="text-4xl text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Search Movies</h3>
            <p className="text-gray-700 text-center">Find movies by title and year quickly and easily.</p>
        </div>
        {/* Service Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faInfoCircle} className="text-4xl text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Discover Information</h3>
            <p className="text-gray-700 text-center">Explore detailed movie information, including title, poster, and year summaries.</p>
        </div>
        {/* Service Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faSmile} className="text-4xl text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">User-friendly Experience</h3>
            <p className="text-gray-700 text-center">Enjoy a seamless and intuitive user experience.</p>
        </div>
    </div>
</div>
  )
}

export default Service