import React from 'react'
const links = [
  {
    id: 1,
    title: 'Food Scheme',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatur',
    lk: "https://www.mofpi.gov.in/",
  },
  {
    id: 2,
    title: 'Education Scheme',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatu ',
    lk: "https://www.mofpi.gov.in/",

  },
  {
    id: 3,
    title: 'Clothings',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatu',
    lk: "https://www.mofpi.gov.in/",
  },
  {
    id: 4,
    title: 'Clothings',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatu',
    lk: "https://www.mofpi.gov.in/",
  },
]

const handleClick = (link) => {
  window.open("https://www.mofpi.gov.in/");
};

function Schemes() {
  return (
    <div className='links-container'>
      <div href={links.lk} className="scheme-card">
        {links.map((item) => (
          <div key={item.id} className='scheme-box' >
            <div className="scheme-title">
              {item.title}
            </div>
            <div className="scheme-desc">
              {item.desc}
            </div>
            <a href={item.lk}>Click</a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Schemes