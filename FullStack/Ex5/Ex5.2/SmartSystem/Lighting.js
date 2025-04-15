"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHome = void 0;
var SmartHome;
(function (SmartHome) {
    var Lighting;
    (function (Lighting) {
        var Light = /** @class */ (function () {
            function Light() {
            }
            Light.prototype.turnOn = function () {
                console.log("Light is ON");
            };
            Light.prototype.turnOff = function () {
                console.log("Light is OFF");
            };
            return Light;
        }());
        Lighting.Light = Light;
    })(Lighting = SmartHome.Lighting || (SmartHome.Lighting = {}));
})(SmartHome || (exports.SmartHome = SmartHome = {}));
