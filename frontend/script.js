const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("beforeend", januaryComponent());

function januaryComponent() {
  let daysHtml = "";

  for (let i = 0; i <= 31; i++) {
    daysHtml += dayComponent(i);
  }

  return `
  <div class = "month">
    <h2>January</h2>
    ${daysHtml}
  </div>
`;
}

function dayComponent(dayCount) {
  return `<div class= "dayCount">${dayCount}</div>;`;
}
const monthComponent = function (nth, name, days) {
  let daysHtml = "";

  for (let i = 0; i <= 31; i++) {
    daysHtml += dayComponent(i);
  }
  return `<div id= "${nth}" class "${name}">
    <h2>${name}</h2>
    ${daysHtml}</div>`;
};

console.log("hello");
rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January", 31));
rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "February", 28));
rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "March", 31));
rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "April", 30));
