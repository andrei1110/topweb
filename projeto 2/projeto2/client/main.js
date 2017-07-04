import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var mouseData = [
	{
		src: "img/mouse1.fw.png",
		title: "Mouse Razer",
		alt: "Mouse preto razer com leds RGB",
		descr: "Mouse Razer Chroma",
	},
	{
		src: "img/mouse2.fw.png",
		title: "Mouse Razer",
		alt: "Mouse razer preto com led verde na logo da marca",
		descr: "Mouse Razer Deathadder verde",
	},
	{
		src: "img/mouse3.png",
		title: "Mouse Razer",
		alt: "Mouse Razer de 15 botões, sendo eles 12 laterais, botão direito, botão esquedo e do scroll",
		descr: "Mouse Razer de 15 botões",
	},
	{
		src: "img/mouse4.fw.png",
		title: "Mouse Razer",
		alt: "Mouse Razer de entrada preto com o logo da marca em led azul",
		descr: "Mouse Razer Abysus azul",
	},
	{
		src: "img/mouse5.fw.png",
		title: "Mouse Zowie",
		alt: "Mouse da marca Zowie preto com o logo da marca branco",
		descr: "Mouse Zowie Preto e branco",
	},
	{
		src: "img/mouse6.fw.png",
		title: "Mouse Logitech",
		alt: "Mouse da marca Logitech preto com o logo da marca em led azul e leds azuis na lateral",
		descr: "Mouse Logitech preto e azul",
	}
];

var keyboardData = [
	{
		src: "img/teclado1.fw.png",
		title: "Teclado CM",
		alt: "Teclado mecânico branco da marca CM com teclas pretas",
		descr: "Teclado mecânico CM quick fire tk branco",
	},
	{
		src: "img/teclado2.fw.png",
		title: "Teclado HyperX",
		alt: "Teclado da marca HyperX preto retroiluminado com leds vermelhos",
		descr: "Teclado mecânico HyperX preto e vermelho",
	},
	{
		src: "img/teclado3.fw.png",
		title: "Teclado Razer",
		alt: "Teclado da marca razer preto com leds RGB retroiluminando as teclas",
		descr: "Teclado mecânico Razer Blackwidow Chroma",
	},
	{
		src: "img/teclado4.fw.png",
		title: "Teclado Logitech",
		alt: "Teclado da marca Logitech preto retroiluminado com leds RGB",
		descr: "Teclado mecânico Logitech Spectrum RGB",
	}
];


Template.showMouse.helpers({img_data:mouseData});
Template.showKeyboard.helpers({img_data:keyboardData});

