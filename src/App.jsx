import { useState, useEffect } from 'react'
import './App.css'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts'



function App() {
    const [chart, setChart] = useState([])
    const [isLoading, setIsLoading] = useState(true)
      
    useEffect(() => {
       setTimeout(async function getData(){
        try{
          const response = await fetch('https://restcountries.com/v3.1/region/africa')
        const data = await response.json()
        console.log(data)
        const newData = data.map((pop) => {
          return{
            country : pop.name.common,
            population : pop.population/1000000
          }
         }).sort((a,b) => b.population - a.population).slice(0, 10)
         console.log(newData)
         setChart(newData)


        setIsLoading(false)
        }catch(err){
          alert(err, 'please refresh your browser now')
          setIsLoading(false)
        }
       }, 2000)
    },[])


    if(isLoading){
      return <h1 style={{textAlign : 'center'}}>Please wait, the data is loading....</h1>
    }
  return (
    <>
      {/* <pre>{JSON.stringify(population, null, 2)}</pre> */}

      <div style={{width :'100%', height : '450px', margin : '0px auto'}}>
           <h1 style={{textAlign: 'center'}}>Africa population chart </h1>
          <div className='chart-box'>
             
           <ResponsiveContainer width = "100%" height = " 100%">
            <BarChart data={chart}>
              <XAxis dataKey= 'country' />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Tooltip />

              <Bar dataKey='population'   radius={10}  stroke='orange' fill='orange' fillOpacity={0.3} />
               {/* type='monotone' (no need for this...use to make line curvy but since it is a bar chart..no need) and added a radius prop..it looks cool*/}
            </BarChart>

           </ResponsiveContainer>
          </div>

      </div>
    </>
  )
}

export default App
