import { img, pre } from 'framer-motion/client';
import React, { useState } from 'react'
import useDatingProfileData from '../../Hooks/userDating';

function DatingProfileCreation() {
    const [profileInput, setProfileInput] = useState({
        full_name:"",
        birthday:"", 
        gender:"", 
        course:"", 
        number:"", 
        Interst:"", 
        address:""
    });
    const [image, setImage] = useState(0);
    // const [profileData, setProfileData] = useDatingProfileData();



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    const profileInputChnage = (e)=>
        {
            const {name, value} = e.target;
            setProfileInput((prev)=>(
                {...prev, [name]: value}
            ))
        }



    return (
        <>
            <div class="flex justify-center items-center min-h-screen p-6">
                <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                    <h2 class="text-2xl font-semibold text-center text-gray-700 mb-6">Profile Creation for Dating</h2>
                    <form class="space-y-4">
                        <div class="grid grid-cols-2 gap-20 mb-15">
                            <div>
                                <label class="block text-gray-700">Full Name</label>
                                <input class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" type="text" value={profileInput.full_name}  name="full_name" onChange={profileInputChnage}/>
                            </div>
                            <div>
                                <div className='flex items-center justify-center w-[153px] h-[161px] '>
                                    {

                                        image ? (

                                            <img src={image} alt='uploaded' className="w-[100%] h-[100%] rounded-full h-full object-cover" />
                                        ) : (

                                            <label className="cursor-pointer">
                                                <input type="file" accept='image/*' onChange={handleImageChange} className='hidden' />
                                                <div className='text-sm font-medium'>Upload image</div>

                                            </label>
                                        )


                                    }
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-gray-700">Birthday</label>
                                <input class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" type="date" value={profileInput.birthday} name="birthday" onChange={profileInputChnage}/>
                            </div>
                            <div>
                                <label class="block text-gray-700">Gender</label>
                                <div class="flex space-x-4 mt-2">
                                    <label class="flex items-center">
                                        <input type="radio" name="gender" class="mr-2" value={profileInput.gender} onChange={profileInputChnage}/>
                                        Male
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="gender" class="mr-2"  value={profileInput.gender} onChange={profileInputChnage}/>
                                        Female
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="gender" class="mr-2"  value={profileInput.gender} onChange={profileInputChnage}/>
                                        others
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-gray-700">Course</label>
                                <input class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" type="text" name="course" value={profileInput.course} onChange={profileInputChnage}/>
                            </div>
                            <div>
                                <label class="block text-gray-700">Phone Number</label>
                                <input class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" type="text" name="phone" value={profileInput.number} onChange={profileInputChnage}/>
                            </div>
                        </div>
                        <div className=''>

                            <div className="">
                                <label class="block text-gray-700">Area of Intrest</label>
                                <input class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" type="text" name="Interst" value={profileInput.Interst} onChange={profileInputChnage}/>
                            </div>
                        </div>
                        <div className="">
                            <label class="block text-gray-700">Address</label>
                            <textarea class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" value={profileInput.address} name="address" onChange={profileInputChnage}/>
                        </div>
                        <div class="flex justify-center">
                            <button class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>


    )
}

export default DatingProfileCreation
