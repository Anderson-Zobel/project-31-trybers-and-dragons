import Race from './Race';

export default class Halfling extends Race {
  private static _count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._count += 1;
    this._maxLifePoints = 60;
  }

  public static createdRacesInstances() {
    return Halfling._count;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}