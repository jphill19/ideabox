
import './Ideas.css';
import Card from '../Card/Card.js'
function Ideas(props){
  console.log(props)
  const { ideas, deleteIdea} = props;

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })

  return (
    <div className='ideas-container'>
    {ideaCards}
  </div>
  )
}

export default Ideas;