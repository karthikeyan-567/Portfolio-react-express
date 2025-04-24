import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Contact = () => {
 const[context , Setcon] = useState("")
  const[subject , Setsub ] = useState("")
  const[sender , Setemail ] = useState("")

    let handlemail =()=>{
     let email = axios.post("https://portfolio-react-express-backend.onrender.com" , { context , subject , sender})
     email.then((data)=>{
        console.log(data.data);
        
     }).catch((err)=>{
        console.log(err.data);
        
     })
    }
  return (
    <div className=' w-[full] h-[100vh] '>
   <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <Link to={'/'}> <button className='bg-[#365FA0] py-2 px-5 rounded-xl absolute top-[30px] left-[50px] hover:opacity-85 '>Back</button></Link>
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" value={sender} onChange={(ev)=>{Setemail(ev.target.value) ; console.log("email:"+sender)}} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" value={subject} onChange={(ev)=>{Setsub(ev.target.value);console.log( "Subject:"+subject)}} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" value={context} onChange={(ev)=>{Setcon(ev.target.value);console.log( "Context: "+context)}} rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button  onClick={handlemail} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default Contact
