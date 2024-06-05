import { Analytics }  from '@segment/analytics-node';
import express from 'express';
import { getDeviceFromUserAgent } from './util/device';

export const analytics = new Analytics({ writeKey: process.env.SEGMENT_WRITE_KEY! })
export const app: express.Application = express();

app.post('/cart', (req, res) => {
  analytics.track({
    userId: req.body.userId,
    event: 'Add to cart',
    properties: { 
      productId: `${req.body.productId}`, 
      quantity: `${req.body.quantity}`, 
      device: getDeviceFromUserAgent(req.headers['user-agent']!) 
    },
  });
  res.sendStatus(201);
});

app.post('/savecart', (req, res) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Save for later',
      properties: { 
        productId: `${req.body.productId}`,
        device: getDeviceFromUserAgent(req.headers['user-agent']!) 
      }
    });
    res.sendStatus(201);
  });

app.post('/deletecart', (req, res) => {
    analytics.track({
      userId: req.body.userId,
      event: 'Delete from cart',
      properties: { 
        numOfProducts: parseInt(req.body.numOfProducts),
        device: getDeviceFromUserAgent(req.headers['user-agent']!) 
      }
    });
    res.sendStatus(201);
  });