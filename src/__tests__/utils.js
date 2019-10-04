import { reduceValueFromCollection } from "utils";

describe("reduceValueFromCollection", () => {
  it("computes sum from collection items value", () => {
    const lesson = {
      exercises: [
        {
          completion: 0
        },
        {
          completion: 100
        }
      ]
    };
    expect(reduceValueFromCollection("exercises", "completion")(lesson)).toBe(
      50
    );
  });
});
