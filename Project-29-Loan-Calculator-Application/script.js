function calculateLoan(){

    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);


    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        showError('Please enter Valid Numbers for all fields');
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displaytResult(monthlyPayment,totalInterest);

}

function displaytResult(monthlyPayment,totalInterest)
{   
    const resulDiv = document.getElementById("result");

    resulDiv.innerHTML = `
        <p><strong>Monthly Payment : ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest : ${totalInterest.toFixed(2)}</strong></p>

    `;
}


function showError(message){
    const resulDiv = document.getElementById("result");
    resulDiv.innerHTML = ` <p class="error">${message}</p>`;
}

document.getElementById('calculateBtn').addEventListener("click",calculateLoan);