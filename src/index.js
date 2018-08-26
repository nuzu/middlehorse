export default (app, {
    static : { path="file", staticFolder="public", ...staticOptions },
    bodyParser : {...bodyParserOptions},
    cookieParser: {...cookieParserOptions},
    cors: {...corsOptions},
    template: { engine='react', templateExtension='jsx', templateFolder='views', ...templateOptions },
    logging : { loggingFormat='combined', logger='morgan', ...loggingOptions}
   }) => {
   
    if(!staticOptions.disable) app.use(`/${path}`, require('express').static(staticFolder))
   
    if(!loggingOptions.disable) app.use(require(logger)(loggingFormat))
   
    if(!bodyParserOptions.disable) {
        app.use(require('body-parser').json())
        app.use(require('body-parser').urlencoded({ extended: true}))
    }
   
    if(!cookieParserOptions.disable) {
        app.use(require('cookie-parser')())
    }
   
    if(!corsOptions.disable) {
        app.use(require('cors')())
    }
   
    if(!templateOptions.disable) {
        console.log(process.cwd())
        app.set('views', require('path').join(process.cwd(), templateFolder))
        app.set('view engine', templateExtension)
        app.engine(templateExtension, require('consolidate')[engine])

    }

   return app
}