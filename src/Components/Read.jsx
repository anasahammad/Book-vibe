
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import pages from "../assets/icons/Frame.png"
import { Link } from "react-router-dom";
const Read = ({item}) => {
    const {bookName, author, image, rating, category, tags, bookId, totalPages } = item;
    return (
        <div className="flex flex-col lg:flex-row justify-between border h- gap-6 rounded-2xl">
            <div className="lg:w-[30%] p-6 mx-auto" >
                <figure className="py-[50px] px-[70px] rounded-2xl bg-[#F3F3F3]">
                <img className="w-[200px] h-[220px]" src={image} alt="" />
                </figure>
                
            </div>
            <div className="lg:w-[65%] pl-6 lg:py-8 lg:pr-8">
            <h2 className="font-playfair mb-4 font-bold text-[#131313] text-2xl">{bookName}</h2>
    <p className='font-work-sans mb-6 text-[#131313cc] font-medium'>By: {author}</p>

    <div className="flex flex-col lg:flex-row gap-4 font-work-sans mb-6">
            <p className="text-[#131313] font-bold">Tag  <span className=" gap-4 justify-between text-[#23BE0A] font-medium">#{tags}</span></p>
            
            <p className="flex lg:items-center"><CiLocationOn></CiLocationOn> <span>Year of Publishing: 1924</span></p>
            </div>
            <div className="flex items-center gap-6">
                <p className="flex items-center gap-2"><BsPeople></BsPeople> <span>Publisher: Scribner</span></p>
                <p className="flex items-center gap-2">
                   <img src={pages} alt="" /> 
                   <span> Page: {totalPages}</span>
                </p>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-3 font-work-sans">
                <button className="btn rounded-[36px] bg-[#328eff26] text-[#328EFF]">Category: {category}</button>

                <button className="btn rounded-[36px] bg-[#ffac3326] text-[#FFAC33]">Rating: {rating}</button>

                <Link  to={`/books-details/${bookId}`}><button className="btn rounded-[36px] bg-[#23BE0A] text-white mr-4">View Details</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Read;