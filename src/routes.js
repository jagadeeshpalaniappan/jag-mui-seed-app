import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/modules/app/layouts/DashboardLayout';
import MainLayout from 'src/modules/app/layouts/MainLayout';
import MyProfileView from 'src/modules/my/views/MyProfileView';
import MyPreferences from 'src/modules/my/views/MyPreferences';
import CustomerListView from 'src/modules/customer/views/CustomerIndexView';
import CustomerDetailView from 'src/modules/customer/views/CustomerDetailView';
import DashboardView from 'src/modules/reports/views/DashboardView';
import LoginView from 'src/modules/auth/views/LoginView';
import NotFoundView from 'src/modules/errors/NotFoundView';
import ProductListView from 'src/modules/product/views/ProductIndexView';
import ProductDetailView from 'src/modules/product/views/ProductDetailView';
import RegisterView from 'src/modules/auth/views/RegisterView';
import SettingsView from 'src/modules/settings/views/SettingsView';
import PhotosIndex from 'src/modules/photos/views/PhotosIndex';
import AnalysisIndex from 'src/modules/analysis/views/AnalysisIndex';

//https://reacttraining.com/blog/react-router-v6-pre/
// https://github.com/amandeepmittal/blog-examples/tree/master/react/react-router-v6-example
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        path: 'my',
        children: [
          { path: '/profile', element: <MyProfileView /> },
          { path: '/preferences', element: <MyPreferences /> }
        ]
      },
      {
        path: 'customers',
        element: <CustomerListView />,
        children: [{ path: '/:id', element: <CustomerDetailView /> }]
      },
      { path: 'dashboard', element: <DashboardView /> },
      {
        path: 'products',
        children: [
          { path: '/', element: <ProductListView /> },
          { path: '/:id', element: <ProductDetailView /> }
        ]
      },
      { path: 'settings', element: <SettingsView /> },
      { path: 'photos', element: <PhotosIndex /> },
      { path: 'analysis', element: <AnalysisIndex /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
