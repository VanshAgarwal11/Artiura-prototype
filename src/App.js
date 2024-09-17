// src/App.js or src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Authentication routes */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected routes: Accessible only when signed in */}
          <Route
            path="/protected"
            element={
              <SignedIn>
                {/* Protected content or page component */}
                <div>Welcome to the Protected Page!</div>
              </SignedIn>
            }
          />

          {/* Fallback Route for Unauthenticated Users */}
          <Route
            path="*"
            element={
              <SignedOut>
                <Home />
              </SignedOut>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;