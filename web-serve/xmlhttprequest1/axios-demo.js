const Axios = require('axios').default

const axios = Axios.create({
  baseURL: 'http://localhost:3334',
  headers: {
    'Content-Type': 'application/json',
  },
})

async function send() {
  const res = await axios.get('/api/test?q=first')
  console.log(res)
  console.log(Object.keys(res))
}

send()
