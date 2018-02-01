/* UIController */
var UICtrl = (function () {

    // Just to get numbered findingDivs
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
        addBtnId: '#addBtn',
        saveAllBtn: '#saveAllBtn'
    };

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
        attributeInput.setAttribute('name', `${attribute.Key}`);
        // All inputs must have unique ids hence appending finding_num_x with attribute_num_x
        attributeInput.setAttribute('id', `${findingNumClass}${attributeNumId}`);

        attributeDiv.appendChild(attributeHeading);
        attributeDiv.appendChild(attributeInput);

        return attributeDiv;
    };

    // --------------- --------------- UPDATED --------------- ---------------    
    var createFindingsDivs = function (findings, setupInitialEasyAutocompleteCallback) {
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

                eachFinding.forEach(function (eachAttribute, attributeIndex) {
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
            // Setup EasyAutocomplete for initial findingDivs
            if (typeof setupInitialEasyAutocompleteCallback === 'function') {
                setupInitialEasyAutocompleteCallback();
            }
        }
    };

    // Trigger focus event on input field to show list of available options
    var triggerFocus = function (inputDOMString) {
        // Simulating keypress to trick easyAutocomplete
        // in to displaying the entire list
        var e = jQuery.Event("keyup", { keyCode: 65, which: 65 });
        $(inputDOMString).triggerHandler(e);
        $(inputDOMString).trigger('change');
    };

    return {
        addNewFinding: function () {

            // Create FindingDiv
            var findingDiv = document.createElement('div');

            // Just use totalFindings since it's already incremented since it was
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
        // Getter // --------------- --------------- UPDATED --------------- ---------------
        getAllFindings: function (callBack) {
            // Going through all findingsDiv with class finding_num_x
            var findingsParentArray = [];
            var findingsDivNodeList = document.querySelectorAll('div[class*="finding_num_"]');

            findingsDivNodeList.forEach(function (finding) {
                // Grabbing all input fields from each findingsDiv
                console.log('Finding Div: ', finding);
                var inputNodeList = $(finding).find('input');
                var isAttributeEmpty = false;
                var findingsChildArray = [];

                for (var i = 0; i < inputNodeList.length; i++) {
                    console.log('Input: ', inputNodeList[i]);
                    var key = inputNodeList[i].name;
                    var value = inputNodeList[i].value;
                    if (value !== '') {
                        /*[
                           { Key: 'Major Anatomy', Value: 'Lungs' },
                           { Key: 'Major Anatomy', Value: 'Lungs' } etc
                       ]*/
                        var attributeObj = { Key: key, Value: value };
                        findingsChildArray.push(attributeObj);
                    } else {
                        isAttributeEmpty = true;
                        break;
                    }
                }
                if (!isAttributeEmpty) {
                    findingsParentArray.push(findingsChildArray);
                }
            });
            // ************** ************** ************** //
            // callBack(findingsParentArray);
            console.log(JSON.stringify(findingsParentArray, undefined, 2));
        },
        // For addFindingButton
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
        // --------------- --------------- New Method --------------- ---------------
        // After we've created initial findingDivs from setter data
        setupInitialEasyAutocomplete: function () {
            var inputs = $('div[class*="finding_num_"] :input[id*="attribute_num_0"]');
            for (var i = 0; i < inputs.length; i++) {
                UICtrl.setupAnatomy(SearchCtrl.getSearchData(), inputs[i]);
            }
        },
        // --------------- NOT USED --------------- New Method --------------- ---------------
        // Hides autocomplete lis fort a given inputEl
        // hideList: function (inputEl) {
        //     var eacStr = 'eac-container-';
        //     var eacDivDOMString = '#' + eacStr + inputEl.id;
        //     $(eacDivDOMString).hide();
        // },
        // --------------- NOT USED --------------- New Method --------------- ---------------
        // Checks the autocomplete list if there is only one value available
        // then set that as default input value
        /*
        singleOptionCheck: function (searchData, inputEl, hideListCallback) {
            if (searchData.length < 2) {
                inputEl.setAttribute('value', searchData[0]["name"]);
                hideListCallback(inputEl);
            }
        },
        */
        singleOptionCheck: function (searchData, inputEl) {
            if (searchData.length < 2) {
                inputEl.setAttribute('value', searchData[0]["name"]);
            }
        },
        setupEventListeners: function () {
            $(DOMStrings.addBtnId).on('click', UICtrl.addNewFinding);
            $(DOMStrings.saveAllBtn).on('click', UICtrl.getAllFindings);
        },
        // Setter
        createDivs: function (findings) {
            createFindingsDivs(findings, UICtrl.setupInitialEasyAutocomplete);
        },
        // Turning Size_2 input to easyAutocomplete
        setupSize_2: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning Size_1 input to easyAutocomplete
        setupSize_1: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning NumModifier input to easyAutocomplete
        setupNumModifier: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning Severity input to easyAutocomplete
        setupSeverity: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning Character_2 input to easyAutocomplete
        setupCharacter_2: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning Character_1 input to easyAutocomplete
        setupCharacter_1: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning Location_2 input to easyAutocomplete
        setupLocation_2: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning Location_1 input to easyAutocomplete
        setupLocation_1: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // Turning Laterality input to easyAutocomplete
        setupLaterality: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    },
                    maxNumberOfElements: 50
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        },
        // --------------- --------------- UPDATED --------------- ---------------
        // Turning Subanatomy input to easyAutocomplete
        setupSubAnatomy: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: 'name',
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    },
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
                                /* 
                                    Old Implementation
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
                                    Old Implementation
                                */

                                // New Implementation
                                var inputs = $(inputClass + ' :input');
                                for (var i = 0; i < inputs.length; i++) {
                                    if (inputs[i].id === inputEl.className + 'attribute_num_3') {
                                        UICtrl.setupLaterality(laterality, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_4') {
                                        UICtrl.setupLocation_1(location_1, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_5') {
                                        UICtrl.setupLocation_2(location_2, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_6') {
                                        UICtrl.setupCharacter_1(character_1, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_7') {
                                        UICtrl.setupCharacter_2(character_2, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_8') {
                                        UICtrl.setupSeverity(severity, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_9') {
                                        UICtrl.setupNumModifier(numModifier, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_10') {
                                        UICtrl.setupSize_1(size_1, inputs[i]);
                                    }
                                    if (inputs[i].id === inputEl.className + 'attribute_num_11') {
                                        UICtrl.setupSize_2(size_2, inputs[i]);
                                    }
                                }
                                // New Implementation
                            }
                        });
                    }
                },
                theme: 'square'
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });;
        },
        // --------------- --------------- UPDATED --------------- ---------------
        // Turning Finding input to easyAutocomplete
        setupFindings: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                getValue: 'name',
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    },
                    onChooseEvent: function () {
                        var chosenFinding = $(inputId).val();
                        searchData.find(function (finding) {
                            if (finding.name === chosenFinding) {
                                var subAnatomies = finding["Subanatomy"];

                                // Old Implementation //
                                // Go through current element's class siblings and update setupSubanatomy
                                // var currentClassInputs = document.querySelectorAll('input' + inputClass);
                                // currentClassInputs.forEach(function (input) {
                                //     if (input.id.includes('attribute_num_2')) {
                                //         UICtrl.setupSubAnatomy(subAnatomies, input);
                                //     }
                                // });
                                // Old Implementation //

                                // New Implementation //
                                var inputs = $(inputClass + ' :input[id*="attribute_num_2"]');
                                for (var i = 0; i < inputs.length; i++) {
                                    if (inputs[i].id === inputEl.className + 'attribute_num_2') {
                                        UICtrl.setupSubAnatomy(subAnatomies, inputs[i]);
                                    }
                                }
                                // New Implementation //
                            }
                        });
                    }
                },
                theme: 'square'
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });;
        },
        // --------------- --------------- UPDATED --------------- ---------------
        // Turning Anatomy input to easyAutocomplete
        // onChoose others will be setup
        setupAnatomy: function (searchData, inputEl) {
            var inputId = '#' + inputEl.id;
            var inputClass = '.' + inputEl.className;
            var options = {
                data: searchData,
                listLocation: function (element) {
                    return element["Major Anatomic Region"];
                },
                getValue: "name",
                list: {
                    // match: {
                    //     enabled: true
                    // },
                    maxNumberOfElements: 50,
                    onLoadEvent: function () {
                        // UICtrl.singleOptionCheck(searchData, inputEl, UICtrl.hideList);
                        UICtrl.singleOptionCheck(searchData, inputEl);
                    },
                    onChooseEvent: function () {
                        var majorAnatomy = $(inputId).val();

                        searchData["Major Anatomic Region"].find(function (element) {
                            if (element.name === majorAnatomy) {
                                var findings = element["Findings"];

                                // Old Implementation //
                                // Go through current element's class elements (which are basically siblings)
                                // and update setupFinding
                                // var currentClassEls = document.querySelectorAll('input' + inputClass);
                                // currentClassEls.forEach(function (el) {
                                //     if (el.id.includes('attribute_num_1')) {
                                //         UICtrl.setupFindings(findings, el);
                                //     }
                                // });
                                // Old Implementation //

                                // New Implementation //
                                var inputs = $(inputClass + ' :input[id*="attribute_num_1"]');
                                for (var i = 0; i < inputs.length; i++) {
                                    if (inputs[i].id === inputEl.className + 'attribute_num_1') {
                                        UICtrl.setupFindings(findings, inputs[i]);
                                    }
                                }
                                // New Implementation //
                            }
                        });
                    }
                },
                theme: "square"
            };

            $(inputId).easyAutocomplete(options).focus(function () {
                triggerFocus(inputId);
            });
        }
    };
})();

