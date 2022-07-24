import React from 'react'
import Projects from './projects'
const data=[
    {
        name:"Tic Tac Toe",
        description:"Tic Tac Toe App using android, java and sqllite database.",
        skills:['Android','Java'],
        github:"https://github.com/jaiminpanna/tic-tac-toe"
    },

    {
        name:"React Portfolio",
        description:"My Personal Portfoio website using ReactJS, Html and Css",
        skills:['Html','Css','Javascript','ReactJS'],
        github:"https://github.com/jaiminpanna/React-Portfolio"
    }]


function Projectcontainer() {
  
  return (
    <div className='container'>
        <h1>Projects</h1>
        {
            data.map(projectitem=>{
                return <Projects projectitem={projectitem}/>
            })
        }
      
    </div>
  )
}

export default Projectcontainer