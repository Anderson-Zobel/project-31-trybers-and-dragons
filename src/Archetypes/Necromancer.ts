import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._count += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}