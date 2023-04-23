// Dependences
import { FC } from "react";

// Interface
interface WebsiteHomeFeatureCardProps {
  icon?: string,
  classes?: string,
  title?: string,
  content?: string
}

const Card: FC<WebsiteHomeFeatureCardProps> = ({ icon, classes, title, content }) => {
  return (
    <div className="feature-card">
      <i className={`${icon} ${classes} icon`} />
      <div className="feature-info">
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
      </div>
    </div> 
  )
}

export default Card;
