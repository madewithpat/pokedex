const server = require("./server");
const request = require("supertest");

describe("server", () => {
   it("should run without crashing", () => {
      request(server)
         .get("/")
         .expect(200);
   });
});
