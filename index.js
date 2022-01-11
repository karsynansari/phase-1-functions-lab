// function distanceFromHqInBlocks(pick_up) {
//   if (pick_up >= 42) {
//     return pick_up - 42;
//   } else {
//     return 42 - pick_up;
//   }
// }
// function distanceFromHqInFeet(blocks) {
//   let feetDistance = distanceFromHqInBlocks(blocks);
//   return feetDistance * 264;
// }

// function distanceTravelledInFeet(startBlock, endBlock) {
//   if (startBlock > endBlock) {
//     return (startBlock - endBlock) * 264;
//   } else return (endBlock - startBlock) * 264;
// }
// function calculatesFarePrice(startBlock, endBlock) {
//   let feetDistance = distanceTravelledInFeet(startBlock, endBlock);
//   if (feetDistance > 2500) {
//     return "cannot travel that far";
//   } else if (feetDistance > 2000) {
//     return 25;
//   } else if (feetDistance > 400) {
//     return (feetDistance - 400) * 0.02;
//   }
//   return 0;
// }

function distanceFromHqInBlocks(pickup) {
  if (pickup >= 42) {
    return pickup - 42;
  } else {
    return 42 - pickup;
  }
}
function distanceFromHqInFeet(blocks) {
  let feetDistance = distanceFromHqInBlocks(blocks);
  return feetDistance * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
  if (startBlock > destinationBlock) {
    return (startBlock - destinationBlock) * 264;
  } else {
    return (destinationBlock - startBlock) * 264;
  }
}

function calculatesFarePrice(startBlock, destinationBlock) {
  let feetDistance = distanceTravelledInFeet(startBlock, destinationBlock);
  if (feetDistance < 400) {
    return 0;
  } else if (feetDistance > 400 && feetDistance <= 2000) {
    return (feetDistance - 400) * 0.02;
  } else if (feetDistance > 2000 && feetDistance < 2500) {
    return 25;
  } else if (feetDistance > 2500) {
    return "cannot travel that far";
  }
}
