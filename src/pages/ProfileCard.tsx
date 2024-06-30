import React from 'react';

const ProfileCard = () => {
    return (
        <div className="flex flex-col items-center pb-44">
            <div className="flex flex-col opacity-70 hover:opacity-100 justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-200 text-black">
                <img src="/img/Profile.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-black dark:divide-gray-600">
                    <div className="my-2 space-y-1">
                        <h2 className="text-3xl font-semibold sm:text-2xl">Guilherme Faria</h2>
                        <p className="px-5 text-2xl sm:text-base text-black">Software Developer</p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a
                            rel="noopener noreferrer"
                            href="https://github.com/Guilhermefariah"
                            aria-label="GitHub"
                            className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                        >
                            <svg
                                viewBox="0 0 496 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 fill-current"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/-guilherme-faria/"
                            aria-label="LinkedIn"
                            className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                        >
                            <svg
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 fill-current"
                            >
                                <path d="M100.28 448H7.4V148.9h92.78zm-46.14-341c-31.79 0-52.7 20.91-52.7 48.67 0 27.23 20.16 48.62 51.21 48.62h.61c32.12 0 52.7-21.39 52.7-48.62-.61-27.76-20.59-48.67-51.61-48.67zM447.9 448h-92.77v-186c0-44.4-15.94-74.73-55.76-74.73-30.42 0-48.51 20.39-56.49 40.11-2.93 7.16-3.68 17.12-3.68 27.14v193.48H146.58s1.24-313.98 0-346.99h92.76v49.13c12.33-19.06 34.41-46.28 83.67-46.28 61.01 0 106.7 39.82 106.7 125.25z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
