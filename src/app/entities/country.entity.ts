export class Country {
  constructor(public id: string,
              public name: string,
              public capital: string,
              public population: number) {

  }

  static fromJson(obj: Object): Country {
    return new Country(obj['alpha3Code'], obj['name'], obj['capital'], obj['population']);
  }
}
