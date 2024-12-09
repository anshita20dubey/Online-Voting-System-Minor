import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Home as HomeIcon,
    Vote as VoteIcon,
    Users as PartiesIcon,
    Calendar as ElectionIcon,
    Facebook,
    Twitter,
    Instagram
} from "lucide-react";

// Party logos
const partyLogos = {
    BJP: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
    INC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL1_YbAO2m67yOqVSphd2TtFoayPPiOBO8Q&s",
    AAP: "https://m.media-amazon.com/images/I/51YCqhDhqIS.jpg",
    BSP: "https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/bahujan-samaj-party-png-images-thumbnail-1673714590.jpg",
};

const Home = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <div className="flex h-screen w-full bg-gray-50">
            {/* Sidebar Navigation */}
            <div className="w-24 bg-white shadow-lg flex flex-col items-center py-8 border-r">
                <div className="flex flex-col space-y-6">
                    <button className="text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-colors group">
                        <HomeIcon className="w-6 h-6 text-blue-500 group-hover:text-blue-700" />
                        <span className="text-xs mt-1 block text-blue-500">Home</span>
                    </button>
                    <button
                        onClick={handleRegisterClick}
                        className="text-green-600 hover:bg-green-50 p-3 rounded-lg transition-colors group"
                    >
                        <VoteIcon className="w-6 h-6 text-green-500 group-hover:text-green-700" />
                        <span className="text-xs mt-1 block text-green-500">Register</span>
                    </button>

                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Indian Elections 2024</h1>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleRegisterClick}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                        >
                            <VoteIcon className="w-5 h-5" />
                            <span>Register to Vote</span>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Election Overview */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Election Overview</h2>
                        <p className="text-gray-600 mb-4">
                            The 2024 Indian Elections represent a crucial moment in our democratic process.
                            Citizens across the nation will come together to elect their representatives.
                        </p>
                        <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
                            <ElectionIcon className="w-10 h-10 text-blue-500" />
                            <div>
                                <h3 className="font-semibold text-blue-800">Important Dates</h3>
                                <p className="text-blue-600">Voting Period: April 5, 2024 - April 10, 2024</p>
                                <p className="text-blue-600">Results Declaration: May 15, 2025</p>

                            </div>
                        </div>
                    </div>

                    {/* Registered Parties */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registered Parties</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(partyLogos).map((partyName) => (
                                <div
                                    key={partyName}
                                    className="flex flex-col items-center bg-gray-50 p-4 rounded-lg hover:shadow-sm transition-shadow"
                                >
                                    <img
                                        src={partyLogos[partyName]}
                                        alt={partyName}
                                        className="w-20 h-20 object-contain mb-2"
                                    />
                                    <p className="font-semibold text-gray-700">{partyName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-white border-t py-6 px-8 flex justify-between items-center">
                    <p className="text-gray-600">© 2024 Indian Elections - All Rights Reserved</p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;