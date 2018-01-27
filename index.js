
/* SEARCH DATA CONTROLLER */
var SearchCtrl = (function() {
  var data = {
    "Major Anatomic Region": [
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
                  { name: "Medium" },
                  { name: "Large" }
                ],
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Cobb angle Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Cobb angle Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Cobb angle Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
              }
            ]
          },
          {
            name: "Findings consistent with granulomatous",
            Subanatomy: [
              {
                name: "All Lung Zones",
                "Laterality Modifier": [
                  { name: "Bilateral" },
                  { name: "Right" }
                ],
                "Location Modifier 1": [{ name: "NA" }],
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
                "Laterality Modifier": [{ name: "Left" }],
                "Location Modifier 1": [{ name: "NA" }],
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
                "Laterality Modifier": [{ name: "Bilateral" }],
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
                "Laterality Modifier": [{ name: "Bilateral" }],
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
              }
            ]
          },
          {
            name: "Paratracheal mass",
            Subanatomy: [
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
              }
            ]
          },
          {
            name: "Mediastinal widening",
            Subanatomy: [
              {
                name: "NA",
                "Laterality Modifier": [{ name: "NA" }],
                "Location Modifier 1": [{ name: "Superior" }],
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                  { name: "Cardiothoracic ration:  X%" }
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
                  { name: "Cardiothoracic ration:  X%" }
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
                "Laterality Modifier": [{ name: "Left" }],
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
                "Laterality Modifier": [{ name: "Left" }],
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measures:" }]
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
                "Character Modifiers 1": [{ name: "NA" }],
                "Character Modifiers 2": [{ name: "NA" }],
                "Severity Modifier": [
                  { name: "Situs inversus" },
                  { name: "Situs indeterminus" }
                ],
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                "Laterality Modifier": [{ name: "NA" }],
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
                name: "Breast",
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
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
                "Laterality Modifier": [{ name: "Left" }, { name: "Right" }],
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
                "Size Modifiers Quantitative": [{ name: "Measure:" }]
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
    getSearchData: function() {
      return data;
    }
  };
})();

/* Annotation Controller */
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

/* UIController */
var UICtrl = (function() {
  var getAutocompleteOptions = function(searchData) {
    // Options for EasyAutocomplete
    var options = { 
      data: searchData, 
      listLocation: function(element) {
        return element["Major Anatomic Region"];
      }, 
      getValue: "name", 
      list: { 
        match: { enabled: true }, 
        maxNumberOfElements: 50, 
        onChooseEvent: function() {
          var majorAnatomy = $(DOMStrings.anatomy).val();

          searchData["Major Anatomic Region"].find(function(element) {
            if (element.name === majorAnatomy) {
              var findings = element["Findings"];
              UICtrl.setupFindings(findings);
            }
          });
        }
      }, 
      theme: "square"
    };

    return options;
  };

  return {
    createAttributeDiv: function(attribute, parentDivID, searchData) {
      // AttributeDiv
      // var attributeDiv = document.createElement("div");
      // attributeDiv.setAttribute("class", `${parentDivID} divAttribute`);

      // Heading inside AttributeDiv
      // var attributeHeading = document.createElement("div");
      // attributeHeading.style.fontSize = "8px";
      // attributeHeading.style.color = "#c14343";
      // attributeHeading.textContent = attribute.Key;

      // Edit Pencil inside AttributeDiv
      // var editPencil = document.createElement('span');
      // editPencil.setAttribute('class', 'glyphicon glyphicon-pencil');
      // editPencil.style.position = 'relative';
      // editPencil.style.cssFloat = 'right';

      // Autocomplete Input field inside AttributeDiv
      // var attributeInput = document.createElement("input");
      // attributeInput.setAttribute("type", "text");
      // attributeInput.setAttribute("class", parentDivID);
      // attributeInput.setAttribute("id", attribute.Key);      
      // attributeInput.setAttribute("value", attribute.Value);
      // attributeInput.style.fontSize = "10px";
      // attributeInput.style.marginTop = "3px";

      // if (attribute.Key === 'Major Anatomic Region') {
      //   setupAnatomy(searchData, '');
      // }

      // // attributeDiv.appendChild(editPencil);
      // attributeDiv.appendChild(attributeHeading);
      // attributeDiv.appendChild(attributeInput);

      // return attributeDiv;
    },

    createFindingDiv: function(findingRows, searchData) {
      if (findingRows.length > 0) {
        // Create FindingsDiv
        for (var i = 0; i < findingRows.length; i++) {
          var findingsDiv = document.createElement("div");
          var findingsRowClass = "finding_row_" + i;
          findingsDiv.setAttribute(
            "class",
            `alert alert-info alert-dismissable ${findingsRowClass}`
          );
          findingsDiv.style.overflow = "hidden";

          var closeFindingsAnchor = document.createElement("a");
          closeFindingsAnchor.setAttribute("href", "#");
          closeFindingsAnchor.setAttribute("class", "close");
          closeFindingsAnchor.setAttribute("data-dismiss", "alert");
          closeFindingsAnchor.setAttribute("aria-label", "close");
          closeFindingsAnchor.textContent = "x";

          findingsDiv.appendChild(closeFindingsAnchor);

          // Create attributeDivs
          for (var j = 0; j < findingRows[i]["row"].length; j++) {
            var attribute = findingRows[i]["row"][j];

            var attributeDiv = document.createElement('div');
            attributeDiv.setAttribute("class", `${findingsRowClass} divAttribute`);

            var attributeHeading = document.createElement("div");
            attributeHeading.style.fontSize = "8px";
            attributeHeading.style.color = "#c14343";
            attributeHeading.textContent = attribute.Key;

            var attributeInput = document.createElement("input");
            attributeInput.setAttribute("type", "text");
            attributeInput.setAttribute("class", `${findingsRowClass}`);
            attributeInput.setAttribute("id", `${j}`);
            attributeInput.setAttribute("value", attribute.Value);
            attributeInput.style.fontSize = "10px";
            attributeInput.style.marginTop = "3px";

            var inputSelector = '#' + attributeInput.id + '.' + attributeInput.className;
            console.log('Input selector: ', inputSelector);
            // Setup anatomy input
            var options = getAutocompleteOptions(searchData);
            $('input').easyAutocomplete(options);

            attributeDiv.appendChild(attributeHeading);
            attributeDiv.appendChild(attributeInput);

            findingsDiv.appendChild(attributeDiv);
          }

          var containerDiv = document.getElementById("containerDiv");
          containerDiv.appendChild(findingsDiv);
          console.log(findingsDiv);
        }
      }
    }
  };
})();

/* App Controller */
var controller = (function() {
  return {
    init: function() {
      console.log("Application started");

      var cxr_key = "152ba901-12f8-44aa-a60e-c5217e1e9497";
      var findingRows = AnnotationCtrl.getRows(cxr_key);

      var data = SearchCtrl.getSearchData();

      UICtrl.createFindingDiv(findingRows, data);
    }
  };
})(UICtrl, AnnotationCtrl, SearchCtrl);

controller.init();
