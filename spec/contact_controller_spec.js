const ContactController = require("../controllers/ContactController.js");
const sequelize = require("../db/models/index.js").sequelize;

describe("ContactController", () => {
  beforeEach((done) => {
    this.book = new ContactController();

    sequelize.sync({force: true}).then((res) => {
      done();
    })
    .catch((err) => {
      done();
    });
  });

  describe("#addContact()", () => {
    it("should add a single contact into the book", (done) => {
      this.book.addContact("Alice", "001-101-1010", "alice.test@email.com")
      .then((contact) => {
        expect(contact.name).toBe("Alice");
        expect(contact.phone).toBe("001-101-1010");
        expect(contact.email).toBe("alice.test@email.com")
        done();
      })
      .catch((err) => {
        done();
      });
    });
  });
});
