function StudentCard()
{
  return(
  <>
    <h1>Tóth Milán</h1>
    <h1>Évfolyam: 13</h1>
    <h1>Kedvenc programozási nyelv: JavaScript</h1>
    <h1>Hobbi: igen</h1>
  </>
  )
} 
 
function StudentList(){
  return(
    <>
      <StudentCard/>


    </>
  )
}

function Header(){
  return(
    <>
      <h1>Tanulói kurzus</h1>
      <hr />
    </>
  )
}


function Footer(){
  return <p>@2026 Frontend</p>
}




function App(){
  return(
    <>
    <Header/>
    <StudentList>
    </StudentList>
    <Footer></Footer>
    </>
    
  )
}


export default App;