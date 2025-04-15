export namespace SmartHome {
    export namespace ClimateControl {
      export class AirConditioner {
        setTemperature(temp: number): void {
          console.log(`AC temperature set to ${temp}°C`);
        }
        turnOn(): void {
          console.log("AC is ON");
        }
        turnOff(): void {
          console.log("AC is OFF");
        }
      }
    }
  }
  