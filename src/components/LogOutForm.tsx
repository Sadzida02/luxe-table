import { logout } from '@/actions'
import React from 'react'

function LogOutForm() {
  return (
    <div>
        <form action={logout}>
        
        <button className=" text-olive px-4 py-1">Log Out</button>

        </form>
      
    </div>
  )
}

export default LogOutForm
