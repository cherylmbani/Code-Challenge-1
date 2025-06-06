function estimateTransactionFee(amountToSend){
    const feePercent = 0.015;
    let calculatedFee = amountToSend * feePercent;

    // Maximum and minimum fee rules
    if(calculatedFee < 10){
        calculatedFee = 10;
    } else if(calculatedFee > 70){
        calculatedFee = 70;
    }
    const totalDebited = amountToSend + calculatedFee;

    // console output
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("\nSend Money Safely");
}
// User Prompt
const input = prompt("Unatuma Ngapi? (KES):");
const amount = Number(input);

if(!isNaN(amount) && amount >0){
    estimateTransactionFee(amount);
}else{
    console.log("Tafadhali weka kiasi sahihi cha kutuma");
}