
import { useState } from "react";
import backImg from '../../assets/back.png'
import useDataSave from "../../Hooks/UserDataSave";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const navigate = useNavigate();
    const [getData, setGetData] = useDataSave();
    const redirectToMainPage = () => {
        navigate('/mainlogic')
    }
    return (
        <>
            <div class="mt-6 ml-20">
                <button onClick={redirectToMainPage} class="cursor-pointer bg-[#3c6e71] text-white px-1 rounded-lg"><img className="w-9" src={backImg} /></button>
            </div>
            <div class="flex justify-center items-center mb-15 mt-10">

                <div class="bg-white shadow-lg rounded-2xl p-6 w-1/4">
                    <div class="flex justify-between items-center border-b pb-4">

                        <div>
                            <h2 class="text-xl font-semibold">{getData.fname}</h2>
                        </div>

                    </div>


                    <div class="grid grid-cols-2 gap-6 mt-6">
                        <div>
                            <label class="text-gray-600">Full Name</label>
                            <input type="text" class="w-full border-b-1 px-4 py-2 mt-1  focus:outline-none disabled" value={getData.fname} />
                        </div>

                        <div>
                            <label class="text-gray-600">Gender</label>
                            <input type="text" class="w-full border-b-1 px-4 py-2 mt-1  focus:outline-none disabled" value={getData.email} />
                        </div>
                        <div>
                            <label class="text-gray-600">Contact Number</label>
                            <input type="text" class="w-full border-b-1 px-4 py-2 mt-1 focus:outline-none disabled" value={getData.number} />
                        </div>
                        <div>
                            <label class="text-gray-600">Password</label>
                            <input type="password" class="w-full border-b-1 px-4 py-2 mt-1 focus:outline-none disabled" value={getData.password} />
                        </div>

                    </div>
                    <div class="mt-6">
                        <h4 class="font-semibold">My Profiles</h4>
                        <div class="flex items-center mt-2">
                            <span class="bg-[#3c6e71] text-white px-3 py-2 rounded-lg">✉️</span>
                            <div class="ml-4">
                                <p class="text-sm">Harsh Sharma</p>
                                <p class="text-xs text-gray-500">1 month ago</p>
                            </div>
                        </div>
                        <button class="mt-4 text-blue-500 border border-blue-500 px-4 py-2 rounded-lg">+ Add Profiles</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Account;
