/*
állapotok kezelése
app jsből ide kerül át a state és az állapotkezelési logika
*/

import { createContext, useState } from "react";

/*
1. létrehozzuk a contextet a createContext-tel
2. provider létrehozása - ez kezeli a programozási logikát - összekötjük a contextel.
3. Körbeöleljük a providerrel azokat a komponenseket, amikben használni akarjuk a context -et.
4. A körbeölelt komponensekben használjuk a contexet, useContext hook-kal. A hook spéci függvény.
*/

export const KattContext=createContext("")

export const KattProvider=({children})=>{
 const [lista,setLista] = useState(["X","X"," ","O"," "," "," "," ","O"])
  const  [lepes,setLepes]=useState(0)
  function katt(adat){
   
    const sl=[...lista]
    if (lepes%2==0){
      sl[adat]="X"
    }else{
       sl[adat]="O"
    }    
    setLista([...sl]) 
    let slepes=lepes+1
    setLepes(slepes)
  
 }

return <KattContext.Provider value={{lista, katt}}>
{children}
</KattContext.Provider>

}