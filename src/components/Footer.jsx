import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 border-t-4 border-blue-600">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/logo/logo.png"
                            alt="Mission Power Land Limited"
                            className="h-16 w-auto brightness-110"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-white font-bold text-xl leading-tight uppercase tracking-wide">
                                Mission Power <br /> Land Limited
                            </h2>
                            <span className="text-[10px] text-blue-500 font-bold tracking-[0.2em] uppercase">
                                Engineered Excellence
                            </span>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed opacity-80 max-w-xs">
                        Registered Class-A Govt. Contractor. Building the backbone of Bangladesh's infrastructure through power grids and land development.
                    </p>

                    {/* Social Media - Full Names for Clarity */}
                    <div className="space-y-2 pt-2">
                        <h6 className="text-xs font-bold uppercase tracking-widest text-white opacity-50">Connect With Us</h6>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-sm hover:text-blue-500 transition-colors flex items-center gap-2">
                                <span className="w-5 text-blue-600 font-bold">f</span> Facebook
                            </a>
                            <a href="#" className="text-sm hover:text-blue-700 transition-colors flex items-center gap-2">
                                <span className="w-5 text-blue-700 font-bold">in</span> LinkedIn
                            </a>
                            <a href="#" className="text-sm hover:text-sky-400 transition-colors flex items-center gap-2">
                                <span className="w-5 text-sky-400 font-bold">𝕏</span> Twitter / X
                            </a>
                        </div>
                    </div>
                </div>

                {/* Core Divisions */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block uppercase tracking-wider">
                        Core Divisions
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600"></span>
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Power Infrastructure</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Civil Engineering</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Land Development</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Logistics & Safety</a></li>
                    </ul>
                </div>

                {/* Corporate */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block uppercase tracking-wider">
                        Corporate
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600"></span>
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Our History</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Safety Standards</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Featured Tenders</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Career Opportunity</a></li>
                    </ul>
                </div>

                {/* Headquarters */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block uppercase tracking-wider">
                        Head Office
                        <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600"></span>
                    </h3>
                    <div className="space-y-4 text-sm">
                        <div className="flex gap-3 items-start">
                            <span className="text-blue-500 text-lg">📍</span>
                            <p className="leading-relaxed">
                                House: 01, Road: 16, Sector: 07, <br />
                                Uttara, Dhaka-1230, Bangladesh
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="text-blue-500">✉️</span>
                            <p>missionpowerland@gmail.com</p>
                        </div>

                        {/* Google Map Link Button */}
                        <a
                            href="https://www.google.com/maps/@23.8690351,90.3952735,3a,89.9y,280.18h,76.66t/data=!3m7!1e1!3m5!1s2864TbyepjmFZ7I30PYJ4w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.340000000000003%26panoid%3D2864TbyepjmFZ7I30PYJ4w%26yaw%3D280.18!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-2.5 mt-2 bg-blue-600 text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg w-full md:w-auto"
                        >
                            Open Google Maps
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Strip */}
            <div className="mt-16 border-t border-gray-800/50 pt-8 text-center">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest opacity-60">
                    <p>© {new Date().getFullYear()} Eye Catcher Brand & WEB Co. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;