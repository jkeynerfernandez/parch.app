const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    createElementVerification("Happy work david")
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  } else {
    console.log("no baby")
    createElementVerification("Service worker no avalible")
  }
};
console.log("In a file")
const createElementVerification = (elementValue) => {
  const parent = document.getElementById("makingTest");
  const makeElement = document.createElement("p");
  makeElement.innerText = elementValue
  parent.appendChild(makeElement)
}
// …

registerServiceWorker();
