// var imageAnnotation = {
//     "ImageName": "1.png",
//     "SampleID": "1234-5678-9090",
//     "Width": 512,
//     "Height": 512,
//     "Findings": [
//       [{
//         "Key": "Major Anatomic Regions",
//         "Value": "Lungs"
//       }, {
//         "Key": "Findings",
//         "Value": "Mass/Nodule"
//       }, {
//         "Key": "Subanatomy",
//         "Value": "Upper lung zone"
//       }, {
//         "Key": "Laterality Modifier",
//         "Value": "Right"
//       }, {
//         "Key": "Location Modifier 1",
//         "Value": "NA"
//       }, {
//         "Key": "Location Modifier 2",
//         "Value": "NA"
//       }, {
//         "Key": "Character Modifiers 1",
//         "Value": "Non-cavitary"
//       }, {
//         "Key": "Character Modifiers 2",
//         "Value": "Non-calcified"
//       }, {
//         "Key": "Severity Modifier",
//         "Value": "NA"
//       }, {
//         "Key": "# Modifiers",
//         "Value": "Solitary"
//       }, {
//         "Key": "Size Modifiers Qualitative",
//         "Value": "Small"
//       }, {
//         "Key": "Size Modifiers Quantitative",
//         "Value": "NA"
//       }],
//       [{
//         "Key": "Major Anatomic Regions",
//         "Value": "Pleura"
//       }, {
//         "Key": "Findings",
//         "Value": "None"
//       }, {
//         "Key": "Subanatomy",
//         "Value": "NA"
//       }, {
//         "Key": "Laterality Modifier",
//         "Value": "NA"
//       }, {
//         "Key": "Location Modifier 1",
//         "Value": "NA"
//       }, {
//         "Key": "Location Modifier 2",
//         "Value": "NA"
//       }, {
//         "Key": "Character Modifiers 1",
//         "Value": "NA"
//       }, {
//         "Key": "Character Modifiers 2",
//         "Value": "NA"
//       }, {
//         "Key": "Severity Modifier",
//         "Value": "NA"
//       }, {
//         "Key": "# Modifiers",
//         "Value": "NA"
//       }, {
//         "Key": "Size Modifiers Qualitative",
//         "Value": "NA"
//       }, {
//         "Key": "Size Modifiers Quantitative",
//         "Value": "NA"
//       }]
//     ]
//   }

//   function createFindingDiv(finding) {
//     var result = '<div class="alert alert-info alert-dismissable" style="overflow: hidden;"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
//     for (var i = 0; i < finding.length; i++) {
//       result += crateAttributeDiv(finding[i]);
//     }
//     return result + "</div>";
//   }

//   function crateAttributeDiv(attribute) {
//   /*   return '<div  class="divAttribute"><div style="font-size:8px;color:#c14343;">' + attribute.Key + '</div>' + '<div>' + attribute.Value + '</div></div>'; */

//   return '<div  class="divAttribute"><span class="glyphicon glyphicon-pencil" style="position:relative;float:right;"></span><div style="font-size:8px;color:#c14343;">' + attribute.Key + '</div>' + '<input style="font-size:10px;margin-top:3px;" type="text" value="' + attribute.Value + '"></div>';

//   }

//   $("#containerDiv").append(createFindingDiv(imageAnnotation.Findings[0]));
//   $("#containerDiv").append(createFindingDiv(imageAnnotation.Findings[1]));

