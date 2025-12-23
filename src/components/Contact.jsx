import React, { useRef, useState } from "react";
import astro from '../assets/logos/astro.webp'
import Ellipse from '../assets/logos/Ellipse 6.webp'
import BEllipse from '../assets/logos/Ellipse 4.webp'
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";




const Contact = () => {
    const form = useRef(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_rsp3z5f",     // Replace with your EmailJS Service ID
                "template_4kxijoe",    // Replace with your EmailJS Template ID
                form.current,
                "Z_olTIdTmR11KJYOA"      // Replace with your Public Key
            )
            .then(
                () => {
                    // alert("✅ Message sent successfully!");
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error(error.text);
                    // alert("❌ Failed to send message. Try again.");
                    setLoading(false);
                }
            );
    };
    return (
        <section id="contact" className='w-full py-16 px-8 relative'>
            <div className='mx-auto max-w-7xl'>
                <h2 className="my-4 text-4xl font-bold text-white md:my-8 md:text-7xl ">
                    Contact <span className='text-[#D96704]'>Me</span>
                </h2>
                {/* <img
                    src={Ellipse}
                    alt=""
                    className="absolute left-0 bottom-0 z-0 pointer-events-none"
                    loading="lazy"
                />
                <img
                    src={BEllipse}
                    alt=""
                    className="absolute right-0 bottom-0 z-0 pointer-events-none"
                    loading="lazy"
                /> */}

                <div className="contact ">
                    <Card className="bg-[#545454]/30 text-white max-w-xl md:max-w-3xl mx-auto p-6 md:p-10 rounded-2xl shadow-lg border-none">
                        <CardContent className="p-0 space-y-6">
                            <h2 className="text-center text-3xl font-semibold">Get In Touch</h2>

                            {/* Form Fields */}
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                {/* Name & Email */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1 space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="from_name"
                                            placeholder="Write Your Name"
                                            required
                                            className="bg-[#2c2c2c] text-white placeholder:text-white/50 rounded-full border-none"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="from_email"
                                            placeholder="Write Your Email"
                                            required
                                            type="email"
                                            className="bg-[#2c2c2c] text-white placeholder:text-white/50 rounded-full border-none"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-1">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Leave a Message"
                                        required
                                        className="bg-[#2c2c2c] text-white placeholder:text-white/50 resize-none h-32 md:h-40 rounded-xl border-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <Button
                                        type="submit"
                                        className="bg-white text-black rounded-full px-6 py-2 hover:bg-white/90"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    )
}

export default Contact