var appCtrl = (function () {

    return {
        init: function () {
            console.log('Application started');

            // Placeholder JSFiddle Finding Structure
            var imageAnnotation = {
                "ImageName": "1.png",
                "SampleID": "1234-5678-9090",
                "Width": 512,
                "Height": 512,
                "Findings": [
                    [
                        {
                            "Key": "Major Anatomic Regions",
                            "Value": "Lungs"
                        }, {
                            "Key": "Findings",
                            "Value": "Mass/Nodule"
                        }, {
                            "Key": "Subanatomy",
                            "Value": "Upper lung zone"
                        }, {
                            "Key": "Laterality Modifier",
                            "Value": "Right"
                        }, {
                            "Key": "Location Modifier 1",
                            "Value": "NA"
                        }, {
                            "Key": "Location Modifier 2",
                            "Value": "NA"
                        }, {
                            "Key": "Character Modifiers 1",
                            "Value": "Non-cavitary"
                        }, {
                            "Key": "Character Modifiers 2",
                            "Value": "Non-calcified"
                        }, {
                            "Key": "Severity Modifier",
                            "Value": "NA"
                        }, {
                            "Key": "# Modifiers",
                            "Value": "Solitary"
                        }, {
                            "Key": "Size Modifiers Qualitative",
                            "Value": "Small"
                        }, {
                            "Key": "Size Modifiers Quantitative",
                            "Value": "NA"
                        }
                    ],
                    [
                        {
                            "Key": "Major Anatomic Regions",
                            "Value": "Lungs"
                        }, {
                            "Key": "Findings",
                            "Value": "Mass/Nodule"
                        }, {
                            "Key": "Subanatomy",
                            "Value": "Upper lung zone"
                        }, {
                            "Key": "Laterality Modifier",
                            "Value": "Right"
                        }, {
                            "Key": "Location Modifier 1",
                            "Value": "NA"
                        }, {
                            "Key": "Location Modifier 2",
                            "Value": "NA"
                        }, {
                            "Key": "Character Modifiers 1",
                            "Value": "Non-cavitary"
                        }, {
                            "Key": "Character Modifiers 2",
                            "Value": "Non-calcified"
                        }, {
                            "Key": "Severity Modifier",
                            "Value": "NA"
                        }, {
                            "Key": "# Modifiers",
                            "Value": "Solitary"
                        }, {
                            "Key": "Size Modifiers Qualitative",
                            "Value": "Small"
                        }, {
                            "Key": "Size Modifiers Quantitative",
                            "Value": "NA"
                        }
                    ],
                    [
                        {
                            "Key": "Major Anatomic Regions",
                            "Value": "Lungs"
                        }, {
                            "Key": "Findings",
                            "Value": "Mass/Nodule"
                        }, {
                            "Key": "Subanatomy",
                            "Value": "Upper lung zone"
                        }, {
                            "Key": "Laterality Modifier",
                            "Value": "Right"
                        }, {
                            "Key": "Location Modifier 1",
                            "Value": "NA"
                        }, {
                            "Key": "Location Modifier 2",
                            "Value": "NA"
                        }, {
                            "Key": "Character Modifiers 1",
                            "Value": "Non-cavitary"
                        }, {
                            "Key": "Character Modifiers 2",
                            "Value": "Non-calcified"
                        }, {
                            "Key": "Severity Modifier",
                            "Value": "NA"
                        }, {
                            "Key": "# Modifiers",
                            "Value": "Solitary"
                        }, {
                            "Key": "Size Modifiers Qualitative",
                            "Value": "Small"
                        }, {
                            "Key": "Size Modifiers Quantitative",
                            "Value": "NA"
                        }
                    ]
                ]
            };
            // Send imageAnnotation obj to exteact Findings [] using AnnotationCtrl.getRows()
            var findings = AnnotationCtrl.getRows(imageAnnotation);

            // Setter
            UICtrl.createDivs(findings);

            UICtrl.setupEventListeners();
        }
    }
})(UICtrl, AnnotationCtrl, SearchCtrl);

appCtrl.init();
