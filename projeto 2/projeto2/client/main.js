import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/banco.js';

//Importação das imagens do banco
Template.showMouse.helpers({img_data:mouse_img.find()});
Template.showKeyboard.helpers({img_data:keyboard_img.find()});
Template.showHs.helpers({img_data:hs_img.find()});
Template.showAcessories.helpers({img_data:acessories_img.find()});


//Modal
var mouseSource = $("#modal").html();
var geraTemplateModal = Template.geraModal.helpers(mouseSource);
function displayModalMouse(event){
	var indice = $(this).data("id");
	var html = geraTemplateModal(mouseData[indice]);
	$("#modal-container").html(html);
	$("#imageModal").modal('show');
}

//Usuario
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});