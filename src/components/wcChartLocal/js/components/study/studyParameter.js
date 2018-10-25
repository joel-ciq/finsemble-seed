/* removeIf(umd) */ ;(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['componentUI'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('./componentUI'));
	} else {
		factory(root);
	}
})(this, function(_exports) {
	var CIQ = _exports.CIQ;
	/* endRemoveIf(umd) */

	/**
	 * Study parameters web component `<cq-study-parameter>`.
	 * 
	 * See example in {@link WebComponents.cq-study-dialog}.
	 @namespace WebComponents.cq-study-parameter
	 */
	var StudyParameter = {
		prototype: Object.create(CIQ.UI.ContextTag)
	};

	StudyParameter.prototype.initialize=function(params){
		this.params=params;
	};

	StudyParameter.prototype.setColor=function(color){
		if(!this.params) return;
		var updates={parameters:{}};
		updates.parameters[this.params.parameter]=color;
		this.params.studyDialog.updateStudy(updates);
	};

	CIQ.UI.StudyParameter = document.registerElement("cq-study-parameter", StudyParameter);

	/* removeIf(umd) */
	return _exports;
});
/* endRemoveIf(umd) */