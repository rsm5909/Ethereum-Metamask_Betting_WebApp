window.addEventListener('load', async () => {
  if (window.ethereum){
    window.web3 = new Web3(ethereum);
    try {
      const accounts = await ethereum.enable();
      const acct = accounts[0];
      web3.eth.defaultAccount = accounts[0];
      document.getElementById("userAddress").innerHTML = "User Address: "+acct;

      console.log(acct);
      /*

      Place ABI BELOW

      */
      var bettingContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"checkPlayerExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TotalBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AmountOne","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"playerInfo","outputs":[{"name":"amountBet","type":"uint256"},{"name":"teamSelected","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cutoff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numdays","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AmountTwo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"uint256"}],"name":"distributePrizes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBetOne","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamSelected","type":"uint8"}],"name":"Bet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"strike","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"start","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBetTwo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxAmountOfBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_start","type":"uint256"},{"name":"_deadline","type":"uint256"},{"name":"_cutoff","type":"uint256"},{"name":"_strike","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

      var betting = bettingContract.at('0x15cda12Ba3154B294CB0D391f86bEC61ed395a83');
      console.log(betting);

      betting.strike(function(error,result){
        if (!error){
          console.log(result.c[0]);
          var strike = (result.c[0] / 100).toString();
          document.getElementById("strike").innerHTML = strike;
        } else {
          console.log('Strike not found');
        }
      });

      betting.deadline(function(error,result){
        if (!error){
          console.log(result.c[0]);
          var deadline = new Date(result.c[0] * 1000);
          document.getElementById("deadline").innerHTML = deadline;
        } else {
          console.log('deadline not found');
        }
      });

      betting.TotalBets(function(error,result){
        if (!error){
          console.log(result.c[0]);
          var totalbets = (result.c[0] / 10000);
          document.getElementById("totalbets").innerHTML = totalbets;
        } else {
          console.log('TotalBets Error');
        }
      });

      betting.AmountOne(function(error,result){
        if (!error){
          console.log(result.c[0]);
          var amt1 = (result.c[0] / 10000);
          console.log(amt1);
          document.getElementById("amt1").innerHTML = amt1;
        } else {
          console.log('AmountOne Error');
        }
      });

      betting.AmountTwo(function(error,result){
        if (!error){
          console.log(result.c[0]);
          var amt2 = (result.c[0] / 10000);
          document.getElementById("amt2").innerHTML = amt2;
        }
      });
  
      document.getElementById("userAddress").innerHTML = "Detected User Address: "+acct;
      var contractAddress = betting.address;
      document.getElementById("contractAddress").innerHTML = "Contract Address: "+contractAddress;
      //console.log(acct);
    } catch (error) {
      console.log('error!');
    }
  }

});

function placeBet() {
   /*
  Place ABI BELOW

  */ 
  var bettingContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"checkPlayerExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TotalBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AmountOne","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"playerInfo","outputs":[{"name":"amountBet","type":"uint256"},{"name":"teamSelected","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cutoff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numdays","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AmountTwo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"uint256"}],"name":"distributePrizes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBetOne","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamSelected","type":"uint8"}],"name":"Bet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"strike","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"start","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBetTwo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxAmountOfBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_start","type":"uint256"},{"name":"_deadline","type":"uint256"},{"name":"_cutoff","type":"uint256"},{"name":"_strike","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

  var betting = bettingContract.at('0x15cda12Ba3154B294CB0D391f86bEC61ed395a83');
  var sides = document.getElementById("side");
  var wagerEth = document.getElementById("wager").value;
  var wagerWei = web3.toWei(wagerEth);

  var side = sides.options[sides.selectedIndex].value;
  if (side == 'Bullish'){
    web3.eth.getAccounts(function(error,result){
      if (!error){
      betting.Bet(1, {from: result[0], value: wagerWei}, function(error,transactionHash){
        if (!error){
          console.log(transactionHash);
          alert(transactionHash);
        } else {
          console.log('No TX Hash');
        }
      });
    } else {
      console.log('No Acct')
    }
    });
  } else {
    web3.eth.getAccounts(function(error,result){
      if (!error){
      betting.Bet(2, {from: result[0], value: wagerWei}, function(error,transactionHash){
        if (!error){
          console.log(transactionHash);
        } else {
          console.log('No TX Hash');
        }
      });
    } else {
      console.log('No Acct')
    }
    });
  }
}

async function makeWin() {
  /*
  Place ABI BELOW

  */
  var bettingContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"checkPlayerExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TotalBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AmountOne","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"playerInfo","outputs":[{"name":"amountBet","type":"uint256"},{"name":"teamSelected","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cutoff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numdays","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AmountTwo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"uint256"}],"name":"distributePrizes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBetOne","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_teamSelected","type":"uint8"}],"name":"Bet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"strike","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"start","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalBetTwo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumBet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxAmountOfBets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_start","type":"uint256"},{"name":"_deadline","type":"uint256"},{"name":"_cutoff","type":"uint256"},{"name":"_strike","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

  var betting = bettingContract.at('0x15cda12Ba3154B294CB0D391f86bEC61ed395a83');
  
  const response = await fetch('https://cloud.iexapis.com/v1/stock/spy/quote/latestPrice?token=pk_c3dc4aa5fa434d2cba972ca9fe7fd406');
  console.log('Response ' + response);
  const prc = response.json();
  const price = parseFloat(prc) * 100;

  betting.distributePrizes(price ,function(error, result){
    if (!error){
      console.log(result);
    } else {
      console.log(error);
    }
  });
}