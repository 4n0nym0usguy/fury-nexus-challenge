import { 
  Shield, 
  Users, 
  Activity, 
  AlertTriangle, 
  TrendingUp, 
  Clock,
  Globe,
  Lock,
  Eye,
  CheckCircle,
  XCircle,
  Settings
} from "lucide-react"
import { NexusButton } from "@/components/ui/nexus-button"
import nexusLogo from "@/assets/nexus-logo.png"

const Dashboard = () => {
  const stats = [
    {
      title: "Active Sessions",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-green-400"
    },
    {
      title: "Security Score",
      value: "98.2%",
      change: "+2.1%",
      trend: "up", 
      icon: Shield,
      color: "text-primary"
    },
    {
      title: "Threats Blocked",
      value: "156",
      change: "-8.3%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-orange-400"
    },
    {
      title: "System Uptime",
      value: "99.9%",
      change: "0%",
      trend: "stable",
      icon: Activity,
      color: "text-green-400"
    }
  ]

  const recentActivity = [
    { action: "User login successful", user: "john.doe@company.com", time: "2 minutes ago", status: "success" },
    { action: "Failed login attempt", user: "suspicious@domain.com", time: "5 minutes ago", status: "warning" },  
    { action: "Password updated", user: "jane.smith@company.com", time: "12 minutes ago", status: "success" },
    { action: "New device registered", user: "mike.wilson@company.com", time: "18 minutes ago", status: "info" },
    { action: "Account locked", user: "temp.user@company.com", time: "25 minutes ago", status: "error" }
  ]

  const accessRequests = [
    { user: "Alice Johnson", resource: "Finance Database", time: "Just now", priority: "high" },
    { user: "Bob Chen", resource: "Marketing Tools", time: "3 min ago", priority: "medium" },
    { user: "Carol Davis", resource: "Admin Panel", time: "8 min ago", priority: "high" },
    { user: "David Kim", resource: "Analytics Suite", time: "15 min ago", priority: "low" }
  ]

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="glass-card border-b border-border/20 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={nexusLogo} 
                  alt="NEXUS Logo" 
                  className="w-8 h-8 nexus-logo"
                />
                <div>
                  <h1 className="text-lg font-bold text-gradient">NEXUS</h1>
                  <p className="text-xs text-muted-foreground">Security Dashboard</p>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-primary font-medium">Dashboard</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Users</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reports</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Settings</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <NexusButton variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </NexusButton>
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Welcome back, John</h2>
              <p className="text-muted-foreground">Here's what's happening with your security infrastructure today.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last login</p>
              <p className="text-foreground font-medium">Today at 9:42 AM</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 hover:shadow-purple transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-400' : 
                  stat.trend === 'down' ? 'text-red-400' : 'text-muted-foreground'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Recent Activity</h3>
              <NexusButton variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </NexusButton>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-xl bg-nexus-navy/30 hover:bg-nexus-navy/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-400' :
                    activity.status === 'warning' ? 'bg-orange-400' :
                    activity.status === 'error' ? 'bg-red-400' : 'bg-blue-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-foreground font-medium text-sm">{activity.action}</p>
                    <p className="text-muted-foreground text-xs">{activity.user}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Access Requests */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Pending Access Requests</h3>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {accessRequests.length} pending
              </span>
            </div>
            
            <div className="space-y-4">
              {accessRequests.map((request, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-nexus-navy/30 hover:bg-nexus-navy/50 transition-colors">
                  <div className="flex-1">
                    <p className="text-foreground font-medium text-sm">{request.user}</p>
                    <p className="text-muted-foreground text-xs">{request.resource}</p>
                    <p className="text-muted-foreground text-xs">{request.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.priority === 'high' ? 'bg-red-400/20 text-red-400' :
                      request.priority === 'medium' ? 'bg-orange-400/20 text-orange-400' :
                      'bg-blue-400/20 text-blue-400'
                    }`}>
                      {request.priority}
                    </span>
                    <NexusButton size="sm" className="h-8 px-3">
                      <CheckCircle className="w-3 h-3" />
                    </NexusButton>
                    <NexusButton variant="ghost" size="sm" className="h-8 px-3">
                      <XCircle className="w-3 h-3" />
                    </NexusButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Overview */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">Security Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Global Protection</h4>
              <p className="text-muted-foreground text-sm">47 countries protected with edge security</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Zero Trust</h4>
              <p className="text-muted-foreground text-sm">All access requests verified and encrypted</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">AI Powered</h4>
              <p className="text-muted-foreground text-sm">Machine learning threat detection active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard