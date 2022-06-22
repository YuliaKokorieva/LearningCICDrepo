import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  const visible = useSelector(state=>state.visible)

  return (
    <div>
      <h2>Anecdotes</h2>
      <p>v.4: waiting for teachers approval</p>
      {visible
        ?<Notification/>
        : null}
      <Filter />
      <AnecdoteList />  
      <AnecdoteForm />
   
    </div>
  )
}

export default App