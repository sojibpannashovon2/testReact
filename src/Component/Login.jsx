import { FaBoreHole } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { Form } from "react-router";

function Login (){


    return (
        <>
        <Form className=" bg-[#7bc743] min-h-screen my-8 pt-24">


            <div className="flex justify-between w-[40%] mx-auto my-4">
               <div> 
                <span className="text-white ">Admin Login</span>
                <span className="px-4">|</span>
                <span className="">Self Service</span>
                </div>
               <div className="flex justify-center items-center gap-4">
                <FaBoreHole />
                <IoEarthOutline />
               </div>
 
            </div>

            <div className="w-[40%] mx-auto flex flex-col gap-6">
             
              
                    <input type="email" className="bg-white border border-slate-800 lg:md:w-96" placeholder="Email" />
              
                    <input type="test" className="bg-white border border-slate-800 lg:md:w-96" placeholder="Password" />

                    <div className="flex justify-center items-center">

                        <input type="checkbox" name="" id="" />
                        <p className="text-[12px]">I agree to the <span className="text-white">
                            Personal Information Protection and Privacy Policy</span></p>
                    </div>

                    <input 
                    type="submit" 
                    value="Login" 
                    className="bg-black text-white border border-slate-800 lg:md:w-96"
                    />




                   
                    
            </div>
             
        
                
        </Form>
        
        </>
    )

}


export default Login;