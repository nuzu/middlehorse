export default (app, {
    static : { path="file", folder="public", ...staticOptions },
    bodyParser : {...bodyParserOptions},
    cookieParser: {...cookieParserOptions},
    cors: {...corsOptions},
    logging : { loggingFormat='combined', logger='morgan', ...loggingOptions}
   }) => {
   if(!staticOptions.disable) app.use(`/${path}`, require('express').static(folder))
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
   
   return app
}