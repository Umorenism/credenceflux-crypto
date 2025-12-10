// import React from "react";
// import { Link } from "react-router-dom";
// import { FiHome, FiSettings, FiCreditCard } from "react-icons/fi";

// export default function Sidebar({ isOpen, closeSidebar }) {
//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 md:hidden z-20"
//           onClick={closeSidebar}
//         />
//       )}

//       <aside
//         className={`fixed md:static min-h-screen top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform duration-300
//         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-6">Menu</h2>

//           <nav className="flex flex-col gap-4 text-lg">
//             <Link to="/" className="flex items-center gap-2">
//               <FiHome /> Dashboard
//             </Link>

//             <Link to="/wallet" className="flex items-center gap-2">
//               <FiCreditCard /> Fund your account
//             </Link>

//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings /> Withdraw Funds
//             </Link>
//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings /> Trading Records
//             </Link>
//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings /> Transaction History
//             </Link>
//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings />Trade Now
//             </Link>
//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings />Join Trade
//             </Link>
//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings />Your Recent Trade
//             </Link>
//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings />Refer Users
//             </Link>
//             <Link to="/settings" className="flex items-center gap-2">
//               <FiSettings />Help/supports
//             </Link>
//           </nav>
//         </div>
//       </aside>
//     </>
//   );
// }




// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FiHome,
//   FiSettings,
//   FiCreditCard,
//   FiArrowDownCircle,
//   FiTrendingUp,
//   FiClock,
//   FiPlayCircle,
//   FiUsers,
//   FiActivity,
//   FiShare2,
//   FiHelpCircle,
// } from "react-icons/fi";

// export default function Sidebar({ isOpen, closeSidebar }) {
//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 md:hidden z-20"
//           onClick={closeSidebar}
//         />
//       )}

//       <aside
//   className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-950 text-white min-h-screen shadow-lg z-30 transform transition-transform duration-300
//   ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// >
//         <div className="p-6">
//           <h2 className="text-xl t-bold mb-6">Menu</h2>

//           <nav className="flex flex-col gap-4 text-lg">

//             <Link  to="/" className="flex items-center gap-2">
//               <FiHome /> Dashboard
//             </Link>

//             <Link to="/wallet" className="flex items-center gap-2">
//               <FiCreditCard /> Fund your account
//             </Link>

//             <Link to="/withdraw" className="flex items-center gap-2">
//               <FiArrowDownCircle /> Withdraw Funds
//             </Link>

//             <Link to="/trading-records" className="flex items-center gap-2">
//               <FiTrendingUp /> Trading Records
//             </Link>

//             <Link to="/transactions" className="flex items-center gap-2">
//               <FiClock /> Transaction History
//             </Link>

//             <Link to="/trade" className="flex items-center gap-2">
//               <FiPlayCircle /> Trade Now
//             </Link>

//             <Link to="/join-trade" className="flex items-center gap-2">
//               <FiUsers /> Join Trade
//             </Link>

//             <Link to="/recent-trades" className="flex items-center gap-2">
//               <FiActivity /> Your Recent Trade
//             </Link>

//             <Link to="/refer" className="flex items-center gap-2">
//               <FiShare2 /> Refer Users
//             </Link>

//             <Link to="/support" className="flex items-center gap-2">
//               <FiHelpCircle /> Help / Support
//             </Link>

//           </nav>
//         </div>
//       </aside>
//     </>
//   );
// }


// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiSettings,
  FiCreditCard,
  FiArrowDownCircle,
  FiTrendingUp,
  FiClock,
  FiPlayCircle,
  FiUsers,
  FiActivity,
  FiShare2,
  FiHelpCircle,
} from "react-icons/fi";

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      {/* Mobile Overlay - closes sidebar when clicked */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-950 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:z-auto md:shadow-none md:overflow-y-auto`}
      >
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-cyan-400 tracking-wider">CREDENCEFLUX</h2>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {[
            { to: "/", icon: FiHome, label: "Dashboard" },
            { to: "/wallet", icon: FiCreditCard, label: "Fund Account" },
            { to: "/withdraw", icon: FiArrowDownCircle, label: "Withdraw Funds" },
            { to: "/trading-records", icon: FiTrendingUp, label: "Trading Records" },
            { to: "/transactions", icon: FiClock, label: "Transaction History" },
            { to: "/trade", icon: FiPlayCircle, label: "Trade Now" },
            { to: "/join-trade", icon: FiUsers, label: "Join Trade" },
            { to: "/recent-trades", icon: FiActivity, label: "Recent Trades" },
            { to: "/refer", icon: FiShare2, label: "Referrals" },
            { to: "/support", icon: FiHelpCircle, label: "Help & Support" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeSidebar} // Closes sidebar on mobile when any link is clicked
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-cyan-900/50 hover:text-cyan-400 transition-all duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Optional Footer */}
        <div className="mt-auto p-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            © 2025 Starbiit • Neural Trading Platform
          </p>
        </div>
      </aside>
    </>
  );
}