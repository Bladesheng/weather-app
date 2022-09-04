import { Icons } from "./Icons";

test("Return icon path", () => {
  expect(Icons.get("fog")).toBe("./assets/fog.svg");
});
