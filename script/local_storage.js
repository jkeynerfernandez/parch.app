const setLocalStorage = (key, data) => {
  const dataJson = JSON.stringify(data);
  localStorage.setItem(key, dataJson);
}

const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  const dataObject = JSON.parse(data);
  return dataObject
}

export {setLocalStorage, getLocalStorage}