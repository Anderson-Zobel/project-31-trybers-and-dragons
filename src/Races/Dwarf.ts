import Race from './Race';

export default class Dwarf extends Race {
  private static _count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._count += 1;
    this._maxLifePoints = 80;
  }

  public static createdRacesInstances() {
    return Dwarf._count;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}