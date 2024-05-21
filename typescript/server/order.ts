import { Request, Response } from './interfaces';
import { analytics, app } from './cart';
import * as util from './util';

app.get('/order', (req: Request, res: Response) => {
  analytics.track({
    userId: req.body.userId,
    event: 'Get order',
    properties: { orderId: req.body.id }
  });
  util.publishToKafka('get_order', { orderId:  req.body.id });
  res.sendStatus(201)
});

app.post('/createorder', (req: Request, res: Response) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Create order',
      properties: { orderId: req.body.id, 
        numProducts: req.body.numProducts, 
        totalCost: req.body.totalCost, 
        userId: req.body.userId
      }
    });
    util.publishToKafka(
      'create_order', 
      { orderId: req.body.id, 
        numProducts: req.body.numProducts, 
        totalCost: req.body.totalCost, 
        userId: req.body.userId
      }
    );
    res.sendStatus(201)
  });

app.post('/deleteorder', (req: Request, res: Response) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Delete order',
      properties: { orderId:  req.body.id }
    });
    util.publishToKafka('delete_order', { orderId:  req.body.id });
    res.sendStatus(201)
  });