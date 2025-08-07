import { Sum } from "../sum"

test("Summ add two no.", () => {
  const result = Sum(3, 4);

//   this line is known as Assertion
  expect(result).toBe(7);

})