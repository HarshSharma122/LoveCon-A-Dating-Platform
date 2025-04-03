import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useDataSave from '../../Hooks/UserDataSave';
// import Field from 'react'
export default function SignUp() {
    const navigate = useNavigate();
    const [formvalue, setformvalue] = useDataSave();
    const [inputValue, setinputvalue] = useState({
        fname:"",
        email:"", 
        password:"",
        number:"",
    })


    
    const formSubmitted = (e)=>
    {
       e.preventDefault();
        setformvalue(inputValue)
        navigate('/mainlogic')
    }
    const changeInputvalue = (e)=>
    {
       const{name, value} = e.target;
       setinputvalue(prev =>({
        ...prev, [name]:value
       }))
    }

    return (
        <motion.div className='flex items-center justify-center'>
              <div className=" bg-white px-6 py-18 sm:py-3 lg:px-8 border-1 border-gray-100 w-[46%] flex items-center flex-col justify-center">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">SignUp Form</h2>

            </div>
            
            
            <form onSubmit={formSubmitted}  className="mx-auto mt-16 max-w-xl sm:mt-20">
            
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className='sm:col-span-2'>
                        <label htmlFor="full-name" className="block text-sm/6 font-semibold text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="full-name"
                                name="fname"
                                type="text"
                                autoComplete="given-name"
                                value={inputValue.fname}
                                onChange={changeInputvalue}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                            />
                        </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={inputValue.email}
                                onChange={changeInputvalue}
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                            Password
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={changeInputvalue}
                                value={inputValue.password}
                                autoComplete="organization"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71] sm:text-sm/6"
                                    >
                                        <option>INR</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>

                                </div>
                                <input
                                    id="phone-number"
                                    name="number"
                                    value={inputValue.number}
                                    onChange={changeInputvalue}
                                    type="text"
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-[#3c6e71] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#3c6e71] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:focus:outline-[#3c6e71]"
                    >
                        SignUp
                    </button>
                </div>
        
            </form>
        </div>
        </motion.div>
      
    )
}