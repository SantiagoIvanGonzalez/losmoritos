document.addEventListener('DOMContentLoaded', function(){

	// Flip card

	function flipCard(touchedCard, touchedCardButtons, otherCard) {
		touchedCardButtons.forEach(function(boton){
		boton.addEventListener('click', function(){
			touchedCard.classList.toggle('flipped');
			if (otherCard.matches('.flipped')) {
				otherCard.classList.toggle('flipped');
			};

			event.preventDefault();
			})
		});
	}

	const alojamiento_derecha_card_buttons = document.querySelectorAll('.alojamiento_derecha_card a');
	const alojamiento_derecha_card = document.querySelector('.alojamiento_derecha_card');
	const alojamiento_izquierda_card_buttons = document.querySelectorAll('.alojamiento_izquierda_card a');
	const alojamiento_izquierda_card = document.querySelector('.alojamiento_izquierda_card');

	flipCard(alojamiento_izquierda_card, alojamiento_izquierda_card_buttons, alojamiento_derecha_card);
	flipCard(alojamiento_derecha_card, alojamiento_derecha_card_buttons, alojamiento_izquierda_card);

	// Cargar todas las imágenes en el slider

	for (var i = 1; i <= 30; i++) {
		let unaImagen = document.createElement('li');

		unaImagen.className = 'splide__slide';
		unaImagen.setAttribute('data-splide-interval', '5000');
		
		unaImagen.innerHTML = '<img src="assets/img/galeria/'+i+'_grande.jpg" width="100%" alt="Los Moritos Turismo de campo Imagenes Slider '+i+'">';

		document.querySelector('.splide__list').appendChild(unaImagen);
		
	}

	// Mostrar slider

	var splide = new Splide( '.splide', {
	 	autoplay    : true,
	  	rewind      : true,
	  	pauseOnHover: false,
	  	pauseOnFocus: false,
	});
    splide.mount();

	// Cargar mini imágenes de la derecha en la galería

	var nro_mini_imagen = 1;
	var class_mini_imagen = 0;

	for (var i = 1; i <= 6; i++) {
		for (var j = 1; j <= 5; j++) {
			let unaImagen = document.createElement('div');
			unaImagen.className = "columna_"+i;
			unaImagen.innerHTML = '<img class="'+class_mini_imagen+'" src="assets/img/galeria/'+nro_mini_imagen+'.jpg" alt="Los Moritos Turismo de campo Imagenes Galeria '+nro_mini_imagen+'">';

			document.querySelector('.fila_'+j).appendChild(unaImagen);
			nro_mini_imagen++;
			class_mini_imagen++;
		}
	}

	// Detecto que pulsan sobre alguna imagen en miniatura, comparo la clase que tienen con el orden de los puntos del slider, en caso de ser iguales, se dirige a dicha imagen

	document.querySelectorAll('.slider_derecha img').forEach(function(unaImagen){
		unaImagen.addEventListener('click', function(){
		var clase_imagen_miniatura = parseInt(unaImagen.getAttribute('class'));
		clase_imagen_miniatura = clase_imagen_miniatura + 1;
		if(clase_imagen_miniatura > 9){
			clase_imagen_miniatura = 'splide01-slide'+clase_imagen_miniatura;
		}else{
			clase_imagen_miniatura = 'splide01-slide0'+clase_imagen_miniatura;
		}

		const botones_slider = document.querySelectorAll('.splide__pagination li button');

		botones_slider.forEach(function(slider_index_activate){
			if(slider_index_activate.getAttribute('aria-controls') == clase_imagen_miniatura){
				slider_index_activate.click();
				event.preventDefault();
			}
		})
	})
	});

	// Cambiar background de portada al pasar el cursor por encima

	function cambiarPortada(portada, imagen, mouseAction) {
		portada.addEventListener(mouseAction, function(){
			portada.style.backgroundImage = imagen;
		});
	}

	const portada = document.querySelector('.portada');

	cambiarPortada(portada, 'url(assets/img/fotoportada3_2.jpg)', 'mouseover');
	cambiarPortada(portada, 'url(assets/img/fotoportada3.jpg)', 'mouseout');

	// Popup de plano de ubicación

	function fadeToggle(element){
		element.classList.toggle('fade');
	};

	const activador_popup = document.querySelector('.activar_popup');
	const cerrar_popup = document.querySelector('.popup .cerrar');
	const popup = document.querySelector('.popup');

	activador_popup.addEventListener('click',function(){
		fadeToggle(popup)
		event.preventDefault();
	});
	cerrar_popup.addEventListener('click',function(){
		fadeToggle(popup)
		event.preventDefault();
	});

	// Cambio de idioma inglés-español

	const idioma = document.querySelector('select[name=idioma]');

	const nav_estancia = document.querySelector('.nav_estancia');
	const nav_alojamiento = document.querySelector('.nav_alojamiento');
	const nav_actividades = document.querySelector('.nav_actividades');
	const nav_contacto = document.querySelector('.nav_contacto');
	const nav_galeria = document.querySelector('.nav_galeria');
	const logo_menu = document.querySelector('.logo_menu');

	const h1_arriba = document.querySelector('.h1_arriba');
	const h1_abajo = document.querySelector('.h1_abajo');
	const portada_derecha_logo = document.querySelector('.portada_derecha_logo');
	const portada_derecha_botones = document.querySelector('.portada_derecha_botones');

	const estancia_lang = document.querySelector('.estancia_lang');
	const activar_popup = document.querySelector('.activar_popup');

	const popup_derecha = document.querySelector('.popup_derecha');

	const alojamiento_izquierda_cambiar_idioma = document.querySelector('.alojamiento_izquierda_cambiar_idioma');
	const boton_comodidades = document.querySelector('.boton_comodidades');
	const alojamiento_izquierda_back_cambiar_idioma = document.querySelector('.alojamiento_izquierda_back_cambiar_idioma');
	const boton_volver_back = document.querySelector('.boton_volver_back');
	const alojamiento_derecha_cambiar_idioma = document.querySelector('.alojamiento_derecha_cambiar_idioma');
	const boton_servicios = document.querySelector('.boton_servicios');
	const alojamiento_derecha_front = document.querySelector('.alojamiento_derecha_front');
	const alojamiento_derecha_back_cambiar_idioma = document.querySelector('.alojamiento_derecha_back_cambiar_idioma');

	const actividades = document.querySelector('#actividades');

	const h2_galeria = document.querySelector('.h2_galeria');
	const p_galeria = document.querySelector('.p_galeria');

	const frase_contacto = document.querySelector('.frase_contacto');
	const formulario = document.querySelector('.form_1');

	const footer = document.querySelector('footer');

	idioma.addEventListener('change', function(){

		if (idioma.value == 'es'){
			nav_estancia.innerHTML = 'Estancia';
			nav_alojamiento.innerHTML = 'Alojamiento';
			nav_actividades.innerHTML = 'Actividades';
			nav_galeria.innerHTML = 'Galería';
			nav_contacto.innerHTML = 'Contacto';
			logo_menu.innerHTML = '<a href=""><img src="assets/img/logo.png" alt="Logo Los Moritos"></a>';

			h1_arriba.innerHTML = 'Naturaleza, descanso y aventura';
			h1_abajo.innerHTML = '<span class="puntos_suspensivos">... </span>en un sólo lugar';
			portada_derecha_logo.innerHTML = '<img src="assets/img/logo_no_background.png" alt="Los Moritos">';
			portada_derecha_botones.innerHTML = '<a href="#alojamiento">SERVICIOS</a><a href="#contacto">CONTACTO</a>';

			estancia_lang.innerHTML = '<h2>La Estancia</h2><p>La estancia <strong><i>Los Moritos</i></strong> nació de la calidez de una familia argentina que, con el anhelo de compartir con otros ese disfrute por la naturaleza, decidió llevar adelante el proyecto de turismo de campo, con variedad de propuestas pensadas especialmente para sus visitantes.</p><p><i>Los Moritos</i> se encuentra ubicada a 550 km. de la Capital Federal, dentro de la Comarca turística de <strong><i>Sierra de la Ventana</i></strong>, rodeada del imponente cordón serrano de Curamalal. En sus valles y faldeos podemos observar una gran cantidad de animales salvajes y aves autóctonas, como ciervos, antílopes y águilas, ideales para safaris fotográficos.</p><p>Agasajamos a nuestros invitados con las más ricas carnes asadas criadas en la estancia, acompañadas con exquisitas verduras cuidadosamente cultivadas en nuestra huerta. Ofrecemos también diversos <strong><i>platos</i></strong> caseros realizados por nuestras experimentadas cocineras de estancia, que le dan un delicioso y especial sabor a cada comida.</p><p>La propuesta de <i>Los Moritos</i> es que sus visitantes puedan <strong><i>descansar</i></strong> inmersos en la naturaleza, <strong><i>disfrutar</i></strong> la espectacularidad de sus paisajes y <strong><i>vivir la aventura</i></strong> a través de la propuesta de actividades que la estancia ofrece.</p><p><strong><i>Un lugar ideal para la familia, las parejas o para aquellos que quieren encontrarse consigo mismos en soledad.</i></strong></p>';				
			activar_popup.innerHTML = 'Plano de Ubicación';

			popup_derecha.innerHTML = '<h5>Acceso desde Capital Federal</h5><p>Tomar la Autopista Richieri hasta ver sobre la derecha el predio de la AFA. Tomar el puente y doblar a la izquierda pasando por arriba de la A. Richieri, quedando así sobre la Autopista Ezeiza-Cañuelas. Avanzar por ésta hasta desembocar en una rotonda donde termina la autopista. Tomar la rotonda y salir hacia la izquierda (ref. Shell) y luego de 2 kms. pasar el cruce de vías. Tomar la ruta 3 hacia la derecha hasta Azul. Salir hacia la derecha en la Ruta 76, pasar Olavarría, pasar la Rotonda de Lamadrid, pasar la Rotonda Saint Eloy. Desde esta última rotonda, a los 25 km. saldrá hacia la derecha un camino de tierra. Tomar este camino y realizar aprox. 13 km hasta la primera calle que encontramos a nuestra izquierda. Seguir 4km por allí y sobre la izquierda encontrará la tranquera verde que le da la bienvenida a Los Moritos.</p><h5>Acceso desde Sierra de la Ventana</h5><p>Tomar la salida por la Ruta 72 hasta el cruce con la Ruta 76. Girar a la derecha y continuar por Ruta 76 alrededor de 18 km hasta cruzar el Arroyo El Pantanoso. Sobre el puente se abre el guarda-rail, mostrando a la izquierda un camino de tierra. Tomar este camino y realizar aprox. 13 km hasta la primera calle que encontramos a nuestra izquierda. Seguir 4km por allí y sobre la izquierda encontrará la tranquera verde que le da la bienvenida a Los Moritos.</p>';
		
			alojamiento_izquierda_cambiar_idioma.innerHTML = '<h3>COMODIDADES</h3> <img src="assets/img/girar.png" title="Ver comodidades" alt="Presiona para ver las comodidades" width="10%">';
			boton_comodidades.innerHTML = 'VER TODAS LAS COMODIDADES';
			alojamiento_izquierda_back_cambiar_idioma.innerHTML = '<h3>COMODIDADES</h3><hr><p>La casa principal de <i>Los Moritos</i> cuenta con cuatro cómodas habitaciones. En el comedor, una imponente mesa rodeada por ventanales nos permite disfrutar de un delicioso desayuno campestre, mientras abrimos nuestra vista a la variedad de árboles y aves autóctonas. Cuenta también con la comodidad de tres baños comunes y una cálida sala de estar con sillones, hogar y televisión con Directv y videoteca. La galería nos permite pasar un agradable rato y gozar de las mejores picadas hechas con distinguidos productos artesanales.</p><p>La casa secundaria cuenta con dos habitaciones dobles, con una hermosa vista hacia las sierras. Presenta un baño común y una pequeña y agradable sala de estar con frigobar y todo lo necesario para disftutar de un rico té, café y mate argentino.</p><p>A 15 metros de la casa encontramos <strong><i>la matera</strong></i>, un ambiente con cocina, dos amplias mesas y chimenea para realizar exquisitos asados. Este espacio cuenta también con cómodos sillones, TV con Directv, videojuegos, dardos, juegos de mesa y videoteca para todas las edades.</p><p>Para las épocas de amplias temperaturas, nuestros visitantes podrás refrescarse en la piscina, mientras disfrutan una hermosa vista a las sierras.</p>';
			boton_volver_back.innerHTML = 'VOLVER';
			alojamiento_derecha_cambiar_idioma.innerHTML = '<h3>SERVICIOS</h3><img src="assets/img/girar.png" title="Ver servicios" alt="Presiona para ver los servicios" width="10%">';
			boton_servicios.innerHTML = 'VER TODOS LOS SERVICIOS';
			alojamiento_derecha_back_cambiar_idioma.innerHTML = '<h3>SERVICIOS</h3><hr><ul><li>DirecTv</li><li>Internet WIFI</li><li>Servicio de habitación</li><li>Calefacción</li><li>Ropa blanca</li><li>Pensión completa (con abundante desayuno, asados, comidas caseras y picada a media tarde o merienda)</li></ul>';
		
			actividades.innerHTML = '<h2>Actividades</h2><p>Para disfrutar al máximo su estadía, <strong><i>Los Moritos</strong></i> le ofrece una gran cantidad de actividades. Encontrará variedad de propuestas para todos los gustos y edades.</p><div class="todas_actividades"><div class="columna_mobile_1"><div class="actividades_1"><div class="una_actividad"><i class="fas fa-tractor"></i><p>Paseo por la granja</p></div><div class="una_actividad"><i class="fas fa-horse"></i><p>Cabalgata</p></div><div class="una_actividad"><i class="fas fa-bicycle"></i><p>Mountain bike</p></div></div><div class="actividades_2"><div class="una_actividad"><img src="assets/img/arrow.png" alt="Arquería" class="img_actividad"><p>Arquería</p></div><div class="una_actividad"><img src="assets/img/quad.png" alt="Travesía en cuatriciclos" class="img_actividad"><p>Travesía en cuatriciclos</p></div><div class="una_actividad"><img src="assets/img/cave.png" alt="Cuevas con pinturas rupestres" class="img_actividad"><p>Cuevas con pinturas rupestres</p></div></div></div><div class="columna_mobile_2"><div class="actividades_3"><div class="una_actividad"><i class="fas fa-futbol"></i><p>Canchas de fútbol, de vóley y de fútbol-ténis</p></div><div class="una_actividad"><i class="fas fa-table-tennis"></i><p>Ping-Pong</p></div><div class="una_actividad"><img src="assets/img/trekking.png" alt="Trekking" class="img_actividad"><p>Trekking</p></div></div><div class="actividades_4"><div class="una_actividad"><img src="assets/img/rappel.png" alt="Rappel" class="img_actividad"><p>Rappel</p></div><div class="una_actividad"><img src="assets/img/escalada.png" alt="Paseo Aventura: tirolesa, puente colgante, cuerda floja, escalada" class="img_actividad aventura"><p>Paseo Aventura: tirolesa, puente colgante, cuerda floja, escalada</p></div><div class="una_actividad"><i class="fas fa-child"></i><p>Juegos para los niños más pequeños</p></div></div></div></div>';
		
			h2_galeria.innerHTML = 'GALERIA';
			p_galeria.innerHTML = 'A continuación se encuentra nuestra galería de fotos completa. Presionando en cualquier imagen de la derecha, podrás visualizar dicha imagen en el carrusel de imágenes.';

			frase_contacto.innerHTML = '<h1>Naturaleza, descanso y aventura</h1><h1 class="h1_abajo"><span class="puntos_suspensivos">... </span>en un sólo lugar</h1>';
			formulario.innerHTML = '<h4>DATOS DE CONTACTO</h4><div class="form_contacto"><div class="form_contacto_izq"><label for="nombre">Nombre*</label><input id="nombre" type="text" name="nombre" placeholder="Ingrese su nombre..."><label for="telefono">Teléfono*</label><input id="telefono" type="tel" name="telefono" placeholder="Ingrese su teléfono..."> <label for="provincia">Provincia</label><input id="provincia" type="text" name="provincia" placeholder="Ingrese su provincia..."></div><div class="form_contacto_der"><label for="apellido">Apellido*</label><input id="apellido" type="text" name="apellido" placeholder="Ingrese su apellido..."><label for="email">Email*</label><input id="email" type="email" name="email" placeholder="Ingrese su email..."><label for="localidad">Localidad</label><input id="localidad" type="text" name="localidad" placeholder="Ingrese su localidad..."></div></div><hr><h4>DATOS DE RESERVA</h4><div class="adultos_niños"><label for="adultos">Adultos*</label><select id="QAdultos" name="adultos"><option value="1 Adulto">1</option><option value="2 Adultos">2</option><option value="3 Adultos">3</option><option value="4 Adultos">4</option></select><label for="ninios">Niños*</label><select id="Qninos" name="ninios"><option value="1 Niño">1</option><option value="2 Niños">2</option><option value="3 Niños">3</option><option value="4 Niños">4</option></select></div><label for="fechaIngreso">Fecha ingreso*</label><input id="fechaIngreso" type="date" name="fechaIngreso" class="fecha"><label for="fechaEgreso">Fecha egreso*</label><input id="fechaEgreso" type="date" name="fechaEgreso" class="fecha"><hr><h4>MENSAJE</h4><textarea id="Mensaje" name="Mensaje" placeholder="Ingrese su mensaje..."></textarea><p class="mensaje_error" hidden>*Complete todos los campos obligatorios</p><p class="enviando" hidden>Tu mensaje está siendo enviado...</p><p class="mensaje_enviado" hidden>¡Mensaje enviado!</p>';
			document.querySelector('.enviar').setAttribute('value','ENVIAR');

			footer.innerHTML = '<div class="contenedor"><img src="assets/img/logo_no_background.png"><div class="footer_izq"><div class="footer_1"><a href="tel:+540292615400266">Tel.: (+54) 02926-15400266</a></div><div class="footer_2"><a href="tel:1160168700">Cel. (Arg): (11) 6016-8700</a></div><div class="footer_3"><a href="tel:+5491160168700">Cel.: (Int) (+54) 9 11 6016 8700</a></div></div><div class="footer_der"><div class="footer_4"><a href="http://es-la.facebook.com/people/Estancia-Los-Moritos/100001039479330" target="_blank"><i class="fab fa-facebook-square"></i></a></div><div class="footer_5"><a href="mailto:info@losmoritos.com">info@losmoritos.com</a></div></div></div>';
		}else if(idioma.value == 'en'){
			nav_estancia.innerHTML = 'Stay';
			nav_alojamiento.innerHTML = 'Housing';
			nav_actividades.innerHTML = 'Activities';
			nav_galeria.innerHTML = 'Galery';
			nav_contacto.innerHTML = 'Contact';
			logo_menu.innerHTML = '<a href=""><img src="assets/img/logo_en.png" alt="Los Moritos"></a>';

			h1_arriba.innerHTML = 'Nature, rest and adventure';
			h1_abajo.innerHTML = '<span class="puntos_suspensivos">... </span>in only one place';
			portada_derecha_logo.innerHTML = '<img src="assets/img/logo_en_no_background.png" alt="Logo Los Moritos"  width="65%">';
			portada_derecha_botones.innerHTML = '<a href="#alojamiento">COMFORTS</a><a href="#contacto">CONTACT</a>';

			estancia_lang.innerHTML = '<h2>The Stay</h2><p><strong><i>Los Moritos</strong></i> country was born of the warmth of an Argentine family that, with the longing of sharing with others this enjoyment for the nature, decided to take forward the project of country tourism, with the variety of offers thought specially for its visitants.</p> <p><i>Los Moritos</i> is located 550 km. from Capital Federal, inside the tourist region of <strong><i>Sierra de la Ventana</strong></i>, surrounded with Curamalal´s impressive highland cord. In its valleys and foothills we can observe a great quantity of wild animals and autochthonous birds, as deer, antelopes and eagles, ideal for photographic safaris.</p><p>We entertain our guests with the most delicious roast meats raised in the country, accompanied with exquisite vegetables carefully cultivated in our garden. We offer also diverse <strong><i>domestic plates</strong></i> made by our experienced cooks, who give a tasty and special flavor to the food.</p><p><i>Los Moritos´s</i> offer is that its visitants could rest immersed in the nature, to enjoy the showiness of its landscapes and to live the adventure across the offer of activities that the country offers.</p><p><strong><i>An ideal place for the family, the couples or for those who want to find themselves in loneliness.</strong></i></p>';				
			activar_popup.innerHTML = 'Plane of location';

			popup_derecha.innerHTML = '<h5>Access from federal capital</h5><p>Take the Richieri Highway until you see the AFA property on the right. Take the bridge and turn left passing over A. Richieri, thus remaining on the Ezeiza-Cañuelas Highway. Continue along this until you come to a roundabout where the highway ends. Take the roundabout and exit to the left (ref. Shell) and after 2 kms. pass the railroad crossing. Take route 3 to the right to Azul. Exit to the right on Route 76, pass Olavarría, pass the Lamadrid roundabout, pass the Saint Eloy roundabout. From this last roundabout, 25 km. a dirt road will come out to the right. Take this path and do approx. 13 km to the first street that we find on our left. Continue for 4km there and on the left you will find the green gate that welcomes you to Los Moritos.</p><h5>Access from Sierra de la Ventana</h5><p>Take the exit for Route 72 until the intersection with Route 76. Turn right and continue on Route 76 for about 18 km until crossing Arroyo El Pantanoso. On the bridge the guard-rail opens, showing on the left a dirt road. Take this path and do approx. 13 km to the first street that we find on our left. Continue for 4km there and on the left you will find the green gate that welcomes you to Los Moritos.</p>';
		
			alojamiento_izquierda_cambiar_idioma.innerHTML = '<h3>COMFORTS</h3><img src="assets/img/girar.png" title="Watch comforts" alt="Click to watch comforts" width="10%">';
			boton_comodidades.innerHTML = 'LOOK AT ALL THE COMFORTS';
			alojamiento_izquierda_back_cambiar_idioma.innerHTML = '<h3>COMFORTS</h3><hr><p>The principal house of <i>Los Moritos</i> has four comfortable rooms. In the dining room, an impressive table surrounded by large windows allows us to enjoy a delicious rural breakfast, while we open our sight for the  variety of trees and autochthonous birds. It has also the comfort of three common baths and a warm living room with armchairs, chimney, television with direcTv and video library. The gallery allows us to spend a great moment and to enjoy the best snacks done with distinguished handcrafted products.</p><p>The secondary house has two double rooms with a beautiful sight towards the mountains. It has a common bath and a small and nice living room with frigobar and everything necessary to enjoy a delicious tea, coffee and Argentine mate.</p><p>15 meters far from the house we find <strong><i>La Matera</strong></i>, an environment with kitchen, two wide tables and chimmey to make exquisite roasts. This space counts also with comfortable armchairs, TV with DirecTv, video games, darts, board games and video library for all the ages.</p><p>In the wide temperatures, our visitors will be able to refresh in the swimming pool, while they enjoy a beautiful sight to the mountains.</p>';
			boton_volver_back.innerHTML = 'RETURN';
			alojamiento_derecha_cambiar_idioma.innerHTML = '<h3>FACILITIES</h3><img src="assets/img/girar.png" title="Watch facilities" alt="Click here to look at the facilites" width="10%">';
			boton_servicios.innerHTML = 'LOOK AT ALL THE FACILITIES';
			alojamiento_derecha_back_cambiar_idioma.innerHTML = '<h3>FACILITIES</h3><hr><ul><li>DirecTv</li><li>Internet WIFI</li><li>Room service</li><li>Heating</li><li>White Clothes</li><li>Complete Pension (with abundant breakfast, roasts, handcrafts meals and afternoon snacks or tea)</li></ul>';
		
			actividades.innerHTML = '<h2>Activities</h2><p>To enjoy to the maximum your stay, <strong><i>Los Moritos</strong></i> offers a great quantity of activities. You will find a variety of offers for all tastes.</p><div class="todas_actividades"><div class="columna_mobile_1"><div class="actividades_1"><div class="una_actividad"><i class="fas fa-tractor"></i><p>Walk along the farm</p></div><div class="una_actividad"><i class="fas fa-horse"></i><p>Horse riding</p></div><div class="una_actividad"><i class="fas fa-bicycle"></i><p>Mountain bike</p></div></div><div class="actividades_2"><div class="una_actividad"><img src="assets/img/arrow.png" alt="Arquería" class="img_actividad"><p>Archery</p></div><div class="una_actividad"><img src="assets/img/quad.png" alt="Travesía en cuatriciclos" class="img_actividad"><p>Passage in cuatriciclos</p></div><div class="una_actividad"><img src="assets/img/cave.png" alt="Cuevas con pinturas rupestres" class="img_actividad"><p>Caves with rupestre paintings</p></div></div></div><div class="columna_mobile_2"><div class="actividades_3"><div class="una_actividad"><i class="fas fa-futbol"></i><p>Football, voleyball and football-tennis</p></div><div class="una_actividad"><i class="fas fa-table-tennis"></i><p>Ping-Pong</p></div><div class="una_actividad"><img src="assets/img/trekking.png" alt="Trekking" class="img_actividad"><p>Trekking</p></div></div><div class="actividades_4"><div class="una_actividad"><img src="assets/img/rappel.png" alt="Rappel" class="img_actividad"><p>Rappel</p></div><div class="una_actividad"><img src="assets/img/escalada.png" alt="Paseo Aventura: tirolesa, puente colgante, cuerda floja, escalada" class="img_actividad aventura"><p>Adventure walk: tyrolean, suspension bridge, tightrope, escalation</p></div><div class="una_actividad"><i class="fas fa-child"></i><p>Games for smallest children</p></div></div></div></div>';
		
			h2_galeria.innerHTML = 'GALERY';
			p_galeria.innerHTML = 'Here it is our complete photo gallery. Clicking on an image from the right, you will be able to watch it on the carousel.';

			frase_contacto.innerHTML = '<h1>Nature, rest and adventure</h1><h1 class="h1_abajo"><span class="puntos_suspensivos">... </span>in only one place</h1>';
			formulario.innerHTML = '<h4>CONTACT DATA</h4><div class="form_contacto"><div class="form_contacto_izq"><label for="nombre">Firstname*</label><input id="nombre" type="text" name="nombre" placeholder="Introduce your firstname..."><label for="telefono">Telephone*</label><input id="telefono" type="tel" name="telefono" placeholder="Introduce your phone number..."> <label for="provincia">Province</label><input id="provincia" type="text" name="provincia" placeholder="Introduce your province..."></div><div class="form_contacto_der"><label for="apellido">Surname*</label><input id="apellido" type="text" name="apellido" placeholder="Introduce your surname..."><label for="email">Email*</label><input id="email" type="email" name="email" placeholder="Introduce your e-mail..."><label for="localidad">City</label><input id="localidad" type="text" name="localidad" placeholder="Introduce your city..."></div></div><hr><h4>RESERVATION DATA</h4><div class="adultos_niños"><label for="adultos">Adults*</label><select id="QAdultos" name="adultos"><option value="1 Adulto">1</option><option value="2 Adultos">2</option><option value="3 Adultos">3</option><option value="4 Adultos">4</option></select><label for="ninios">Children*</label><select id="Qninos" name="ninios"><option value="1 Niño">1</option><option value="2 Niños">2</option><option value="3 Niños">3</option><option value="4 Niños">4</option></select></div><label for="fechaIngreso">Check-in date*</label><input id="fechaIngreso" type="date" name="fechaIngreso" class="fecha"><label for="fechaEgreso">Check-out date*</label><input id="fechaEgreso" type="date" name="fechaEgreso" class="fecha"><hr><h4>MESSAGE</h4><textarea id="Mensaje" name="Mensaje" placeholder="Introduce your message..."></textarea><p class="mensaje_error" hidden>*Fill all the required fields</p><p class="enviando" hidden>You message is being delivered...</p><p class="mensaje_enviado" hidden>Message sent!</p>';
			document.querySelector('.enviar').setAttribute('value','SEND');

			footer.innerHTML = '<div class="contenedor"><img src="assets/img/logo_en_no_background.png"><div class="footer_izq"><div class="footer_1"><a href="tel:+540292615400266">Tel.: (+54) 02926-15400266</a></div><div class="footer_2"><a href="tel:1160168700">Cel. (Arg): (11) 6016-8700</a></div><div class="footer_3"><a href="tel:+5491160168700">Cel.: (Int) (+54) 9 11 6016 8700</a></div></div><div class="footer_der"><div class="footer_4"><a href="http://es-la.facebook.com/people/Estancia-Los-Moritos/100001039479330" target="_blank"><i class="fab fa-facebook-square"></i></a></div><div class="footer_5"><a href="mailto:info@losmoritos.com">info@losmoritos.com</a></div></div></div>';	
		}
	})


	// Validación de formulario y envio el email mediante Ajax
	
	const form = document.querySelector('.formulario');
	const xhr = new XMLHttpRequest();

	form.addEventListener('submit', function(event){
		const enviar = document.querySelector('.enviar');
		const nombre = document.querySelector('#nombre');
		const telefono = document.querySelector('#telefono');
		const apellido = document.querySelector('#apellido');
		const email = document.querySelector('#email');
		const fechaIngreso = document.querySelector('#fechaIngreso');
		const fechaEgreso = document.querySelector('#fechaEgreso');
		const provincia = document.querySelector('#provincia');
		const localidad = document.querySelector('#localidad');
		const Qninos = document.querySelector('#Qninos');
		const QAdultos = document.querySelector('#QAdultos');
		const mensaje = document.querySelector('#Mensaje');
		const mensaje_enviado = document.querySelector('.mensaje_enviado');
		const mensaje_error = document.querySelector('.mensaje_error');
		const enviando = document.querySelector('.enviando');

		enviando.removeAttribute('hidden');
		mensaje_error.setAttribute('hidden','');
		enviar.setAttribute('disabled','');

		if(nombre.value.length >= 1 & 
			telefono.value.length >= 2 & 
			apellido.value.length >= 1 & 
			email.value.indexOf('@', 0) != -1 & email.value.indexOf('.', 0) != -1 &
			fechaIngreso.value.length != 0 &
			fechaEgreso.value.length != 0
			){
				let data = new FormData(form);
				xhr.open('POST','enviar.php')
				xhr.onload = function(){
					if(xhr.status == 200){
						if(xhr.responseText == 'enviado'){
							enviando.setAttribute('hidden','');
							mensaje_enviado.removeAttribute('hidden');
							nombre.value = '';
							telefono.value = '';
							apellido.value = '';
							email.value = '';
							fechaIngreso.value = '';
							fechaEgreso.value = '';
							provincia.value = '';
							localidad.value = '';
							Qninos.value = '1 Niño';
							QAdultos.value = '1 Adulto';
							mensaje.value = '';
							setTimeout(() => {
					  			mensaje_enviado.setAttribute('hidden','');
							}, 5000);
							enviar.removeAttribute('disabled');
						}else if(xhr.responseText == 'error'){
							enviando.setAttribute('hidden','');
							mensaje_error.removeAttribute('hidden');
							enviar.removeAttribute('disabled');
						}else if(xhr.responseText == 'error_fatal'){
							enviando.setAttribute('hidden','');
							alert('Ocurrió un error al enviar el mensaje, por favor, inténtelo de nuevo más tarde');
							enviar.removeAttribute('disabled');
						};
					}else{
						enviando.setAttribute('hidden','');
						alert('Ocurrió un error al enviar el mensaje, por favor, inténtelo de nuevo más tarde');
						enviar.removeAttribute('disabled');
					};
				};
				xhr.send(data);
		}else{
			enviando.setAttribute('hidden','');
			mensaje_error.removeAttribute('hidden');
			enviar.removeAttribute('disabled');
		};
		
		event.preventDefault();
	});

})