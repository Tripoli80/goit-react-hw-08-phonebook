import {
    getAuth,
  getNotifyMassage,
  getNotifyStatus,
  getSigIn,
  getUserName,
} from 'components/redux/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  return useSelector(getSigIn);
};

export const useNotify = () => {
  return useSelector(getNotifyStatus);
};
export const useNotifyMassege = () => {
  return useSelector(getNotifyMassage);
};
export const useToken = () => {
  return useSelector(getAuth);
};
export const useUserName= () => {
    return useSelector(getUserName);
  };