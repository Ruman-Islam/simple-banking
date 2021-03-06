
// Calculation of deposit/withdraw
function depositAndWithdraw(str) {
    const inputValue = document.getElementById(str + '__input');  // getting input value dynamically
    const regEx = /[^0-9]/ig;
    if (regEx.test(inputValue.value) || inputValue.value === '') {    // Input validation
        document.querySelector('.error__msg').innerText = 'Enter Valid Amount!!';
        inputValue.value = '';
        setTimeout(hideErr, 1000);
    } else {
        const inputAmount = parseFloat(inputValue.value);  //  input value parsing
        const currentValue = document.getElementById(str + '__balance');  // current deposit/withdraw balance span tag
        const currentAmount = parseFloat(currentValue.innerText);  //  current deposit/withdraw balance span tag inner text parsing
        const currentTotalBalanceValue = document.getElementById('total__balance');   // current total balance span tag
        const currentTotalBalance = parseFloat(currentTotalBalanceValue.innerText);   // current total balance span tag inner text parsing
        if (str === 'withdraw' && currentTotalBalance < inputAmount) {   // current total balance span tag inner text value is low
            document.querySelector('.error__msg').innerText = 'Balance low!!';
            inputValue.value = '';
            setTimeout(hideErr, 1000);
        } else {
            const totalAmount = currentAmount + inputAmount;
            currentValue.innerText = totalAmount;
            inputValue.value = '';
            let totalBalance;
            if (str === 'deposit') {
                totalBalance = currentTotalBalance + inputAmount;
            } else {
                totalBalance = currentTotalBalance - inputAmount;
            }
            currentTotalBalanceValue.innerText = totalBalance;  // assigning total balance after deposit/withdraw
        }
    }
}


// function of hide error message
function hideErr() {
    document.querySelector('.error__msg').innerText = '';
}










// Deposit button event
// document
//     .getElementById('deposit__btn')
//     .addEventListener('click', function () {
//         const depositInputValue = document  // here user deposit input
//             .getElementById('deposit__input');
//         const depositInputAmount = parseFloat(depositInputValue.value);   // converting string into integer
//         // Input validation
//         if (isNaN(depositInputAmount)) {
//             alert('Enter any amount');
//         } else {
//             // Deposit balance part
//             const currentDepositValue = document  // here user's current deposit balance
//                 .getElementById('deposit__balance');
//             const currentDepositAmount = parseFloat(currentDepositValue.innerText);
//             const totalDepositAmount = currentDepositAmount + depositInputAmount;  // sum of previous deposit & current deposit
//             currentDepositValue.innerText = totalDepositAmount;  // assigning total deposit to deposit balance
//             depositInputValue.value = '';  // reset deposit input value

//             // Total balance part
//             const currentTotalBalanceValue = document  // current total balance amount
//                 .getElementById('total__balance');
//             const currentTotalBalance = parseFloat(currentTotalBalanceValue.innerText);  // converting string into integer
//             const totalBalance = currentTotalBalance + depositInputAmount;  // sum of previous total balance & current deposit
//             currentTotalBalanceValue.innerText = totalBalance;  // assigning total balance after deposit
//         }
//     });


// Withdraw button event
// document
//     .getElementById('withdraw__btn')
//     .addEventListener('click', function () {
//         const withdrawInputValue = document  // here user withdraw input
//             .getElementById('withdraw__input');
//         const withdrawInputAmount = parseFloat(withdrawInputValue.value);  // converting string into integer
//         // Input validation
//         if (isNaN(withdrawInputAmount)) {
//             alert('Enter any amount');
//         } else {
//             // Withdraw balance part
//             const currentWithdrawValue = document  // here user's current withdraw balance
//                 .getElementById('withdraw__balance');
//             const currentWithdrawAmount = parseFloat(currentWithdrawValue.innerText);
//             const totalWithdrawAmount = currentWithdrawAmount + withdrawInputAmount;  // sum of previous withdraw & current withdraw
//             currentWithdrawValue.innerText = totalWithdrawAmount;  // assigning total withdraw to withdraw balance
//             withdrawInputValue.value = '';  // reset deposit input value

//             // Total balance part
//             const currentTotalBalanceValue = document  // current total balance amount
//                 .getElementById('total__balance');
//             const currentTotalBalance = parseFloat(currentTotalBalanceValue.innerText);  // converting string into integer
//             const totalBalance = currentTotalBalance - withdrawInputAmount;  // sum of previous total balance & current withdraw
//             currentTotalBalanceValue.innerText = totalBalance;  // assigning total balance after withdraw
//         }
//     });

