const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test("outputs time into words", () => {
    expect(timeWord("00:12")).toEqual("twelve twelve am");
    expect(timeWord("01:00")).toEqual("one o'clock am");
    expect(timeWord("06:01")).toEqual("six oh one am");
    expect(timeWord("06:10")).toEqual("six ten am");
    expect(timeWord("06:18")).toEqual("six eighteen am");
    expect(timeWord("12:09")).toEqual("twelve oh nine pm");
    expect(timeWord("23:23")).toEqual("eleven twenty three pm");
  });
  test("outputs midnight", () => {
    expect(timeWord("00:00")).toEqual("midnight");

  });
  test("outputs noon", () => {
    expect(timeWord("12:00")).toEqual("noon");
  });
});