import { addDoc , collection } from "firebase/firestore";
import {db} from "./Firebase";
import data from "./seedData.json"

const productsCollection = collection (db, "products")

data.forEach((product)=>{
    addDoc(productsCollection, product)
.then((resultado) => {
    console.log(".then- resultado:",resultado)
    return console.log("producto agregado")
})
.catch((error)=>{
    console.log("todo mal")
})
})
