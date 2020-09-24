import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const users = [{}];
    axios.get.mockResolvedValue({ data: users });
    // TODO feedback: 是出于什么样的考虑，异步测试的时候，不使用anync/await？
    return getUsers().then((data) => expect(data).toEqual(users));
  });
});
