import Race from './Race';

export default class Elf extends Race {
  private static _count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._count += 1;
    this._maxLifePoints = 99;
  }

  public static createdRacesInstances() {
    return Elf._count;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}