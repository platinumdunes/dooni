import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './PocketBaseClient'; // Import the login function

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [errorMessage, setErrorMessage] = useState(null); // State to track error messages
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // Clear the email and password fields
            setEmail('');
            setPassword('');
    
            // Call the login function
            await login(email, password);
            console.log('Login successful!');
            // Set login state to true after successful login
            setIsLoggedIn(true);
            // Navigate to the home page
            navigate('');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error by displaying an error message
            setErrorMessage('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900" style={{ background: '#ededed' }}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"style={{ background: '#78b2d3' }}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-white-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        style={{ background: '#ededed' }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                        style={{ background: '#ededed' }}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ background: '#5b94be' }}>
                                    Log In
                                </button>
                                {errorMessage && <p className="text-sm font-light text-red-500 dark:text-red-400">{errorMessage}</p>}
                                <p className="text-sm font-light text-gray-500 dark:text-white">
                                    Don’t have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-white">Sign up</Link>
                                </p>    
                            </form>
                            {/* Display text message if login is successful */}
                            {isLoggedIn && (
                                <p className="text-sm font-light text-green-500 dark:text-green-400">You are now logged in!</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>    
        </div>
    );
}

export default Login;
