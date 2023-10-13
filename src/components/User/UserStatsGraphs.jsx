import React, { useEffect, useState } from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar, VictoryAxis } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })

    setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b, 0))

    setGraph(graphData)
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie 
          data={graph} 
          innerRadius={50} 
          padding={{top: 20, bottom: 20, left: 80, right: 80}}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fb1',
              strokeWidth: 1,
            },
            labels: {
              fontSize: 14,
              fill: '#eee'
            }            
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar 
            alignment='start' 
            style={{ 
              data: { fill: "#fb1" },                                     
            }}
            data={graph}
          />
          <VictoryAxis  style={{
            axis: { stroke: "white" },
            axisLabel: { fontSize: 20, padding: 30, fill: "white" },
            ticks: { stroke: "white", size: 5, },
            tickLabels: { fontSize: 15, padding: 5, fill: "white" }
          }}/>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs