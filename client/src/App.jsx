import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import ManageProject from "./pages/ManageProject";

import ManageCertificate from "./pages/ManageCertificate";

import ManageService from "./pages/ManageService";

import ManageHome from "./pages/ManageHome";

function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen text-white relative overflow-hidden">

        {/* BACKGROUND GLOW EFFECTS */}

        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full -z-10" />

        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[140px] rounded-full -z-10" />

        <div className="fixed bottom-0 left-1/3 w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full -z-10" />

        {/* ROUTES */}

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/manage/project"
            element={<ManageProject />}
          />

          <Route
            path="/manage/certificate"
            element={<ManageCertificate />}
          />
          <Route
            path="/manage/service"
            element={<ManageService />}
          />

          <Route
            path="/manage/home"
            element={<ManageHome />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;