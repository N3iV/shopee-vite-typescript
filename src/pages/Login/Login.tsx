function Login() {
  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1  py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full rounded-sm border border-gray-300 px-2 py-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'>Email không hợp lệ</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='w-full rounded-sm border border-gray-300 px-2 py-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div>
              <button className='buttn w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
