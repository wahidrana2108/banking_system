var loginButton = document.getElementById('login');
loginButton.addEventListener('click', function(){
    var loginInfo = document.getElementById('loginForm');
    loginInfo.style.display = "none";
    var transactionInfo = document.getElementById('transaction');
    transactionInfo.style.display = "grid";
})


var backToLoginButton = document.getElementById('backToLogin');
backToLoginButton.addEventListener('click', function(){
    var loginInfo = document.getElementById('loginForm');
    loginInfo.style.display = "grid";
    var transactionInfo = document.getElementById('transaction');
    transactionInfo.style.display = "none";
})


var dpsButton = document.getElementById('dps_btn');
dpsButton.addEventListener('click', function(){
    var dpsInput = document.getElementById('dpsInp').value;
    var dpsAmount = parseFloat(dpsInput);
    dpsAmount = dpsAmount || 0
    if(dpsAmount < 0){
        alert('Invalid Amount!');
        document.getElementById('dpsInp').value = "";
        return
    }
    var currentDps = document.getElementById('currentDps').innerText;
    var currentDpsAmount = parseFloat(currentDps); 
    var totalDps = (dpsAmount + currentDpsAmount).toFixed(2);
    var balance = document.getElementById('totalAmount').innerText;
    var totalBalance = parseFloat(balance);
    var finalBalance = (totalBalance + dpsAmount).toFixed(2);
    document.getElementById('currentDps').innerText = totalDps;
    document.getElementById('dpsInp').value = "";
    document.getElementById('totalAmount').innerText = finalBalance;
})


var wtdButton = document.getElementById("wtd_btn");
wtdButton.addEventListener('click', function(){
    var wtdInput = document.getElementById('wtdInp').value;
    var wtdAmount = parseFloat(wtdInput);
    wtdAmount = wtdAmount || 0
    if(wtdAmount < 0){
        alert('Invalid Amount!');
        document.getElementById('wtdInp').value = "";
        return
    }
    var currentWtd = document.getElementById('currentWtd').innerText;
    var currentWtdAmount = parseFloat(currentWtd);
    var totalWtd = (wtdAmount + currentWtdAmount).toFixed(2);
    var balance = document.getElementById('totalAmount').innerText;
    var totalBalance = parseFloat(balance);
    if(totalBalance < wtdAmount){
        alert('Invalid Transition!');
        document.getElementById('wtdInp').value = "";
        return
    }
    var finalBalance = (totalBalance - wtdAmount).toFixed(2);
    document.getElementById('currentWtd').innerText = totalWtd;
    document.getElementById('wtdInp').value = "";
    document.getElementById('totalAmount').innerText = finalBalance;
})