import React from 'react'

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="list">
        <ul>
          <li>
            <a href="#intro">HOME</a>
          </li>
          <br/>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <br/>
          <li>
            <a href="#sample1">INLINE CSS</a>
          </li>
          <br/>
          <li>
           
            <a href="#sample2">INTERNAL CSS</a>
          </li>
          <br/>
          <li>
            <a href="#sample3">EXTERNAL CSS</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar