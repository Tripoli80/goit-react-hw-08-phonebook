import { Routes, Route } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import LogIn from 'components/LogIn/LogIn';
import SingUp from 'components/SingUp/SingUp';
import MenuBar from 'components/MenuBar/MenuBar';
import ContactBook from 'components/ContactBook/ContactBook';
import { RestrictedRoute } from 'components/redux/routes/RestrictedRoute';
import { PrivateRoute } from 'components/redux/routes/PrivateRoute';
import { NotificationContainer } from 'react-notifications';

export const App = () => {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/sigin" component={<ContactBook />} />
          }
        />

        <Route
          path="/sigin"
          element={<RestrictedRoute redirectTo="/" component={<LogIn />} />}
        />
        <Route
          path="/sigup"
          element={<RestrictedRoute redirectTo="/" component={<SingUp />} />}
        />
      </Routes>
      {/* {isLOgIn&&<SnackNotify message={`Ви авторизовані як ${name} `}/>} */}
      <NotificationContainer />
    </>
  );
};
