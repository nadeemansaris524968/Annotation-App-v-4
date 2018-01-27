
// /* SEARCH DATA CONTROLLER */


// /* Annotation Controller */


// /* UIController */
// var UICtrl = (function() {
//   var getAutocompleteOptions = function(searchData) {
//     // Options for EasyAutocomplete
//     var options = { 
//       data: searchData, 
//       listLocation: function(element) {
//         return element["Major Anatomic Region"];
//       }, 
//       getValue: "name", 
//       list: { 
//         match: { enabled: true }, 
//         maxNumberOfElements: 50, 
//         onChooseEvent: function() {
//           var majorAnatomy = $(DOMStrings.anatomy).val();

//           searchData["Major Anatomic Region"].find(function(element) {
//             if (element.name === majorAnatomy) {
//               var findings = element["Findings"];
//               UICtrl.setupFindings(findings);
//             }
//           });
//         }
//       }, 
//       theme: "square"
//     };

//     return options;
//   };

//   return {
//     createAttributeDiv: function(attribute, parentDivID, searchData) {
//       // AttributeDiv
//       // var attributeDiv = document.createElement("div");
//       // attributeDiv.setAttribute("class", `${parentDivID} divAttribute`);

//       // Heading inside AttributeDiv
//       // var attributeHeading = document.createElement("div");
//       // attributeHeading.style.fontSize = "8px";
//       // attributeHeading.style.color = "#c14343";
//       // attributeHeading.textContent = attribute.Key;

//       // Edit Pencil inside AttributeDiv
//       // var editPencil = document.createElement('span');
//       // editPencil.setAttribute('class', 'glyphicon glyphicon-pencil');
//       // editPencil.style.position = 'relative';
//       // editPencil.style.cssFloat = 'right';

//       // Autocomplete Input field inside AttributeDiv
//       // var attributeInput = document.createElement("input");
//       // attributeInput.setAttribute("type", "text");
//       // attributeInput.setAttribute("class", parentDivID);
//       // attributeInput.setAttribute("id", attribute.Key);      
//       // attributeInput.setAttribute("value", attribute.Value);
//       // attributeInput.style.fontSize = "10px";
//       // attributeInput.style.marginTop = "3px";

//       // if (attribute.Key === 'Major Anatomic Region') {
//       //   setupAnatomy(searchData, '');
//       // }

//       // // attributeDiv.appendChild(editPencil);
//       // attributeDiv.appendChild(attributeHeading);
//       // attributeDiv.appendChild(attributeInput);

//       // return attributeDiv;
//     },

//     createFindingDiv: function(findingRows, searchData) {
//       if (findingRows.length > 0) {
//         // Create FindingsDiv
//         for (var i = 0; i < findingRows.length; i++) {
//           var findingsDiv = document.createElement("div");
//           var findingsRowClass = "finding_row_" + i;
//           findingsDiv.setAttribute(
//             "class",
//             `alert alert-info alert-dismissable ${findingsRowClass}`
//           );
//           findingsDiv.style.overflow = "hidden";

//           var closeFindingsAnchor = document.createElement("a");
//           closeFindingsAnchor.setAttribute("href", "#");
//           closeFindingsAnchor.setAttribute("class", "close");
//           closeFindingsAnchor.setAttribute("data-dismiss", "alert");
//           closeFindingsAnchor.setAttribute("aria-label", "close");
//           closeFindingsAnchor.textContent = "x";

//           findingsDiv.appendChild(closeFindingsAnchor);

//           // Create attributeDivs
//           for (var j = 0; j < findingRows[i]["row"].length; j++) {
//             var attribute = findingRows[i]["row"][j];

//             var attributeDiv = document.createElement('div');
//             attributeDiv.setAttribute("class", `${findingsRowClass} divAttribute`);

//             var attributeHeading = document.createElement("div");
//             attributeHeading.style.fontSize = "8px";
//             attributeHeading.style.color = "#c14343";
//             attributeHeading.textContent = attribute.Key;

//             // var attributeInput = document.createElement("input");
//             var attributeInput = $('<input>');
//             // attributeInput.setAttribute("type", "text");
//             // attributeInput.setAttribute("class", `${findingsRowClass}`);
//             // attributeInput.setAttribute("id", `${j}`);
//             // attributeInput.setAttribute("value", attribute.Value);
//             $(attributeInput).attr('type', 'text');
//             $(attributeInput).attr('class', `${findingsRowClass}`);
//             $(attributeInput).attr('id', `${j}`);
//             $(attributeInput).attr('value', attribute.Value);
//             // $(attributeInput).style.fontSize = "10px";
//             // attributeInput.style.marginTop = "3px";

//             var inputSelector = '#' + attributeInput.id + '.' + attributeInput.className;
//             console.log('Input selector: ', inputSelector);
//             // Setup anatomy input
//             var options = getAutocompleteOptions(searchData);
//             // $().easyAutocomplete(options);
//             $(attributeInput).easyAutocomplete(options);

//             attributeDiv.appendChild(attributeHeading);
//             // attributeDiv.appendChild(attributeInput);
//             $(attributeInput).appendTo($(attributeDiv));

//             findingsDiv.appendChild(attributeDiv);
//           }

//           var containerDiv = document.getElementById("containerDiv");
//           containerDiv.appendChild(findingsDiv);
//           console.log(findingsDiv);
//         }
//       }
//     }
//   };
// })();

// /* App Controller */
// var controller = (function() {
//   return {
//     init: function() {
//       console.log("Application started");

//       var cxr_key = "152ba901-12f8-44aa-a60e-c5217e1e9497";
//       var findingRows = AnnotationCtrl.getRows(cxr_key);

//       var data = SearchCtrl.getSearchData();

//       UICtrl.createFindingDiv(findingRows, data);
//       var searchData = SearchCtrl.getSearchData();
//       var options = { 
//         data: searchData, 
//         listLocation: function(element) {
//           return element["Major Anatomic Region"];
//         }, 
//         getValue: "name", 
//         list: { 
//           match: { enabled: true }, 
//           maxNumberOfElements: 50, 
//           onChooseEvent: function() {
//             var majorAnatomy = $(DOMStrings.anatomy).val();
  
//             searchData["Major Anatomic Region"].find(function(element) {
//               if (element.name === majorAnatomy) {
//                 var findings = element["Findings"];
//                 UICtrl.setupFindings(findings);
//               }
//             });
//           }
//         }, 
//         theme: "square"
//       };
//       $('input').easyAutocomplete(options);
//     }
//   };
// })(UICtrl, AnnotationCtrl, SearchCtrl);

// controller.init();
