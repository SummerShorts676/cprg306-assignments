// created this for Week 10, additem and getitems functions

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        const itemsReferences = collection(db, "users", userId, "items");
        const itemsQuery = query(itemsReferences);
        const itemsSnapshot = await getDocs(itemsQuery);
        let itemsArray = [];
        itemsSnapshot.forEach( (doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            itemsArray.push(thisItem);
        });
        return itemsArray;
    } catch (error) {
        console.error(error);
    }
}

export async function addItem( userId, item ) {
    try {
        const newItemsReference = collection(db, "users", userId, "items");
        const newItemsPromise = await addDoc(newItemsReference, item);
        console.log(newItemsPromise.id);
        return newItemsPromise.id;
    } catch (error) {
        console.error(error);
    }
}