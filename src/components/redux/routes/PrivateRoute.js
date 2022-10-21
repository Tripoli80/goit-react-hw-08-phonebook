import { useAuth, useReflashing } from 'hooks/hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useAuth();
  const isReflashing = useReflashing();
  const shouldRedirect = !isLoggedIn||isReflashing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
