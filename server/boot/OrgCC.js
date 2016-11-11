
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
        console.log("connected to diffusion");

        //create the topicType - this is JSON
        var topicType = diffusion.topics.TopicType.JSON;

            //kick off a 5 second CRON
        	  new CronJob('*/5 * * * * *', function(){

            	  var Orgs = app.models.bleeprOrganisation;	
                var Groups = app.models.bleeprGroup;

                //var subscriptions = [];
                var topics = [];

                //check the count in the organsisation table
                Orgs.count(function(err, count){
                    if(err){

                    }else{
                       if(orgCount == count){
                          console.log("No new organisations");
                       }else{
                          var diff = count - orgCount;
                          orgCount = count;
                         
                          console.log(diff + " new organisations");

                          if(diff <0){

                          }else{
                                //if there are new organisations get them and create topics for them
                                Orgs.find({"limit":diff, "order":"id DESC"},function(err, org){
                             if(err){

                             }else{
                               
                                for(var i=0; i<org.length; i++){

                                  /* CREATE TOPICS FOR ALL AND ON CALL */

                                  console.log("topic created for " + org[i].id+'/ALL');
                                  console.log("topic created for " + org[i].id+'/OnCall');

                                  //Create the topics witt this code
                                  /*session.topics.add(org[i].id+'/ALL', topicType);
                                  topics.push(org[i].id+'/ALL');node
                                  console.log(org[i]);*/

                                  /* CREATE THE GROUPS FOR THIS ORGANISATION 

                                        {
                                          "groupName": "string",
                                          "UserId": [
                                            "string"
                                          ],
                                          "bleeprOrganisationId": "string"
                                        }

                                  */ 

                                  //creates the ALL group

                                    Groups.findOrCreate({
                                          groupName: "ALL",
                                          bleeprOrganisationId: org[i].id
                                    }, function(err){
                                          if(err){
                                            console.log(err);
                                          }

                                    });

                                    //cretes the ON CALL group
                                    Groups.findOrCreate({
                                          groupName: "OnCall",
                                          bleeprOrganisationId: org[i].id
                                    }, function(err){
                                         if(err){
                                            console.log(err);
                                         }

                                    });
                                }

                             } 


                          });
                          }

                        
                       }  

                    }

                }); //end of Orgs.count

            console.log(topics);


        	  console.log('checking  every 5 seconds');
          	}, null, true);
    });

};