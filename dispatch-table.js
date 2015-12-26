/**
 * Dispatch Table Pattern
 */

//DISPATCH TABLE PATTERN

var commandTable = {
    next:     nextAnim,
    previous: prevAnim
}

function processArrows(command) {
    commandTable[command]();
}

processArrows(dir);