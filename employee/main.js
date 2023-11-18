const employees = [
    { empId: 1, fname: 'shiva', lname: 'arnam', email: 'shivaarnam@gmail.com', gender: 'male', active: true },
    { empId: 2, fname: 'Bishali', lname: 'xyz', email: 'vxyz@gmail.com', gender: 'female', active: false },
    { empId: 1, fname: 'shiva', lname: 'arnam', email: 'shivaarnam@gmail.com', gender: 'male', active: true },
    { empId: 2, fname: 'Bishali', lname: 'xyz', email: 'vxyz@gmail.com', gender: 'female', active: false },
    { empId: 1, fname: 'shiva', lname: 'arnam', email: 'shivaarnam@gmail.com', gender: 'male', active: true },
    { empId: 2, fname: 'Bishali', lname: 'xyz', email: 'vxyz@gmail.com', gender: 'female', active: false },
    { empId: 1, fname: 'shiva', lname: 'arnam', email: 'shivaarnam@gmail.com', gender: 'male', active: true },
    { empId: 2, fname: 'Bishali', lname: 'xyz', email: 'vxyz@gmail.com', gender: 'female', active: false },
    { empId: 1, fname: 'shiva', lname: 'arnam', email: 'shivaarnam@gmail.com', gender: 'male', active: true },
    { empId: 2, fname: 'Bishali', lname: 'xyz', email: 'vxyz@gmail.com', gender: 'female', active: false },
  ];


  function showAllEmployees() {
    displayEmployees(employees);
  }


  function filterByGender(gender) {
    const filteredEmployees = employees.filter(emp => emp.gender === gender);
    displayEmployees(filteredEmployees);
  }

  
  function displayEmployees(employeeList) {
    const tableBody = document.getElementById('employeeTable');
    tableBody.innerHTML = '';

    employeeList.forEach(employee => {
      const row = `
        <tr>
          <td>${employee.empId}</td>
          <td>${employee.fname}</td>
          <td>${employee.lname}</td>
          <td>${employee.email}</td>
          <td>${employee.gender}</td>
          <td>${employee.active ? 'Yes' : 'No'}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }

  // Display all employees by default on page load
  showAllEmployees();
