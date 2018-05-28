Instructions to run test:

After unzipping the folder, please run :

'npm install', to install all the dependancies:
----------- INSTRUCTIONS TO RUN TEST ---------------------------
Please give the correct number of arguments
Format on Command line: npm run start "start_date" "end_date"
eg: npm run start "01/01/2000" "02/01/2000"
-----------------------------------------------------------

Alternatively, you could run the test standalone with test.js
eg: node test.js "4/7/1989" "25/12/1984"





Some conditions for the test:
-----------------------------------------------------------
(1) Dates need to be specified, otherwise test gives error
(2) "start_date" ALWAYS needs to be less than "end_date" , otherwise test gives error




----------- INSTRUCTIONS FOR TESTING WITH JASMINE ---------------------------
Give the following on command line:
npm run test "start_date" "end_date"

eg: npm run test " 03/08/1983" "03/01/1989"


debug abd debugbrk commands are used for debugging purpose
eg: npm run debugbrk "start_date" "end_date"
