import type { NextPage } from "next";
import Link from "next/link";


const Bar: NextPage = () => {
  
  return (
    <div className=" bg-white">
      
        <div className="bg-white">
        
       <div className="flex justify-center bg-white ">
        <div className="flex justify-start md:justify-between bg-white">
          <div>
             <img src="/logo.png" className="h-24" />
          </div>
          <div>
             <h1 className="text-5xl mt-6">TN4.Shop</h1>
          </div>
        </div>
       </div>
        
        <div  className="flex justify-start md:justify-between bg-white">

          <div className="m-24">
            <h1 className="mx-40 my-8">HOME</h1>
            <div className="border-t border-[#000000] "></div>
          </div>

          
          <div className="m-24">
            <h1 className="mx-12 my-16"></h1>
            <div className="flex space-x-4">MY COLLECTION</div>
            
          </div>
          <div className="m-24">
          <ul>
      <li>
            <Link href="/contact">
                <h1 className="mx-40 my-8">CONTACT</h1>
            </Link>

            </li>
            </ul>
            <div className="border-t border-[#000000] "></div>
          </div>

        </div>

</div>        

     


    </div>
  );
};

export default Bar;
