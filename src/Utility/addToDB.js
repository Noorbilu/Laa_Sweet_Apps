const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installedList");

  if (storedAppSTR) {
    return JSON.parse(storedAppSTR);
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert("The app is already installed on your device!");
  }
  else {
    storedAppData.push(id);
    localStorage.setItem("installedList", JSON.stringify(storedAppData));
    alert("App installed successfully!");
  }
};

export { addToStoredDB, getStoredApp };
