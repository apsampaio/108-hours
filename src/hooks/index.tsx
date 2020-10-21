import React from 'react';
import { AuthProvider } from './Auth';
import { ScheduleProvider } from './Schedule';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ScheduleProvider>{children}</ScheduleProvider>
    </AuthProvider>
  );
};

export default AppProvider;
