import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({item}) => {
    const {bookName, author, image, rating, category } = item;
    return (
        <div>
            <Link>
            <div className="card flex flex-col  shadow-xl">
  <figure className="px-10 pt-10 bg-[#F3F3F3]">
    <img className=' rounded-2xl  w-[280px] h-[300px]' src={image} />
  </figure>

  
  <div className="card-body ">
  <div className='font-work-sans text-[#23BE0A] font-medium flex gap-4'>
    <p>{category}</p>
    <p>{category}</p>
  </div>
    <h2 className="font-playfair font-bold text-[#131313] text-2xl">{bookName}</h2>
    <p className='font-work-sans text-[#131313cc]'>By: {author}</p>
    <div className="flex justify-between flex-grow">
        <p className='font-work-sans text-[#131313cc]'>Fiction</p>
        <p className='font-work-sans flex items-center gap-2 text-[#131313cc]'>{rating}  <CiStar /></p>
    </div>
  </div>
</div>
            </Link>
           
        </div>
    );
};

export default Book;