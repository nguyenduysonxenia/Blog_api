import express from "express";
import siteRouter from "./stiteRouter";
import postRouter from "./postRouter";
function router(app: express.Application): void {
  app.use('/api/users',siteRouter)
  app.use('/api/posts',postRouter)
}

export default router;
