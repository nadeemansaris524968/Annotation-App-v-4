/* UIController */
var UICtrl = (function () {

})();

var appCtrl = (function () {

    return {
        init: function () {
            console.log('Application started');
        }
    }
})(UICtrl, AnnotationCtrl, SearchCtrl);

appCtrl.init();
