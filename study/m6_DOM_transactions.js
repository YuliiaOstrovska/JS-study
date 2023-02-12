import transactionHistory from './data/transactions.js';

const makeTransactionTableRowMarkup = transaction => {  // Markup - цей термін використовують, щоб зазначити що для розмітки строк
    const {id, amount, date, business, name1, type, account} = transaction;
    return `
    <tr>
        <td>${id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
        <td>${name1}</td>
        <td>${type}</td>
        <td>${account}</td>
    </tr>
     `;
};

// console.log(transactionHistory);
// console.log(makeTransactionTableRowMarkup(transactionHistory[2]));
const tableEl = document.querySelector('.js-transaction-table');
const makeTransactionTableRows = transactionHistory
.map(makeTransactionTableRowMarkup)
.join('');
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows );
console.log(makeTransactionTableRows);


