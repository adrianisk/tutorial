import { Analytics }  from '@segment/analytics-node';
import express from 'express';
import { Request, Response } from './interfaces';
import { getDeviceFromUserAgent } from './util/device';

export const app: express.Application = express();

export const analytics = new Analytics({ writeKey: process.env.SEGMENT_WRITE_KEY! })


app.get('/order', (req: Request, res: Response) => {
  analytics.track({
    userId: req.body.userId,
    event: 'Get order',
    properties: { 
      orderId: 
      req.body.id, 
      device: getDeviceFromUserAgent(req) 
    }
  });

  res.sendStatus(201);
});

app.post('/order', (req: Request, res: Response) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Create order',
      properties: { orderId: req.body.id, 
        numProducts: req.body.numProducts, 
        totalCost: req.body.totalCost, 
        userId: req.body.userId, 
        device: getDeviceFromUserAgent(req) 
      }
    });

    res.sendStatus(201);
  });

app.delete('/order', (req: Request, res: Response) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Delete order',
      properties: { 
        orderId:  req.body.id, 
        device: getDeviceFromUserAgent(req)  
      }
    });
    
    res.sendStatus(201);
  });