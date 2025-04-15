"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHome = void 0;
var SmartHome;
(function (SmartHome) {
    var ClimateControl;
    (function (ClimateControl) {
        var AirConditioner = /** @class */ (function () {
            function AirConditioner() {
            }
            AirConditioner.prototype.setTemperature = function (temp) {
                console.log("AC temperature set to ".concat(temp, "\u00B0C"));
            };
            AirConditioner.prototype.turnOn = function () {
                console.log("AC is ON");
            };
            AirConditioner.prototype.turnOff = function () {
                console.log("AC is OFF");
            };
            return AirConditioner;
        }());
        ClimateControl.AirConditioner = AirConditioner;
    })(ClimateControl = SmartHome.ClimateControl || (SmartHome.ClimateControl = {}));
})(SmartHome || (exports.SmartHome = SmartHome = {}));
