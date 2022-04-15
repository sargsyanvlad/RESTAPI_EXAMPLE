export class Ride {
  private startLong: number;
  private startLat: number;
  private endLat: number;
  private endLong: number;
  private riderName: string;
  private driverName: string;
  private driverVehicle: string;

  constructor(
    startLong: number,
    startLat: number,
    endLat: number,
    endLong: number,
    riderName: string,
    driverName: string,
    driverVehicle: string,
  ) {
    this.startLong = startLong;
    this.startLat = startLat;
    this.endLat = endLat;
    this.endLong = endLong;
    this.riderName = riderName;
    this.driverName = driverName;
    this.driverVehicle = driverVehicle;
  }
}
