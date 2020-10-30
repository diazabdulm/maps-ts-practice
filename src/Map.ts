export interface Mappable {
  markerContent(): string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(elementID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementID), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
