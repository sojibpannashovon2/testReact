import { FaAppStore } from "react-icons/fa6";
import Login from "../../Component/Login";



function Home (){


    return (
        <>
         <div className="mx-16 my-8 border border-state-800">

            <div className="w-[40%] mx-auto font-bold text-5xl flex justify-center items-center gap-2">

                
                <div>
                    <FaAppStore className="text-[#7bc743]" />
                </div>

                ZK<span className="text-[#7bc743] pl-[1px]">Bio</span> Time 
            </div>

            <div className=" ">
                <Login></Login>
            </div>


            <div className="text-center mb-16">

                <div>
                    <span className="text-5xl font-bold">ZK<span className="text-[#7bc743]">T</span></span>
                    <span className="text-2xl font-bold text-[#7bc743]">ECO</span>
                </div>

                <div>Copywrite @2025 ZKTECO CO LTD All rights regerved</div>

            </div>
         </div>
        
        </>
    )

}


export default Home;