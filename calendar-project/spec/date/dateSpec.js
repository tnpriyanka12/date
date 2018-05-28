
describe("Date", function () {

  const dateCalculator = require("../../lib/date.js");

  it("should return 0 for the same dates", function () {

    const firstDate = "1/1/1990";
    const secondDate = "1/1/1990";
    const result = dateCalculator(firstDate, secondDate);

    expect( result ).toEqual( 0 + ' days');

  });

  it("should return 0 for dates which are 1 day apart", function () {

    const firstDate = "1/1/1990";
    const secondDate = "2/1/1990";
    const result = dateCalculator(firstDate, secondDate);

    expect( result ).toEqual( 0 + ' days');

  });

  it("should return 19 for dates 02/06/1983 - 22/06/1983", function () {

    const firstDate = "02/06/1983";
    const secondDate = "22/06/1983";
    const result = dateCalculator(firstDate, secondDate);

    expect( result ).toEqual( 19 + ' days' );

  });


  it("should return 173 for dates 04/07/1984 - 25/12/1984", function () {

    const firstDate = "04/07/1984";
    const secondDate = "25/12/1984";
    const result = dateCalculator(firstDate, secondDate);

    expect( result ).toEqual( 173 + ' days' );

  });

  it("should return 1979 for dates 03/01/1989 - 03/08/1983", function () {

    const firstDate = "03/08/1983";
    const secondDate = "03/01/1989";
    const result = dateCalculator(firstDate, secondDate);

    expect( result ).toEqual( 1979 + ' days' );

  });

});
