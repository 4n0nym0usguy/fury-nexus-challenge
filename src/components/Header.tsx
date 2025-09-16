import { NexusButton } from "@/components/ui/nexus-button"
import nexusLogo from "@/assets/nexus-logo.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={nexusLogo} 
              alt="NEXUS Logo" 
              className="w-10 h-10 nexus-logo"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">NEXUS</h1>
              <p className="text-xs text-muted-foreground">Secure Access Portal</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">Features</a>
            <a href="#security" className="text-foreground hover:text-primary transition-smooth">Security</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <NexusButton variant="ghost" size="sm">
              <a href="/dashboard">Dashboard</a>
            </NexusButton>
            <NexusButton size="sm">
              Get Started
            </NexusButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header