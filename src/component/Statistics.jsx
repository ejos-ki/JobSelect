import React from 'react'
import data from "../data.json"
import { elements } from 'chart.js'

export default function Statistics() {
  return (
    <article className='statContainer'>
        <h2> We are growing in Numbers </h2>


        <section className="description">
            <select name="" id="">
                { data.municipalities.map((place, index) => (
                    <option key={index} value={place}> { place + ", Sorsogon" }</option>
                  ))
                }
            </select>

            <span>
              <div className="card1">
                <h5 className='jobs'> Job postings</h5>
                  As of january 2025 job posting reach 100,
                  increase of about 20% compare to last month
              </div>

              <div className="card2">
                <h5 className='slots'> Job vacancy</h5>
                  As of january 2025 job posting reach 100,
                  increase of about 20% compare to last month
              </div>
            </span>
        </section>
        
        <section className="graph">
            Graph Here
        </section>
    </article>
  )
}


//ctrl + shift + l to select all same same