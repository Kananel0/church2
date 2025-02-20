import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "32d754d2-d0a1-476d-a1f6-00a805156eae");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success",
                text: "Message sent Successfully",
                icon: "success"
            });
        }
    };
    return (
        <section id="contact" className='relative min-h-screen px-4 py-32 pt-20 bg-gray-50 sm:px-6 lg:px-8'>
            <div className='container px-4 mx-auto'>
                <div className='grid gap-8 md:grid-cols-2'>
                    {/* contact form */}
                    <div className='p-8 bg-white rounded-lg shadow-md'>
                        <h2 className='mb-8 text-3xl text-gray-800 font bold'>contact Us</h2>
                        <form onSubmit={onSubmit}>
                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-800'>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 text-black bg-white border rounded-md' />
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-800'>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 text-black bg-white border rounded-md' />
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-800'>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 text-black bg-white border rounded-md' />
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-800'>Message</label>
                                <textarea
                                    name="message"
                                    required
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 text-black bg-white border rounded-md' />
                            </div>
                            <button type='submit'
                                className='w-full py-3 text-white transition bg-blue-600 rounded-full hover:bg-blue-700'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* contact infor */}
                    <div className='p-8 text-gray-800 bg-white rounded-lg shadow-md'>
                        <h2 className='mb-8 text-3xl font-bold'>Clinic Information</h2>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <MapPin className='mr-4 text-blue-600' size={32}/>
                                <p className='text-gray-800'>xxxxxxxxxxxxxxxxxx</p>
                            </div>
                            <div className='flex items-center'>
                                <Phone className='mr-4 text-blue-600' size={32}/>
                                <p className='text-gray-800'>xxxxxxxxx</p>
                            </div>
                            <div className='flex items-center'>
                                <Mail className='mr-4 text-blue-600' size={32}/>
                                <p className='text-gray-800'>xxxxxxxxx.com</p>
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className='flex items-center justify-center h-64 mt-8 overflow-hidden bg-gray-200 rounded-lg'>
                            <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509294!2d144.9631579153178!3d-37.8162189797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633454790331!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{border:0}}
                            allowFullScreen=""
                            loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact