import restify, { Response, Request, Next } from "restify";

const server = restify.createServer();

server.get("/hello", (req: Request, res: Response, next: Next) => {
  res.status(200);
  res.send({
    code: "ok",
  });

  return next();
});

server.get("/q", (req: Request, res: Response, next: Next) => {
  res.status(400);
  res.json({
    message: "hello",
  });

  return next();
});
server.listen(3000, () => console.log("Server is running"));
