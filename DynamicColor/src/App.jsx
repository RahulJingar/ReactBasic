import React, { useState } from 'react'

const App = () => {

  const [cardStyle, setCardStyle] = useState(
    {
      border:'1px solid #cccccc33b',
      width:'200px',
      boxShadow:'1px 2px 3px 0px #cccccc57',
      margin:'10px',
      marginLeft:"70px"
    }
  )

  const [textColor, setTextColor] = useState('black')

  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({...cardStyle, backgroundColor:bgColor})
    setTextColor(textColor)
  }

  return (
    <div>
      <h1
      style={{
        color:'red',
        marginLeft:'505px'
      }}
      >
        Dynamic and Conditional Inline Style
      </h1>


      <div style={{
        marginLeft:'600px'
      }}>
        
      <button 
        style={{
          border:'2px solid green',
          padding:'10px',
          backgroundColor:'black',
          color:'white'
        }}
      onClick={()=>updateTheme('gray','red')}>Grey Theme</button>
      <button
       style={{
          border:'2px solid green',
          padding:'10px',
          backgroundColor:'black',
          color:'white'
        }}
      onClick={()=>updateTheme('white','black')}>Default Theme</button>
      <button
       style={{
          border:'2px solid green',
          padding:'10px',
          backgroundColor:'black',
          color:'white'
        }}
      onClick={()=>setGrid(!grid)}>Toggle Grid</button>
      </div>

      <div
      style={{
        // display:'grid' ? 'block': 'flex'
        display:grid ? 'block' : 'flex',
         flexWrap:'wrap'
      }}
      >
         <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{color:textColor}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


       <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


       <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


       <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


       <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


       <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


       <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


        <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


       <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


          <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


          <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


          <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'30px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>


          <div style={cardStyle}>
        <img src="https://img.freepik.com/premium-vector/old-gentleman_24908-26037.jpg" alt="" width='200px'/>
        <div style={{ color:textColor}}>
          <h3
        style={{marginLeft:'50px'}}
        >Rahul Jingar</h3>

        <p style={{marginLeft:'20px'}}><b>Full Stack Developer</b></p>
        </div>
      </div>
    
      </div>
    </div>
  )
}

export default App