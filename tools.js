
  function l_levels(lattitude, altitude) {
    return altitude/(6380*(Math.cos(lattitude) ** 2))
  }


console.log(l_levels(0, 400));