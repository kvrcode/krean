//the money maker

export const sayHi = () => {
  const div = document.querySelector(".container");
  const p = document.createElement("p");
  p.textContent = "Hello from webpack. Change this however you like.";
  div.appendChild(p);
};
