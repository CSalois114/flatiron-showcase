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
        <div className='showcaseCardFirstLine'>
          <h4 className='showcaseCardName'>{showcase.name}</h4>
          <span className='showcaseCardKind'>{showcase.kind === "blog" ? "Article" : "Project"}</span>
          {user?.first_name ? 
            null :
            <span className='showcaseCardUser'>{" - "}   
              <a href={`/users/${showcase.user?.id}`}>
                {`${showcase.user?.first_name} ${showcase.user?.last_name}`}
              </a>
            </span>
          }
        </div>

        <p className='showcaseCardDescription'>{showcase.description}</p>
        
        <p className='showcaseCardSkills'>{showcase.skills.map(skill => skill.name).join(" | ")}</p> 
      </div>
    </div>
  )
}