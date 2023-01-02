import { onLoaded, mikser, useLogger } from 'mikser-core'
import liveServer from 'alive-server'

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