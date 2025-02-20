import {BookHeart, Church, Bell } from 'lucide-react'
import React from 'react'



const About = () => {
    return (

        <section id="about" className='relative min-h-screen px-4 py-32 pt-20 bg-gray-50 sm:px-6 lg:px-8'>
            <div className='container px-4 mx-auto'>
                {/* hero Section */}
                <div className='flex flex-col items-center justify-center py-20 text-center'>
                    <div className='animated-container'>
                        <h1 className='mb-6 text-5xl font-bold text-blue-800 animate-fade-in'>
                        Faithful Hearts, Open Arms                        </h1>
                        <p className='mb-8 text-xl text-gray-600 animate-fade-in delay-1'>
                        Embracing Community with Love and Faith                        </p>
                    </div>
                    {/* 24/7 Section */}
                    <div className='inline-block mb-8'>
                        {/* <div className='flex items-center justify-center px-4 py-2 space-x-2 rounded-full shadow-lg md:px-6 md:py-3 backdrop-blur-xl'>
                            <span className='relative flex w-2 h-2 md:h-3 md:w-3'>
                                <span className='absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping'></span>
                                <span className='relative inline-flex w-2 h-2 bg-blue-500 rounded-full md:h-3 md:w-3'></span>
                            </span>
                            <span className='text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-grotesk md:text-base'>
                                24/7 Support Available
                            </span>F
                        </div> */}
                    </div>
                    <a href='#appointment'
                        className='px-8 py-3 mt-4 text-lg text-white transition bg-blue-600 rounded-full hover:bg-blue-700/20'>
                        Book Appointemnt
                    </a>
                </div>

                {/* Services section */}
                <section className='grid gap-6 md:grid-cols-3'>
                    <div className='p-6 text-center bg-white rounded-lg shadow-md'>
                    <BookHeart className='mx-auto mb-4 text-blue-600' size={48} />
                        <h3 className='mb-3 text-xl font-semibold text-gray-800'>- Premarital Counseling</h3>
                        <p className='text-gray-600'>Build a Strong Foundation</p>
                    </div>
                    <div className='p-6 text-center bg-white rounded-lg shadow-md'>
                        <Church className='mx-auto mb-4 text-blue-600' size={48} />
                        <h3 className='mb-3 text-xl font-semibold text-gray-800'>Marriage Counseling</h3>
                        <p className='text-gray-600'>Nurture Your Relationship</p>
                    </div>
                    <div className='p-6 text-center bg-white rounded-lg shadow-md'>
                    <Bell className='mx-auto mb-4 text-blue-600' size={48} />
                        <h3 className='mb-3 text-xl font-semibold text-gray-800'>Emergency Support</h3>
                        <p className='text-gray-600'>Compassionate Help in Crisis Times</p>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className='p-10 bg-white rounded-lg shadow-lg'>
                    <h2 className='mb-10 text-3xl font-bold text-center text-gray-800'>Testimonials</h2>
                    <div className='grid gap-8 md:grid-cols-2'>
                        {/* Testimonial Card 1 */}
                        <div className='p-6 transition-shadow duration-300 transform bg-gray-100 shadow-md rounded-xl hover:shadow-lg hover:scale-105'>
                            <p className='mb-4 text-lg italic text-gray-600'>"Exceptional care and compassionate Pastors. I felt truly heard and supported."</p>
                            <p className='font-semibold text-gray-800'>- David</p>
                        </div>
                        {/* Testimonial Card 2 */}
                        <div className='p-6 transition-shadow duration-300 transform bg-gray-100 shadow-md rounded-xl hover:shadow-lg hover:scale-105'>
                            <p className='mb-4 text-lg italic text-gray-600'>"Professional, efficient, and very friendly. Highly recommended!"</p>
                            <p className='font-semibold text-gray-800'>- John</p>
                        </div>

                    </div>
                </section>

            </div>
        </section>
    )
}

export default About