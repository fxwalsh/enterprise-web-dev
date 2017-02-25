import express from 'express';
import data from './friends';

const router = express.Router();

router.get('/friends', (req, res) => {
  res.send({ contests: data.friends });
});

export default router;
