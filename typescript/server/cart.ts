
import { getDeviceFromUserAgent } from './util/device';

import { analytics, app } from './order';


app.post('/cart', (req, res) => {
  analytics.track({
    userId: req.body.userId,
    event: 'Add to cart',
    properties: { 
      productId: `${req.body.productId}`, 
      quantity: `${req.body.quantity}`, 
      device: getDeviceFromUserAgent(req) 
    },
  });
  res.sendStatus(201);
});

app.post('/cart', (req, res) => {
  analytics.track({
    userId: req.body.userId,
    event: 'Add to cart',
    properties: { 
      productId: `${req.body.productId}`, 
      quantity: `${req.body.quantity}`, 
      device: getDeviceFromUserAgent(req) 
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
        device: getDeviceFromUserAgent(req) 
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
        device: getDeviceFromUserAgent(req) 
      }
    });
    res.sendStatus(201);
  });