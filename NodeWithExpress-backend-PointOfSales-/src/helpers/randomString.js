module.exports = {
  randomString(length) {
    var chars = '0123456789';
    var charLength = chars.length;
    var result = '#';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }

  }





 // randomString: ()=>{
  //   var result           = '';
  //   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   var charactersLength = characters.length;
  //   for ( var i = 0; i < length; i++ ) {
  //       result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }

  //   return result;

  // }