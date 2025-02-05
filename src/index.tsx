import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'

export const config = {
  runtime: 'edge'
}

const app = new Hono()

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  )
}

app.get('/', (c) => {
  console.log(c.req.header("Cookie"))
  return c.html(<View />)
})

app.get('/dev', (c) => {
  return c.json({"msg":"Hello, Hono!"})
})

export default handle(app);