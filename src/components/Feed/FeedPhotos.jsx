import React, { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto, page, user}) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6
      const {url, options} = PHOTOS_GET({page, total, user})
      const {response, json} = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request, user, page])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => ( 
        <FeedPhotosItem 
          key={photo.id} 
          setModalPhoto={setModalPhoto} 
          photo={photo} 
        />
        ))}      
      </ul>
    )
  else return null
}

export default FeedPhotos