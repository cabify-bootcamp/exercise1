
class ClientMessagingApp {
    constructor(){
        this.hostname = 'messageapp' 
        this.port = '3000'
        this.service = axios.create({
            baseURL: `http://${hostname}:${port}`
        })

        sendMessage(destination, body) {
            return this.service.post('/message', (req, res, next) {
                .then( )
                .catch( )
            })
        }
    }

}

module.exports = ClientMessagingAp()
