// import React, { useState } from "react";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Outlet } from "react-router-dom";

// export default function DashboardLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="flex min-h-screen bg-gray-950">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col min-h-screen">
//         {/* Header */}
//         <Header toggleSidebar={toggleSidebar} />

//         {/* Content */}
//         <main className="flex-1 overflow-auto p-4 md:p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar - assuming it uses bg-gray-900 or similar → we override */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        closeSidebar={closeSidebar} 
        // You can also pass className="bg-orange-950" if Sidebar accepts it
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header - usually has its own bg, we can override later if needed */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main content - orange + white feeling */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gradient-to-b from-gray-950 via-gray-900 to-orange-950/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
}