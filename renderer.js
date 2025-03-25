console.log("Renderer process loaded");
const path = require("path");
const Navbar = require(path.join(__dirname, "components/Navbar"));
const Footer = require(path.join(__dirname, "components/Footer"));

window.addEventListener("DOMContentLoaded", () => {
  
  const app = document.getElementById("app");

  console.log("Button clicked! 🎉");

  app.innerHTML = `
    ${Navbar()}
    ${Footer()}
  `;
});
