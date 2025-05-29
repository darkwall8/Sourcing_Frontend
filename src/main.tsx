// import "primereact/resources/themes/lara-light-cyan/theme.css";
import './assets/index.css'
import "./i18n.tsx"
import 'leaflet/dist/leaflet.css';
// import { StrictMode } from 'react'
import { PrimeReactProvider } from "primereact/api";
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/ShowcasesPages/Home/index.tsx'
import NotFound from './components/common/NotFound.tsx'
import DefaultLayout from './components/layouts/DefaultLayout.tsx'
import AuthLayout from './components/layouts/AuthLayout.tsx'
import Login from './pages/ShowcasesPages/Login/index.tsx'
import Registration from './pages/ShowcasesPages/Registration/index.tsx'
import DashBoard from './pages/ManagementPages/Dashboard/index.tsx'
import DataList from './pages/ManagementPages/DataList.tsx/index.tsx'
import Profile from './pages/ManagementPages/Profile/index.tsx'
import Settings from './pages/ManagementPages/Settings/index.tsx'
import Chats from './pages/ManagementPages/Chats/index.tsx'
import ProtectedRoute from './components/layouts/ProtectedRoute.tsx'
import { AuthProvider } from './utils/Context/AuthContext.tsx'
import { StudentInscriptionProvider } from "./utils/Context/StudentInscriptionContext.tsx";
import { CompanyInscriptionProvider } from './utils/Context/CompanyInscriptionContext.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <PrimeReactProvider>
    <AuthProvider>
      <Router>
        <StudentInscriptionProvider>
          <CompanyInscriptionProvider>
            <Routes>

              <Route
                element={<ProtectedRoute needToBeAuthenticated={false} />}
              >
                <Route
                  element={ <DefaultLayout /> }
                >
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
                </Route>
              </Route>

              <Route
                element={
                <ProtectedRoute needToBeAuthenticated={true} />
              }
              >
                <Route element={<AuthLayout />} >
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/datalist" element={<DataList />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/setting" element={<Settings />} />
                  <Route path="/chats" element={<Chats />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />

            </Routes>
          </CompanyInscriptionProvider>
        </StudentInscriptionProvider>
      </Router>
    </AuthProvider>
  </PrimeReactProvider>
  // </StrictMode>,
)
