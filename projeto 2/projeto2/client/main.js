import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/banco.js';

var acessoriesData = [
	{
		src: "img/acessorio1.fw.png",
		title: "Mousepad Razer",
		alt: "Mousepad Razer Goliathus verde",
		descr: "Mousepad Razer Goliathus verde",
	},
	{
		src: "img/acessorio2.fw.png",
		title: "Mousepad HyperX",
		alt: "Mousepad HyperX preto gigante que cobre toda a mesa",
		descr: "Mousepad HyperX preto gigante",
	},
	{
		src: "img/acessorio3.fw.png",
		title: "Mouse Bungee Razer",
		alt: "Mouse Bungee Razer preto",
		descr: "Mouse Bungee Razer preto",
	},
	{
		src: "img/acessorio4.fw.png",
		title: "Volante Logitech",
		alt: "Volante Logitech com dois eixos, 3 pedais, cambio e freio de mão",
		descr: "Volante Logitech G29",
	},
	{
		src: "img/acessorio5.png",
		title: "Joystick Razer",
		alt: "Joystick Razer iluminado com LED",
		descr: "Joystick Razer iluminado com LED",
	}
];

Template.showMouse.helpers({img_data:mouse_img.find()});
Template.showKeyboard.helpers({img_data:keyboard_img.find()});
Template.showHs.helpers({img_data:hs_img.find()});
Template.showAcessories.helpers({img_data:acessories_img.find()});



var mouseSource = $("#modal").html();
var geraTemplateModal = Template.geraModal.helpers(mouseSource);
function displayModalMouse(event){
	var indice = $(this).data("id");
	var html = geraTemplateModal(mouseData[indice]);
	$("#modal-container").html(html);
	$("#imageModal").modal('show');
}
