import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
    // STR de um Adult Red Dragon no D&D    
    this._strength = 27; 
  }
}