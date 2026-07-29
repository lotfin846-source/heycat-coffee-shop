import { Activity, AlertTriangle, Building2, ChefHat, DollarSign, Users, UtensilsCrossed } from 'lucide-react'

const stats = [
  { label: 'Total branches', value: '24', change: '+8%', icon: Building2 },
  { label: 'Today revenue', value: '$84.2K', change: '+12%', icon: DollarSign },
  { label: 'Monthly revenue', value: '$2.1M', change: '+18%', icon: Activity },
  { label: 'Profit', value: '$412K', change: '+9%', icon: UtensilsCrossed },
]

const alerts = [
  'Inventory alert: basil stock below 2 days',
  'AI insight: 3 branches need staffing support',
  'Pending approvals: 7 schedules',
]

const branches = [
  { name: 'Downtown', status: 'Healthy', revenue: '$18.4K' },
  { name: 'Midtown', status: 'Watch', revenue: '$14.1K' },
  { name: 'Harbor', status: 'Healthy', revenue: '$21.9K' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.25),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] p-6 lg:p-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Restaurant EMP</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">AI-powered operating system for restaurant chains</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                Manage branches, staff, inventory, finance, delivery, and customer experience from one intelligent command center.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              <div className="flex items-center gap-2 font-medium">
                <Users className="h-4 w-4" /> 184 employees online
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                  <div className="rounded-2xl bg-brand-600/20 p-3 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-emerald-400">{stat.change} vs yesterday</p>
              </div>
            )
          })}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">AI command center</p>
                <h2 className="text-xl font-semibold text-white">Branch performance overview</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-600/10 px-3 py-1 text-sm text-brand-200">
                <ChefHat className="h-4 w-4" /> Intelligent insights live
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {branches.map((branch) => (
                <div key={branch.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
                  <div>
                    <p className="font-medium text-white">{branch.name}</p>
                    <p className="text-sm text-slate-400">{branch.status} branch health</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{branch.revenue}</p>
                    <p className="text-sm text-slate-400">Revenue today</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <h2 className="text-xl font-semibold text-white">Live alerts</h2>
            </div>
            <div className="mt-6 space-y-3">
              {alerts.map((alert) => (
                <div key={alert} className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-sm text-slate-300">
                  {alert}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
