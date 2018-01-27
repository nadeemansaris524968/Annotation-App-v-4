var AnnotationCtrl = (function() {
    var preAnnotation = {
      // "CXR10_IM-0002-2001":
      "152ba901-12f8-44aa-a60e-c5217e1e9497": {
        col: [
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
        annotation_rows: [
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Lungs"
              },
              {
                Key: "Findings",
                Value: "Mass/Nodule"
              },
              {
                Key: "Subanatomy",
                Value: "Upper lung zone"
              },
              {
                Key: "Laterality Modifier",
                Value: "Right"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "Non-cavitary"
              },
              {
                Key: "Character Modifiers 2",
                Value: "Non-calcified"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "Solitary"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "Small"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Pleura"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Major airways"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Mediastinum"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Vasculature"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Bones"
              },
              {
                Key: "Findings",
                Value: "Scoliosis"
              },
              {
                Key: "Subanatomy",
                Value: "Thoracic spine"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "Left convex"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Mild"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Other"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          }
        ]
      },
      // "CXR1018_IM-0014-5001":
      "2f6789a7-ce71-433c-923b-27f56f43fb20": {
        col: [
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
        annotation_rows: [
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Lungs"
              },
              {
                Key: "Findings",
                Value: "Calcified hilar nodes"
              },
              {
                Key: "Subanatomy",
                Value: "Hila"
              },
              {
                Key: "Laterality Modifier",
                Value: "Left"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Pleura"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Major airways"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Mediastinum"
              },
              {
                Key: "Findings",
                Value: "Enlarged cardiac silhouette"
              },
              {
                Key: "Subanatomy",
                Value: "Cardiac silhouette"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Mild"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Vasculature"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Bones"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Other"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          }
        ]
      },
      // "CXR1033_IM-0027-4004":
      "b128d8c7-cce1-493b-8f89-dffd19c4e29d": {
        col: [
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
        annotation_rows: [
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Lungs"
              },
              {
                Key: "Findings",
                Value: "Hypoaeration"
              },
              {
                Key: "Subanatomy",
                Value: "All lung zones"
              },
              {
                Key: "Laterality Modifier",
                Value: "Bilateral"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Severe"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Lungs"
              },
              {
                Key: "Findings",
                Value: "Mass/Nodule"
              },
              {
                Key: "Subanatomy",
                Value: "Lower lung zone"
              },
              {
                Key: "Laterality Modifier",
                Value: "Right"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "Non-cavitary"
              },
              {
                Key: "Character Modifiers 2",
                Value: "Non-calcified"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "Solitary"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "Moderate"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Pleura"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Major airways"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Mediastinum"
              },
              {
                Key: "Findings",
                Value: "Enlarged cardiac silhouette"
              },
              {
                Key: "Subanatomy",
                Value: "Cardiac silhouette"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Mild"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Mediastinum"
              },
              {
                Key: "Findings",
                Value: "Obscuration of the diaphragmatic silhouette"
              },
              {
                Key: "Subanatomy",
                Value: "Hemidiaphragm"
              },
              {
                Key: "Laterality Modifier",
                Value: "left"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "Small"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Vasculature"
              },
              {
                Key: "Findings",
                Value: "Vascular redistribution"
              },
              {
                Key: "Subanatomy",
                Value: "Pulmonary veins"
              },
              {
                Key: "Laterality Modifier",
                Value: "Bilateral"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Moderate"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Bones"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Other"
              },
              {
                Key: "Findings",
                Value: "EKG leads and wires"
              },
              {
                Key: "Subanatomy",
                Value: "Chest wall"
              },
              {
                Key: "Laterality Modifier",
                Value: "Bilateral"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          }
        ]
      },
      // "CXR1034_IM-0028-1001":
      "9a797816-c090-4338-a074-c19974d5ffb3": {
        col: [
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
        annotation_rows: [
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Lungs"
              },
              {
                Key: "Findings",
                Value: "Enlarged hilum"
              },
              {
                Key: "Subanatomy",
                Value: "Hila"
              },
              {
                Key: "Laterality Modifier",
                Value: "Bilateral"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Moderate"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Pleura"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Major airways"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Mediastinum"
              },
              {
                Key: "Findings",
                Value: "Obscuration of the diaphragmatic silhouette"
              },
              {
                Key: "Subanatomy",
                Value: "Hemidiaphragm"
              },
              {
                Key: "Laterality Modifier",
                Value: "Left"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "Moderate"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Mediastinum"
              },
              {
                Key: "Findings",
                Value: "Enlarged cardiac silhouette"
              },
              {
                Key: "Subanatomy",
                Value: "Cardiac silhouette"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Moderate"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Vasculature"
              },
              {
                Key: "Findings",
                Value: "Vascular redistribution"
              },
              {
                Key: "Subanatomy",
                Value: "Pulmonary veins"
              },
              {
                Key: "Laterality Modifier",
                Value: "Bilateral"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Moderate"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Bones"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Other"
              },
              {
                Key: "Findings",
                Value: "? Some subdiaphragmatic abnormality"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          }
        ]
      },
      // "CXR1041_IM-0033-1001":
      "b863b397-a1ff-45be-ac2f-ee3c0024514d": {
        col: [
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
        annotation_rows: [
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Lungs"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Pleura"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Major airways"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Mediastinum"
              },
              {
                Key: "Findings",
                Value: "Enlarged cardiac silhouette"
              },
              {
                Key: "Subanatomy",
                Value: "Cardiac silhouette"
              },
              {
                Key: "Laterality Modifier",
                Value: "Left"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "Moderate"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "Moderate"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Vasculature"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Bones"
              },
              {
                Key: "Findings",
                Value: "None"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          },
          {
            row: [
              {
                Key: "Major Anatomic Regions",
                Value: "Other"
              },
              {
                Key: "Findings",
                Value: "? Dilated bowels"
              },
              {
                Key: "Subanatomy",
                Value: "NA"
              },
              {
                Key: "Laterality Modifier",
                Value: "NA"
              },
              {
                Key: "Location Modifier 1",
                Value: "NA"
              },
              {
                Key: "Location Modifier 2",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 1",
                Value: "NA"
              },
              {
                Key: "Character Modifiers 2",
                Value: "NA"
              },
              {
                Key: "Severity Modifier",
                Value: "NA"
              },
              {
                Key: "# Modifiers",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Qualitative",
                Value: "NA"
              },
              {
                Key: "Size Modifiers Quantitative",
                Value: "NA"
              }
            ]
          }
        ]
      }
    };
  
    return {
      getColumns: function(cxr_key) {
        // Searching preAnnotation for cxr_key and retrieving cols
        return preAnnotation[("", cxr_key)]["col"];
      },
      getRows: function(cxr_key) {
        // Searching preAnnotation for cxr_key and retrieving annotation_rows array
        var annotationRows = preAnnotation[("", cxr_key)]["annotation_rows"];
        var filteredRows = [];
  
        // Go through each annotation row
        for (var i = 0; i < annotationRows.length; i++) {
          var rowObj = annotationRows[i];
          // Go through each 'Key' 'Value' pair in annotation row
          for (var j = 0; j < rowObj["row"].length; j++) {
            var cellObj = rowObj["row"][j];
            // If Key === Findings Value != None
            if (cellObj["Key"] === "Findings" && cellObj["Value"] !== "None") {
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