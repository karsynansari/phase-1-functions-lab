function distanceFromHqInBlocks(blocks) {
  if (blocks >= 42) {
    return blocks - 42;
  }
  if (pickup < 42) {
    return 42 - pickup;
  }
}

function distanceFromHqInFeet(blocks) {
  let distance = distanceFromHqInBlocks(blocks);
  return distance * 264;
}
function distanceTravelledInFeet(start, end) {
  const block = 264;
  if (start > end) {
    return start * block - end * block;
  } else if (start < end) {
    return end * block - start * block;
  }
}
function calculatesFarePrice(start, end) {
  const travel = (start - end) * 264;
  if (travel <= 400) {
    return 0;
  } else if (travel >= 401 && travel <= 2000) {
    return (travel - 400) * 0.02;
  } else if (travel >= 2000 && travel <= 2500) {
    return 25;
  } else if (travel >= 2500) {
    return "cannot travel that far";
  }
}
