import { NavLink, Outlet } from "react-router";

import { Settings, Cog, Layers, Book } from "lucide-react"

function MyLayout (){
const menuItems = [
    { name: "Setting Guide", path: "/dashboard/setguide", icon: <Book size={18} /> },
    { name: "Shit", path: "/dashboard/shit", icon: <Layers size={18} /> },
    { name: "Setup", path: "/dashboard/setup", icon: <Settings size={18} /> },
    { name: "Rule", path: "/dashboard/rule", icon: <Cog size={18} /> },
  ];

    return (
        <>
                       
        <div>
           

            {/* //Upper Navbar */}

            <div className="bg-blue-600 flex justify-around items-center">
                <div>
                    <span className="text-3xl font-bold">ZK<span className="text-white">T</span></span>
                    <span className="text-xl font-bold text-white">ECO</span>
                </div>

                <div className="flex gap-8">
                    <span>
                        Persionnal 
                    </span>
                        <span>Device</span>
                        <span>Attendence</span>
                        <span>Access Controll</span>
                        <span>Payroll</span>
                        <span>Metting</span>
                        <span>MTD</span>
                        <span>System</span>
                </div>
            </div>

            {/* // Lower sidebar */}
            <div className="flex">
                {/* //sidebar */}
                <div className="bg-slate-600 w-[20%] h-[800px] pl-[10px] pt-4 flex flex-col gap-4">

                    <ul className="space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg transition ${
                                isActive ? "bg-white text-black font-semibold" : "text-white hover:bg-gray-700"
                            }`
                            }
                        >
                             <span className="flex  items-center gap-2">
                                {item.icon}
                                {item.name}
                            </span>
                        </NavLink>
                        </li>
                    ))}
                    </ul>

                </div>
               {/* // content */}

               <div className="w-[80%]">
                 <Outlet/>
               </div>

            </div>
                        
        </div>
        </>
    )

}


export default MyLayout;