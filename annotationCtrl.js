var AnnotationCtrl = (function () {

  return {
    getRows: function (imageAnnotation) {
      // Searching preAnnotation for cxr_key and retrieving annotation_rows array
      var findingRows = imageAnnotation["Findings"];
      var filteredRows = [];

      // Go through each annotation row
      for (var i = 0; i < findingRows.length; i++) {
        var rowArray = findingRows[i];
        // Go through each 'Key' 'Value' pair in annotation row
        for (var j = 0; j < rowArray.length; j++) {
          var cellObj = rowArray[j];
          // If Key === Findings Value != None
          if (cellObj["Key"] === "Findings" && cellObj["Value"] !== "None") {
            // Add row to finalRows & break
            filteredRows.push(rowArray);
            break;
          }
        }
      }
      console.log('filtered rows: ', JSON.stringify(filteredRows, undefined, 2));
      return filteredRows;
    }
  };
})();