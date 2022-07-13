import React from 'react'
import { useSelector} from 'react-redux'

export default function ShowcaseCard({ showcase }) {
  const user = useSelector(state => state.user.value)

  return (
    <div className={`showcaseCard ${showcase.kind}`}>
      <div className='showcaseCardImgWrapper'>
        <img className='showcaseCardImg' src={showcase.preview_image} />
      </div>
      <div className='showcaseCardInfoWrapper' >
        <p className='showcaseCardFirstLine'>
          <span className='showcaseCardKind'>{showcase.kind === "blog" ? "Article" : "Project"}</span>
          <span> - </span>
          <span className='showcaseCardName'>{showcase.name}</span>
          {user.first_name || <span> showcase maker name </span>}
        </p>
        
      </div>
    </div>
  )
}