import photo from "../assets/WEBSITE_Pics/Photo.jpeg";
import Divider from "@mui/material/Divider";

const Home = () => {
 

  return (
    <div className='flex flex-col items-center justify-center bg-dark_gray'>
      <section className='flex flex-col md:flex-row items-center  justify-evenly w-[90%]'>
        <div className='flex flex-col justify-center p-2 md:mt-20 h-full w-3/3 md:w-2/3 '>
          <div className='text-center  tracking-widest  md:pl-12 md:pr-12 h-3/4 font-montserrat text-3xl text-amazon_yellow font-semibold '>
            <p>
              Text1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quo cumque quibusdam iusto voluptas adipisci soluta Lorem ipsum,
              dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <Divider className=' h-1 bg-lightText w-[95%] ' />

          <div className='text-center font-montserrat font-extralight text-amazon_yellow md:pl-2 md:pr-12 pt-4 text-lg'>
            <p>
              Text2 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quo cumque quibusdam iusto voluptas adipisci soluta.
            </p>
          </div>
        </div>
        <div className=' flex justify-center items-center rounded-full bg-white h-3/4 mt-12 '>
          <img
            src={photo}
            alt='Creative'
            className='rounded-full  object-fit shadow-lg h-[30rem] w-[30rem] '
          />
        </div>
      </section>
      <div>Carosule</div>
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent Blogs</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
             
        </div>
      </div>
    </div>
  );
};

export default Home;
