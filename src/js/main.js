import { mouse } from "./modules/core/Mouse";

window.addEventListener("mousemove", () => {
  const stalker = document.querySelector(".js-bone");
  stalker.style.top = mouse.position.y - 25 + "px";
  stalker.style.left = mouse.position.x - 25 + "px";
});
