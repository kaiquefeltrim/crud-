export const Form = () =>{
   return(  <form className="w-full max-w-lg">
   <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
       <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
         Nome do Cliente
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Jane"/>
     </div>
     <div className="w-full md:w-1/2 px-3">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Date">
         Data
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" />
     </div>
   </div>
   <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full px-3">
       <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Email">
         E-mail
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Email" type="email" placeholder="exemplo@hotmail.com" />
     </div>
   </div>
   <div className="flex flex-wrap -mx-3 mb-2">
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
       <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Phone Number">
         Celular
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" />
     </div >
   </div>
 </form>
 ); 

}