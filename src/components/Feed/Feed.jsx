import React, { useState } from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
 
const Feed = ({ user }) => {
  const  [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  return (
    <div>
      {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto}/>}
      <FeedPhotos 
        setModalPhoto={setModalPhoto} 
        // page={page}
        user={user}/>
    </div>
  )
}

export default Feed