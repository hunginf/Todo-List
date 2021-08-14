export const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

export const getStore = (n) => {
  var arr = localStorage.getItem(n) ? JSON.parse(localStorage.getItem(n)) : [];
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr;
};

export const setStore = (n, v) => localStorage.setItem(n, JSON.stringify(v));

export const removeStore = (n, v) => localStorage.removeItem(n);