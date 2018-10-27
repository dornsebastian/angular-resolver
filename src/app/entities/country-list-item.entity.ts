export class CountryListItem {
  constructor(public id: string,
              public name: string,
              public population: number) {

  }

  static fromJson(obj: Object): CountryListItem {
    return new CountryListItem(obj['alpha3Code'], obj['name'], obj['population']);
  }
}
