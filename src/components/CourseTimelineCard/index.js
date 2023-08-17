// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="timeline-card-container">
      <div className="title-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list-container">
        {tagsList.map(eachTag => (
          <div className="tag-item-container" key={eachTag.id}>
            <p className="tag-text">{eachTag.name}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
