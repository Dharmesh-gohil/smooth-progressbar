import { useEffect, useState } from "react"

const Progressbar = () => {
    const [filled, setFilled] = useState(0)
    const [isRunning,setIsRunning]=useState(false)
    useEffect(() => { 
        if (filled < 100 && isRunning) {
            setTimeout(()=>setFilled(prev => prev += 2),100)
        }
    }, [filled,isRunning])
  return (
      <div className="keep-center">
          <div className="progressbar">
              <div style={{height:"100%", width:`${filled}%`, backgroundColor: "#a66cff",transition:"width 0.5s ease-in-out"}}>
              </div>
              <span className="progressPercent">{ filled}%</span>
          </div>
          <button className="btn" onClick={()=>setIsRunning(true)}> ClickMe</button>
      </div>
  )
}
export default Progressbar