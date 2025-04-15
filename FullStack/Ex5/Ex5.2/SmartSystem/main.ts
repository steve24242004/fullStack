import { SmartHome } from "./Lighting";
import { SmartHome as SH2 } from "./ClimateControl";

const light = new SmartHome.Lighting.Light();
light.turnOn();
light.turnOff();

const ac = new SH2.ClimateControl.AirConditioner();
ac.turnOn();
ac.setTemperature(24);
ac.turnOff();
