
/*

Control client running on node.js.  Use Cron Jobs to setup schedulers to poll api's
and interface into the systems models. 

*/

module.exports = function(app) {

    var app = require('../../server/server');    
    //var CronJob = require('cron').CronJob;
    var request = require('request');
    var diffusion = require('diffusion');

    var orgCount = 0


    //connect to a diffusion instance
    diffusion.connect({
         host : 'stayingOccasionalAthena.us.reappt.io',
         principal : 'Admin',
         credentials : 'password'

    }).then(function(session){
        console.log("Topic Monitor CC connected to diffusion");
	
                var Groups = app.models.bleeprGroup; //get a reference to the group model

                /*
                      SET UP LISTENER FOR TOPICS on the bleepr selector

                */
                       // Register the handler to receive messages at or below the given path. 
                     session.messages.addHandler('BleeprMsg', {

                          onMessage : function(msg) {
                               var jsonObj = diffusion.datatypes.json().readValue(msg.content).get();
                              console.log("a message has been received.");  //message recieved
                              console.log(jsonObj);

                              //create the group in Bleepr DB
                          
                          },
                          onActive : function() {
                              console.log('Handler registered');
                          },
                          onClose : function() {
                              console.log('Handler closed');
                          }
                      }).then(function() {
                          console.log('Registered handler');
                      }, function(e) {
                          console.log('Failed to register handler: ', e);
                      });

              
                  var msgToSend = {
                      "SenderId": "123456", 
                      "GroupName" : "twat"
                  };

                  var content = diffusion.datatypes.json().from(msgToSend);
                //  session.messages.send('test', content);

                   // Start updating the topic every second
                  setInterval(function() {
                          session.messages.send('BleeprMsg', content);
                  }, 1000);




               
    });

};

