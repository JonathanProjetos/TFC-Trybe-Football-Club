import * as express from 'express';
import 'express-async-errors';
import loginRouter from './router/RouterLogin';
import userRouter from './router/RouterUser';
import teamRouter from './router/RouterTeam';
import matcheRouter from './router/RouterMatche';
import leaderBoardRouterHome from './router/RouterLeaderBoardHome';
import leaderBoardRouterAway from './router/RouterLeaderBoardAway';
import leaderBoardRouter from './router/RouterLeaderBoard';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.route();

    this.app.use((
      err: Error,
      req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      const [code, message] = err.message.split('|');
      return res.status(Number(code)).json({ message });
    });
  }

  private route():void {
    this.app.use('/', loginRouter);
    this.app.use('/', userRouter);
    this.app.use('/', teamRouter);
    this.app.use('/', matcheRouter);
    this.app.use('/', leaderBoardRouterHome);
    this.app.use('/', leaderBoardRouterAway);
    this.app.use('/', leaderBoardRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
