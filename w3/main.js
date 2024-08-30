//function determineHouholdPts(numberInHousehold) {
  //console.log("inside the function");
  //if (numberInHousehold === 1) {
    //carbonFootprintPoints = carbonFootprintPoints + 14;
  //} else if (numberInHousehold === 2) {
    //carbonFootprintPoints = carbonFootprintPoints + 12;
  //} else if (numberInHousehold === 3) {
    //carbonFootprintPoints = carbonFootprintPoints + 10;
 // } else if (numberInHousehold === 4) {
    //carbonFootprintPoints = carbonFootprintPoints + 8;
  //} else if (numberInHousehold === 5) {
   // carbonFootprintPoints = carbonFootprintPoints + 6;
  //} else if (numberInHousehold === 6) {
   // carbonFootprintPoints = carbonFootprintPoints + 4;
 //} else if (numberInHousehold > 6) {
    //carbonFootprintPoints = carbonFootprintPoints + 2;
 // }
  //console.log(
    //`Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`
  //);
//}
//let carbonFootprintPoints = 0;
//const numberInHousehold = 3;

// global scope

//determineHouholdPts(3)
//determineHouholdPts(4)


function determineSizeInPts(numberInSizeInPts) {
    console.log("inside the function");
    if (numberInSizeInPts === 1) {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInSizeInPts === 2) {
      carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (numberInSizeInPts === 3) {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInSizeInPts === 4) {
      carbonFootprintPoints = carbonFootprintPoints + 2;

    }
    console.log(
      `Based on the number of member of the household of ${numberInSizeInPts} the points would be ${carbonFootprintPoints}.`
    );
  }
  let carbonFootprintPoints = 0;
  //const numberInHousehold = 3;
  
  // global scope
  
  determineSizeInPts(1)
  determineSizeInPts(4)
  