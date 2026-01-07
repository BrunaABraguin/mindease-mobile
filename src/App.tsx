import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './presentation/contexts/UserContext';
import { TaskProvider } from './presentation/contexts/TaskContext';
import { Navigation } from './presentation/components/Navigation/Navigation';
import { Dashboard } from './presentation/components/Dashboard/Dashboard';
import { TaskOrganizer } from './presentation/components/TaskOrganizer/TaskOrganizer';
import { Profile } from './presentation/components/Profile/Profile';
import './presentation/styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <TaskProvider>
          <div style={{ minHeight: '100vh' }}>
            <Navigation />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tasks" element={<TaskOrganizer />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </TaskProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
