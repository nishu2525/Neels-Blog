import express from 'express';
import Visit from '../models/visit.model.js';

const router = express.Router()

router.get('/visit-count', async (req, res) => {
    try {
      let visit = await Visit.findOne();
      if (!visit) {
        visit = new Visit();
      }
      visit.count += 1;
      await visit.save();
      res.json({ count: visit.count });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  export default router;