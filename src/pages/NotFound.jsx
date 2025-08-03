import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../assets/logos/Avatar.webp'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                Go back home
            </Link>
        </div>
    )
}

export default NotFound