'use strict';

 

const testItem = 
  {
    "products":[
      {
        "name": "spare ribs",
        "price":10,
        "pics":
        "20110416-pupu-platter-ribs-primary-thumb-625xauto-154500.jpeg",
        "quantity":1}
      ],
      "userInfo":
        {
          "username":
          "Enhui Zhu",
          "email":
          "zhuen2000@163.com"
        },
      "contact":
        {
        "id":11,
        "tel":"07588732089",
        "address1": "51 gorman road",
        "address2": "london",
        "city": "london",
        "postcode":"se18 5sa",
        "user_id":4,
        "created_at":"2019-01-27 18:00:07",
        "updated_at":"2019-01-27 18:00:07"},
        "orderTime":"1548612334",
        "delieverTime":"1548612334",
        "read":"0",
        "status":"0",
        "id":24
      }

angular.module('eshop').service('printService', function() {
	return {
    print: function(data) {
      console.log('print');
      
      window.Printer = require('node-printer');
      var options = {
          media: 'Custom.200x600mm',
          n: 3
      };
      
      // Get available printers list
      console.log(Printer.list());
      window.printer = new Printer('Printer_USB_Thermal_Printer');
      var text = 'Print text directly, when needed: e.g. barcode printers'
      var jobFromText = printer.printText(text);
      
      jobFromText.on('completed', () => {
        jobFromText.cancel();
      });
    }
	}
});