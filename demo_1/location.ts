export class Location {
  constructor(public lat: string, public lon: string) {}
}

export const EMPTY_LOCATION = new Location(0,0);
