describe("TypeChecker", function() {
  var typeChecker = SAF.TypeChecker;

  describe("When 'typeChecker.IsArray(value)' is checked", function() {
    var value1;
    var value2;
    var value3;

    beforeEach(function() {
      value1 = ["Saab", "Volvo", "BMW"];
      value2 = 7;
      value3 = {};
    });

    it("should return 'true' for arrays only", function() {
      var result1 = typeChecker.IsArray(value1);
      var result2 = typeChecker.IsArray(value2);
      var result3 = typeChecker.IsArray(value3);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
      expect(result3).toBeFalsy();
    });
  });

  describe("When typeChecker.IsBoolean(value) is checked", function() {
    var value1;
    var value2;
    var value3;

    beforeEach(function() {
      value1 = false;
      value2 = new Date();
      value3 = 0;
    });

    it("should return 'true' for booleans only", function() {
      var result1 = typeChecker.IsBoolean(value1);
      var result2 = typeChecker.IsBoolean(value2);
      var result3 = typeChecker.IsBoolean(value3);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
      expect(result3).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsDate(value)' is checked", function() {
    var value1;
    var value2;

    beforeEach(function() {
      value1 = new Date();
      value2 = 7;
    });

    it("should return 'true' for Dates only", function() {
      var result1 = typeChecker.IsDate(value1);
      var result2 = typeChecker.IsDate(value2);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsFunction(value)' is checked", function() {
    var value1;
    var value2;

    beforeEach(function() {
      value1= function () { return true; };
      value2 = "not a function";
    });

    it("should return 'true' for Functions only", function() {
      var result1 = typeChecker.IsFunction(value1);
      var result2 = typeChecker.IsFunction(value2);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsNull(value)' is checked", function() {
    var value1;
    var value2;
    var value3;

    beforeEach(function() {
      value1 = null;
      value2 = 7;
    });

    it("should return 'true' for Null values only", function() {
      var result1 = typeChecker.IsNull(value1);
      var result2 = typeChecker.IsNull(value2);
      var result3 = typeChecker.IsNull(value3);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
      expect(result3).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsNumber(value)' is checked", function() {
    var value1;
    var value2;

    beforeEach(function() {
      value1 = 7;
      value2 = "not a number";
    });

    it("should return 'true' for Numbers only", function() {
      var result1 = typeChecker.IsNumber(value1);
      var result2 = typeChecker.IsNumber(value2);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsObject(value)' is checked", function() {
    var value1;
    var value2;

    beforeEach(function() {
      value1 = {};
      value2 = "not an object";
    });

    it("should return 'true' for Objects only", function() {
      var result1 = typeChecker.IsObject(value1);
      var result2 = typeChecker.IsObject(value2);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsRegExp(value)' is checked", function() {
    var value1;
    var value2;

    beforeEach(function() {
      value1 = new RegExp();
      value2 = "not a regular expression";
    });

    it("should return 'true' for regular expressions only", function() {
      var result1 = typeChecker.IsRegExp(value1);
      var result2 = typeChecker.IsRegExp(value2);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsString(value)' is checked", function() {
    var value1;
    var value2;

    beforeEach(function() {
      value1 = "my string";
      value2 = 7;
    });

    it("should return 'true' for Strings only", function() {
      var result1 = typeChecker.IsString(value1);
      var result2 = typeChecker.IsString(value2);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });

  describe("When 'typeChecker.IsUndefined(value)' is checked", function() {
    var value1;
    var value2;

    beforeEach(function() {
      value2 = 7;
    });

    it("should return 'true' for undefined values only", function() {
      var result1 = typeChecker.IsUndefined(value1);
      var result2 = typeChecker.IsUndefined(value2);

      expect(result1).toBeTruthy();
      expect(result2).toBeFalsy();
    });
  });
});
