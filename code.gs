function phone_prefix_change(){
  var list_from = ['0120', '0121', '0122', '0126', '0128', '0123', '0124', '0125', '0127', '0129', '0162', '0163', '0164', '0165', '0166', '0167', '0168', '0169', '0186', '0188', '0199', '0758', '088', '075', '08']
  var list_to = ['070', '079', '077', '076', '078', '083', '084', '085', '081', '082', '032', '033', '034', '035', '036', '037', '038', '039', '056', '058', '059', '027538', '02838', '0275', '028']
  
  var contacts = ContactsApp.getContacts()
  for (var i in contacts)
  {
    var contact = contacts[i]
    if (contact != null && contact.getFullName() != '')
    {
        Logger.log(contact.getFullName())
        
        all_phones = contact.getPhones()
        for (var j in all_phones){
          var phoneno = all_phones[j].getPhoneNumber()
          Logger.log('From %s', phoneno)
          
          //remove dash
          while(phoneno.indexOf('-') != -1)
          {
            phoneno = phoneno.replace('-', '')
          }
          
          //replace old prefix with new
          for (var k in list_from){
            if (phoneno.indexOf(list_from[k]) == 0){
              phoneno = phoneno.replace(list_from[k], list_to[k])
              break
            }
          }
          Logger.log('To %s', phoneno)
          all_phones[j].setPhoneNumber(phoneno)
      }
    }
  }
}
