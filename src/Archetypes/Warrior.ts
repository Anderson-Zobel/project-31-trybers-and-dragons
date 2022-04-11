import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._count += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return Warrior._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}