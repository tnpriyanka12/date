// Conventions
//
// startDate =  startDate or firstDate of User input
// endDate   =  endDate or lastDate of User input
//
// eg: startDate = 12.07.1987
// startDate.day = 12
// startDate.month = 07
// startDate.year = 1987


// MAIN LOGIC HERE //


const getDateDiff = function (first, last) {
  let numberOfDaysBetweenYears = 0;
  //convert the dates in string format to DateFormat object
  // Dates are now  {day,month,year} objects
  const startDate = parseDate( first ) ;
  const endDate  = parseDate( last )  ;

  //Checks for valid dates
  if( !checkDateFormats( startDate, endDate) ){
    console.log('Check the input format!');
    return;
  }

  //If years are same && months are same -> diff the dates
  // if the years are same && months are different, calculate all days in that year
  // if the years are NOT same, split the dates as:
  // (1) startDate - (31.12.startYear)
  // (2) 01.01.endYear - endDate
  // (3) all the years between

  if(startDate.year == endDate.year){
    //if months are same, simply subtract days and again -1 to exclude the first date
    if(startDate.month === endDate.month){
      totalNumberOfDays =  endDate.day - startDate.day - 1;
    }
    else {
      // months are different
      //Subtract first & last date since numberOfDaysSameYear() always includes them
      totalNumberOfDays =  numberOfDaysSameYear(startDate, endDate) - 2;
    }

  } else {
    //i.e if years are not same , we need to divide the dates
    const numDaysFirstYear = numberOfDaysSameYear(startDate, {day:31, month:12, year:startDate.year} ) ;

    //Calculate  difference between years
    let yearDifference = endDate.year - startDate.year;
    for(let i=1; i<yearDifference; i++){
      if(isLeapYear(startDate.year+i)) {
      numberOfDaysBetweenYears += 366;
      }
      else {
      numberOfDaysBetweenYears += 365;
      }
    }

    //Calculate the  number of days in the last year
    const numDaysLastYear = numberOfDaysSameYear({day:1, month:1, year:endDate.year}, endDate) ;

    //Subtract first & last date since numberOfDaysSameYear() always includes them
    totalNumberOfDays = numDaysFirstYear + numberOfDaysBetweenYears + numDaysLastYear - 2;
  }
    //if the dates are same, return 0
    if(totalNumberOfDays <= 0) {
      return "0 days"; //-> to avoid -1days
    } else {
      return `${totalNumberOfDays} days`; //subtract 1 day since we include the last date
    }
};




//////// FUNCTIONS /////////

//A date format function for readability. Converts the given string to date object
function dateFormat(day, month, year) {
  this.day= day,
  this.month= month,
  this.year= year
}


const parseDate = ( inputDate ) => {
  //splits the string into arrays
  const DateSplit = inputDate.split('/');
  const Date = new dateFormat(
        parseInt(DateSplit[0]),parseInt(DateSplit[1]),parseInt(DateSplit[2])
        );
  return Date;
}


const checkDateFormats = ( startDate, endDate ) => {
  if(startDate.year === endDate.year){
      if(startDate.month === endDate.month){
        if(startDate.day > endDate.day){
          console.log('Start date cannot be larger than end date');
          return false;
        }
      } else { // if years are same, but months are not same
        if(startDate.month > endDate.month ) {
          console.log('Start month cannot be larger than end month');
          return false;
        }
      }
  } else { // if years are not same
    if(startDate.year > endDate.year){
      console.log('Start year cannot be larger than end year');
      return false;
    }
  }
  return true;
}// checkDateFormats()

//Function to calculate the days in a particular month
//Decides whether there are 28,29,30 or 31 days in a month, according to month number & year
const getDaysInMonth = (month,year) => {

  if(month >= 8 ){
    if(month % 2 === 0)
      return 31;
    else
      return 30;

  } else {  //month < 8
    if(month % 2 == 0) {
      //if month is even, and its February
      if(month === 2) {
        return (28+isLeapYear(year));
      }
    return 30;
    } else {
      return 31;
    }
  }

}

//Function to check if a year is leap year or not
//Returns true if the input year is a leap year
//Else returns false
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

  //This function is for calculating dates between months of same year
  //The function ALWAYS includes first and last dates
  // if
  //  the first and last date has same month, just return the difference between dates
  // else
  //  first calculate number of days in first month
  //  second calculate number of days remaining months except last
  //  lastly, calculate number of days in last month

const numberOfDaysSameYear = (startDate, endDate) => {
  let numberOfDaysBetweenMonths  = 0;
  let numberOfDaysFirstMonth     = 0;
  let numberOfDaysLastMonth      = 0;
  let numberOfMonths = endDate.month - startDate.month;
  if(numberOfMonths === 0) {
    totalNumberOfDays =  endDate.day - startDate.day + 1;
  }
  else {
    //part - 1
    numberOfDaysFirstMonth = getDaysInMonth(startDate.month,startDate.year ) - startDate.day + 1;
    //part - 2
    for(let i=1; i<numberOfMonths; i++) {
      numberOfDaysBetweenMonths += getDaysInMonth(startDate.month+i, startDate.year);
    }
    //part - 3
    numberOfDaysLastMonth =  endDate.day;

    //Finally total number of days = sum of all above
    totalNumberOfDays = numberOfDaysFirstMonth + numberOfDaysBetweenMonths + numberOfDaysLastMonth;

     // console.log('from numberOfDaysSameYear(): Number of days:', totalNumberOfDays);
   }
   // console.log('Number of days:', totalNumberOfDays);

   return totalNumberOfDays;
}





module.exports = getDateDiff;
