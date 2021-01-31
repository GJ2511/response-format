import { expect } from "chai";
import checkStatusCode from "../lib/helpers.js";

describe("checkStatusCode()", () => {
  it("Should be a function", done => {
    expect(checkStatusCode).to.be.a("function");
    done();
  });

  it("If status code not passed returns null", done => {
    expect(checkStatusCode(null, "dummy msg")).to.be.null;
    done();
  });

  it("Returns default msg if msg is not specified", done => {
    expect(checkStatusCode("200", null)).to.equal("OK");
    done();
  });

  it("Returns custom msg if msg is specified", done => {
    expect(checkStatusCode("200", "response is ok")).to.equal("response is ok");
    done();
  });
});
