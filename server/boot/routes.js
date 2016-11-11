// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT


//Custom routes  

var dsConfig = require('../datasources.json');

module.exports = function(app) {
  var bleeprUser = app.models.bleeprUser;

  //verified
  app.get('/verified', function(req, res) {
    res.render('verified');
  });
  
};

