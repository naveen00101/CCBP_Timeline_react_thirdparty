// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="pr-img" />
      <div className="title-and-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
