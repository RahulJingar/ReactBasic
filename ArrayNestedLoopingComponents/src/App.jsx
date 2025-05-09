import React from 'react'
import College from './Component/College'

const App = () => {
const collegeData = [
  {
    name:"SGSG College Nasirabad",
    city:"Nasirabad",
    website:"www.sgsg.com",
    student : [
      {
      name:"Rahul",
      age:26,
      email:"rjingarnsd@gmail.com"
      },

       {
      name:"Manish",
      age:24,
      email:"manishnsd@gmail.com"
      },

       {
      name:"Ashish",
      age:29,
      email:"ashishnsd@gmail.com"
      },

       {
      name:"Jitesh",
      age:20,
      email:"jiteshnsd@gmail.com"
      },

      
    ]
  },

   {
    name:"GCA College Ajmer",
    city:"Ajmer",
    website:"www.gca.com",
        student : [
      {
      name:"Prakash",
      age:26,
      email:"praksh@gmail.com"
      },

       {
      name:"Ravi",
      age:24,
      email:"ravi@gmail.com"
      },

       {
      name:"Shahrukh",
      age:29,
      email:"shahrukh@gmail.com"
      },

       {
      name:"Vivek",
      age:20,
      email:"vivek@gmail.com"
      },

      
    ]
  },

   {
    name:"BHL College Bhilwara",
    city:"Bhilwara",
    website:"www.bhl.com",
        student : [
      {
      name:"Harimohan",
      age:26,
      email:"harimohan@gmail.com"
      },

       {
      name:"Harsh",
      age:28,
      email:"harsh@gmail.com"
      },

       {
      name:"Rajesh",
      age:32,
      email:"rajesh@gmail.com"
      },

       {
      name:"Saddam",
      age:35,
      email:"saddam@gmail.com"
      },

      
    ]
  },

   {
    name:"MDSU College Ajmer",
    city:"Ajmer",
    website:"www.mdsu.com",
        student : [
      {
      name:"Varsha",
      age:31,
      email:"varsha@gmail.com"
      },

       {
      name:"Arun",
      age:29,
      email:"arun@gmail.com"
      },

       {
      name:"Bharat",
      age:29,
      email:"bharat@gmail.com"
      },

       {
      name:"Raju",
      age:40,
      email:"raju@gmail.com"
      },

      
    ]
  },

  
]

  return (
    <div>
     
      {
        collegeData.map((college)=>(
          <div>
           <College college={college}/>

          </div>
        ))
      }
    </div>
  )
}

export default App
