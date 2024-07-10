import photo from '../assets/WEBSITE_Pics/Photo.jpeg'
import Divider from '@mui/material/Divider';

const Home = () => {
  return (
<div className="flex items-center justify-center">
  <section className="flex items-center  justify-evenly w-[90%]">
    <div className='flex flex-col justify-center p-2 mt-8 h-full w-2/3'>
      <div className='text-left  tracking-widest pl-12 pr-12 h-3/4 font-montserrat text-3xl text-amazon_yellow font-semibold ' >
      <p>Text1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque quibusdam iusto voluptas adipisci soluta Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
      <Divider className=' h-1 bg-lightText w-[95%] '/>

      <div className='text-center font-montserrat font-extralight text-amazon_yellow pl-2 pr-12 pt-4 text-lg'>
        <p>Text2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque quibusdam iusto voluptas adipisci soluta.</p>
      </div>
    </div>
    <div className='flex justify-center items-center rounded-full h-[40rem] w-[40rem]'>
    <img 
          src={photo} 
          alt="Creative" 
          className="rounded-full  object-fit shadow-lg h-[30rem] w-[30rem]" 
        />
    </div>
  </section>
</div>
  );
};

export default Home;