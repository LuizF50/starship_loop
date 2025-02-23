var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var planets = [
    { name: "Terra", emoji: "🌍", sound: "Beep!", soundFile: "assets/terra.mp3" },
    { name: "Marte", emoji: "🔴", sound: "Boop!", soundFile: "assets/marte.mp3" },
    { name: "Júpiter", emoji: "🟠", sound: "Buzz!", soundFile: "assets/jupiter.mp3" },
    { name: "Saturno", emoji: "🪐", sound: "Bing!", soundFile: "assets/saturno.mp3" },
    { name: "Nébula", emoji: "🌌", sound: "Wooosh!", soundFile: "assets/nebula.mp3" }
];
var outputElement = document.getElementById("output");
var startButton = document.getElementById("startJourney");
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function playSound(soundFile) {
    return new Promise(function (resolve) {
        var audio = new Audio(soundFile);
        audio.onended = function () { return resolve(); };
        audio.play();
    });
}
function startJourney() {
    return __awaiter(this, void 0, void 0, function () {
        var i, _i, planets_1, planet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    startButton.disabled = true;
                    outputElement.innerHTML = "";
                    outputElement.innerHTML += "A nave está se preparando para decolar. 3, 2, 1 ...<br>";
                    return [4 /*yield*/, delay(2000)];
                case 1:
                    _a.sent();
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < 3)) return [3 /*break*/, 12];
                    _i = 0, planets_1 = planets;
                    _a.label = 3;
                case 3:
                    if (!(_i < planets_1.length)) return [3 /*break*/, 9];
                    planet = planets_1[_i];
                    outputElement.innerHTML += "A nave partiu para o seu pr\u00F3ximo destino!<br>";
                    return [4 /*yield*/, playSound("assets/decolagem.mp3")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, delay(7000)];
                case 5:
                    _a.sent();
                    outputElement.innerHTML += "Voc\u00EA chegou ao seu destino: ".concat(planet.emoji, " ").concat(planet.name, "<br>");
                    return [4 /*yield*/, playSound(planet.soundFile)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, delay(3000)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 3];
                case 9:
                    if (!(i < 2)) return [3 /*break*/, 11];
                    outputElement.innerHTML += "Preparando para o próximo ciclo...<br><br>";
                    return [4 /*yield*/, delay(5000)];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    i++;
                    return [3 /*break*/, 2];
                case 12:
                    startButton.disabled = false;
                    return [2 /*return*/];
            }
        });
    });
}
// Correção do erro de tipagem no event listener
startButton.addEventListener("click", function (event) {
    void startJourney();
});
