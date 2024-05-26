import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute'; 
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer/Footer';
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
import AdminDashboard from './components/admin/AdminDashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/itl25-conference" element={<ConferencePage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/awards" element={<AwardsSection />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/pre-register" element={<PreRegister />} />
            <Route path="/nominate" element={<MultiStepForm />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={<ProtectedRoute element={<AdminDashboard />} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
