/**
 * Dispatch Table Pattern
 */

var commandTable = {
    next:     nextAnim,
    previous: prevAnim
};

function processArrows(command) {
    commandTable[command]();
};

processArrows(dir);