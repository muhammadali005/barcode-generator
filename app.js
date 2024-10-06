function generateBarcode() {
     const barcodeValue = $('#barcodeInput').val().trim();
     const labelValue = $('#labelInput').val().trim();
   
     $('<canvas id="barcodeContainer"></canvas>').replaceAll('body > canvas');
   
     JsBarcode("#barcodeContainer", barcodeValue, {
       text: labelValue,
       displayValue: true,
       textPosition: "bottom",
       fontSize: 18,
       textMargin: 5,
       lineColor: "#000",
       width: 2,
       height: 100,
       margin: 10
     });
   }
   
   $('#barcodeForm').on('submit', function (event) {
     event.preventDefault();
     generateBarcode();
   });
   