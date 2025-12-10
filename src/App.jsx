// import { BrowserRouter,Navigate, Routes, Route} from "react-router-dom";
// import DashboardLayout from "./components/layouts/DashboardLayout";
// import Home from "./components/pages/Home";
// import Wallet from "./components/pages/Wallet";
// import Settings from "./components/pages/Settings";

// import Signup from "./components/pages/Signup";
// // import Login from "./components/pages/Login";

// import ProtectedRoute from "./components/auth/ProtectedRoute";
// import React from "react";
// import GetStarted from "./components/pages/GetStaretd";
// import NotFound from "./components/pages/PageNotFound";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ---------- PUBLIC ROUTES ---------- */}
//         <Route path="/" element={<GetStarted/>} />
//         <Route path="/signup" element={<Signup />} />
//         {/* <Route path="/login" element={<Login />} /> */}

//         {/* ---------- PROTECTED DASHBOARD ROUTES ---------- */}
//         <Route
//   element={
//     // <ProtectedRoute>
//       <DashboardLayout />
//     // </ProtectedRoute>
//   }
// >
//   <Route path="/" element={<Navigate to="/home" replace />} />
//   <Route path="/home" element={<Home />} />
//   <Route path="/wallet" element={<Wallet />} />
//   <Route path="/settings" element={<Settings />} />
// </Route>


//         {/* ---------- 404 PAGE ---------- */}
//         <Route path="*" element={<NotFound/>} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Home from "./components/pages/Home";
import Wallet from "./components/pages/Wallet";
import Settings from "./components/pages/Settings";
import Signup from "./components/pages/Signup";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import React from "react";
import NotFound from "./components/pages/PageNotFound";
import GetStarted from "./components/pages/GetStaretd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/get-started" element={<GetStarted />} />

        {/* PROTECTED DASHBOARD ROUTES */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
             </ProtectedRoute>
          }
        >
          {/* Redirect root "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Nested routes inside DashboardLayout */}
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
