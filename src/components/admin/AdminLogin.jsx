import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        await login(values.email, values.password);
        setStatus({ success: 'Logged in successfully' });
        setTimeout(() => {
          navigate('/admin');
        }, 2000);  // 2 seconds delay
      } catch (error) {
        console.error("Login failed", error);
        setStatus({ error: 'Failed to log in' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <div className="flex justify-center">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-12" />  {/* Replace with your logo path */}
        </div>
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {formik.status && formik.status.error && (
            <div className="p-4 text-red-700 bg-red-100 border border-red-400 rounded">
              {formik.status.error}
            </div>
          )}
          {formik.status && formik.status.success && (
            <div className="p-4 text-green-700 bg-green-100 border border-green-400 rounded">
              {formik.status.success}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block p-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-2 w-full mt-1 border-gray-300 rounded-md shadow-sm border"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mt-2 text-sm text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="border p-2 w-full mt-1 border-gray-300 rounded-md shadow-sm"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="mt-2 text-sm text-red-600">{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {formik.isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
