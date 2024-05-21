import { analytics, app } from './cart';
import { Request, Response } from './interfaces';

import { publishToKafka } from './util';

app.get('/user', (req: Request, res: Response) => {
  analytics.track({
    userId: req.body.userId,
    event: 'Get user',
    properties: { userId: req.body.userId }
  });
  publishToKafka('get_user', { userId: req.body.userId });

  res.sendStatus(201)
});


app.post('/edituser', (req: Request, res: Response) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Edit user',
      properties: { userId: req.body.userId }
    });
    publishToKafka('edit_user', { userId: req.body.userId });
  
    res.sendStatus(201)
  });

app.post('/createuser', (req: Request, res: Response) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Create user',
      properties: { userId: req.body.userId, email: req.body.email }
    });
    publishToKafka('create_user', { userId: req.body.userId, email: req.body.email });
  
    res.sendStatus(201)
  });