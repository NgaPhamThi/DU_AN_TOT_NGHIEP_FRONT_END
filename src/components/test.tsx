import React from 'react'

type Props = {}

const test = (props: Props) => {
    return (
        <section className="flex items-center py-16 bg-gray-100 lg:h-screen font-poppins dark:bg-gray-800 ">
            <div
                className="justify-center flex-1 max-w-6xl px-6 py-6 mx-auto bg-white border rounded-md shadow dark:border-gray-900 dark:bg-gray-900 lg:py-10 md:px-7">
                <div className="mb-8 text-center">
                    <h1
                        className="mb-4 text-3xl font-semibold leading-7 tracking-wide text-blue-800 dark:text-gray-300 lg:leading-9">
                        Thank you for your Purchase!</h1>
                    <p className="text-gray-500 dark:text-gray-400">your order number is: 012736373737</p>
                </div>



                
                <div
                    className="flex flex-col items-start justify-start w-full mt-4 mb-4 border-b border-gray-200 dark:border-gray-700 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                    <div className="w-full pb-4 md:pb-6 md:w-40">
                        <img className="hidden w-full h-[150px] object-cover md:block"
                            src="https://i.postimg.cc/wBrssYjn/pexels-timothy-paule-ii-2002717.jpg " alt="dress"/>
                            <img className="object-cover w-full  h-[450px] md:hidden"
                                src="https://i.postimg.cc/wBrssYjn/pexels-timothy-paule-ii-2002717.jpg " alt="dress"/>
                            </div>
                            <div className="flex flex-col items-start justify-between w-full pb-6 space-y-2 md:flex-row md:space-y-0">
                                <div className="flex flex-col items-start justify-start w-full space-y-4">
                                    <h2 className="text-xl font-semibold leading-6 text-gray-800 dark:text-gray-400 xl:text-2xl">
                                        Long Coat for women</h2>
                                    <div className="flex flex-col items-start justify-start space-y-3">
                                        <p className="text-sm leading-none text-gray-800 dark:text-gray-400"><span
                                            className="text-gray-400 dark:text-gray-400">Style: </span> French Minimal
                                            Design</p>
                                        <p className="text-sm leading-none text-gray-800 dark:text-gray-400">
                                            <span className="text-gray-400 dark:text-gray-400">Size: </span> medium
                                        </p>
                                        <p className="text-sm leading-none text-gray-800 dark:text-gray-400"><span
                                            className="text-gray-400 dark:text-gray-400">Color: </span> Light yellow</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between w-full space-x-8">
                                    <p className="text-base leading-6 dark:text-gray-400 xl:text-lg">$36.00 <span
                                        className="text-blue-300 line-through"> $45.00</span></p>
                                    <p className="text-base leading-6 text-gray-800 dark:text-gray-400 xl:text-lg">01</p>
                                    <p className="text-base font-semibold leading-6 text-gray-800 dark:text-gray-400 xl:text-lg">
                                        $36.00</p>
                                </div>
                            </div>
                    </div>




                    <a href="#" className="inline-flex items-center text-sm font-medium dark:text-gray-400 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-4 h-4 mr-2 text-blue-500 dark:hover:text-gray-300 dark:text-gray-400 hover:text-blue-600 bi bi-envelope"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        we have sent confirmation email to abc@gmail.com with the order details.
                    </a>
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6 ">
                        <button
                            className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-300">
                            Go back shopping
                        </button>
                        <button
                            className="w-full px-4 py-2 bg-blue-500 rounded-md text-gray-50 md:w-auto hover:bg-blue-600 dark:hover:bg-gray-700 dark:bg-gray-600">
                            Track Order
                        </button>
                    </div>
                </div>
        </section>
    )
}

export default test