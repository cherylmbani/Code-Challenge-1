function estimateTransactionFee(amountToSend){
    const feePercent = 0.15;
    let calculatedFee = amountToSend * feePercent;

    // Maximum and minimum fee rules
    if(calculatedFee < 10){
        calculatedFee = 10;
    } else if(calcilatedFee > 70){
        calculatedFee = 70;
    }
    const totalDebited = amountToSend + calculatedFee;



}