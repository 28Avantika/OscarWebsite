import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { motion } from "framer-motion";

interface FormData {
    name: string;
    phone: string;
    message: string;
};

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: "",
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Save to Firestore
            await addDoc(collection(db, "onlineQueries"), formData);

            // Send to Telegram
            const response = await fetch(`${API_URL}/api/send-telegram`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message to Telegram');
            }

            // Reset form after successful submission
            setFormData({ name: '', phone: '', message: '' });

            // Optionally show success message
            alert('Message sent successfully!');

        } catch (error) {
            console.error("Error:", error);
            alert('Failed to send message. Please try again.');
        }
    };


    return (
        <section id="contact-section" className="bg-black min-h-screen px-4 py-10 flex flex-col items-center justify-center text-white">
            {/* Main Title */}
            <h2 className=" fontStyle text-4xl  font-bold text-yellow-300 mb-10 text-center uppercase tracking-wide pb-4">
                Contact Us
            </h2>

            {/* Main Layout */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Contact Info */}
                <div className="space-y-6">
                    <div className="lg:mt-30">
                        <p className="fontStyle text-xl text-yellow-300 text-justify md:text-3xl text-center flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-center">
                            Connect to OSCAR Community !
                        </p>

                    </div>

                    <div className="space-y-5">
                        {/* Location */}
                        <div className="flex sm:justify-center items-center gap-4">
                            <a href="https://www.google.com/maps/place/The+Oscar+Cafe/@18.5994332,73.7314513,18z/data=!4m6!3m5!1s0x3bc2bb8f8d7758e7:0x50000ce5a44e4e30!8m2!3d18.5997433!4d73.7322077!16s%2Fg%2F11smlt26cj?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/location.png"
                                    alt="Location"
                                    title="click me"
                                    className="w-18 h-18 object-contain mt-1 cursor-pointer"
                                />
                            </a>

                            <address className="italic pt-3 leading-relaxed">
                                <p className="fontStyle">Oscar Food Park, Laxmi Chowk,<br></br>
                                    Near Yash Wines, Opp. to Sairat Biryani,<br></br>
                                    Phase 1, Hinjewadi, Pune - 411057</p>
                            </address>
                        </div>
                        <div className="flex sm:justify-center items-center gap-4">
                            <a href="https://www.instagram.com/oscar_cafexgaming/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/insta.png"
                                    alt="Location"
                                    title="click me"
                                    className="w-20 h-20 object-contain mt-1 cursor-pointer"
                                />
                            </a>
                            <p className="fontStyle text-l pt-3 leading-relaxed">
                                Follow to stay updated with fresh offers <br></br>& deals </p>
                        </div>


                    </div>
                </div>

                {/* Right: Form */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-9 rounded bg-gray-900/60 border-t border-l-2 border-yellow-200 ">
                    <h5 className="fontStyle text-2xl font-bold text-yellow-300 pb-4 mb-6 text-center">
                        Having any queries Shoot Us a Message!
                    </h5>
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-yellow-200 text-sm mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 rounded border-l border-yellow-200 focus:outline-none "
                                />
                            </div>
                            <div>
                                <label className="block text-yellow-200 text-sm mb-1">Your Mobile No</label>
                                <input
                                    type="tel"
                                    id="userPhone"
                                    name="phone"
                                    maxLength={10}
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your number"
                                    className="w-full px-4 py-2 rounded border-l border-yellow-200 focus:outline-none  "
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-amber-200 text-sm mb-1">Your Message</label>
                            <textarea
                                rows={4}
                                id="userMessage"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Type your message here..."
                                className="w-full px-4 py-2 rounded border-l border-yellow-200 focus:outline-none "
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="border-r border-b-2 border-yellow-200 px-6 py-2 rounded hover:font-bold transition-all"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
