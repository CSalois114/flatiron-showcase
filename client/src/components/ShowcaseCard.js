import React from 'react'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ShowcaseCard({ showcase }) {
  const user = useSelector(state => state.user.value)
  const navigate = useNavigate()

  const handleCardClick = () => {
    showcase.kind === "blog" && window.open(showcase.url)
    showcase.kind === "project" && navigate(`/users/${user?.id || showcase.user.id}/showcases/${showcase.id}`)
  }

  return (
    <div 
      className={`showcaseCard ${showcase.kind}`}
      onClick={() => handleCardClick()}
    >
      <div className='showcaseCardImgWrapper'>
        <img className='showcaseCardImg' src={showcase.preview_image} />
      </div>
      <div className='showcaseCardInfoWrapper' >
        <div className='showcaseCardFirstLine'>
          <h4 className='showcaseCardName'>{showcase.name}</h4>
          <span className='showcaseCardKind'>{showcase.kind === "blog" ? "Article" : "Project"}</span>
          {user?.name ? 
            null :
            <span className='showcaseCardUser'>{" - "}   
              <a
                onClick={(e) => e.stopPropagation()} 
                href={`/users/${showcase.user?.id}`}>
                {showcase.user?.name}
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