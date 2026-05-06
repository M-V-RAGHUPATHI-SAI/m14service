import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <footer 
      className="bg-surface-lowest pt-20 pb-8 border-t border-surface-dim transition-all duration-1000"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img alt="M14 Service Logo" className="h-10 w-auto object-contain" src="/logom14.jpg"/>
              <span className="font-bold text-2xl tracking-tight text-brand">M14 Service</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              At M14 Service provide professional cleaning services for homes and offices. Our team is dedicated to making every space spotless, healthy, and welcoming.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-brand transition-colors" target='_blank' rel='noopener noreferrer' href="#"><i className="fa-brands fa-facebook-f text-sm" /></a>
              <a className="w-10 h-10 rounded-full bg-surface text-slate-500 flex items-center justify-center hover:bg-brand hover:text-white transition-colors" target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/m14service/"><i className="fa-brands fa-instagram text-sm" /></a>
              <a className="w-10 h-10 rounded-full bg-surface text-slate-500 flex items-center justify-center hover:bg-brand hover:text-white transition-colors" target='_blank' rel='noopener noreferrer' href="#"><i className="fa-brands fa-youtube text-sm" /></a>
              <a className="w-10 h-10 rounded-full bg-surface text-slate-500 flex items-center justify-center hover:bg-brand hover:text-white transition-colors" target='_blank' rel='noopener noreferrer' href="#"><i className="fa-brands fa-twitter text-sm" /></a>
            </div>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-lg text-brand mb-6">Working Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-surface-dim pb-2">
                <span className="font-bold text-slate-700">Mon-Wed</span>
                <span className="text-slate-500">8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-surface-dim pb-2">
                <span className="font-bold text-slate-700">Thu-Sat</span>
                <span className="text-slate-500">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="font-bold text-slate-700">Sunday</span>
                <span className="text-slate-500">Full Day Closed</span>
              </li>
            </ul>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg text-brand mb-6">Top Links</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a className="hover:text-accent transition-colors" href="#">Home</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-accent transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-accent transition-colors" href="#portfolio">Projects</a></li>
              <li><a className="hover:text-accent transition-colors" href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg text-brand mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span>+44 7723 819014</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span>Manchester, UK</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span>m14service.uk@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Globe className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span>info@m14service.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Massive Brand Name */}
        <div className="border-t border-surface-dim pt-8 text-center overflow-hidden">
          <h2 className="text-[15vw] font-black text-brand leading-none tracking-tighter opacity-90 select-none">M14 Service</h2>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© Copyright 2023 M14 Service. All Right Reserved</p>
          <div className="flex gap-4">
            <a className="hover:text-brand transition-colors" href="#">Terms Of Condition</a>
            <span>|</span>
            <a className="hover:text-brand transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
