import { useState } from "react";

const App = () => {

    const [data,setData] = useState([
        'Ashish','Rahul','Manish','Jitesh','Kavish','Palkesh'
    ])

    const [dataDetails,setDataDetails] = useState([
        {name:"Ashish",age:'28'},
        {name:"Rahul",age:'27'},
        {name:"Manish",age:'25'},
        {name:"Jitesh",age:'22'},
        {name:"Kavish",age:'17'},
        {name:"Babu",age:'15'},
    ])

    const eventHandler = (name) => {

        data[data.length-1] = name
        setData([...data])
    }

    const clickHandler = (age) => {
        dataDetails[dataDetails.length-1].age = age
        setDataDetails([...dataDetails])
    }

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'1900px'
        }}>
            
            <h1>Updating Array in State</h1>
            <div>
                <input 
                type="text" 
                placeholder="Enter Name"
                style={{height:'30px',borderRadius:'5px', width:'175px'}}
                onChange={(event)=>eventHandler(event.target.value)}
                />

                { 
                    data.map((item,index)=>(
                        <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    ))
                }
            </div>

     
            <hr style={{border:'none', height:'1px', backgroundColor:'red'}}/>                

            <div>
                <input
                type="text" 
                placeholder="Enter Name"
                style={{height:'30px',borderRadius:'5px', width:'175px'}}
                onChange={(event)=>clickHandler(event.target.value)}
                />

                {
                    dataDetails.map((item,index)=>(
                        <ul key={index}>
                            <li>{item.name} {item.age}</li>
                        </ul>
                    ))
                }
                    </div>

        </div>
    )
}
export default App;