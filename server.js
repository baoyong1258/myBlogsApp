const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

let routerMap = {
    ['']: '/child',
    ['/']: '/child',
    ['/child']: '/child',
    ['/child/:childType']: '/child',
    ['/git']: '/child',
    ['/git/:childType']: '/child',
}

app.prepare()
    .then(() => {
        const server = express()

        for(var key in routerMap){
            server.get(key, (req, res) => {
                return app.render(req, res, routerMap[key], req.query)
            })
        }

        server.get('/posts/:id', (req, res) => {
            return app.render(req, res, '/posts', { id: req.params.id })
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })