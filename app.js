/* UIController */
var UICtrl = (function () {

    var DOMStrings = {
        findingNum: 'finding_num_',
        attributeNum: 'attribute_num_'
    }

    var createAttriveDivs = function (attribute, findingNumClass, attributeNumClass) {
        var attributeDiv = document.createElement('div');
        attributeDiv.classList.add('divAttribute');

        var attributeHeading = document.createElement('div');
        attributeHeading.style.fontSize = '8px';
        attributeHeading.style.color = '#c14343';
        attributeHeading.textContent = attribute.Key;

        var attributeInput = document.createElement('input');
        attributeInput.setAttribute('type', 'text');
        attributeInput.setAttribute('value', attribute.Value);        
        attributeInput.setAttribute('class',`${findingNumClass} ${attributeNumClass}`);

        attributeDiv.appendChild(attributeHeading);
        attributeDiv.appendChild(attributeInput);

        return attributeDiv;
    };

    var createFindingsDivs = function (findings) {
        if (findings.length > 0) {
            findings.forEach(function (eachFinding, findingIndex) {
                // Create FindingDiv
                var findingDiv = document.createElement('div');

                var findingNumClass = DOMStrings.findingNum + findingIndex;
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
                    var attributeNumClass = DOMStrings.attributeNum + attributeIndex;               
                    var attributeDiv = createAttriveDivs(eachAttribute, findingNumClass, attributeNumClass);

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
        }
    }
})(UICtrl, AnnotationCtrl, SearchCtrl);

appCtrl.init();
