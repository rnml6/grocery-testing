const Header = ({ name }) => {
  return (
    <>
      <div className=' flex bg-blue-300 duration-500 py-10 m-2 px-15 items-center rounded-2xl tracking-wide hover:bg-green-300 font-serif shadow-2xl justify-between '>
        <h1 className='text-center text-3xl uppercase font-bold'>{name}</h1>

        <div className='flex gap-10 text-lg'>
          <div className='border-b duration-300 hover:bg-white px-5 hover:border-none hover:rounded-md hover:scale-110 hover:shadow-2xl'>
            Home
          </div>
          <div className='border-b duration-300 hover:bg-white px-5 hover:border-none hover:rounded-md hover:scale-110 hover:shadow-2xl'>
            Services
          </div>
          <div className='border-b duration-300 hover:bg-white px-5 hover:border-none hover:rounded-md hover:scale-110 hover:shadow-2xl'>
            Contact
          </div>
          <div className='border-b duration-300 hover:bg-white px-5 hover:border-none hover:rounded-md hover:scale-110 hover:shadow-2xl'>
            About
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
