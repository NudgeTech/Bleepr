'use strict';

module.exports = function(Bleepruser) {
  var app = require('../../server/server');
  var config = require('../../server/config.json');
  var path = require('path');


	/*Bleepruser.afterRemote('create', function(context, Bleepruser, next) {
    console.log('> user.afterRemote triggered');

      var RoleMapping = app.models.RoleMapping;
      var Role = app.models.Role;

                console.log ("Creating Bleepr Admin");
                //check if admin already? 
                var principalId = Bleepruser.id;
                console.log(principalId);

                RoleMapping.findOne({
                  where: {principalId: principalId}}, function(err, role){
                    if(!role){
                        console.log('Bleepr Admin is not yet assigned');
                        //this is where to assign the user to the role if not already assigned. 
                        Role.findOne({
                                where: { name: "BleeprAdmin"}}, function(err, role){
                                if(!role){
                                  //role does not exisit  
                                }else if (role){
                                    role.principals.create({
                                        principalType: RoleMapping.Bleepruser,
                                        principalId: principalId
                                    }, function(err, principal){
                                          if(err){
                                              //error occurs here! NULL
                                          console.log("error in mapping role", err);
                                          }else{
                                            console.log("role assignment successful");

                                          }
                                          
                                    });
                                }
                           });
                    }else if (role){
                       console.log('Bleepr Admin is  assigned', role);
                    }
                });
        

        var options = {
          type: 'email',
          to: Bleepruser.email,
          from: 'noreply@loopback.com',
          subject: 'Thanks for registering.',
          template: path.resolve(__dirname, '../../server/views/verify.ejs'),
          redirect: '/verified',
          user: Bleepruser
        };

        Bleepruser.verify(options, function(err, response) {
          if (err) {
            console.log(err);
            Bleepruser.deleteById(principalId);
            return next(err);
          }

          console.log('> verification email sent:', response);
          console.log(response);

          context.res.render('response', {
            title: 'Signed up successfully',
            content: 'Please check your email and click on the verification link ' +
                'before logging in.',
            redirectTo: '/',
            redirectToLinkText: 'Log in'
          });
        });
  });//end of after remote

  */

};
