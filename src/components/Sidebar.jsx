





// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FiHome,
//   FiCreditCard,
//   FiArrowDownCircle,
//   FiTrendingUp,
//   FiClock,
//   FiPlayCircle,
//   FiUsers,
//   FiActivity,
//   FiShare2,
//   FiHelpCircle,
//   FiLogOut,
//   FiUser,
//   FiCornerRightDown,
// } from "react-icons/fi";
// import { useTheme } from "./ui/ThemeContext"; // adjust path if needed
// import { userService } from "../api/userApi";     // adjust path if needed

// export default function Sidebar({ isOpen, closeSidebar }) {
//   const navigate = useNavigate();
//   const { theme } = useTheme(); // 'light' or 'dark'

//   const [user, setUser] = useState({
//     fullName: "john doe",
//     avatar: null,
//   });

//   useEffect(() => {
//     let mounted = true;

//     userService
//       .getProfile()
//       .then((data) => {
//         if (mounted && data) {
//           setUser({
//             fullName: data.fullName || "User",
//             avatar: data.avatar || null,
//           });
//         }
//       })
//       .catch((err) => {
//         console.error("Failed to load profile:", err);
//       });

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (token) {
//         await fetch("/api/auth/logout", {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//       }
//     } catch (error) {
//       console.error("Logout failed:", error);
//     } finally {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       navigate("/signup");
//     }
//   };

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 min-h-screen w-64
//           bg-white text-black
//           dark:bg-gray-950 dark:text-gray-100
//           shadow-2xl z-50
//           transform transition-transform duration-300 ease-in-out overflow-y-auto
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0 md:relative md:z-auto md:shadow-none`}
//       >
//         <div className="p-6 border-b border-orange-900/50 dark:border-gray-800/70">
//           <h2 className="text-2xl font-bold text-orange-400 dark:text-orange-500 tracking-wider">
//             CREDENCEFLUX
//           </h2>
//         </div>

//         {/* Main Navigation */}
//         <nav className="flex flex-col gap-1 p-4">
//           {[
//             { to: "/", icon: FiHome, label: "Dashboard" },
//             { to: "/deposits", icon: FiCreditCard, label: "Deposits" },
//             { to: "/withdraw", icon: FiArrowDownCircle, label: "Withdraw" },
//              { to: "/crypto", icon: FiCornerRightDown, label: "Convert Crypto" },
//             { to: "/trading-records", icon: FiTrendingUp, label: "Trading Records" },
//             { to: "/transactions", icon: FiClock, label: "Transaction History" },
//             { to: "/trade", icon: FiPlayCircle, label: "Trade Now" },
//             { to: "/join-trade", icon: FiUsers, label: "Join Trade" },
//             { to: "/recent-trades", icon: FiActivity, label: "Recent Trades" },
//             { to: "/refer", icon: FiShare2, label: "Referrals" },
//             { to: "/support", icon: FiHelpCircle, label: "Help & Support" },
//           ].map((item) => (
//             <Link
//               key={item.to}
//               to={item.to}
//               onClick={closeSidebar}
//               className="
//                 flex items-center gap-3 px-4 py-3 rounded-xl
//                 text-black hover:bg-orange-900/40 hover:text-orange-400
//                 dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-orange-400
//                 transition-all duration-200
//               "
//             >
//               <item.icon className="w-5 h-5" />
//               <span className="font-medium text-black dark:text-white">{item.label}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* Bottom section – Profile + Logout */}
//         <div className="mt-auto p-6 border-t border-orange-900/50 dark:border-gray-800/70">
//           {/* Profile row */}
//           <div
//             className="
//               flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
//               hover:bg-orange-900/30 transition-colors mb-2
//               dark:hover:bg-gray-800/50
//             "
//             onClick={() => navigate("/profile")}
//           >
//             {user.avatar ? (
//               <img
//                 src={user.avatar}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover border border-orange-600/50 dark:border-orange-600/40"
//                 onError={(e) => (e.target.style.display = "none")}
//               />
//             ) : (
//               <div className="w-10 h-10 rounded-full bg-orange-700 dark:bg-orange-800 flex items-center justify-center text-orange-100 dark:text-orange-200 text-lg font-semibold">
//                 {user.fullName?.charAt(0)?.toUpperCase() || <FiUser />}
//               </div>
//             )}

//             <div className="flex-1 min-w-0">
//               <p className="font-medium text-black dark:text-gray-100 truncate">
//                 {user.fullName}
//               </p>
//               <p className="text-xs underline text-black dark:text-gray-400">
//                 <Link to="/profile">View Profile</Link>
//               </p>
//             </div>
//           </div>

//           {/* Logout */}
//           <div
//             onClick={handleLogout}
//             className="
//               flex items-center gap-3 px-4 py-3
//               text-red-400 hover:bg-red-900/30 hover:text-red-300
//               dark:text-red-400 dark:hover:bg-red-950/40 dark:hover:text-red-300
//               cursor-pointer transition-colors rounded-xl
//             "
//           >
//             <FiLogOut className="w-5 h-5" />
//             <span>Logout</span>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiCreditCard,
  FiArrowDownCircle,
  FiTrendingUp,
  FiClock,
  FiPlayCircle,
  FiUsers,
  FiActivity,
  FiShare2,
  FiHelpCircle,
  FiLogOut,
  FiUser,
  FiCornerRightDown,
} from "react-icons/fi";
import { useTheme } from "./ui/ThemeContext";
import { userService } from "../api/userApi";

export default function Sidebar({ isOpen, closeSidebar }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [user, setUser] = useState({
    fullName: "User",
    avatar: null,
  });

  // Fetch user profile
  const loadProfile = async () => {
    try {
      const res = await userService.getProfile();
      if (res && res.fullName) {
        setUser({
          fullName: res.fullName,
          avatar: res.avatar || null,
        });
      }
    } catch (err) {
      console.error("Failed to load profile:", err);
    }
  };

  useEffect(() => {
    loadProfile();

    // Optional: subscribe to profile updates (if using global context)
    // Example: update sidebar if profile updates elsewhere
    const interval = setInterval(loadProfile, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await fetch("/api/auth/logout", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        });
      }
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/signup");
    }
  };

  const navItems = [
    { to: "/", icon: FiHome, label: "Dashboard" },
    { to: "/deposits", icon: FiCreditCard, label: "Deposits" },
    { to: "/withdraw", icon: FiArrowDownCircle, label: "Withdraw" },
    { to: "/crypto", icon: FiCornerRightDown, label: "Convert Crypto" },
    { to: "/trading-records", icon: FiTrendingUp, label: "Trading Records" },
    { to: "/transactions", icon: FiClock, label: "Transaction History" },
    { to: "/trade", icon: FiPlayCircle, label: "Trade Now" },
    { to: "/join-trade", icon: FiUsers, label: "Join Trade" },
    { to: "/recent-trades", icon: FiActivity, label: "Recent Trades" },
    { to: "/refer", icon: FiShare2, label: "Referrals" },
    { to: "/support", icon: FiHelpCircle, label: "Help & Support" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 min-h-screen w-64
          bg-white text-black
          dark:bg-gray-950 dark:text-gray-100
          shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:shadow-none`}
      >
        <div className="p-6 border-b border-orange-900/50 dark:border-gray-800/70">
          <h2 className="text-2xl font-bold text-orange-400 dark:text-orange-500 tracking-wider">
            CREDENCEFLUX
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl
                         text-black hover:bg-orange-900/40 hover:text-orange-400
                         dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-orange-400
                         transition-all duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-black dark:text-white">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom: Profile + Logout */}
        <div className="mt-auto p-6 border-t border-orange-900/50 dark:border-gray-800/70">
          {/* Profile */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                       hover:bg-orange-900/30 transition-colors mb-2 dark:hover:bg-gray-800/50"
            onClick={() => navigate("/profile")}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-orange-600/50 dark:border-orange-600/40"
                onError={(e) => (e.target.style.display = "none")}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-orange-700 dark:bg-orange-800 flex items-center justify-center text-orange-100 dark:text-orange-200 text-lg font-semibold">
                {user.fullName?.charAt(0)?.toUpperCase() || <FiUser />}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <p className="font-medium text-black dark:text-gray-100 truncate">
                {user.fullName}
              </p>
              <p className="text-xs underline text-black dark:text-gray-400">
                <Link to="/profile">View Profile</Link>
              </p>
            </div>
          </div>

          {/* Logout */}
          <div
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-900/30 hover:text-red-300
                       dark:text-red-400 dark:hover:bg-red-950/40 dark:hover:text-red-300
                       cursor-pointer transition-colors rounded-xl"
          >
            <FiLogOut className="w-5 h-5" />
            <span>Logout</span>
          </div>
        </div>
      </aside>
    </>
  );
}
