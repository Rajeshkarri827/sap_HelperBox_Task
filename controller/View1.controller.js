sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/Fragment"
], function (Controller, JSONModel, Fragment) {
    
  "use strict";

  return Controller.extend("naruto.helperbox.controller.View1", {

    onInit: function () {
      var oModel = new JSONModel("../model/data.json");
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
    }

  });
});
