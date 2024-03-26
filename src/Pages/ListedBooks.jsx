import { useEffect, useState } from "react";
import { getRead } from "../utilies/useReadStorage";
import { Link } from "react-router-dom";
import Read from "../Components/Read";
import { getWishes } from "../utilies/useWishtListStorage";
import WhistList from "../Components/WhistList";


const ListedBooks = () => {

    const [read, setRead] = useState([])
    const [wishList, setWishList] = useState([]);
    const [tabIndex, setTabIndex] = useState(0)

    useEffect(()=> {
        let storeReads = getRead();
        setRead(storeReads);

        
       
        let storeWishList = getWishes();
        setWishList(storeWishList);
        console.log(storeReads, storeWishList)
    }, []);

    
    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#1313130d] py-4 rounded-2xl">
            <h1 className="text-3xl text-center text-[#131313] font-bold">Books</h1>
            </div>
            <div className="text-center my-5">
            <select className="select  bg-[#23BE0A] text-white font-semibold">
  <option disabled selected>Sort By</option>
  <option>Rating</option>
  <option>Number of pages</option>
  <option>Published Year</option>
 
</select>
            </div>


            <div className="flex  mb-5 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
	<Link to=""
    onClick={()=> setTabIndex(0)}
    className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
        tabIndex === 0 ? 'border border-b-0 text-[#131313cc]' : 'border-b text-[#13131380]'
      }  `}>
	
		<span className=" text-[18px] font-work-sans ">Read Books</span>
	</Link>
	<Link to={`whist-list`}
        onClick={()=> {setTabIndex(1)}}
        className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? 'border border-b-0 text-[#131313cc]' : 'border-b text-[#13131380]'
          }  `}>
		
		<span className=" text-[18px] font-work-sans ">Wishlist Books</span>
	</Link>
	<div className="border-b w-full"></div>
</div>
<div>



 <div className="grid grid-cols-1 gap-6">
 {
    tabIndex === 0 && 
   read.map(item=> <Read key={item.bookId} item={item}></Read>)
 }
</div>

<div className="grid grid-cols-1 gap-6">
 {
    tabIndex === 1 &&
    wishList.map(item=> <WhistList key={item.bookId} item={item}></WhistList>)
 }
</div>
</div>

    



        </div>
    );
};

export default ListedBooks;