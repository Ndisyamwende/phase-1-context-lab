/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// Function to create an employee record
function createEmployeeRecord(firstName, familyName, title, payPerHour) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  // Function to create time in event
  function createTimeInEvent(employeeRecord, timeStamp) {
    const [date, hour] = timeStamp.split(' ');
  
    const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date,
    };
  
    employeeRecord.timeInEvents.push(timeInEvent);
    return employeeRecord;
  }
  
  // Function to create time out event
  function createTimeOutEvent(employeeRecord, timeStamp) {
    const [date, hour] = timeStamp.split(' ');
  
    const timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date,
    };
  
    employeeRecord.timeOutEvents.push(timeOutEvent);
    return employeeRecord;
  }
  
  // Function to calculate hours worked on a specific date
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      return timeOutEvent.hour - timeInEvent.hour;
    } else {
      return 0;
    }
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
  }
  
  // Function to calculate all wages for an employee
  function allWagesFor(employeeRecord) {
    const allDates = employeeRecord.timeInEvents.map(event => event.date);
    const totalWages = allDates.reduce((total, date) => total + wagesEarnedOnDate(employeeRecord, date), 0);
    return totalWages;
  }
  
  // Function to find an employee by first name
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  // Function to calculate payroll for all employees
  function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employee) => total + allWagesFor(employee), 0);
    return totalPayroll;
  }
  
  // Event listener for the "Run Demo" button
  document.getElementById('demoButton').addEventListener('click', function () {
    const employees = [
      createEmployeeRecord("John", "Doe", "Developer", 20),
      createEmployeeRecord("Jane", "Smith", "Designer", 25),
      createEmployeeRecord("Bob", "Johnson", "Manager", 30),
    ];
  
    document.getElementById('result').textContent = JSON.stringify(employees, null, 2);
  });
  
  // Event listener for the "Create Time In Event" button
  document.getElementById('createTimeInEventButton').addEventListener('click', function () {
    const employee = createEmployeeRecord("John", "Doe", "Developer", 20);
    createTimeInEvent(employee, "2022-01-01 0800");
  
    document.getElementById('result').textContent = JSON.stringify(employee, null, 2);
  });
  
  // Event listener for the "Calculate Hours" button
  document.getElementById('calculateHoursButton').addEventListener('click', function () {
    const employee = createEmployeeRecord("John", "Doe", "Developer", 20);
    createTimeInEvent(employee, "2022-01-01 0800");
    createTimeOutEvent(employee, "2022-01-01 1700");
  
    const hours = hoursWorkedOnDate(employee, "2022-01-01");
  
    document.getElementById('result').textContent = `Hours Worked: ${hours}`;
  });
  
  // Event listener for the "Calculate Wages" button
  document.getElementById('calculateWagesButton').addEventListener('click', function () {
    const employee = createEmployeeRecord("John", "Doe", "Developer", 20);
    createTimeInEvent(employee, "2022-01-01 0800");
    createTimeOutEvent(employee, "2022-01-01 1700");
  
    const wages = wagesEarnedOnDate(employee, "2022-01-01");
  
    document.getElementById('result').textContent = `Wages Earned: $${wages.toFixed(2)}`;
  });
  
  // Event listener for the "Calculate All Wages" button
  document.getElementById('calculateAllWagesButton').addEventListener('click', function () {
    const employee = createEmployeeRecord("John", "Doe", "Developer", 20);
    createTimeInEvent(employee, "2022-01-01 0800");
    createTimeOutEvent(employee, "2022-01-01 1700");
  
    const allWages = allWagesFor(employee);
  
    document.getElementById('result').textContent = `All Wages: $${allWages.toFixed(2)}`;
  });
  
  // Event listener for the "Find Employee" button
  document.getElementById('findEmployeeButton').addEventListener('click', function () {
    const employees = [
      createEmployeeRecord("John", "Doe", "Developer", 20),
      createEmployeeRecord("Jane", "Smith", "Designer", 25),
      createEmployeeRecord("Bob", "Johnson", "Manager", 30),
    ];
  
    const foundEmployee = findEmployeeByFirstName(employees, "Jane");
  
    document.getElementById('result').textContent = foundEmployee
      ? `Employee Found: ${JSON.stringify(foundEmployee, null, 2)}`
      : `Employee Not Found`;
  });
  
  // Event listener for the "Calculate Payroll" button
  document.getElementById('calculatePayrollButton').addEventListener('click', function () {
    const employees = [
      createEmployeeRecord("John", "Doe", "Developer", 20),
      createEmployeeRecord("Jane", "Smith", "Designer", 25),
      createEmployeeRecord("Bob", "Johnson", "Manager", 30),
    ];
  
    const payroll = calculatePayroll(employees);
  
    document.getElementById('result').textContent =
  
  

