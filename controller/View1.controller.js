sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/Fragment",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Fragment, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("naruto.helperbox.controller.View1", {

    onInit: function () {
      var oModel = new JSONModel("model/data.json");
      this.getView().setModel(oModel);
    },

    onValueHelpName: function () {
      var oView = this.getView();

      if (!this._pNameDialog) {
        this._pNameDialog = Fragment.load({
          id: oView.getId(),
          name: "naruto.helperbox.view.NameValueHelp",
          controller: this
        }).then(function (oDialog) {
          oView.addDependent(oDialog);
          return oDialog;
        });
      }

      this._pNameDialog.then(function (oDialog) {
        oDialog.open();
      });
    },

    onConfirmName: function (oEvent) {
      var sSelectedName = oEvent.getParameter("selectedItem").getTitle();
      this.getView().byId("inpName").setValue(sSelectedName);
    },

  
    onSearchName: function (oEvent) {
      var sQuery = oEvent.getParameter("value");
      var oFilter = new Filter("name", FilterOperator.Contains, sQuery);
      var oBinding = oEvent.getSource().getBinding("items");
      oBinding.filter(sQuery ? [oFilter] : []);
    },


    onValueHelpRole: function () {
      var oView = this.getView();

      if (!this._pRoleDialog) {
        this._pRoleDialog = Fragment.load({
          id: oView.getId(),
          name: "naruto.helperbox.view.RoleValueHelp",
          controller: this
        }).then(function (oDialog) {
          oView.addDependent(oDialog);
          return oDialog;
        });
      }

      this._pRoleDialog.then(function (oDialog) {
        oDialog.open();
      });
    },

    onConfirmRole: function (oEvent) {
      var sSelectedRole = oEvent.getParameter("selectedItem").getTitle();
      this.getView().byId("inpRole").setValue(sSelectedRole);
    },

  
    onSearchRole: function (oEvent) {
      var sQuery = oEvent.getParameter("value");
      var oFilter = new Filter("role", FilterOperator.Contains, sQuery);
      var oBinding = oEvent.getSource().getBinding("items");
      oBinding.filter(sQuery ? [oFilter] : []);
    }

  });
});
