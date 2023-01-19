export const state = {
  color: "",
};
let color;
export const saveUserColor = function () {
  color = document.body.style.background;
  if (state.color) state.color = "";
  state.color = color;
  localStorage.setItem("color", JSON.stringify(state.color));
};
const init = function () {
  const storage = localStorage.getItem("color");
  if (storage) state.color = JSON.parse(storage);
  document.body.style.background = state.color;
};
init();
