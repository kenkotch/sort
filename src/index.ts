import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/* example use */

const numbersCollection = new NumbersCollection([10, 30, -3, 0, 9]);
numbersCollection.sort();
console.info('numbersCollection >>>', numbersCollection.data);

const charactersCollection = new CharactersCollection('Hello World');
charactersCollection.sort();
console.info('charactersCollection >>>', charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(123);
linkedList.add(-32);
linkedList.add(-19);

linkedList.sort();
console.info(linkedList.print());