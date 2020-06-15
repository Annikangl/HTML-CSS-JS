const totalBalance = document.querySelector('.total__balance'),
    totalMoneyIncome = document.querySelector('.total__money-income'),
    totalMoneyExpenses = document.querySelector('.total__money-expenses'),
    historyList = document.querySelector('.history__list'),
    form = document.getElementById('form'),
    operationName = document.querySelector('.operation__name'),
    operationAmount = document.querySelector('.operation__amount');

function generateID() {
    let id = Math.round(Math.random() * 1e8).toString(16);
    return id;
}

let dbOperation = [
    {
        id: 1,
        description: 'Получил запралту',
        amount: 30000,
    },
    {
        id: 2,
        description: 'Оплата интернета',
        amount: -250,
    },
    {
        id: 3,
        description: 'Оплата ТВ',
        amount: -300,
    },
    {
        id: 4,
        description: 'Оплата ЖКХ',
        amount: -700,
    },
    {
        id: 5,
        description: 'Покупка книг',
        amount: -500,
    },
];

const renderOperation = (operation) => {

    const className = operation.amount < 0 ? 'history__item-minus' : 'history__item-plus';

    const listItem = document.createElement('li');

    listItem.classList.add('history__item');
    listItem.classList.add(className);

    listItem.innerHTML = `${operation.description}
    <span class="history__money">${operation.amount} ₽</span>
    <button class="history_delete">x</button>
    `;

    historyList.append(listItem);
};

const updateBalance = () => {
    const resultIncome = dbOperation
        .filter((element) => element.amount > 0)
        .reduce((result,element) => result + element.amount, 0);

    const resultExpensive = dbOperation
        .filter((element) => element.amount < 0)
        .reduce((result,element) => result + element.amount, 0);

    totalMoneyIncome.textContent = resultIncome + ' ₽';
    totalMoneyExpenses.textContent = resultExpensive + ' ₽';
    totalBalance.textContent = resultIncome + resultExpensive + ' ₽';
};

const addOperation = (event) => {
    event.preventDefault();

    const operationNameValue = operationName.value,
        operationAmountValue = operationAmount.value;

    if (operationNameValue && operationAmountValue) {
        const operation = {
            id: generateID(),
            description: operationNameValue,
            amount: +operationAmountValue,

            
        };
        dbOperation.push(operation);
        init();
    } else {
        if (!operationNameValue) operationName.style.borderColor = 'red';
        if (!operationAmountValue) operationAmount.style.borderColor = 'red';
    }

    operationName.value = '';
    operationAmount.value = '';
};

// удаление операций
const deleteOperation = () => {
    
}

const init = () => {
    historyList.textContent = '';

    dbOperation.forEach((element) => {
        renderOperation(element);
    });
    updateBalance();
};

form.addEventListener('submit', addOperation);
init();
