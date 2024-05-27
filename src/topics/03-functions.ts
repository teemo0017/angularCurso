
function addnumbers(escala : number,capturados?:string[]): void{

    let inicio = 0 ;
    let inicio2 = 1 ;
    let r = 0;


        for(let i = 0 ; i<=escala; i++){
            r = inicio+inicio2; 3
            inicio = inicio2; 2
            inicio2 = r; 
            if(capturados){
                capturados.push(r.toString());
            }
            console.log(r);
//console.log(i);
        }
        
    

    

}
let list_arrays: string[] = [];
addnumbers(10,list_arrays);
console.table(list_arrays);
let num:number = list_arrays.length
console.log(list_arrays[list_arrays.length-8]);
    export {};