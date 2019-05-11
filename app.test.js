const app = require("./app");
const request = require("supertest");

describe("server", () => {
   it("should run without crashing", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
   });
});
