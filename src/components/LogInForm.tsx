'use client'
import React from 'react'
import { login } from '@/actions';
import { useFormState } from 'react-dom';

export default function LogIn() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return ( 
    <div className='flex justify-center items-center pt-28'>
      <div className="bg-white p-8 rounded shadow-md w-96">

        <div className='flex justify-between'>
            <h2 className="text-2xl font-semibold mb-4 text-olive">Log In</h2>
        </div>
        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-md font-md text-olive">
              Username:
            </label>
            <input
              name='username'
              type="text"
              required
              placeholder='example@gmail.com'
              className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-md text-olive">
              Password:
            </label>
            <input
              name='password'
              type="password"
              id="password"
              required
              placeholder='ex. 65bfw11'
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="text-white px-4 py-2 bg-oker">Log In
            </button>
            {state?.error && <p className='text-red-700 font-bold pt-3'>{state.error}</p>}
          </div>
         
        </form>
      </div>
        

      </div>

  )
}





















