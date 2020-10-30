import faker from "faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.name}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
