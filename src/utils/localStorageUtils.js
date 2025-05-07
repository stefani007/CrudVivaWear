const STORAGE_KEY = "roupas";

export const getRoupas = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveRoupas = (roupas) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(roupas));
};
