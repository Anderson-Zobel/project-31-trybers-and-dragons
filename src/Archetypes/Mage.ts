import Archetype from './Archetype';
import { EnergyType } from '../interface/Energy';

export default class Mage extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._count += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return Mage._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}