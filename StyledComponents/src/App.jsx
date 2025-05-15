import styled from "styled-components"
function App(){

  // const Heading = styled.h1`
  // color:red;
  // border:2px solid yellow;
  // width:300px;
  // margin:20px;
  // padding:15px
  // `

  const Heading = styled.h1({
      color:'red',
      border:'2px solid black',
      width:'300px',
      margin:'20px',
      padding:'15px'
  })


  const StyleBtn = styled.button`
    color:red;
    padding:15px;
    width:90px;
    margin:25px
  `

  const Para = styled.p`
    color:red;
    margin:15px;
    padding:15px;
    `

  return (
    <div>
        <div>
          <h1>Styled Component with React Js</h1>
        </div>

        <div>
         <Heading>Heading 1</Heading>
         <Heading>Heading 2</Heading>
         <Heading>Heading 3</Heading>
         <Heading>Heading 4</Heading>
         <Heading>Heading 5</Heading>
         <Heading>Heading 6</Heading>
         <Heading>Heading 7</Heading>
         <Heading>Heading 8</Heading>
         <StyleBtn>Login</StyleBtn>
         <StyleBtn>SignUp</StyleBtn>
         <StyleBtn>Backup</StyleBtn>
         <StyleBtn>Login</StyleBtn>

        <Para>this is my first paragraph</Para>
        <Para>this is my second paragraph</Para>
        <Para>this is my third paragraph</Para>
        <Para>this is my fourth paragraph</Para>
        <Para>this is my five paragraph</Para>

        </div>

    </div>
  )
}
export default App;