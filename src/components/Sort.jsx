import React from 'react'

export default function Sort({ SortProducts }) {
  return (
    <div className='Sort'>
        <div>
        <button className='button' onClick={() => SortProducts('asc')}>Сортувати за зростанням</button>
        <button className='button' onClick={() => SortProducts('desc')}>Сортувати за спаданням</button>
        </div>
    </div>
  )
}
