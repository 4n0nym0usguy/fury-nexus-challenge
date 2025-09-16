import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import nexusLogo from "@/assets/nexus-logo.png"

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-nexus-darker">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={nexusLogo} 
                alt="NEXUS Logo" 
                className="w-10 h-10 nexus-logo"
              />
              <div>
                <h3 className="text-xl font-bold text-gradient">NEXUS</h3>
                <p className="text-sm text-muted-foreground">Secure Access Portal</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Enterprise-grade authentication and access management platform 
              trusted by thousands of organizations worldwide.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="glass-card p-3 hover:shadow-purple transition-all group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="glass-card p-3 hover:shadow-purple transition-all group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="glass-card p-3 hover:shadow-purple transition-all group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="glass-card p-3 hover:shadow-purple transition-all group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Docs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 NEXUS. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer