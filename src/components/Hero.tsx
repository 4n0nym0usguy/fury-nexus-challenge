import { NexusButton } from "@/components/ui/nexus-button"
import { Shield, Zap, Lock } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Enterprise-Grade Security</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Secure Access</span>
            <br />
            <span className="text-foreground">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            NEXUS provides enterprise-grade authentication and access management 
            with cutting-edge security protocols and seamless user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <NexusButton size="lg" className="text-lg px-12 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </NexusButton>
            <NexusButton variant="glass" size="lg" className="text-lg px-12 py-4">
              <Lock className="w-5 h-5 mr-2" />
              View Demo
            </NexusButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Zero Trust Security</h3>
              <p className="text-muted-foreground text-sm">Advanced security protocols that verify every access request.</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">Sub-second authentication with global edge deployment.</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-muted-foreground text-sm">Scale from startup to enterprise with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero