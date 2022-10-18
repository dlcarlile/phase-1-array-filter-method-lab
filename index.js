const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,name){
    const result = drivers.filter(driver => driver.toLowerCase()  === name.toLowerCase())
    return result
}


findMatching(drivers, "Bobby")


function fuzzyMatch(drivers, name){
    const result = drivers.filter(driver => driver.startsWith() === name.startsWith())
    return result
}
fuzzyMatch(drivers, "S")






function matchName(drivers,name,hometown){
    const result = drivers.filter(driver => driver === name)
    return result
}
matchName(drivers, "Bobby")