import React from 'react'

function ViewAccount() {
  return (
    <div className='w-screen h-screen mx-10 mt-10'>
      {/* name age and sex container */}
      <div className='absolute flex flex-col left-[12%] -translate-x-1/2'>
        <label id='nameLabel' className='cursor-pointer'>
          Name:
          <input id='nameLabel' className='w-200px mb-5 ml-2 rounded-none border border-custom-color-2 border-2' ></input>
        </label>

        <label id='ageLabel' className='cursor-pointer'>
          Age:
          <input id='ageLabel' className='w-200px mb-5 ml-6 rounded-none border border-custom-color-2 border-2'></input>
        </label>

        <label id='sexLabel' className='cursor-pointer'>
          Sex:
          <input id='sexLabel' className='w-200px ml-7 rounded-none border border-custom-color-2 border-2'></input>
        </label>
      </div>

      {/* cp# email and beneficiaries container */}
      <div className='absolute flex flex-col left-[70%] -translate-x-1/2'>
        <label id='phoneLabel' className='cursor-pointer'>
          Phone Number:
          <input id='phoneLabel' className='w-200px mb-5 ml-3 rounded-none border border-custom-color-2 border-2'></input>
        </label>

        <label id='emailLabel' className='cursor-pointer'>
          Email:
          <input id='emailLabel' className='w-200px mb-5 ml-20 rounded-none border border-custom-color-2 border-2'></input>
        </label>

        <label id='beneficiariesLabel' className='cursor-pointer'>
          Beneficiaries:
        </label>
      </div>

      <div className='w-1000px rounded-sm absolute text-white h-200px bg-[#627254] top-[70%] translate-y-1/4'>
        <div className='text-center relative'>
          <h1 className='text-2xl'>PERSONAL RECORDS</h1>
          <div className='relative left-[10%] -translate-x-1/2'>
            <h2>Contacted Doctors:</h2>
            <input className='rounded-none'></input>

            <h2>Past Doctors:</h2>
            <input className='rounded-none'></input>
          </div>
          <div className='relative left-[80%] -translate-x-1/2 -mt-120px'>
            <h2 className='-ml-15'>Self-Diagnosis Results:</h2>
            <input className='h-35 w-300px rounded-none ml-20'></input>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ViewAccount
