import React from 'react';
import about from '../../assets/about_image.jpg';

function About() {
    return (
        <div className="bg-gray-100">
          
            {/* Main content */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 px-4">
                {/* Image */}
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <img src={about} alt="About Us" className="rounded-lg shadow-lg h-96" />
                </div>
                {/* Content */}
                <div className="md:w-2/3 md:pl-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
                    <p className="text-lg font-medium text-gray-800 mb-6">Welcome to Your Website Name, your go-to destination for discovering movies. Our website aims to provide you with an easy-to-use platform to search for movies by their title and year.</p>
                    <p className="text-lg font-medium text-gray-800 mb-6">With our intuitive search feature, you can quickly find information about any movie you're interested in. Whether you're looking for classic films or the latest releases, we've got you covered.</p>
                    <p className="text-lg font-medium text-gray-800 mb-6">Our dedicated team works tirelessly to ensure that our database is up-to-date and comprehensive, so you can always rely on us to deliver accurate information about your favorite movies.</p>
                    <p className="text-lg font-medium text-gray-800 mb-6">We are committed to providing you with the best user experience possible. If you have any suggestions or feedback, please don't hesitate to contact us.</p>
                    <p className="text-lg font-medium text-gray-800 mb-6">Thank you for choosing Your Website Name. We hope you enjoy using our platform to explore the exciting world of cinema!</p>
                    <p className="text-lg font-medium text-gray-800 mb-12">For the latest updates and news about movies, be sure to follow us on social media!</p>
                </div>
            </div>
         
        </div>
    );
}

export default About;
