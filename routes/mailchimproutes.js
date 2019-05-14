const express    = require('express');
const authRoutes = express.Router();








 



      authRoutes.post('/contact-us/:toWhom', (req, res, next) => {

        // make api call to mailchimp
        //use node-mailchimp-v3 npm package
        
        res.status(200).json({ message: 'Success' });
      });

   


    
















module.exports = mailChimpRoutes;


