import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ProtectedRoute from './components/protectedRoute.jsx'
import App from './App.jsx'
import AdminLogin from './pages/auth/login.jsx'
import DashboardLayout from './layouts/dashboardlayout.jsx'
import Dashboard from './pages/dashboard/index.jsx'
import CrimeReporting from './pages/dashboard/crime.jsx'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/login" element={<AdminLogin />} />
        {/* Add more routes as needed */}

        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route index element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="crime-reporting" element={
                  <ProtectedRoute>
                    <CrimeReporting />
                  </ProtectedRoute>
                } />
                {/* <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="settings" element={<SettingsPage />} /> */}
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
