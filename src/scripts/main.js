'use strict';

function parseNumberFromSalaryTextValue(salaryTextValue) {
  let salaryTextParsed = '';

  for (const char of salaryTextValue) {
    if (isNaN(char)) {
      continue;
    }

    salaryTextParsed += char;
  }

  return +salaryTextParsed;
}

function getEmployees(list) {
  return [...list.childNodes].filter(
    (el) => el.nodeType === 1 && el.dataset.salary,
  );
}

function sortList(list) {
  // [...list.querySelectorAll('li[data-salary]')]
  getEmployees(list)
    .sort((el1, el2) => {
      const el1Salary = parseNumberFromSalaryTextValue(el1.dataset.salary);
      const el2Salary = parseNumberFromSalaryTextValue(el2.dataset.salary);

      if (el1Salary > el2Salary) {
        return -1;
      } else if (el1Salary < el2Salary) {
        return 1;
      } else {
        return 0;
      }
    })
    .forEach((el) => list.insertAdjacentElement('beforeend', el));
}

const employeeList = document.querySelector('ul:has(>[data-salary]');

sortList(employeeList);
