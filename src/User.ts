import faker from "faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
