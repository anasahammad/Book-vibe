import { useEffect, useState } from "react";
import { getRead } from "../utilies/useReadStorage";

import Read from "../Components/Read";
import { getWishes } from "../utilies/useWishtListStorage";
import WishList from "../Components/WishList";
const ListedItems = () => {
    const [read, setRead] = useState([]);
    const [wishes, setWishes] = useState([])

    useEffect(()=> {
        let storeReads = getRead();
        setRead(storeReads);

       let storeWishes = getWishes();
       setWishes(storeWishes);
        
    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 gap-6">

   
{
  read.map(item=> <Read key={item.bookId} item={item}></Read>)
}
</div>

<div className="grid grid-cols-1 gap-6">
{
  wishes.map(item=> <WishList key={item.bookId} item={item}></WishList>)
}
</div>
        </div>
    );
};

export default ListedItems;