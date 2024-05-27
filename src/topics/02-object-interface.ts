
const skills : string[] = ['dash','push','counter'];




interface Character{
    name : string;
    hp: number;
    skills : string[];
    hometown? : string;
}


let player1 : Character = {
    name: 'Arodi',
    hp: 100,
    skills:['push','counter'],
}

console.table(player1);
export {};