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

  // function crateAttributeDiv(attribute) {
  // /*   return '<div  class="divAttribute"><div style="font-size:8px;color:#c14343;">' + attribute.Key + '</div>' + '<div>' + attribute.Value + '</div></div>'; */

  // return '<div  class="divAttribute"><span class="glyphicon glyphicon-pencil" style="position:relative;float:right;"></span><div style="font-size:8px;color:#c14343;">' + attribute.Key + '</div>' + '<input style="font-size:10px;margin-top:3px;" type="text" Value="' + attribute.Value + '"></div>';

  // }

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
              "Key": "Major Anatomic Regions",
              "Value": "Lungs"
            },
            {
              "Key": "Findings",
              "Value": "Mass/Nodule"
            },
            {
              "Key": "Subanatomy",
              "Value": "Upper lung zone"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Right"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "Non-cavitary"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "Non-calcified"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "Solitary"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "Small"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Pleura"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Major airways"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Mediastinum"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Vasculature"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Bones"
            },
            {
              "Key": "Findings",
              "Value": "Scoliosis"
            },
            {
              "Key": "Subanatomy",
              "Value": "Thoracic spine"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "Left convex"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Mild"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Other"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
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
              "Key": "Major Anatomic Regions",
              "Value": "Lungs"
            },
            {
              "Key": "Findings",
              "Value": "Calcified hilar nodes"
            },
            {
              "Key": "Subanatomy",
              "Value": "Hila"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Left"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Pleura"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Major airways"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Mediastinum"
            },
            {
              "Key": "Findings",
              "Value": "Enlarged cardiac silhouette"
            },
            {
              "Key": "Subanatomy",
              "Value": "Cardiac silhouette"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Mild"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Vasculature"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Bones"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Other"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
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
              "Key": "Major Anatomic Regions",
              "Value": "Lungs"
            },
            {
              "Key": "Findings",
              "Value": "Hypoaeration"
            },
            {
              "Key": "Subanatomy",
              "Value": "All lung zones"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Bilateral"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Severe"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Lungs"
            },
            {
              "Key": "Findings",
              "Value": "Mass/Nodule"
            },
            {
              "Key": "Subanatomy",
              "Value": "Lower lung zone"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Right"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "Non-cavitary"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "Non-calcified"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "Solitary"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "Moderate"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Pleura"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Major airways"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Mediastinum"
            },
            {
              "Key": "Findings",
              "Value": "Enlarged cardiac silhouette"
            },
            {
              "Key": "Subanatomy",
              "Value": "Cardiac silhouette"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Mild"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Mediastinum"
            },
            {
              "Key": "Findings",
              "Value": "Obscuration of the diaphragmatic silhouette"
            },
            {
              "Key": "Subanatomy",
              "Value": "Hemidiaphragm"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "left"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "Small"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Vasculature"
            },
            {
              "Key": "Findings",
              "Value": "Vascular redistribution"
            },
            {
              "Key": "Subanatomy",
              "Value": "Pulmonary veins"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Bilateral"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Moderate"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Bones"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Other"
            },
            {
              "Key": "Findings",
              "Value": "EKG leads and wires"
            },
            {
              "Key": "Subanatomy",
              "Value": "Chest wall"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Bilateral"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
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
              "Key": "Major Anatomic Regions",
              "Value": "Lungs"
            },
            {
              "Key": "Findings",
              "Value": "Enlarged hilum"
            },
            {
              "Key": "Subanatomy",
              "Value": "Hila"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Bilateral"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Moderate"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Pleura"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Major airways"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Mediastinum"
            },
            {
              "Key": "Findings",
              "Value": "Obscuration of the diaphragmatic silhouette"
            },
            {
              "Key": "Subanatomy",
              "Value": "Hemidiaphragm"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Left"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "Moderate"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Mediastinum"
            },
            {
              "Key": "Findings",
              "Value": "Enlarged cardiac silhouette"
            },
            {
              "Key": "Subanatomy",
              "Value": "Cardiac silhouette"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Moderate"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Vasculature"
            },
            {
              "Key": "Findings",
              "Value": "Vascular redistribution"
            },
            {
              "Key": "Subanatomy",
              "Value": "Pulmonary veins"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Bilateral"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Moderate"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Bones"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Other"
            },
            {
              "Key": "Findings",
              "Value": "? Some subdiaphragmatic abnormality"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
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
              "Key": "Major Anatomic Regions",
              "Value": "Lungs"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Pleura"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Major airways"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Mediastinum"
            },
            {
              "Key": "Findings",
              "Value": "Enlarged cardiac silhouette"
            },
            {
              "Key": "Subanatomy",
              "Value": "Cardiac silhouette"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "Left"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "Moderate"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "Moderate"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Vasculature"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Bones"
            },
            {
              "Key": "Findings",
              "Value": "None"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
            }
          ]
        },
        {
          "row": [{
              "Key": "Major Anatomic Regions",
              "Value": "Other"
            },
            {
              "Key": "Findings",
              "Value": "? Dilated bowels"
            },
            {
              "Key": "Subanatomy",
              "Value": "NA"
            },
            {
              "Key": "Laterality Modifier",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 1",
              "Value": "NA"
            },
            {
              "Key": "Location Modifier 2",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 1",
              "Value": "NA"
            },
            {
              "Key": "Character Modifiers 2",
              "Value": "NA"
            },
            {
              "Key": "Severity Modifier",
              "Value": "NA"
            },
            {
              "Key": "# Modifiers",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Qualitative",
              "Value": "NA"
            },
            {
              "Key": "Size Modifiers Quantitative",
              "Value": "NA"
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
            // Go through each 'Key' 'Value' pair in annotation row 
            for (var j = 0; j < rowObj['row'].length; j++) {
                var cellObj = rowObj['row'][j];
                // If Key === Findings Value != None
                if (cellObj['Key'] === 'Findings' && cellObj['Value'] !== 'None') {
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

  return {
    createAttributeDiv: function (attribute, parentDivID) {

      // AttributeDiv
      var attributeDiv = document.createElement('div');
      attributeDiv.setAttribute('class', `${parentDivID} divAttribute`);
      attributeDiv.setAttribute('id', attribute.Key);

      // Heading inside AttributeDiv 
      var attributeHeading = document.createElement('div');
      attributeHeading.style.fontSize = '8px';
      attributeHeading.style.color = '#c14343';
      attributeHeading.textContent = attribute.Key;

      // Edit Pencil inside AttributeDiv
      // var editPencil = document.createElement('span');
      // editPencil.setAttribute('class', 'glyphicon glyphicon-pencil');
      // editPencil.style.position = 'relative';
      // editPencil.style.cssFloat = 'right';

      // Autocomplete Input field inside AttributeDiv
      var attributeInput = document.createElement('input');
      attributeInput.setAttribute('type', 'text');
      attributeInput.setAttribute('value', attribute.Value);
      attributeInput.style.fontSize = '10px';
      attributeInput.style.marginTop = '3px';

      // attributeDiv.appendChild(editPencil);
      attributeDiv.appendChild(attributeHeading);
      attributeDiv.appendChild(attributeInput);

      return attributeDiv;
    },
    
    createFindingDiv: function (findingRows) {
      if (findingRows.length > 0) {
        for ( var i = 0; i < findingRows.length; i++) {
          var findingsDiv = document.createElement('div');
          var findingsRowID = 'finding_row_' + i;
          findingsDiv.setAttribute('class', `alert alert-info alert-dismissable ${findingsRowID}`);
          findingsDiv.style.overflow = 'hidden';
    
          var closeFindingsAnchor = document.createElement('a');
          closeFindingsAnchor.setAttribute('href', '#');
          closeFindingsAnchor.setAttribute('class', 'close');
          closeFindingsAnchor.setAttribute('data-dismiss', 'alert');
          closeFindingsAnchor.setAttribute('aria-label', 'close');
          closeFindingsAnchor.textContent = 'x';
    
          findingsDiv.appendChild(closeFindingsAnchor);

          for ( var j = 0; j < findingRows[i]['row'].length; j++) {
            var attributeKeyValue = findingRows[i]['row'][j];
            var attributeDiv = UICtrl.createAttributeDiv(attributeKeyValue, findingsRowID);
            findingsDiv.appendChild(attributeDiv);
          }
          
          var containerDiv = document.getElementById('containerDiv');
          containerDiv.appendChild(findingsDiv);
          console.log(findingsDiv);
        }
      } 
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

      UICtrl.createFindingDiv(findingRows);
    }
  };
})(UICtrl, AnnotationCtrl);

controller.init();
