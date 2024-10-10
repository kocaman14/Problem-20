import { useEffect, useState } from 'react'

// todos endpoint'inden tüm todo'ları getirin ve todo bileşeninde görüntüleyin
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos
export default function Todos() {
  const[mission,setMission]=useState([])
  const url = "https://jsonplaceholder.typicode.com/users/1/todos"
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  // }[]
useEffect(()=>{
fetch(url).then((res)=>res.json()).then((data)=>{
console.log(data)
setMission(data)
})
},[])
  return (
    <div className='flex justify-center flex-col items-center py-8'>
      <h1 className='text-2xl font-bold pb-4'>Yapılacaklar Listem</h1>
      <div className='space-y-5'>{mission.map((missions) => {
          const { userId, id, title, completed } = missions;
          return (
            <Todo 
              key={id} 
              userId={userId} 
              id={id} 
              title={title} 
              completed={completed} 
            />
          );
        })}</div>
    </div>
  )
}

function Todo({ title, completed,id }) {
  return (
    <div className='relative flex items-start' key={id}>
      <div className='flex h-6 items-center'>
        <input
          id='completed'
          name='completed'
          type='checkbox'
          defaultChecked={completed}
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
      </div>
      <div className='ml-3 text-sm leading-6'>
        <div className='font-medium text-gray-900'>{title}</div>
      </div>
    </div>
  )
}
