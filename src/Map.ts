export class Map {
  private googleMap: google.maps.Map;

  constructor(elementID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementID), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}
