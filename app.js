/* UIController */
var UICtrl = (function () {

    var totalCurrentFindings = 0;

    var emptyAttributes = [
        { Key: 'Major Anatomic Regions', Value: '' },
        { Key: 'Findings', Value: '' },
        { Key: 'Subanatomy', Value: '' },
        { Key: 'Laterality Modifier', Value: '' },
        { Key: 'Location Modifier 1', Value: '' },
        { Key: 'Location Modifier 2', Value: '' },
        { Key: 'Character Modifiers 1', Value: '' },
        { Key: 'Character Modifiers 2', Value: '' },
        { Key: 'Severity Modifier', Value: '' },
        { Key: '# Modifiers', Value: '' },
        { Key: 'Size Modifiers Qualitative', Value: '' },
        { Key: 'Size Modifiers Quantitative', Value: '' }
    ];

    var DOMStrings = {
        findingNumClass: 'finding_num_',
        attributeNumId: 'attribute_num_',
        addBtnId: '#addBtn'
    }

    var createAttriveDiv = function (attribute, findingNumClass, attributeNumId) {
        var attributeDiv = document.createElement('div');
        attributeDiv.classList.add('divAttribute');

        var attributeHeading = document.createElement('div');
        attributeHeading.style.fontSize = '8px';
        attributeHeading.style.color = '#c14343';
        attributeHeading.textContent = attribute.Key;

        var attributeInput = document.createElement('input');
        attributeInput.setAttribute('type', 'text');
        attributeInput.setAttribute('value', attribute.Value);
        attributeInput.setAttribute('class', `${findingNumClass}`);
        attributeInput.setAttribute('id', `${findingNumClass}${attributeNumId}`);

        attributeDiv.appendChild(attributeHeading);
        attributeDiv.appendChild(attributeInput);

        return attributeDiv;
    };

    var createFindingsDivs = function (findings) {
        if (findings.length > 0) {
            findings.forEach(function (eachFinding, findingIndex) {
                // Create FindingDiv
                var findingDiv = document.createElement('div');
                var findingNumClass = DOMStrings.findingNumClass + totalCurrentFindings;
                findingDiv.setAttribute('class', `alert alert-info alert-dismissable ${findingNumClass}`);
                findingDiv.style.overflow = 'hidden';

                var closeFindingDivAnchor = document.createElement("a");
                closeFindingDivAnchor.setAttribute("href", "#");
                closeFindingDivAnchor.setAttribute("class", "close");
                closeFindingDivAnchor.setAttribute("data-dismiss", "alert");
                closeFindingDivAnchor.setAttribute("aria-label", "close");
                closeFindingDivAnchor.textContent = "x";

                findingDiv.appendChild(closeFindingDivAnchor);

                var findingRow = eachFinding['row'];
                findingRow.forEach(function (eachAttribute, attributeIndex) {
                    // Create AttributeDiv with index 0, 1, 2 ... etc  
                    var attributeId = DOMStrings.attributeNumId + attributeIndex;
                    var attributeDiv = createAttriveDiv(eachAttribute, findingNumClass, attributeId);

                    findingDiv.appendChild(attributeDiv);
                });
                var annotationWrapper = document.querySelector('.annotation-wrapper');
                annotationWrapper.appendChild(findingDiv);

                // Keeping track of number of findings
                totalCurrentFindings++;
            });
        }
    };

    return {
        addNewFinding: function () {

            // Create FindingDiv
            var findingDiv = document.createElement('div');

            // Just use totalFindings since it's already incremented since it 
            // incremented when creating the default finding rows from the supplied data
            var findingNumClass = DOMStrings.findingNumClass + totalCurrentFindings;
            findingDiv.setAttribute('class', `alert alert-info alert-dismissable ${findingNumClass}`);
            findingDiv.style.overflow = 'hidden';

            var closeFindingDivAnchor = document.createElement("a");
            closeFindingDivAnchor.setAttribute("href", "#");
            closeFindingDivAnchor.setAttribute("class", "close");
            closeFindingDivAnchor.setAttribute("data-dismiss", "alert");
            closeFindingDivAnchor.setAttribute("aria-label", "close");
            closeFindingDivAnchor.textContent = "x";

            findingDiv.appendChild(closeFindingDivAnchor);

            // Create AttributesDiv
            // Since we have 12 input fields
            emptyAttributes.forEach(function (eachAttribute, attributeIndex) {
                var attributeId = DOMStrings.attributeNumId + attributeIndex;
                var attributeDiv = createAttriveDiv(eachAttribute, findingNumClass, attributeId);

                findingDiv.appendChild(attributeDiv);
            });

            // Add Event Listerners to input fields
            var annotationWrapper = document.querySelector('.annotation-wrapper');
            annotationWrapper.insertAdjacentElement('afterbegin', findingDiv);

            // Now setup new input fields with easyAutocomplete
            // with current findingNumClass (finding_num_x)
            UICtrl.setupEasyAutocomplete(findingNumClass);

            // *************** No need to decrement when deleting a new finding or an old one ***************
            // *************** No need to decrement when deleting a new finding or an old one ***************
            totalCurrentFindings++;
        },
        setupEasyAutocomplete: function (inputClass) {
            var inputElNodeList = document.querySelectorAll('input.' + inputClass);
            inputElNodeList.forEach(function (inputEl, elIndex) {
                // Only setting up anatomy input
                // Rest of the fields will be setup onChoose of easyAutocomplete
                if (inputEl.id.includes('attribute_num_0')) {
                    UICtrl.setupAnatomy(SearchCtrl.getSearchData(), inputEl);
                }
            });
        },
        setupEventListeners: function () {
            $(DOMStrings.addBtnId).on('click', UICtrl.addNewFinding);
        },
        createDivs: function (findings) {
            createFindingsDivs(findings);
        },
        // Turning Size_2 input to easyAutocomplete
        setupSize_2: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Size_1 input to easyAutocomplete
        setupSize_1: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning NumModifier input to easyAutocomplete
        setupNumModifier: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Severity input to easyAutocomplete
        setupSeverity: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Character_2 input to easyAutocomplete
        setupCharacter_2: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Character_1 input to easyAutocomplete
        setupCharacter_1: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Location_2 input to easyAutocomplete
        setupLocation_2: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Location_1 input to easyAutocomplete
        setupLocation_1: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Laterality input to easyAutocomplete
        setupLaterality: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Subanatomy input to easyAutocomplete
        setupSubAnatomy: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: 'name',
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50,
                    onChooseEvent: function () {
                        var choseSubAnatomy = $(inputId).val();
                        searchData.find(function (subAnatomy) {
                            if (subAnatomy.name === choseSubAnatomy) {
                                var laterality = subAnatomy["Laterality Modifier"];
                                var location_1 = subAnatomy["Location Modifier 1"];
                                var location_2 = subAnatomy["Location Modifier 2"];
                                var character_1 = subAnatomy["Character Modifiers 1"];
                                var character_2 = subAnatomy["Character Modifiers 2"];
                                var severity = subAnatomy["Severity Modifier"];
                                var numModifier = subAnatomy["# Modifiers"];
                                var size_1 = subAnatomy["Size Modifiers Qualitative"];
                                var size_2 = subAnatomy["Size Modifiers Quantitative"];

                                // Go through current element's class siblings and setup accordingly for input
                                var currentClassInputs = document.querySelectorAll('input' + inputClass);
                                currentClassInputs.forEach(function (input) {
                                    if (input.id.includes('attribute_num_3')) {
                                        UICtrl.setupLaterality(laterality, input);
                                    }
                                    if (input.id.includes('attribute_num_4')) {
                                        UICtrl.setupLocation_1(location_1, input);
                                    }
                                    if (input.id.includes('attribute_num_5')) {
                                        UICtrl.setupLocation_2(location_2, input);
                                    }
                                    if (input.id.includes('attribute_num_6')) {
                                        UICtrl.setupCharacter_1(character_1, input);
                                    }
                                    if (input.id.includes('attribute_num_7')) {
                                        UICtrl.setupCharacter_2(character_2, input);
                                    }
                                    if (input.id.includes('attribute_num_8')) {
                                        UICtrl.setupSeverity(severity, input);
                                    }
                                    if (input.id.includes('attribute_num_9')) {
                                        UICtrl.setupNumModifier(numModifier, input);
                                    }
                                    if (input.id.includes('attribute_num_10')) {
                                        UICtrl.setupSize_1(size_1, input);
                                    }
                                    if (input.id.includes('attribute_num_11')) {
                                        UICtrl.setupSize_2(size_2, input);
                                    }
                                });
                            }
                        });
                    }
                },
                theme: 'square'
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Finding input to easyAutocomplete
        setupFindings: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: 'name',
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50,
                    onChooseEvent: function () {
                        var chosenFinding = $(inputId).val();
                        searchData.find(function (finding) {
                            if (finding.name === chosenFinding) {
                                var subAnatomies = finding["Subanatomy"];

                                // Go through current element's class siblings and update setupSubanatomy
                                var currentClassInputs = document.querySelectorAll('input' + inputClass);
                                currentClassInputs.forEach(function (input) {
                                    if (input.id.includes('attribute_num_2')) {
                                        UICtrl.setupSubAnatomy(subAnatomies, input);
                                    }
                                });
                            }
                        });
                    }
                },
                theme: 'square'
            };

            $(inputId).easyAutocomplete(options);
        },
        // Turning Anatomy input to easyAutocomplete
        // onChoose others will be setup
        setupAnatomy: function (searchData, element) {
            var elementId = '#' + element.id;
            var elementClass = '.' + element.className;
            var options = {
                data: searchData,
                listLocation: function (element) {
                    return element["Major Anatomic Region"];
                },
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    maxNumberOfElements: 50,
                    onChooseEvent: function () {
                        var majorAnatomy = $(elementId).val();

                        searchData["Major Anatomic Region"].find(function (element) {
                            if (element.name === majorAnatomy) {
                                var findings = element["Findings"];

                                // Go through current element's class elements (which are basically siblings)
                                // and update setupFinding
                                var currentClassEls = document.querySelectorAll('input' + elementClass);
                                currentClassEls.forEach(function (el) {
                                    if (el.id.includes('attribute_num_1')) {
                                        UICtrl.setupFindings(findings, el);
                                    }
                                });
                            }
                        });
                    }
                },
                theme: "square"
            };

            $(elementId).easyAutocomplete(options);
        }
    };
})();

var appCtrl = (function () {

    return {
        init: function () {
            console.log('Application started');

            var cxr_key = "152ba901-12f8-44aa-a60e-c5217e1e9497";
            var findings = AnnotationCtrl.getRows(cxr_key);

            UICtrl.createDivs(findings);
            UICtrl.setupEventListeners();

            // Initial easyAutocomplete setup for all anatomy fields in findingDivs
            var findingDivsNodeList = document.querySelectorAll('div[class*="finding_num_"]');
            findingDivsNodeList.forEach(function (findingDiv) {
                
                var inputElList = document.querySelectorAll('input[id*="attribute_num_"]');
                inputElList.forEach(function (inputEl, index) {
                    // Only setting up anatomy input
                    // Rest of the fields will be setup onChoose of easyAutocomplete
                    if (inputEl.id.includes('attribute_num_0')) {
                        UICtrl.setupAnatomy(SearchCtrl.getSearchData(), inputEl);
                    }
                });
            });
        }
    }
})(UICtrl, AnnotationCtrl, SearchCtrl);

appCtrl.init();
