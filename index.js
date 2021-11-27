function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toUpperCase() === name.toUpperCase();
    });
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.slice(0, name.length) === name;
    });

}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name;
    });

}
