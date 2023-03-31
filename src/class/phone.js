class Phone {
  constructor(OS, color) {
    this.OS = OS;
    this.color = color;
  }
}

class iPhone extends Phone {
  constructor(color) {
    super("iOS", color);
  }
}

class AndroidPhone extends Phone {
  constructor(color) {
    super("Android", color);
  }
}

const Phone1 = new iPhone("yellow");
const Phone2 = new AndroidPhone("black");

console.log(Phone1.OS, Phone1.color);
console.log(Phone2.OS, Phone2.color);
