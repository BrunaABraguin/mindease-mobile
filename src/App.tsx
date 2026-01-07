import { useState } from 'react';
import { UserProvider } from './presentation/contexts/UserContext';
import { TaskProvider } from './presentation/contexts/TaskContext';
import { Navigation } from './presentation/components/Navigation/Navigation';
import { Dashboard } from './presentation/components/Dashboard/Dashboard';
import { TaskOrganizer } from './presentation/components/TaskOrganizer/TaskOrganizer';
import { Profile } from './presentation/components/Profile/Profile';
import './presentation/styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'tasks':
        return <TaskOrganizer />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <UserProvider>
      <TaskProvider>
        <div style={{ minHeight: '100vh' }}>
          <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
          {renderPage()}
        </div>
      </TaskProvider>
    </UserProvider>
  );
}

export default App;
