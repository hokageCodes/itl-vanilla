// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';
import MainLayout from './components/admin/layouts/MainLayout';
import AdminLayout from './components/admin/layouts/AdminLayout';
import LandingPage from './pages/LandingPage';
import Volunteer from './pages/VolunteerFromPage';
import PreRegister from './pages/PreRegisterForm';
import Sponsor from './pages/SponsorFormPage';
import SpeakersPage from './pages/SpeakersPage';
import FaqPage from './pages/FAQsPage';
import ConferencePage from './pages/ItlConferencePage';
import PartnersPage from './pages/PartnersPage';
import AwardsSection from './pages/AwardsPage';
import MultiStepForm from './pages/NominateForm';
import AdminLogin from './components/admin/AdminLogin';
import AdminAnalytics from './components/admin/AdminDashboard';
import VolunteersSub from './components/admin/submissions/VolunteersSub';
import RegistrationsSub from './components/admin/submissions/RegistrationSub';
import NominationsSub from './components/admin/submissions/NominationsSub';
import AdminPreRegistrations from './components/admin/collections/AdminPreRegistrations';
import AdminVolunteersSubmissions from './components/admin/collections/AdminVolunteers';
import AdminNominations from './components/admin/collections/AdminNominations';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
          <Route path="/speakers" element={<MainLayout><SpeakersPage /></MainLayout>} />
          <Route path="/itl25-conference" element={<MainLayout><ConferencePage /></MainLayout>} />
          <Route path="/partners" element={<MainLayout><PartnersPage /></MainLayout>} />
          <Route path="/awards" element={<MainLayout><AwardsSection /></MainLayout>} />
          <Route path="/volunteer" element={<MainLayout><Volunteer /></MainLayout>} />
          <Route path="/pre-register" element={<MainLayout><PreRegister /></MainLayout>} />
          <Route path="/nominate" element={<MainLayout><MultiStepForm /></MainLayout>} />
          <Route path="/sponsor" element={<MainLayout><Sponsor /></MainLayout>} />
          <Route path="/faqs" element={<MainLayout><FaqPage /></MainLayout>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<AdminAnalytics />} />
                  <Route path="submissions/volunteers" element={<VolunteersSub />} />
                  <Route path="submissions/registrations" element={<RegistrationsSub />} />
                  <Route path="submissions/nominations" element={<NominationsSub />} />
                  <Route path="submissions/admin-registrations" element={<AdminPreRegistrations />} />
                  <Route path="submissions/admin-volunteers" element={<AdminVolunteersSubmissions />} />
                  <Route path="submissions/admin-nominations" element={<AdminNominations />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
