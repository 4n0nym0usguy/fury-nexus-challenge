import { Shield, Users, Gauge, Globe, Key, Layers } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Factor Authentication",
      description: "Advanced MFA with biometric support, hardware tokens, and risk-based authentication.",
      highlight: "99.9% Security"
    },
    {
      icon: Users,
      title: "Identity Management",
      description: "Centralized user provisioning, role-based access control, and automated lifecycle management.",
      highlight: "SSO Ready"
    },
    {
      icon: Gauge,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with AI-powered threat detection and instant alerts.",
      highlight: "24/7 Protection"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Edge-deployed authentication servers worldwide for minimal latency and maximum uptime.",
      highlight: "Global Scale"
    },
    {
      icon: Key,
      title: "API Security",
      description: "Secure your APIs with OAuth 2.0, JWT tokens, and rate limiting out of the box.",
      highlight: "Developer First"
    },
    {
      icon: Layers,
      title: "Enterprise Integration",
      description: "Seamless integration with Active Directory, LDAP, SAML, and popular business tools.",
      highlight: "Easy Setup"
    }
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-nexus-navy/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Platform Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Enterprise Security</span>
            <br />
            <span className="text-foreground">Built for Scale</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security features designed for modern enterprises, 
            from startups to Fortune 500 companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 group hover:shadow-purple transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features