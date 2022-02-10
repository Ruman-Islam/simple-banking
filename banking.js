// Deposit button event
document
    .getElementById('deposit__btn')
    .addEventListener('click', function () {
        const depositInputValue = document  // here user deposit input
            .getElementById('deposit__input');
        const depositInputAmount = parseFloat(depositInputValue.value);   // converting string into integer
        // Input validation
        if (isNaN(depositInputAmount)) {
            alert('Enter any amount');
        } else {
            // Deposit balance part
            const currentDepositValue = document  // here user's current deposit balance
                .getElementById('deposit__balance');
            const currentDepositAmount = parseFloat(currentDepositValue.innerText);
            const totalDepositAmount = currentDepositAmount + depositInputAmount;  // sum of previous deposit & current deposit
            currentDepositValue.innerText = totalDepositAmount;  // assigning total deposit to deposit balance
            depositInputValue.value = '';  // reset deposit input value

            // Total balance part
            const currentTotalBalanceValue = document  // current total balance amount
                .getElementById('total__balance');
            const currentTotalBalance = parseFloat(currentTotalBalanceValue.innerText);  // converting string into integer
            const totalBalance = currentTotalBalance + depositInputAmount;  // sum of previous total balance & current deposit
            currentTotalBalanceValue.innerText = totalBalance;  // assigning total balance after deposit
        }
    });



// Withdraw button event
document
    .getElementById('withdraw__btn')
    .addEventListener('click', function () {
        const withdrawInputValue = document  // here user withdraw input
            .getElementById('withdraw__input');
        const withdrawInputAmount = parseFloat(withdrawInputValue.value);  // converting string into integer
        // Input validation
        if (isNaN(withdrawInputAmount)) {
            alert('Enter any amount');
        } else {
            // Withdraw balance part
            const currentWithdrawValue = document  // here user's current withdraw balance
                .getElementById('withdraw__balance');
            const currentWithdrawAmount = parseFloat(currentWithdrawValue.innerText);
            const totalWithdrawAmount = currentWithdrawAmount + withdrawInputAmount;  // sum of previous withdraw & current withdraw
            currentWithdrawValue.innerText = totalWithdrawAmount;  // assigning total withdraw to withdraw balance
            withdrawInputValue.value = '';  // reset deposit input value

            // Total balance part
            const currentTotalBalanceValue = document  // current total balance amount
                .getElementById('total__balance');
            const currentTotalBalance = parseFloat(currentTotalBalanceValue.innerText);  // converting string into integer
            const totalBalance = currentTotalBalance - withdrawInputAmount;  // sum of previous total balance & current withdraw
            currentTotalBalanceValue.innerText = totalBalance;  // assigning total balance after withdraw
        }
    });
