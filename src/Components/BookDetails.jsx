import { Link, useParams } from "react-router-dom";
import useBooks from "../Hooks/useBooks";
import { useEffect, useState } from "react";

const BookDetails = () => {
   const {bookId} = useParams()
   const {data} = useBooks()
   const [singleBook, setSingleBook] = useState([]);

   useEffect(()=>{
    let singleBooks = data.find(item => item.bookId === parseInt(bookId));
    setSingleBook(singleBooks);

   }, [bookId, data])

   const {bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing} = singleBook || {};

//    for(let tag in tags){
//     console.log(typeof tag);
//    }

    return (
        <div className="hero max-w-7xl mx-auto mt-6">
        <div className="hero-content flex-col lg:flex-row">
            <div className="flex-1">
            <img className="w-[425px] bg-[#F3F3F3]" src={image} />
            </div>
         
          <div className="flex-1">
            <h1 className="font-playfair font-bold mb-4 text-[#131313] text-4xl">{bookName}</h1>
            <p className="font-work-sans font-semibold text-[#131313cc]">By: {author}</p>

            <div className="divider"></div>

            <p className='font-work-sans mb-4 text-[#131313cc]'>{category}</p>

            <p className="font-work-sans text-[#131313b3]"><span className="text-[#131313] font-bold">Review: </span>{review}</p>
            <div className="flex gap-4 font-work-sans ">
            <p className="text-[#131313] font-bold">Tag</p>
            <p className="flex gap-4 justify-between text-[#23BE0A] font-medium">#{tags}</p>
            </div>
            
            <div className="divider"></div>

            <div>
                <div className="flex gap-[65px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Number of Pages: </p>
                    <p className="text-[#131313] font-semibold">{totalPages}</p>
                </div>
                <div className="flex gap-[125px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Publisher: </p>
                    <p className="text-[#131313] font-semibold"> {publisher}</p>
                </div>
                <div className="flex gap-[64px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Year of Publishing:  </p>
                    <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
                </div>
                <div className="flex gap-[152px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Rating:  </p>
                    <p className="text-[#131313] font-semibold">{rating}</p>
                </div>

                <div className="font-work-sans mt-4" >
                    <Link>
                    <Link><button className="btn mr-4 text-[18px] font-semibold border-[#1313134d]">Read</button></Link>
                        <Link><button className="btn text-[18px] bg-[#59C6D2] font-semibold text-white">Wishlist</button></Link>
                    </Link>
                </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default BookDetails;