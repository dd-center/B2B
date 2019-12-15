const http = require('http')

http
  .createServer(async (req, res) => {
    const p = req.url.substring(1).split('?source=')
    const roomid = Number(p[0]) || 1
    const source = Number(p[1]) || 0
    http
      .request(
        JSON.parse(
          await new Promise((resolve, reject) => {
            require('http')
              .get(
                `http://api.live.bilibili.com/room/v1/Room/playUrl?cid=${roomid}&quality=4&platform=web`
              )
              .on('response', function(res) {
                let finalData = ''
                res.on('data', function(data) {
                  finalData += data
                })
                res.on('end', function() {
                  resolve(finalData.toString())
                })
              })
              .on('error', (err) => {
                console.log('DURL ERR')
                console.log(err)
              })
          })
        ).data.durl[source].url.replace(/\\u0026/g, '&'),
        {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36'
          },
          method: 'GET'
        },
        (response) => {
          response
            .on('data', (chunk) => {
              res.write(chunk)
            })
            .on('end', () => {
              console.log('Error. Try again. ')
              res.end()
            })
            .on('error', (err) => {
              console.log('RESPONSE ERR')
              console.log(err)
            })
        }
      )
      .end()
      .on('error', (err) => {
        console.log('STREAM ERR')
        console.log(err)
      })
  })
  .listen(2002)
