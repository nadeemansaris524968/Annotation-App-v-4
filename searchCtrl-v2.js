var SearchCtrl = (function () {
  var data = {
    "Major Anatomic Region": [
      {
        name: "Lungs",
        Findings: [
          {
            name: "Alveolar opacity",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [
                  { name: "Peripheral" },
                  { name: "Central" },
                  { name: "Peripheral and Central" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Faint" },
                  { name: "Moderately dense" },
                  { name: "Very dense" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [
                  { name: "Peripheral" },
                  { name: "Central" },
                  { name: "Peripheral and Central" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Faint" },
                  { name: "Moderately dense" },
                  { name: "Very dense" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [
                  { name: "Peripheral" },
                  { name: "Central" },
                  { name: "Peripheral and Central" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Faint" },
                  { name: "Moderately dense" },
                  { name: "Very dense" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "Peripheral and Central" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Faint" },
                  { name: "Moderately dense" },
                  { name: "Very dense" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Atelectasis",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "All Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Bronchiectesis",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Cylindrical" },
                  { name: "Saccular" },
                  { name: "Varicoid" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Cylindrical" },
                  { name: "Saccular" },
                  { name: "Varicoid" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Cylindrical" },
                  { name: "Saccular" },
                  { name: "Varicoid" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Calcified hilar nodes",
            Subanatomy: [
              {
                name: "Hila",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Cyst/Bulla",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "Single" }, { name: "Multiple" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "Single" }, { name: "Multiple" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "Single" }, { name: "Multiple" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Enlarged hilum",
            Subanatomy: [
              {
                name: "Hila",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Findings consistent with granulomatous disease",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Hypoaeration",
            Subanatomy: [
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Hyperaeration",
            Subanatomy: [
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Increased reticular markings",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Increased reticulonodular markings",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mass/Nodule",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Non-cavitary" },
                  { name: "Thin walled cavity" },
                  { name: "Thick walled cavity" }
                ],
                "Character Modifiers 2": [
                  { name: "Calcified" },
                  { name: "Non-calcified" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [
                  { name: "Solitary" },
                  { name: "Multiple" },
                  { name: "Numerous miliary" }
                ],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Non-cavitary" },
                  { name: "Thin walled cavity" },
                  { name: "Thick walled cavity" }
                ],
                "Character Modifiers 2": [
                  { name: "Calcified" },
                  { name: "Non-calcified" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [
                  { name: "Solitary" },
                  { name: "Multiple" },
                  { name: "Numerous miliary" }
                ],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Non-cavitary" },
                  { name: "Thin walled cavity" },
                  { name: "Thick walled cavity" }
                ],
                "Character Modifiers 2": [
                  { name: "Calcified" },
                  { name: "Non-calcified" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [
                  { name: "Solitary" },
                  { name: "Multiple" },
                  { name: "Numerous miliary" }
                ],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Peribronchial cuffing",
            Subanatomy: [
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Pneumonectomy",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Partial" },
                  { name: "Complete" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          }
        ]
      },
      {
        name: "Major Airways",
        Findings: [
          {
            name: "Tracheal deformity",
            Subanatomy: [
              {
                name: "Trachea",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "Upper" },
                  { name: "Mid" },
                  { name: "Lower" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Narrowed" },
                  { name: "Dilated" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Tracheal displacement",
            Subanatomy: [
              {
                name: "Trachea",
                "Laterality Modifier": [
                  { name: "Leftward" },
                  { name: "Rightward" }
                ],
                "Location Modifier 1": [
                  { name: "Upper" },
                  { name: "Mid" },
                  { name: "Lower" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mainstem bronchus deformity",
            Subanatomy: [
              {
                name: "Mainstem bronchus",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Narrowed" },
                  { name: "Dilated" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Mainstem bronchus displacement",
            Subanatomy: [
              {
                name: "Mainstem bronchus",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Upward" },
                  { name: "Downward" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Bronchial cut-off",
            Subanatomy: [
              {
                name: "Mainstem bronchus",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Endobronchial lesion",
            Subanatomy: [
              {
                name: "Mainstem bronchus",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          }
        ]
      },
      {
        name: "Vasculature",
        Findings: [
          {
            name: "Vascular redistribution",
            Subanatomy: [
              {
                name: "Pulmonary veins",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Pulmonary artery enlargement",
            Subanatomy: [
              {
                name: "Pulmonary arteries",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Pulmonary artery cut-off",
            Subanatomy: [
              {
                name: "Pulmonary arteries",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Anomalous pulmonary vessel",
            Subanatomy: [
              {
                name: "Upper Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Mid Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Lower Lung Zone",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Aortic atherosclerosis",
            Subanatomy: [
              {
                name: "Aorta",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "Ascending" },
                  { name: "Arch" },
                  { name: "Descending" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Aortic dilation",
            Subanatomy: [
              {
                name: "Aorta",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "Ascending" },
                  { name: "Arch" },
                  { name: "Descending" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Obscuration of the descending thoracic aorta",
            Subanatomy: [
              {
                name: "Aorta",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Descending" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Right-sided aortic arch",
            Subanatomy: [
              {
                name: "Aorta",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Arch" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Aorta/great vessel congenital anomaly",
            Subanatomy: [
              {
                name: "Aorta",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          }
        ]
      },
      {
        name: "Mediastinum",
        Findings: [
          {
            name: "Thickened paratracheal stripe",
            Subanatomy: [
              {
                name: "Paratracheal stripe",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Azygous region enlargement",
            Subanatomy: [
              {
                name: "Azygous region",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Mediastinal widening",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Superior" }, { name: "Inferior" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Mediastinal displacement",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pneunomediastinum",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Enlarged cardiac silhouette",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Cardiothoracic ratio:  X%" }
                ]
              }
            ]
          },
          {
            name: "Obscured cardiac silhouette",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Cardiothoracic ratio:  X%" }
                ]
              }
            ]
          },
          {
            name: "Pneumopericardium",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Pneumocardium",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Abnormal shape suggesting congenital heart disease",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Situs inversus",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mitral valve annulus calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Mitral valve annulus" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mitral valve calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Mitral valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mitral valve prosthesis",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Mitral valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Aortic valve calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Aortic valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Aortic valve prosthesis",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Aortic valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Pulmonic valve calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Pulmonic valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Pulmonic valve prosthesis",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Pulmonic valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Tricuspid valve calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Tricuspid valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Tricuspid valve prosthesis",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Tricuspid valve" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Enlarged left atrium",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Atrium" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Enlarged right atrium",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "Right" }],
                "Location Modifier 1": [{ name: "Atrium" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Enlarged left ventricle",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "Left" }],
                "Location Modifier 1": [{ name: "Ventricle" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Left ventricular bulging with calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "Left" }],
                "Location Modifier 1": [{ name: "Ventricle" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Left ventricular bulging without calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "Left" }],
                "Location Modifier 1": [{ name: "Ventricle" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Pericardial calcification",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Pericardium" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Cardiophrenic angle mass",
            Subanatomy: [
              {
                name: "Cardiophrenic angle",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Coronary calcifications",
            Subanatomy: [
              {
                name: "Cardiac silhouette",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mass/Nodule",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Superior" }, { name: "Inferior" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Paratracheal region",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Non-calcified" },
                  { name: "Calcified" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pneumomediastinum",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          }
        ]
      },
      {
        name: "Pleura",
        Findings: [
          {
            name: "Costophrenic angle blunting",
            Subanatomy: [
              {
                name: "Costophrenic angle",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Flattening of the hemidiaphragmatic silhouette",
            Subanatomy: [
              {
                name: "Hemidiaphragm",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Hydropneumothoraces",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Bilateral" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Hydropneumothorax",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Obscuration of the diaphragmatic silhouette",
            Subanatomy: [
              {
                name: "Hemidiaphragm",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pleural calcification",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [
                  { name: "Apical" },
                  { name: "Lateral" },
                  { name: "Basilar/Diaphragmatic" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pleural effusion",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pleural mass",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Apical" },
                  { name: "Lateral" },
                  { name: "Basilar/Diaphragmatic" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pleural masses",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Bilateral" }],
                "Location Modifier 1": [
                  { name: "Apical" },
                  { name: "Lateral" },
                  { name: "Basilar/Diaphragmatic" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pleural thickening",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [
                  { name: "Apical" },
                  { name: "Lateral" },
                  { name: "Basilar/Diaphragmatic" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pneumothoraces",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Bilateral" }],
                "Location Modifier 1": [
                  { name: "Apical" },
                  { name: "Basilar/Diaphragmatic" },
                  { name: "NA" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Pneumothorax",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Apical" },
                  { name: "Basilar/Diaphragmatic" },
                  { name: "NA" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          }
        ]
      },
      {
        name: "Bones",
        Findings: [
          {
            name: "Arthropathy",
            Subanatomy: [
              {
                name: "Acromioclavicular Joint",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Glenohumeral Joint",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Bone Lesion",
            Subanatomy: [
              {
                name: "Cervical spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "C2" },
                  { name: "C3" },
                  { name: "C4" },
                  { name: "C5" },
                  { name: "C6" },
                  { name: "C7" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Clavicle",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Medial" },
                  { name: "Mid" },
                  { name: "Distal" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Humerus",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Head" },
                  { name: "Surgical Neck" },
                  { name: "Anatomic neck" },
                  { name: "Diaphysis" },
                  { name: "Greater tuberosity" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Lumbar Spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "L1" },
                  { name: "L2" },
                  { name: "L3" },
                  { name: "L4" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Ribs",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Rib 1" },
                  { name: "Rib 2" },
                  { name: "Rib 3" },
                  { name: "Rib 4" },
                  { name: "Rib 5" },
                  { name: "Rib 6" },
                  { name: "Rib 7" },
                  { name: "Rib 8" },
                  { name: "Rib 9" },
                  { name: "Rib 10" },
                  { name: "Rib 11" },
                  { name: "Rib 12" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Posterior" },
                  { name: "Lateral" },
                  { name: "Anterior" }
                ],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Scapula",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Spine" },
                  { name: "Body" },
                  { name: "Neck" },
                  { name: "Glenoid" },
                  { name: "Acromion" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Sternum",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "Manubrium" },
                  { name: "Body" },
                  { name: "Xiphoid" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              },
              {
                name: "Thoracic Spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "T1" },
                  { name: "T2" },
                  { name: "T3" },
                  { name: "T4" },
                  { name: "T5" },
                  { name: "T6" },
                  { name: "T7" },
                  { name: "T8" },
                  { name: "T9" },
                  { name: "T10" },
                  { name: "T11" },
                  { name: "T12" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Lytic" },
                  { name: "Sclerotic" },
                  { name: "Pagets-like" }
                ],
                "Character Modifiers 2": [
                  { name: "Focal" },
                  { name: "Diffuse" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Dislocation",
            Subanatomy: [
              {
                name: "Acromioclavicular Joint",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild subluxation" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Glenohumeral Joint",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild subluxation" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Fracture",
            Subanatomy: [
              {
                name: "Cervical spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "C2" },
                  { name: "C3" },
                  { name: "C4" },
                  { name: "C5" },
                  { name: "C6" },
                  { name: "C7" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" },
                  { name: "Compression" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe/Marked" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Clavicle",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Medial" },
                  { name: "Mid" },
                  { name: "Distal" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" }
                ],
                "Character Modifiers 2": [
                  { name: "Comminuted" },
                  { name: "Non-comminuted" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Humerus",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Head" },
                  { name: "Surgical Neck" },
                  { name: "Anatomic neck" },
                  { name: "Diaphysis" },
                  { name: "Greater tuberosity" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" }
                ],
                "Character Modifiers 2": [
                  { name: "Comminuted" },
                  { name: "Non-comminuted" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lumbar Spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "L1" },
                  { name: "L2" },
                  { name: "L3" },
                  { name: "L4" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" },
                  { name: "Compression" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe/Marked" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Ribs",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Rib 1" },
                  { name: "Rib 2" },
                  { name: "Rib 3" },
                  { name: "Rib 4" },
                  { name: "Rib 5" },
                  { name: "Rib 6" },
                  { name: "Rib 7" },
                  { name: "Rib 8" },
                  { name: "Rib 9" },
                  { name: "Rib 10" },
                  { name: "Rib 11" },
                  { name: "Rib 12" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Posterior" },
                  { name: "Lateral" },
                  { name: "Anterior" }
                ],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" }
                ],
                "Character Modifiers 2": [
                  { name: "Comminuted" },
                  { name: "Non-comminuted" },
                  { name: "Segmental" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Scapula",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Spine" },
                  { name: "Body" },
                  { name: "Neck" },
                  { name: "Glenoid" },
                  { name: "Acromion" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" }
                ],
                "Character Modifiers 2": [
                  { name: "Communited" },
                  { name: "Non-comminuted" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Sternum",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "Manubrium" },
                  { name: "Body" },
                  { name: "Xiphoid" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" }
                ],
                "Character Modifiers 2": [
                  { name: "Communited" },
                  { name: "Non-comminuted" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Thoracic Spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "T1" },
                  { name: "T2" },
                  { name: "T3" },
                  { name: "T4" },
                  { name: "T5" },
                  { name: "T6" },
                  { name: "T7" },
                  { name: "T8" },
                  { name: "T9" },
                  { name: "T10" },
                  { name: "T11" },
                  { name: "T12" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Non-displaced" },
                  { name: "Displaced" },
                  { name: "Compression" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe/Marked" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Metal bone implant or fixation hardware",
            Subanatomy: [
              {
                name: "Cervical spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "C2" },
                  { name: "C3" },
                  { name: "C4" },
                  { name: "C5" },
                  { name: "C6" },
                  { name: "C7" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Vertebroplasty" },
                  { name: "Fixation plate and screws" },
                  { name: "Disc replacement" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Clavicle",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Medial" },
                  { name: "Mid" },
                  { name: "Distal" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Fixation wires" },
                  { name: "Fixation plates and screws" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Humerus",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Head" },
                  { name: "Surgical Neck" },
                  { name: "Anatomic neck" },
                  { name: "Diaphysis" },
                  { name: "Greater tuberosity" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Fixation wires" },
                  { name: "Fixation plates and screws" },
                  { name: "Arthroplasty" },
                  { name: "Hemiarthroplasty" },
                  { name: "Intramedullary rods" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lumbar Spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "L1" },
                  { name: "L2" },
                  { name: "L3" },
                  { name: "L4" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Vertebroplasty" },
                  { name: "Fixation plate and screws" },
                  { name: "Disc replacement" },
                  { name: "Spinal Rods" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Ribs",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Rib 1" },
                  { name: "Rib 2" },
                  { name: "Rib 3" },
                  { name: "Rib 4" },
                  { name: "Rib 5" },
                  { name: "Rib 6" },
                  { name: "Rib 7" },
                  { name: "Rib 8" },
                  { name: "Rib 9" },
                  { name: "Rib 10" },
                  { name: "Rib 11" },
                  { name: "Rib 12" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Posterior" },
                  { name: "Lateral" },
                  { name: "Anterior" }
                ],
                "Character Modifiers 1": [{ name: "Fixation Wires" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Scapula",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [
                  { name: "Spine" },
                  { name: "Body" },
                  { name: "Neck" },
                  { name: "Glenoid" },
                  { name: "Acromion" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Orthopedic hardware" },
                  { name: "Fixation plate and screws" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Sternum",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "Manubrium" },
                  { name: "Body" },
                  { name: "Xiphoid" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "Sternal Wires" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Thoracic Spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [
                  { name: "T1" },
                  { name: "T2" },
                  { name: "T3" },
                  { name: "T4" },
                  { name: "T5" },
                  { name: "T6" },
                  { name: "T7" },
                  { name: "T8" },
                  { name: "T9" },
                  { name: "T10" },
                  { name: "T11" },
                  { name: "T12" },
                  { name: "Multiple non-specified" }
                ],
                "Location Modifier 2": [
                  { name: "Body" },
                  { name: "Endplate" },
                  { name: "Transverse process" },
                  { name: "Pedicle" }
                ],
                "Character Modifiers 1": [
                  { name: "Vertebroplasty" },
                  { name: "Fixation plate and screws" },
                  { name: "Disc replacement" },
                  { name: "Spinal Rods" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Scoliosis",
            Subanatomy: [
              {
                name: "Cervical spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Right Convex" },
                  { name: "Left Convex" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "Cobb angle measures:" }]
              },
              {
                name: "Thoracic spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Right Convex" },
                  { name: "Left Convex" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "Cobb angle measures:" }]
              },
              {
                name: "Lumbar spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Right Convex" },
                  { name: "Left Convex" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "Cobb angle measures:" }]
              }
            ]
          },
          {
            name: "Spinal degenerative changes",
            Subanatomy: [
              {
                name: "Cervical spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Thoracic spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              },
              {
                name: "Lumbar spine",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          }
        ]
      },
      {
        name: "Other",
        Findings: [
          {
            name: "Abdominal organ enlargement",
            Subanatomy: [
              {
                name: "Abdomen",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Abdominal organ position",
            Subanatomy: [
              {
                name: "Abdomen",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Situs inversus" },
                  { name: "Situs indeterminus" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Aortic stents",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical appearance" },
                  { name: "Atypical appearance" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name:
              "Automated implantable cardioverter-defibrillator and lead position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical position" },
                  { name: "Improper lead position" },
                  { name: "Wires looped around pacer" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Axillary mass",
            Subanatomy: [
              {
                name: "Axilla",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Axillary masses",
            Subanatomy: [
              {
                name: "Axilla",
                "Laterality Modifier": [{ name: "Bilateral" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Axillary surgical clips",
            Subanatomy: [
              {
                name: "Axilla",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Breast implant",
            Subanatomy: [
              {
                name: "Breast",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Breast implants",
            Subanatomy: [
              {
                name: "Breast",
                "Laterality Modifier": [{ name: "Bilateral" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Cardiac pacemaker and lead position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical position" },
                  { name: "Improper lead position" },
                  { name: "Wires looped around pacer" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Carotid artery calcification",
            Subanatomy: [
              {
                name: "Neck",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "Carotid artery" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Chest tubes position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical position" },
                  { name: "Improper position" },
                  { name: "Too proximal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Postion relative to chest wall:" }
                ]
              }
            ]
          },
          {
            name: "Chest wall mass",
            Subanatomy: [
              {
                name: "Chest wall",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Chest wall masses",
            Subanatomy: [
              {
                name: "Chest wall",
                "Laterality Modifier": [{ name: "Bilateral" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Chest wall subcutaneous emphysema",
            Subanatomy: [
              {
                name: "Chest wall",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Left" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Cholecystectomy clips",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical appearance" },
                  { name: "Atypical appearance" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Coronary stents",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical appearance" },
                  { name: "Atypical appearance" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Dilated stomach",
            Subanatomy: [
              {
                name: "Abdomen",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Mild" },
                  { name: "Moderate" },
                  { name: "Severe" }
                ],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Endotracheal tube position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "In right mainstem bronchus" },
                  { name: "In left mainstem bronchus" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Position relative to the carina" }
                ]
              }
            ]
          },
          {
            name: "Epicardial pacing wires",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical appearance" },
                  { name: "Atypical appearance" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Feeding tube position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [
                  { name: "Positioned improperly in:" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Position relative to gastroesophageal junction:" }
                ]
              }
            ]
          },
          {
            name: "Gastrointestinal junction surgical clips",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical appearance" },
                  { name: "Atypical appearance" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Gastrotomy tube position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical position" },
                  { name: "Improper position" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Hernia",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [
                  { name: "NA" }, 
                  { name: "Left" }, 
                  { name: "Right" }
                ],
                "Location Modifier 1": [
                  { name: "Esophageal hiatus" },
                  { name: "Morgagni" },
                  { name: "Bochdalek" },
                  { name: "Diaphragmatic" }
                ],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Lung biopsy sutures",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "Location: " }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mastectomies",
            Subanatomy: [
              {
                name: "Breast",
                "Laterality Modifier": [{ name: "Bilateral" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mastectomy",
            Subanatomy: [
              {
                name: "Breast",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mediastinal clips",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical appearance" },
                  { name: "Atypical appearance" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Mediastinal drains position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical position" },
                  { name: "Improper position" },
                  { name: "Too proximal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "Number:" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "Multi-lumen central line position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [
                  { name: "Positioned improperly in:" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Postion relative to left atrium:" }
                ]
              }
            ]
          },
          {
            name: "Nasogastric tube position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [
                  { name: "Positioned improperly in:" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Position relative to gastroesophageal junction:" }
                ]
              }
            ]
          },
          {
            name: "Neck subcutaneous emphysema",
            Subanatomy: [
              {
                name: "Neck",
                "Laterality Modifier": [
                  { name: "Left" },
                  { name: "Right" },
                  { name: "Bilateral" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "NA" }]
              }
            ]
          },
          {
            name: "PICC position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [
                  { name: "Positioned improperly in:" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Postion relative to left atrium:" }
                ]
              }
            ]
          },
          {
            name: "Single lumen central line position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [
                  { name: "Positioned improperly in:" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Postion relative to left atrium:" }
                ]
              }
            ]
          },
          {
            name: "Subdiaphragmatic free air",
            Subanatomy: [
              {
                name: "Abdomen",
                "Laterality Modifier": [
                  { name: "Left" },
                  { name: "Right" },
                  { name: "Bilateral" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [
                  { name: "Small" },
                  { name: "Moderate" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "measures:" }]
              }
            ]
          },
          {
            name: "Swan-Ganz catheter position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [
                  { name: "Positioned improperly in:" }
                ],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Postion relative to main pulmonary artery:" }
                ]
              }
            ]
          },
          {
            name: "Tracheostomy tube position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Too proximal" },
                  { name: "Proper position" },
                  { name: "Too distal" },
                  { name: "In right mainstem bronchus" },
                  { name: "In left mainstem bronchus" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Position relative to the carina" }
                ]
              }
            ]
          },
          {
            name: "Ventricular shunt catheter position",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "NA" }],
                "Location Modifier 2": [{ name: "NA" }],
                "Character Modifiers 1": [
                  { name: "Typical position" },
                  { name: "Improper position" },
                  { name: "Too proximal" },
                  { name: "Kinked" }
                ],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [{ name: "NA" }],
                "# Modifiers": [{ name: "NA" }],
                "Size Modifiers Qualitative": [{ name: "NA" }],
                "Size Modifiers Quantitative": [
                  { name: "Postion relative to chest wall:" }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  return {
    getSearchData: function () {
      return data;
    }
  };
})();
