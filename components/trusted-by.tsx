"use client"

export default function TrustedBy() {
  const companies = [
    { name: "Accenture", initials: "AC" },
    { name: "TechCorp", initials: "TC" },
    { name: "DataFlow", initials: "DF" },
    { name: "CloudSync", initials: "CS" },
    { name: "AutoMax", initials: "AM" },
    { name: "InnovateTech", initials: "IT" },
    { name: "FutureWorks", initials: "FW" },
    { name: "DigitalHub", initials: "DH" },
    { name: "SmartSystem", initials: "SS" },
    { name: "VelocityAI", initials: "VA" },
    { name: "NexusCloud", initials: "NC" },
    { name: "ProStream", initials: "PS" },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-lg font-semibold text-muted-foreground mb-8 tracking-wide">
          TRUSTED BY INDUSTRY LEADERS
        </h2>

        {/* Logo Grid with Hover Effects and Animations */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`animate-zoom-in-stagger-${(index % 4) + 1} flex items-center justify-center p-2 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 cursor-pointer transform hover:scale-105`}
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
                  <span className="text-primary-foreground font-bold text-base">{company.initials}</span>
                </div>
                <p className="text-xs font-medium text-foreground text-center line-clamp-2">{company.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-center mt-8 text-muted-foreground text-sm">
          Join thousands of organizations automating their workflows with Autobotwa
        </p>
      </div>
    </section>
  )
}
