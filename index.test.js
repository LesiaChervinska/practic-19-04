var {
    isOdd,
    getDays,
    every
  } = require("./index");

  describe('isOdd', function () {
    var even = 2;
    var odd = 1;
    it("should be defined", function () {
      expect(Number.prototype.isOdd).toBeDefined();
       });
        it("should be a function", function () {
        expect(typeof Number.prototype.isOdd).toBe("function");
      });
        it("must be false", function () {
        expect(even.isOdd()).toBe(false);
      });
        it("must be true", function () {
          expect(odd.isOdd()).toBe(true);
      });
  });
  
  describe('getDays', function () {
    it("should be defined", function () {
      expect(getDays).toBeDefined();
       });
       it("should be a function", function () {
        expect(typeof getDays).toBe("function");
      });
      it("1rst arg must be a number", function () {
        expect(getDays('2021' ,  'April')).toEqual(false);
      });
      it("should return 30", function () {
        expect(getDays(2021 ,  4)).toEqual(30);
      });
      it("should return 30", function () {
        expect(getDays(2021 ,  'April')).toEqual(30);
      });
  })

  

  describe('every', function () {
    it("should be defined", function () {
      expect(every).toBeDefined();
       });
       it("should be a function", function () {
        expect(typeof every).toBe("function");
      });

      function a(num) {
        return  num % 2 === 0;
      }
      it("should return true", function () {
        expect(every([2,4,6],a)).toEqual(true);
      });
      it("should return false", function () {
        expect(every([3,4,6],a)).toEqual(false);
      });
    })