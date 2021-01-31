import { expect } from "chai";
import StatusCode from "../lib/internals.js";

describe("STATUS_CODES", () => {
  it("Is an object", done => {
    expect(StatusCode).to.be.an("object");
    done();
  });

  it("Has total 70 keys ", done => {
    expect(Object.keys(StatusCode).length).to.equal(70);
    done();
  });
});
