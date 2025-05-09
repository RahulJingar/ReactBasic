import React from 'react'

const Student = ({student}) => {
  return (
    <div>
          <h1>Students</h1>
                {
                    student.map((student)=>(
                        <ul>
                            <li>Name: {student.name}</li>
                        </ul>
                    ))
                }

    </div>
  )
}

export default Student
