import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monster: SimpleFighter[];

  constructor(character: Fighter, monster: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((monster) => {
      while (this._character.lifePoints > 0 && monster.lifePoints > 0) {
        this._character.attack(monster);
        monster.attack(this._character);
      }      
    });
    return this._character.lifePoints === -1 ? -1 : 1;
  }
}