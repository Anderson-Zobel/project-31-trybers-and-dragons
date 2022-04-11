import Race from './Race';

export default class Orc extends Race {
  private static _count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._count += 1;
    this._maxLifePoints = 74;
  }

  public static createdRacesInstances() {
    return Orc._count;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}