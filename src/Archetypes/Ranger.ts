import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._count += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return Ranger._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}