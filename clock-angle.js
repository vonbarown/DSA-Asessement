var angleClock = function(hour, minutes) {
  const circleDegree = 360
  const minutesInHour = 60
  const hoursInDay = 12

  if(hour === 12 && minutes === 0) return 0
 

  let minAngle = (circleDegree/minutesInHour) * minutes 

  let initHourAngle = (circleDegree/hoursInDay) * hour 

  let percentOfHour = minutes / minutesInHour

  let correctedHourAngle = initHourAngle + (percentOfHour * (circleDegree/hoursInDay) )

  let smallestAngle = Math.abs(correctedHourAngle - minAngle)

  return Math.min(circleDegree - smallestAngle,smallestAngle)
};
