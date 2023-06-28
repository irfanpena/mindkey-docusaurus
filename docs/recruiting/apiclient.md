---
title: 'API Client / JavaScript Wrapper for the Recruiting API'
sidebar_label: API Client / JavaScript Wrapper for the Recruiting API
id: apiclient
---

The API Client is a JavaScript Wrapper for the Recruiting API. It provides a Promise-based wrapper that handles the communication with the recruiting API.

# Usage

You can include the API Client via a script tag in your application. The API Client offers two versions:

## ECMAScript module version (recommended)

The file for the ECMAScript module version is available at: <https://recruiting.mindkey.com/api-client/api-client-module.js>.

:::note
The ECMAScript version is recommended, because it will run in isolation and does not interfere with any existing JavaScript on your website.website.
Please note that this version is only compatible with modern browsers (all current browsers except Internet Explorer). For the latest information on browser support, please refer to [“Can I use: JavaScript modules via script tag”](https://caniuse.com/es6-module).
:::

According to the documentation, you can simply construct one of the clients and request data.

### Examples

```javascript
import { VacancyClient } from 'https://recruiting.mindkey.com/api-client/api-client-module.js';

const vacancyClient = new VacancyClient('https://recruiting.mindkey.com/api');
const vacancies = await vacancyClient.getVacancyList('<insert-your-customer-id-here>', 'en-US');

```

Full Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Vacancies Table</title>
  </head>
  <body>
    <table id="vacanciesTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <script type="module">
      import { VacancyClient } from 'https://recruiting.mindkey.com/api-client/api-client-module.js';

      let vacancies = [];

      // Function to populate the table
      function populateTable() {
        const table = document.getElementById('vacanciesTable');
        const tbody = table.getElementsByTagName('tbody')[0];

        // Clear existing table rows
        tbody.innerHTML = '';

        // Add new rows with data from vacancies array
        vacancies.forEach(function (vacancy) {
          const row = tbody.insertRow();

          const idCell = row.insertCell();
          idCell.appendChild(document.createTextNode(vacancy.id));

          const descriptionCell = row.insertCell();
          descriptionCell.appendChild(document.createTextNode(vacancy.description));
        });
      }

      const vacancyClient = new VacancyClient('https://recruiting.mindkey.com/api');

      async function fetchVacancies() {
        try {
          vacancies = await vacancyClient.getVacancyList('<insert-your-customer-id-here>', 'en-US');
          populateTable();
        } catch (error) {
          console.error('Error fetching vacancies:', error);
        }
      }

      // Call the fetchVacancies function to retrieve and populate the table with vacancies
      fetchVacancies();
    </script>
  </body>
</html>

```

## Global Version

```html
<script src="https://recruiting.mindkey.com/api-client/api-client-global.js"></script>
```

Almost works like the [ECMAScript module version]\(Almost works like the ECMAScript module version but instead of constructing one of the clients directly, you can find them on window.mindkey.apiClient:), but instead of constructing one of the clients directly, you can find them on `window.mindkey.apiClient`:

### Examples

```javascript
const vacancyClient = new window.mindkey.apiClient.VacancyClient('https://recruiting.mindkey.com/api');
const vacancies = await vacancyClient.getVacancyList('<insert-your-customer-id-here>', 'en-US');
```

Full Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Vacancies Table</title>
    <script src="https://recruiting.mindkey.com/api-client/api-client-global.js"></script>
  </head>
  <body>
    <table id="vacanciesTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <script>
      let vacancies = [];

      // Function to populate the table
      function populateTable() {
        const table = document.getElementById('vacanciesTable');
        const tbody = table.getElementsByTagName('tbody')[0];

        // Clear existing table rows
        tbody.innerHTML = '';

        // Add new rows with data from vacancies array
        vacancies.forEach(function (vacancy) {
          const row = tbody.insertRow();

          const idCell = row.insertCell();
          idCell.appendChild(document.createTextNode(vacancy.id));

          const descriptionCell = row.insertCell();
          descriptionCell.appendChild(document.createTextNode(vacancy.description));
        });
      }

      const vacancyClient = new window.mindkey.apiClient.VacancyClient('https://recruiting.mindkey.com/api');

      async function fetchVacancies() {
        try {
          vacancies = await vacancyClient.getVacancyList('<insert-your-customer-id-here>', 'en-US');
          populateTable();
        } catch (error) {
          console.error('Error fetching vacancies:', error);
        }
      }

      // Call the fetchVacancies function to retrieve and populate the table with vacancies
      fetchVacancies();
    </script>
  </body>
</html>

```