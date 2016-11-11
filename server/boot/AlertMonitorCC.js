
/*

Control client running on node.js.  Use Cron Jobs to setup schedulers to poll api's
and interface into the systems models. 

*/

module.exports = function(app) {

    var app = require('../../server/server');    
    var CronJob = require('cron').CronJob;
    var request = require('request');
    var diffusion = require('diffusion');

    var orgCount = 0


    //connect to a diffusion instance
    diffusion.connect({
         host : 'stayingOccasionalAthena.us.reappt.io',
         principal : 'Admin',
         credentials : 'password'

    }).then(function(session){
        console.log("Alert Monitor CC connected to diffusion");
	
                var Alert = app.models.bleeprAlert; //get a reference to the group model

                /*
                      SET UP LISTENER FOR Data (Alerts) on the bleepr selector
                      
                      {
                        "bleeprMessage": "string",
                        "status": "string",
                        "location": "string",
                        "createdBy": "string",
                        "details": "string",
                        "bleeprGroupId": "string"
                      }
                      extract orgId  and group Name(bleepr/orgID/groupName)
                      get the groupID using the findOne({WHERE: name = groupName})
                      create alert using Alert.create({},function(err){});
                     
                */ 


               
    });

};