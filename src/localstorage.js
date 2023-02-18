// Kfir Tayar 208991430
// Adi Gertel 206481129

const Localstorage = {

    // Returns object with filtered costs by year and month
    async getFilteredReport(month, year, key) {
        return JSON.parse(localStorage.getItem(key)).filter(cost =>
            (month === parseInt(cost.date.slice(5,7))) && (year === parseInt(cost.date.slice(0,4))));
    },

    // Returns the sum of the filtered report
     async getFilteredTotalSum(month, year, key) {
        let totalSum = 0;
        const unfilteredTable = JSON.parse(localStorage.getItem(key));
        const filteredByMonthAndYear = unfilteredTable.filter(cost =>
            (month === parseInt(cost.date.slice(5,7))) && (year === parseInt(cost.date.slice(0,4))));
        let filteredReportTotalSum = filteredByMonthAndYear.map(cost => (totalSum = totalSum + parseInt(cost.sum)));
         filteredReportTotalSum = filteredReportTotalSum[(filteredReportTotalSum.length) - 1];
        return filteredReportTotalSum;
    },

    // Return the costs object from the local storage
    async getCosts(key){
      return JSON.parse(localStorage.getItem(key));
    },

    // Add an array that represent a cost into the local storage
    async addCost(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
};

export default Localstorage;
