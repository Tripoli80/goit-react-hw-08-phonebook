export const getFilter = state => state.filter;
export const getContacts = state => state.contacts;
export const getAuth =state => state.users.auth;
export const getUserName =state => state.users.user.name;
export const getSigIn =state => state.users.isLoggedIn;
export const getReflashing =state => state.users.isRefreshing;

export const getNotifyStatus =state => state.notify.isOpen;
export const getNotifyMassage =state => state.notify.message;
export const getIsLoading =state => state.contacts.isLoading;