/* Annotation Controller */
var AnnotationCtrl = (function(){
  var preAnnotation = {
    // "CXR10_IM-0002-2001":
    "152ba901-12f8-44aa-a60e-c5217e1e9497": {
      "col": [
        "Major Anatomic Regions",
        "Findings",
        "Subanatomy",
        "Laterality Modifier",
        "Location Modifier 1",
        "Location Modifier 2",
        "Character Modifiers 1",
        "Character Modifiers 2",
        "Severity Modifier",
        "# Modifiers",
        "Size Modifiers Qualitative",
        "Size Modifiers Quantitative"
      ],
      "annotation_rows": [{
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Lungs"
            },
            {
              "col-title": "Findings",
              "value": "Mass/Nodule"
            },
            {
              "col-title": "Subanatomy",
              "value": "Upper lung zone"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Right"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "Non-cavitary"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "Non-calcified"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "Solitary"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "Small"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Pleura"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Major airways"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Mediastinum"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Vasculature"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Bones"
            },
            {
              "col-title": "Findings",
              "value": "Scoliosis"
            },
            {
              "col-title": "Subanatomy",
              "value": "Thoracic spine"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "Left convex"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Mild"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Other"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        }
      ]
    },
    // "CXR1018_IM-0014-5001":
    "2f6789a7-ce71-433c-923b-27f56f43fb20": {
      "col": [
        "Major Anatomic Regions",
        "Findings",
        "Subanatomy",
        "Laterality Modifier",
        "Location Modifier 1",
        "Location Modifier 2",
        "Character Modifiers 1",
        "Character Modifiers 2",
        "Severity Modifier",
        "# Modifiers",
        "Size Modifiers Qualitative",
        "Size Modifiers Quantitative"
      ],
      "annotation_rows": [{
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Lungs"
            },
            {
              "col-title": "Findings",
              "value": "Calcified hilar nodes"
            },
            {
              "col-title": "Subanatomy",
              "value": "Hila"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Left"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Pleura"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Major airways"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Mediastinum"
            },
            {
              "col-title": "Findings",
              "value": "Enlarged cardiac silhouette"
            },
            {
              "col-title": "Subanatomy",
              "value": "Cardiac silhouette"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Mild"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Vasculature"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Bones"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Other"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        }
      ]
    },
    // "CXR1033_IM-0027-4004":
    "b128d8c7-cce1-493b-8f89-dffd19c4e29d": {
      "col": [
        "Major Anatomic Regions",
        "Findings",
        "Subanatomy",
        "Laterality Modifier",
        "Location Modifier 1",
        "Location Modifier 2",
        "Character Modifiers 1",
        "Character Modifiers 2",
        "Severity Modifier",
        "# Modifiers",
        "Size Modifiers Qualitative",
        "Size Modifiers Quantitative"
      ],
      "annotation_rows": [{
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Lungs"
            },
            {
              "col-title": "Findings",
              "value": "Hypoaeration"
            },
            {
              "col-title": "Subanatomy",
              "value": "All lung zones"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Bilateral"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Severe"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Lungs"
            },
            {
              "col-title": "Findings",
              "value": "Mass/Nodule"
            },
            {
              "col-title": "Subanatomy",
              "value": "Lower lung zone"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Right"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "Non-cavitary"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "Non-calcified"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "Solitary"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "Moderate"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Pleura"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Major airways"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Mediastinum"
            },
            {
              "col-title": "Findings",
              "value": "Enlarged cardiac silhouette"
            },
            {
              "col-title": "Subanatomy",
              "value": "Cardiac silhouette"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Mild"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Mediastinum"
            },
            {
              "col-title": "Findings",
              "value": "Obscuration of the diaphragmatic silhouette"
            },
            {
              "col-title": "Subanatomy",
              "value": "Hemidiaphragm"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "left"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "Small"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Vasculature"
            },
            {
              "col-title": "Findings",
              "value": "Vascular redistribution"
            },
            {
              "col-title": "Subanatomy",
              "value": "Pulmonary veins"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Bilateral"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Moderate"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Bones"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Other"
            },
            {
              "col-title": "Findings",
              "value": "EKG leads and wires"
            },
            {
              "col-title": "Subanatomy",
              "value": "Chest wall"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Bilateral"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        }
      ]
    },
    // "CXR1034_IM-0028-1001":
    "9a797816-c090-4338-a074-c19974d5ffb3": {
      "col": [
        "Major Anatomic Regions",
        "Findings",
        "Subanatomy",
        "Laterality Modifier",
        "Location Modifier 1",
        "Location Modifier 2",
        "Character Modifiers 1",
        "Character Modifiers 2",
        "Severity Modifier",
        "# Modifiers",
        "Size Modifiers Qualitative",
        "Size Modifiers Quantitative"
      ],
      "annotation_rows": [{
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Lungs"
            },
            {
              "col-title": "Findings",
              "value": "Enlarged hilum"
            },
            {
              "col-title": "Subanatomy",
              "value": "Hila"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Bilateral"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Moderate"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Pleura"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Major airways"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Mediastinum"
            },
            {
              "col-title": "Findings",
              "value": "Obscuration of the diaphragmatic silhouette"
            },
            {
              "col-title": "Subanatomy",
              "value": "Hemidiaphragm"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Left"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "Moderate"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Mediastinum"
            },
            {
              "col-title": "Findings",
              "value": "Enlarged cardiac silhouette"
            },
            {
              "col-title": "Subanatomy",
              "value": "Cardiac silhouette"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Moderate"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Vasculature"
            },
            {
              "col-title": "Findings",
              "value": "Vascular redistribution"
            },
            {
              "col-title": "Subanatomy",
              "value": "Pulmonary veins"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Bilateral"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Moderate"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Bones"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Other"
            },
            {
              "col-title": "Findings",
              "value": "? Some subdiaphragmatic abnormality"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        }
      ]
    },
    // "CXR1041_IM-0033-1001":
    "b863b397-a1ff-45be-ac2f-ee3c0024514d": {
      "col": [
        "Major Anatomic Regions",
        "Findings",
        "Subanatomy",
        "Laterality Modifier",
        "Location Modifier 1",
        "Location Modifier 2",
        "Character Modifiers 1",
        "Character Modifiers 2",
        "Severity Modifier",
        "# Modifiers",
        "Size Modifiers Qualitative",
        "Size Modifiers Quantitative"
      ],
      "annotation_rows": [{
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Lungs"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Pleura"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Major airways"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Mediastinum"
            },
            {
              "col-title": "Findings",
              "value": "Enlarged cardiac silhouette"
            },
            {
              "col-title": "Subanatomy",
              "value": "Cardiac silhouette"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "Left"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "Moderate"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "Moderate"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Vasculature"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Bones"
            },
            {
              "col-title": "Findings",
              "value": "None"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        },
        {
          "row": [{
              "col-title": "Major Anatomic Regions",
              "value": "Other"
            },
            {
              "col-title": "Findings",
              "value": "? Dilated bowels"
            },
            {
              "col-title": "Subanatomy",
              "value": "NA"
            },
            {
              "col-title": "Laterality Modifier",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 1",
              "value": "NA"
            },
            {
              "col-title": "Location Modifier 2",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 1",
              "value": "NA"
            },
            {
              "col-title": "Character Modifiers 2",
              "value": "NA"
            },
            {
              "col-title": "Severity Modifier",
              "value": "NA"
            },
            {
              "col-title": "# Modifiers",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Qualitative",
              "value": "NA"
            },
            {
              "col-title": "Size Modifiers Quantitative",
              "value": "NA"
            }
          ]
        }
      ]
    }
  };

return {
    getColumns: function (cxr_key) {
        // Searching preAnnotation for cxr_key and retrieving cols
        return preAnnotation['', cxr_key]['col'];
    },
    getRows: function (cxr_key) {
        // Searching preAnnotation for cxr_key and retrieving annotation_rows array
        var annotationRows = preAnnotation['', cxr_key]['annotation_rows'];
        var filteredRows = [];

        // Go through each annotation row
        for (var i = 0; i < annotationRows.length; i++) {
            var rowObj = annotationRows[i];
            // Go through each 'col-title' 'value' pair in annotation row 
            for (var j = 0; j < rowObj['row'].length; j++) {
                var cellObj = rowObj['row'][j];
                // If col-title === Findings value != None
                if (cellObj['col-title'] === 'Findings' && cellObj['value'] !== 'None') {
                    // Add row to finalRows & break
                    filteredRows.push(rowObj);
                    break;
                }
            }
        }

        return filteredRows;
    }
};
})();

/* UIController */
var UICtrl = (function(){

  var createAttributeDiv = function () {

  };

  return {
    createFindingDivs: function (findingRow) {
      var findingsDiv = document.createElement('div');
      findingsDiv.setAttribute('class', 'alert alert-info alert-dismissable');
      findingsDiv.style.overflow = 'hidden';

      var closeFindingsAnchor = document.createElement('a');
      closeFindingsAnchor.setAttribute('href', '#');
      closeFindingsAnchor.setAttribute('class', 'close');
      closeFindingsAnchor.setAttribute('data-dismiss', 'alert');
      closeFindingsAnchor.setAttribute('aria-label', 'close');
      closeFindingsAnchor.textContent = 'x';

      findingsDiv.appendChild(closeFindingsAnchor);
      
      var containerDiv = document.getElementById('containerDiv');
      containerDiv.appendChild(findingsDiv);
      console.log(findingsDiv);
    }
  }
})();

/* App Controller */
var controller = (function() {
  return {
    init: function() {
      console.log("Application started");
      
      var cxr_key = '152ba901-12f8-44aa-a60e-c5217e1e9497';
      var findingRows = AnnotationCtrl.getRows(cxr_key);

      UICtrl.createFindingDivs(findingRows);
    }
  };
})(UICtrl, AnnotationCtrl);

controller.init();
