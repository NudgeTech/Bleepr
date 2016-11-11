module.exports = function(app) {

  var bleeprUser = app.models.bleeprUser;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  /*
    BleeprSystemAdmin - This is for us (the owneer of the system)
    BleeprAdmin       - This is a user that signs up to the system on behalf of an organisation
    BleeprUser        - This is for any invited user of the system
  */


  //check if BleeprSystemAdmin role exisits and if it doesnt create it
  Role.findOne({
      where: { name: "BleeprSystemAdmin"}}, function(err, role){
      if(!role){
          Role.create({
             name: 'BleeprSystemAdmin'
                }, function(err, role) {
                  if (err) throw err;
                  console.log('Created role:', role);
              });  
      }else if (role){
          var type = role.name;
          console.log('This role exisits as:' + type);
      }
  });
  //check if BleeprAdmin role exisits and if it doesnt create it
  Role.findOne({
      where: { name: "BleeprAdmin"}}, function(err, role){
      if(!role){
          Role.create({
             name: 'BleeprAdmin'
                }, function(err, role) {
                  if (err) throw err;
                  console.log('Created role:', role);
              });  
      }else if (role){
          var type = role.name;
          console.log('This role exisits as:' + type);
      }
  });

  //check if BleeprUser role exisits and if it doesnt create it
  Role.findOne({
      where: { name: "BleeprUser"}}, function(err, role){
      if(!role){
          Role.create({
             name: 'BleeprUser'
                }, function(err, role) {
                  if (err) throw err;
                  console.log('Created role:', role);
              });  
      }else if (role){
          var type = role.name;
          console.log('This role exisits as:' + type);
      }
  });


  //This section will create our system user on deployment of the app

    //find user and check if already assigned to admin role or not
   bleeprUser.findOne({
    where: {email: 'bleepr@gmail.com'} 
  }, function(err, user) {
      if(!user){
          console.log ("Bleepr System Admin does not exisit");
      }else if (user){
          console.log ("Bleepr System Admin exisits");
          //check if admin already? 
          var principalId = user.id;
          console.log(principalId);

          RoleMapping.findOne({
            where: {principalId: principalId}}, function(err, role){
              if(!role){
                  console.log('Bleepr System User is not assigned');
                  //this is where to assign the user to the role if not already assigned. 
                    Role.findOne({
                          where: { name: "BleeprSystemAdmin"}}, function(err, role){
                          if(!role){
                            //role does not exisit  
                          }else if (role){
                              role.principals.create({
                                  principalType: RoleMapping.user,
                                  principalId: principalId
                              }, function(err, principal){
                                    console.log("error in mapping role", err);
                              });
                          }
                     });
              }else if (role){
                 console.log('Bleepr System Admin is  assigned', role);
              }
           });
      }
  });

          
}