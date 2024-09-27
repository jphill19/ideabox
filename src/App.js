import logo from './logo.svg';
import './App.css';
import Ideas from './components/Ideas/Ideas';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]
  
  // const [ideas, setIdeas] = useState(dummyIdeas);
  const [ideas, setIdeas] = useState([]);

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }

  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <p>Hi!</p>
      {!ideas.length && <h2>No ideas yet -- add some!</h2>}
      <Form addIdea={addIdea}/>
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
  </main>
  );
}

export default App;
