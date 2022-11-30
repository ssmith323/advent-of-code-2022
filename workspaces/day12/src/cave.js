module.exports = class Cave {
  constructor(name) {
    this.name = name;
    this.isBig = /[A-Z]+/.test(name);
    this.connected = [];
  }

  addConnector(newCave) {
    this.connected.push(newCave);
  }
};
