import React, { useEffect, useState } from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

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
              fillOpacity: .9,
              stroke: '#eee',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#eee'
            }
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart >
          <VictoryBar 
            alignment='start' 
            style={{ 
              data: { fill: "#eee" },              
            }}
            data={graph}
          ></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs