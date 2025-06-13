import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setTasks } from '../../store/taskSlice';

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  return <>{children}</>;
};
