/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"au/com/bournedigital/developertest/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"au/com/bournedigital/developertest/integration/pages/Worklist",
	"au/com/bournedigital/developertest/integration/pages/Object",
	"au/com/bournedigital/developertest/integration/pages/NotFound",
	"au/com/bournedigital/developertest/integration/pages/Browser",
	"au/com/bournedigital/developertest/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "au.com.bournedigital.developertest.view."
	});

	sap.ui.require([
		"au/com/bournedigital/developertest/integration/WorklistJourney",
		"au/com/bournedigital/developertest/integration/ObjectJourney",
		"au/com/bournedigital/developertest/integration/NavigationJourney",
		"au/com/bournedigital/developertest/integration/NotFoundJourney",
		"au/com/bournedigital/developertest/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});