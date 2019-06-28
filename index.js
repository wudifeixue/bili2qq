const biliWs = require('bilibili-live-ws')
//const { CQWebSocket, CQAt } = require('cq-websocket')

let ws = new biliWs(13946381)  // roomId

ws.on('open', () => console.log('Connection is established'))
// Connection is established
ws.on('DANMU_MSG', async ({ info }) => {
  if (!info[0][9]) {
    let message = info[1]
    let mid = info[2][0]
    let uname = info[2][1]
    //dispatch.emit('danmaku', { message, roomid, mid, uname })
    console.log(`${uname}(${mid}): ${message}`)
  }
})
