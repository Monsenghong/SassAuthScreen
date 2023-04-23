module.exports = {
    reactStickMode:true,
    redirects: async ()=>{
        return [
          {
            source:'/',
            destination:'/auth/login',
            permanent: false,
          }
        ]
      }
  }