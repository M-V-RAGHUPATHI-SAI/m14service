const team = [
  {
    name: 'person 1',
    role: 'Head of Operations',
    img: '',
  },
  {
    name: 'person 2',
    role: 'Senior Cleaning Specialist',
    img: '',
  },
  {
    name: 'person 3',
    role: 'Client Relations Manager',
    img: '',
  },
]

const socials = [
  { icon: 'fa-brands fa-x-twitter', href: '#' },
  { icon: 'fa-brands fa-linkedin-in', href: '#' },
  { icon: 'fa-brands fa-facebook-f', href: '#' },
  { icon: 'fa-brands fa-instagram', href: '#' },
]

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-navy font-semibold mb-4">
              <i className="fa-solid fa-users" /> Our Team
            </div>
            <h2 className="text-4xl font-bold text-navy leading-tight">
              Our Team Passionate<br />About Cleanliness
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-surface-dim flex items-center justify-center text-muted hover:bg-navy hover:text-white hover:border-navy transition-colors">
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors">
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-surface rounded-2xl overflow-hidden group">
              <div className="relative h-80">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover"
                  src={member.img}
                />
                {/* Social overlay */}
                <div className="absolute top-4 right-4 bg-white rounded-full py-2 px-1 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {socials.map((s) => (
                    <a
                      key={s.icon}
                      href={s.href}
                      className="w-8 h-8 flex items-center justify-center text-muted hover:text-navy transition-colors"
                    >
                      <i className={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-navy mb-1">{member.name}</h4>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
