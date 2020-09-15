import * as axios from "axios";
import { register, validate } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    axios.post.mockResolvedValueOnce({ data: "success" });

    expect(validate(null, null)).toBeTruthy();
    return register(null, null).then((data) => expect(data).toBe("success"));
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);

    expect(validate(null, null)).toBeFalsy();
    return register(null, null).catch((error) =>
      expect(error.message).toBe("wrong username or password")
    );
  });
});
