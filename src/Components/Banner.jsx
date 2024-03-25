import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="font-playfair ">
          <div className="hero min-h-screen bg-[#1313130d] rounded-3xl">
  <div className="hero-content flex-col gap-24  lg:flex-row-reverse">
    <img src="/public/banner-book.png" className="  rounded-lg shadow-2xl" />
    <div className="w-3/5">
      <h1 className="text-[56px] text-[#131313] font-bold">Books to freshen up <br />
       your bookshelf</h1>
    
      <Link><button className="btn mt-4 block bg-[#23BE0A] text-white mr-4">View The List</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;