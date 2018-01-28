/* UIController */
var UICtrl = (function () {

    var DOMStrings = {
        findingNumClass: 'finding_num_',
        attributeNumId: 'attribute_num_'
    }

    var createAttriveDivs = function (attribute, findingNumClass, attributeNumId) {
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
        attributeInput.setAttribute('id', `${attributeNumId}`);

        attributeDiv.appendChild(attributeHeading);
        attributeDiv.appendChild(attributeInput);

        return attributeDiv;
    };

    var createFindingsDivs = function (findings) {
        if (findings.length > 0) {
            findings.forEach(function (eachFinding, findingIndex) {
                // Create FindingDiv
                var findingDiv = document.createElement('div');

                var findingNumClass = DOMStrings.findingNumClass + findingIndex;
                findingDiv.setAttribute('class', `alert alert-info alert-dismissable ${findingNumClass}`);
                findingDiv.style.overflow = 'hidden';

                var closeFindingDiv = document.createElement("a");
                closeFindingDiv.setAttribute("href", "#");
                closeFindingDiv.setAttribute("class", "close");
                closeFindingDiv.setAttribute("data-dismiss", "alert");
                closeFindingDiv.setAttribute("aria-label", "close");
                closeFindingDiv.textContent = "x";

                findingDiv.appendChild(closeFindingDiv);

                var findingAttributes = eachFinding['row'];
                findingAttributes.forEach(function (eachAttribute, attributeIndex) {
                    // Create AttributeDiv     
                    var attributeNumId = DOMStrings.attributeNumId + attributeIndex;
                    var attributeDiv = createAttriveDivs(eachAttribute, findingNumClass, attributeNumId);

                    findingDiv.appendChild(attributeDiv);
                });
                var annotationWrapper = document.querySelector('.annotation-wrapper');
                annotationWrapper.appendChild(findingDiv);
            });
        }
    };

    return {
        createDivs: function (findings) {
            createFindingsDivs(findings);
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
                                    if (input.id === 'attribute_num_3') {
                                        UICtrl.setupLaterality(laterality, input);
                                    }
                                    if (input.id === 'attribute_num_4') {
                                        UICtrl.setupLocation_1(location_1, input);
                                    }
                                    if (input.id === 'attribute_num_5') {
                                        UICtrl.setupLocation_2(location_2, input);
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
                                    if (input.id === 'attribute_num_2') {
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

                                // Go through current element's class siblings and update setupFinding                                
                                var currentClassEls = document.querySelectorAll('input' + elementClass);
                                currentClassEls.forEach(function (el) {
                                    if (el.id === 'attribute_num_1') {
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

            var finding_num_0 = 'finding_num_0';
            var finding_num_0_NodeList = document.querySelectorAll('input.' + finding_num_0);
            finding_num_0_NodeList.forEach(function (element, elIndex) {
                // Only setting up anatomy input
                // Rest of the fields will be setup onChoose
                if (element.id === 'attribute_num_0') {
                    UICtrl.setupAnatomy(SearchCtrl.getSearchData(), element);
                }
            });
        }
    }
})(UICtrl, AnnotationCtrl, SearchCtrl);

appCtrl.init();
