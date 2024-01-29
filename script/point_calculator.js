// Use for dynamic calculation
// progress var calculator, level type calculator, points to next level calculator
class PointsCalculator {
  constructor (userCurrentPoints, userRolObject) {
    this.currentPoints = userCurrentPoints;
    this.rolObject = userRolObject;
    const maxLevelPoints = getMaxLevelPoints(this.currentPoints, this.rolObject); 
    this.progressBar = progressBarCalculator(maxLevelPoints, this.currentPoints);
    this.nextLevelPoints = calculatePointsNextLevel(maxLevelPoints, this.currentPoints);
    this.rolType = getRolType(this.currentPoints, this.rolObject);
  }
}

const progressBarCalculator = (userMaxPoints, userCurrentPoints) => {
  // see https://www.youtube.com/watch?v=Xphb-tzJj24
  const maxPercent = 100;
  const currentPercent = (maxPercent * userCurrentPoints) / userMaxPoints;
  return currentPercent;    
}

const calculatePointsNextLevel = (userMaxPoints, userCurrentPoints) => {
  const pointsToNextLevel = userMaxPoints - userCurrentPoints;
  return pointsToNextLevel;
} 

const getRolType = (userCurrentPoints, userRolObject) => {
  let userRol;
  for (const rol in userRolObject) {
    const rolMaxValue = userRolObject[rol];
    if (userCurrentPoints < rolMaxValue) {
      userRol = rol;
      return userRol
    } 
  }
}

const getMaxLevelPoints = (userCurrentPoints, userRolObject) => {
  let maxLevelPoints;
  for (const rol in userRolObject) {
    const rolMaxValue = userRolObject[rol];
    if (userCurrentPoints < rolMaxValue) {
      maxLevelPoints = rolMaxValue;
      return maxLevelPoints;
    } 
  }
} 

const rolObject = {
  //name - max value
  traveler : 720,
  guide : 1200
}
export {PointsCalculator, rolObject }