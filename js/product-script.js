var mouseData = {images:[
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
]};

var keyboardData = {images:[
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
]};

var hsData = {images:[
	{
		src: "img/fone1.fw.png",
		title: "Fone HyperX",
		alt: "Fone com microfone HyperX Revolver preto com detales em led Vermelhos",
		descr: "Fone com microfone HyperX Revolver preto",
	},
	{
		src: "img/fone2.fw.png",
		title: "Fone Razer",
		alt: "Fone da marca Razer preto com microfone retrátil e logo da marca iluminado com led",
		descr: "Fone com microfone Razer Men O' War preto",
	},
	{
		src: "img/fone3.fw.png",
		title: "Fone Logitech",
		alt: "Fone Logitech sem fio 7.1 preto e azul",
		descr: "Fone Logitech sem fio, com microfone preto e azul",
	},
	{
		src: "img/fone4.fw.png",
		title: "Fone Steelseries",
		alt: "Fone Steelseries Diablo III preto e vermelho",
		descr: "Fone Steelseries Diablo III preto e vermelho",
	}
]};

var acessoriesData = {images:[
	{
		src: "img/acessorio1.fw.png",
		title: "Mousepad Razer",
		alt: "MMousepad Razer Goliathus verde",
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
		title: "olante Logitech",
		alt: "olante Logitech com dois eixos, 3 pedais, cambio e freio de mão",
		descr: "Volante Logitech G29",
	},
	{
		src: "img/acessorio5.png",
		title: "Joystick Razer",
		alt: "Joystick Razer iluminado com LED",
		descr: "Joystick Razer iluminado com LED",
	}
], name: "Acessórios"};

var mouseSource = $("#mouse-script").html();
var mouseTemplate = Handlebars.compile(mouseSource);
var mouseOutput = mouseTemplate(mouseData);
$("#mouses").html(mouseOutput);

var keyboardSource = $("#keyboard-script").html();
var keyboardTemplate = Handlebars.compile(keyboardSource);
var keyboardOutput = keyboardTemplate(keyboardData);
$("#teclados").html(keyboardOutput);

var hsSource = $("#hs-script").html();
var hsTemplate = Handlebars.compile(hsSource);
var hsOutput = hsTemplate(hsData);
$("#fones").html(hsOutput);

var acessoriesSource = $("#acessories-script").html();
var acessoriesTemplate = Handlebars.compile(acessoriesSource);
var acessoriesOutput = acessoriesTemplate(acessoriesData);
$("#acessorios").html(acessoriesOutput);

mouseSource = $("#modal").html();
var geraTemplateModal = Handlebars.compile(mouseSource);
function displayModalMouse(event){
	var indice = $(this).data("id");
	var html = geraTemplateModal(mouseData.images[indice]);
	$("#modal-container").html(html);
	$("#imageModal").modal('show');
}

$(".mouse").click(displayModalMouse);

keyboardSource = $("#modal").html();
var geraTemplateModal = Handlebars.compile(keyboardSource);
function displayModalKeyboard(event){
	var indice = $(this).data("id");
	var html = geraTemplateModal(keyboardData.images[indice]);
	$("#modal-container").html(html);
	$("#imageModal").modal('show');
}

$(".keyboard").click(displayModalKeyboard);

hsSource = $("#modal").html();
var geraTemplateModal = Handlebars.compile(hsSource);
function displayModalHeadset(event){
	var indice = $(this).data("id");
	var html = geraTemplateModal(hsData.images[indice]);
	$("#modal-container").html(html);
	$("#imageModal").modal('show');
}

$(".headset").click(displayModalHeadset);

acessoriesSource = $("#modal").html();
var geraTemplateModal = Handlebars.compile(acessoriesSource);
function displayModalAcessories(event){
	var indice = $(this).data("id");
	var html = geraTemplateModal(acessoriesData.images[indice]);
	$("#modal-container").html(html);
	$("#imageModal").modal('show');
}

$(".acessories").click(displayModalAcessories);