# Cost Manager Web Application

This app is used for tracking your daily costs through the years.<br/> 
By using this app, you can add costs and get a report which helps you plan your budget and spend money effectively.

## Database
* Data is stored in **Local Storage**.

## Application
The application is built using **React.js** and runs on the client side. It includes the following routes:

1. /addcost/ - for inserting a cost according to the parameters: **date, sum, category, currency, and description**. The user must insert the parameters: **sum, category, and description**. You can see your costs in the table below which represents the current Local Storage.

2. /report/ - for getting a filtered report by the parameters ***year and month***.

3. /about/ - for getting a report about team members.

### Material UI module installtion
```
npm install @mui/material @emotion/react @emotion/styled
```

## Demo

https://user-images.githubusercontent.com/96949210/223990242-daedf10c-56c9-4ecc-8a27-d4ee9d1ad896.mp4

