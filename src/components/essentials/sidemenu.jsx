import data from '../../data.json'

const SideMenuComponent = () => {
  return (
    <div className='h-screen p-[10px] border-r border-gray-700 pt-[40px] fixed top-[40px] left-0 w-[15vw]'>
        <ul>
            {
              data.sidebar.map(side => 
              <li 
                key={side.name} 
                onClick={() => {
                  const selected = document.getElementById(side.to);
                  selected?.scrollIntoView({ behavior: 'smooth',block : 'center'})
                  selected?.classList.add('alert');
                  setTimeout(()=>{
                    selected?.classList.remove('alert');
                  },3000)
                }}
              >{side.name}</li>)
            }
        </ul>
        <button className="bg-blue-500 text-white p-[20px] text-[14px] shadow-inner shadow-blue-900">Demo</button>
    </div>
  )
}

export default SideMenuComponent