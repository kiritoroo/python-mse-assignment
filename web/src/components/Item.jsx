import React, { useState } from 'react'

const Item = ({ link, title, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const cursor = document.querySelector('.cursor')

  const onMove = () => {
    cursor.classList.add("cursor--link-hovered")
  }
  const onLeave = () => {
    cursor.classList.remove("cursor--link-hovered")
  }

  return (
    <>
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="bg-white max-w-sm rounded overflow-hidden shadow-md mx-auto my-2">
      <div className="px-6 py-2">
        <div className="font-normal text-sm mb-2 text-gray-900 tracking-wider">
          <a 
            className={hovered ? 'wave-effect fx-underline' : 'fx-underline'}
            onMouseMove={() => onMove()}
            onMouseLeave={() => onLeave()}
            href={link}
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  </>
  )
}

export default Item
