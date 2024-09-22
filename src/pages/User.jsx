import React from 'react'
import Card from '../components/Card'
import { teamMembers } from '../constants'

const User = () => {
  return (
    <section  className="w-100 h-full bg-black common-padding">
      <div className='screen-max-width margin-auto grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-5'>
        {
          teamMembers.map((el, index) => (
            <Card key={el.id} singleCardData={el} />
          ))
        }
      </div>
    </section>

  )
}

export default User