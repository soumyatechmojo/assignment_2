import React from 'react'

export default function List(props) {
  return (
    <div>
      {props.tasks.join(",")}
    </div>
  )
}
