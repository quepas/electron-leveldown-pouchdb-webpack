import PouchDB from "pouchdb";

class Database {
  constructor() {
    this.newDB = new PouchDB("./oooo-my-sweet-database");
  }

  getSomeData() {
    this.newDB
      .get("dave@gmail.com")
      .then(function(doc) {
        console.log("there is dave! strange");
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}

export default new Database();
