function calculateBodaFare(distanceInKM){
    const baseFare = 50; //KES
    const chargePerKm = 15; // KES
    const distanceFare = distanceInKM * chargePerKm;
    const totalFare = baseFare + distanceFare;

    //console output
    console.log(`Uko kwote? Io ni ${distanceInKM} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`total: ${totalFare}\n`);
    console.log("Panda Pikipiki");
}

// Prompting user input
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKM = Number(input);

if(!isNaN(distanceInKM) && distanceInKM > 0){
    calculateBodaFare(distanceInKM);
} else{
    console.log("Tafadhali weka kilomita kamili")
}