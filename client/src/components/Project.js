import React from 'react'
import Video from './Video'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user'
import { clearSkills } from '../features/skills'

export default function Project() {
  const [project, setProject] = useState({})
  const dispatch = useDispatch()

  const userId = window.location.pathname.split("/")[2]
  const projectId = window.location.pathname.split("/")[4]

  useEffect(() => {
    dispatch(clearSkills())

    fetch(`/users/${userId}/showcases/${projectId}`)
    .then(r => r.json())
    .then(setProject)

    fetch(`/users/${userId}`)
    .then(r => r.json())
    .then(data => dispatch(setUser(data)))
  }, [])

  return (
    <div id="projectWrapper">
      <div id="projectHeader">
        <div id="projectInfoContainer">
          <h2 id="projectName">{project.name}</h2>
          <p id="projectSkills">{project.skills?.map(skill => skill.name).join(" | ")}</p>
          <p id="projectDescription">{project.description}</p>
        </div>
        <div id="projectPreviewImgContainer">
          <img id="projectPreviewImg" src={project.preview_image} alt="Project Preview Image" />
        </div>
      </div>

      
      {project.url && (
        <div id='projectHostedWrapper'>
          <button id="tryItNow" onClick={() => window.open(project.url)}> Try It Now </button>
        </div>
      )}

      <div id="projectLinksWrapper">
        {project.videos && (<div id="videosWrapper">
          {project.videos && project.videos.map(video => <Video key={video.id} video={video}/>)}
        </div>)}

        <div id="repositoriesWrapper" >
          <h4>GitHub Repositories</h4>
          {project.repositories?.map(repository => (
            <button
              className='repositoryButton'
              onClick={() => window.open(repository.url)}
              key={repository.id}
            >
              {repository.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
