# Cost Manager Web Application (Using React.js)

This app is used for tracking your daily costs due the years. You can get a report for every</br> month and it assists you to plan your budget and spending money in order way.

## Database
- Data is stored in **Local Storage**.

## Application
The application is built using React.js and runs on the client side. It includes the following routes:

1. /addcost/ - for inserting a cost according to the parameters: ***date, sum, category, currency, and description***.
</br>The user must insert the parameters: ***sum, category, and description***.
When cost was added, you can see it in</br> the table below on this page that represents the current Local Storage.

2. /report/ - for getting a filtered report by the parameters ***year & month***.

3. /about/ - for getting a report in JSON about team members.

### Material UI module installtion
```
npm install @mui/material @emotion/react @emotion/styled
```

## Demo

