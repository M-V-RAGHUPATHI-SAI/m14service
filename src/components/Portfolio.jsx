import React from 'react';

const projects = [
  {
    category: 'Residential',
    title: 'Modern Kitchen Deep Clean',
    location: 'Manchester, UK',
    img: './project1.jpg',
  },
  {
    category: 'Commercial',
    title: 'Kitchen Maintenance',
    location: 'Salford Quays',
    img: './project2.jpg',
  },
  {
    category: 'Residential',
    title: 'Luxury Apartment Prep',
    location: 'Spinningfields',
    img: './project3.jpg',
  },
  {
    category: 'Industrial',
    title: 'Warehouse Floor Scrub',
    location: 'Trafford Park',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-semibold mb-4 tracking-wider uppercase text-sm">
            <div className="h-px w-8 bg-accent"></div>
            Our Recent Work
            <div className="h-px w-8 bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
            Delivering Excellence <br className="hidden md:block" /> In Every Project
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-navy aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full text-accent-soft text-xs font-bold mb-4 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <i className="fa-solid fa-location-dot text-accent" />
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-navy text-white font-bold rounded-full hover:bg-accent transition-all duration-300 shadow-xl shadow-navy/20 flex items-center gap-3 mx-auto">
            View All Projects
            <i className="fa-solid fa-arrow-right-long" />
          </button>
        </div>
      </div>
    </section>
  );
}
