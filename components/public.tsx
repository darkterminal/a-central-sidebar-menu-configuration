import { Sidebar } from "@/components/sidebar"
import { sideMenu } from "@/config/sideMenu"

interface PrivateProps {
  children: React.ReactNode
}

export default function PulicLayout({ children }: PrivateProps) {
  return (
    <div className="grid lg:grid-cols-5">
      <Sidebar menus={sideMenu} className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l p-4">
        {children}
      </div>
    </div>
  )
}
