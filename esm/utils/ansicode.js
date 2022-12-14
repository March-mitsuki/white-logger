export var ansiFont;
(function (ansiFont) {
    ansiFont["black"] = "\u001B[30m";
    ansiFont["red"] = "\u001B[31m";
    ansiFont["green"] = "\u001B[32m";
    ansiFont["yellow"] = "\u001B[33m";
    ansiFont["blue"] = "\u001B[34m";
    ansiFont["white"] = "\u001B[37m";
    ansiFont["brightBlack"] = "\u001B[90m";
    ansiFont["fontBold"] = "\u001B[1m";
    ansiFont["underLine"] = "\u001B[4m";
    ansiFont["reset"] = "\u001B[0m";
})(ansiFont || (ansiFont = {}));
export var ansiBack;
(function (ansiBack) {
    ansiBack["black"] = "\u001B[40m";
    ansiBack["red"] = "\u001B[41m";
    ansiBack["green"] = "\u001B[42m";
    ansiBack["yellow"] = "\u001B[43m";
    ansiBack["blue"] = "\u001B[44m";
    ansiBack["white"] = "\u001B[47m";
    ansiBack["brightBlack"] = "\u001B[100m";
    ansiBack["reset"] = "\u001B[0m";
})(ansiBack || (ansiBack = {}));
export const reset = "\x1b[0m";
