sap.ui.define([
] , function () {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        numberUnit : function (sValue) {
            if (!sValue) {
                return "";
            }
            return parseFloat(sValue).toFixed(2);
        },

        valueFormat:function(oValue){
            if(oValue && oValue.length > 0){
                var oView = this.getView();
                var oModel = oView.getModel();
                var totalValue = 0, aValue;
                aValue = oValue.map(function(o){
                    var obj = oModel.getProperty("/"+o);
                    return obj.UnitPrice
                });

                aValue.forEach(value => {
                    if(value)
                        totalValue += Number(value);
                });
                return String(totalValue) + " AUD";
            }
            else 
                return "NA";
        }

    };

}
);