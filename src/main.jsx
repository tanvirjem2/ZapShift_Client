import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// --- Connect React-Router-Dom ---

import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';

// --- Animation On Scroll ---

import Aos from 'aos';
import 'aos/dist/aos.css'

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-375 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
