const tb = console.table;

class Test {

  static assert(result, expected) {
    tb({
      result, expected, success: result === expected
    });
  }

  static assertArray(result, expected) {
    tb({
      result: "[" + result.join(",") + "]",
      expected: "[" + expected.join(",") + "]",
      success: JSON.stringify(result) == JSON.stringify(expected)
    });
  }
}

export { Test };