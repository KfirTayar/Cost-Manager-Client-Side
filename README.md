# Cost Manager Web Application

This app is used for tracking your daily costs through the years. 
By using this app, you can add costs and get a report which helps you plan your budget and spend money effectively.

## Database
* Data is stored in **Local Storage**.

## Application
The application is built using **React.js** and runs on the client side. It includes the following routes:

1. /addcost/ - for inserting a cost according to the parameters: **date, sum, category, currency, and description**. The user must insert the parameters: **sum, category, and description**. You can see your costs in the table below which represents the current Local Storage.

2. /report/ - for getting a filtered report by the parameters ***year and month***.

3. /about/ - for getting a report about team members in JSON.

### Material UI module installtion
```
npm install @mui/material @emotion/react @emotion/styled
```

## Demo

