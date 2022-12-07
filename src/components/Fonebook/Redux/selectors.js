export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.status;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
