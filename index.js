import liveServer from 'alive-server'

export default ({ onLoaded, mikser, useLogger }) => {
    onLoaded(async () => {
        const logger = useLogger()
        logger.info('Starting live server')
        liveServer.start({
            wait: 1000,
            root: mikser.options.outputFolder,
            open: false,
            ...mikser.config.live, 
        })
    })
}