class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

const CookieOne = new Cookie("black");

CookieOne.setColor("yellow");

CookieOne.setColor("Orange");

console.log(CookieOne.getColor());
