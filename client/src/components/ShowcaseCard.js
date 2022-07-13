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
          <span className='showcaseCardName'>{showcase.name}</span>
          {user?.first_name ? 
            null :
            <span 
              className='showcaseCardUser'
            >
              {` - Created By: ${showcase.user.first_name} ${showcase.user.last_name}`}
            </span>
          }
        </p>
        
      </div>
    </div>
  )
}