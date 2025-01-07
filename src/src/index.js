import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';    
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './AuthContext.js';
import './i18n.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <Toaster />
        <App />
    </AuthProvider>
);


