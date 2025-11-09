import { useContext } from 'react';
import { AppContext, IAppModal } from '../context/AppContext';

export const useAppContext = (): IAppModal => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
