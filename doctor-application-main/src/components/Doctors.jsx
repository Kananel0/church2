import { User } from 'lucide-react'
import React from 'react'

const Doctors = () => {
    const doctorsList = [
        {
            name: "Pastor. s Badru",
            specialization: "xxxxxxxx",
            experience: "15 years",
            availability: "Mon-wed, 9am-5pm"
        },
        {
            name: " Pastor. R Anwana",
            specialization: "xxxxxxxx",
            experience: "12 years",
            availability: "Thur-sat, 10am-6pm"
        },
        {
            name: "Pastor. E Anwana",
            specialization: "xxxxxxx",
            experience: "10 years",
            availability: "Tue-Fri, 8am-4pm"
        }
    ]
    return (
        <section id="doctor" className='relative min-h-screen px-4 py-32 pt-20 bg-gray-50 sm:px-6 lg:px-8'>
            <div className='container px-4 mx-auto'>
                <h1 className='mb-12 text-4xl font-bold text-center text-gray-800'>Our Pastors</h1>
                <div className='grid gap-8 md:grid-cols-3'>
                    {doctorsList.map((Pastor, index) => (
                        <div key={index} className='p-6 text-center bg-white rounded-lg shadow-md'>
                            <User className='mx-auto mb-4 text-blue-600' size={64} />
                            <h3 className='text-xl font-semibold'>{Pastor.name}</h3>
                            <p className='mb-2 text-gray-600'>{Pastor.specialization}</p>
                            <p className='mb-4 text-sm text-gray-500'>Experience: {Pastor.experience}</p>
                            <p className='mb-4 text-sm text-gray-500'>Availability: {Pastor.availability}</p>
                            <a href='#appointment'
                                className='px-6 py-2 text-white transition bg-blue-600 rounded-full hover:bg-blue-700/20'>
                                Book Appointment
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Doctors