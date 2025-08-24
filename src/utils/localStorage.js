// User management
export const saveUser = (user) => {
  localStorage.setItem('legalPortalUser', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('legalPortalUser');
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem('legalPortalUser');
};

// Query management
export const saveQuery = (query) => {
  const queries = getQueries();
  const newQuery = {
    id: Date.now(),
    text: query,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };
  queries.push(newQuery);
  localStorage.setItem('legalQueries', JSON.stringify(queries));
  return newQuery;
};

export const getQueries = () => {
  const queries = localStorage.getItem('legalQueries');
  return queries ? JSON.parse(queries) : [];
};

export const deleteQuery = (id) => {
  const queries = getQueries();
  const updatedQueries = queries.filter(query => query.id !== id);
  localStorage.setItem('legalQueries', JSON.stringify(updatedQueries));
};

