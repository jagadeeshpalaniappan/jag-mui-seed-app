import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerIndexView';
import CustomerDetailView from 'src/views/customer/CustomerDetailView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import ProductDetailView from 'src/views/product/ProductDetailView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import PhotosIndex from 'src/views/photos/PhotosIndex';
import AnalysisIndex from 'src/views/analysis/views/AnalysisIndex';

//https://reacttraining.com/blog/react-router-v6-pre/
// https://github.com/amandeepmittal/blog-examples/tree/master/react/react-router-v6-example
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
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
