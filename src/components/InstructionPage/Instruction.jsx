import React from 'react'
import './Instructionpage.css'
import requestImg from '../../assets/request.jpg'
import chatImg from '../../assets/chatting.jpg'
import secureImg from '../../assets/secure.jpg'
import suggestionImg from '../../assets/suggestion.jpg'
function InstructionPage() {
  return (
    <div className=''>
        <div className="Request_module_info flex m-[66px]  ">
          <div className="request_img flex-50">
            <img className='' src={requestImg} alt="" />
          </div>
          <div className="request_info flex-50 ml-10 mt-15">
            <h2 className='text-4xl tracking-[2px] h2'>👉You can view profiles to know about potential matches and send a request to connect. Start exploring and find your perfect match today!</h2>
          </div>
        </div>
        <div className="chat_module_info flex m-[66px]">
          <div className="request_info flex-50 ml-10 mt-20">
            <h2 className='text-4xl tracking-[2px] h2'>👀If your request is accepted, start chatting and build a meaningful connection that could turn into something special</h2>
          </div>
          <div className="chat_img flex-50">
            <img className='' src={chatImg} alt="" />
          </div>
        </div>
        <div className="security_module_info flex m-[66px]">
          <div className="chat_img flex-50">
            <img className='' src={secureImg} alt="" />
          </div>
          <div className="request_info flex-50 ml-10 mt-20">
            <h2 className='text-4xl tracking-[2px] h2'>🔒Rest assured, your data is safe and completely secure. Your chats remain private, and no one else can access your personal information.</h2>
            
            <p className='text-2xl mt-10  h2'>👉Girls, your safety is our top priority. Enjoy a secure and worry-free dating experience with us!</p>

          </div>
        </div>
        <div className="placeSuggestion_module_info flex m-[66px]">
          <div className="request_info flex-50 mr-10 mt-20">
            <h2 className='text-4xl tracking-[2px] h2'>🔒If you are confuse where to go after chatting? Don't worry we are here Based on your location, we suggest the perfect spots to spend quality time together and create unforgettable memories.</h2>
          </div>
          <div className="chat_img flex-50">
            <img className='' src={suggestionImg} alt="" />
          </div>
        </div>


    </div>
  )
}

export default InstructionPage
