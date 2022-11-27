import Bowman from './bowman';
import Daemon from './daemon';
import Magician from './magicain';
import Swordsman from './swordsman';

const legolas = new Bowman('legolas');
const barlog = new Daemon('barlog');
const gendalf = new Magician('gendalf');
const aragorn = new Swordsman('aragorn');

const characters = [legolas, barlog, gendalf, aragorn];

export default characters;
