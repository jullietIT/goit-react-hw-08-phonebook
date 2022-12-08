// export const selectLoading = state => state.contacts.loading;

// export const selectFilter = state => state.contacts.filter;

// export const selectAllContacts = state => state.contacts.items;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.status;
//new
// export const getTasks = state => state.tasks.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
