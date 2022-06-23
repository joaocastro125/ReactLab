import { Event } from './pages/Event'
import { gql, useQuery } from '@apollo/client'
import { Lesson } from './components/Lesson'

const GET_LESSON_QUERY = gql`
query{
  id
  title
}

`
interface Lesson {
  id: string;
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_QUERY)
  console.log(data)
  return (
    // utilizando uma logica do map onde pecorremos e buscamos da graphcms
    // <div>
    //   <ul>
    //     {data?.lessons.map(lesson=>{
    //       return <li key={lesson.id}>{lesson.title}</li>
    //     })}

    // </ul>

    <Event />
    // </div>

  )

}

export default App
