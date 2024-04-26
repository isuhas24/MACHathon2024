import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './state/store';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
