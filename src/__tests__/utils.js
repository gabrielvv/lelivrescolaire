import { reduceValueFromCollection, reduceValueFromSubCollection } from "utils";

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

describe("reduceValueFromSubCollection", () => {
  it("computes sum from sub collection items value", () => {
    const student = {
      lessons: [
        {
          exercises: [
            {
              completion: 0
            },
            {
              completion: 100
            }
          ]
        },
        {
          exercises: [
            {
              completion: 0
            },
            {
              completion: 25
            }
          ]
        }
      ]
    };
    expect(
      reduceValueFromSubCollection("lessons", "exercises", "completion")(
        student
      )
    ).toBe(31);
  });

  it("edge cases", () => {
    let student = {};
    expect(
      reduceValueFromSubCollection("lessons", "exercises", "completion")(
        student
      )
    ).toBe(0);
    student = { lessons: [] };
    expect(
      reduceValueFromSubCollection("lessons", "exercises", "completion")(
        student
      )
    ).toBe(0);
  });
});
