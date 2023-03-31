// import { Cookie } from "./class";

// const Cookie = require("./class");

function run() {
  const CookieOne = new Cookie("black");

  CookieOne.setColor("yellow");

  CookieOne.setColor("Orange");

  console.log(CookieOne.getColor());
}

run();
