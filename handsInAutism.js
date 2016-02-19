$(document).ready(function() {
	fillArea("main", "english");
});

function linkToSite(site){
	if(site == "facebook") window.open();
	if(site == "pinterest") window.open();
	if(site == "twitter") window.open();
}

function fillArea(link, language){
	
	/* 
	links include:
		stoplight
		countdown
		choice-boards
		first-then
		pulley-cards
		main
	languages include:
		english
		spanish
	*/

	/* adds to:
	title
	video
	belowVideo
	paragraph
	link
	*/

	/*
	johnalexis2018@gmail.com
	samuel_ruiz99@yahoo.com
	*/

	/*
	How_to_Video_Choice_Boards.mp4
	How_to_Video_Count_Down.mp4
	How_to_Video_First_Then.mp4
	How_to_Video_Stop_Light.mp4
	How_to_Video_Pulley_Card.mp4
	*/

	if(language == "english"){
		if(link == "main"){
			console.log("Hi");
			
			$("#paragraph").html("");
			if(language == "english"){
				$("#title").html("What is Autism?");
			}
			if(language == "spanish"){
				$("#title").html("&iquest;Qu&eacute; es el autismo?");
			}
			$("#link").hide();
			$("#video").html("\
			 	<iframe width='630px' height='470px' src='https://www.youtube.com/embed/Wxxo4PFXW0Y' frameborder='0' allowfullscreen> \
				</iframe> \
		 	");
			$("#belowVideo").hide();
			$(".col-link").css("border-color", "grey");
			$(".col-link").css("border-width", "2px");
			$("#main").css("border-color", "#114356");
			$("#main").css("border-width", "3px");
		}else if(link != "main"){
			$("#main").css("border-color", "grey");
			$("#main").css("border-width", "2px");
			$("#link").show();
			$("#belowVideo").show();
		}
		if(link == "stoplight" || link == "countdown"){
			if(link == "stoplight"){
				$(".col-link").css("border-color", "grey");
				$(".col-link").css("border-width", "2px");
				$("#stoplight").css("border-color", "#114356");
				$("#stoplight").css("border-width", "3px");
			}else if(link == "countdown"){
				$(".col-link").css("border-color", "grey");
				$(".col-link").css("border-width", "2px");
				$("#countdown").css("border-color", "#114356");
				$("#countdown").css("border-width", "3px");
			}
				$("#paragraph").html(
				"<p> \
					Stoplights and countdown boards are simple ways to help structure undefined periods of time (i.e., when it is unclear how long an activity will last). \
				</p> \
				<ul> \
					<li> \
					One good time for using these boards is when waiting in a waiting room or when waiting for a bus. \
					</li> \
					<li> \
					On a stoplight, red, yellow and green cards indicate time passing, whereas on a countdown board, numbers 1-5 indicate time passing. \
					</li> \
					<li> \
					With both stoplights and countdown boards, the adult manipulates the board, reflecting the passage of time. \
					</li> \
					<li> \
					As time passes, the adult removes the numbers from the countdown board (one at a time) until the final card is removed and the activity is over. With stoplights, the adult places then \
					</li> \
				</ul> \
				<h2>To Make:</h2> \
				<ol type='1'> \
					<li> \
					Cut out the pictures and numbers available here (or draw your own) then laminate or cover with clear contact paper. \
					</li> \
					<li> \
					Attach a piece of Velcro to the back of each picture or number. \
					</li> \
					<li> \
					Cut a piece of poster board so it is slightly bigger than the pictures (see images above). \
					</li> \
					<li> \
					Place Velcro on the poster board in a vertical column. \
					</li> \
					<li> \
					Place pictures on poster board in the order shown in the images. \
					</li> \
					<li> \
					Place a strip on the back to hold extra pieces. \
					</li> \
				</ol>");
			if(link == "stoplight"){
				$("#belowVideo").html(" \
					<a href='How_to_Video_Stop_Light.mp4'>Download this Video</a> \
				");
				$("#title").html(" \
					Stoplight \
				");
				$("#link").html("\
					<a href='stopsign.html'>Go To Resource</a> \
				");
			}else{
				$("#belowVideo").html(" \
					<a href='How_to_Video_Count_Down.mp4'>Download this Video</a> \
				");
				$("#title").html(" \
					Countdown \
				");
				$("#link").html("\
					<a href='countDown.html'>Go To Resource</a> \
				");
			}
		}
		if(link == "choice-boards"){
			$(".col-link").css("border-color", "grey");
			$(".col-link").css("border-width", "2px");
			$("#choice-boards").css("border-color", "#114356");
			$("#choice-boards").css("border-width", "3px");
			$("#title").html(" \
					Choice Boards \
			");
			$("#paragraph").html(" \
				<p> \
				Making choices can be a difficult task for some individuals with Autism Spectrum Disorder \
				(ASD). Making a choice requires the individual to consider all possible appropriate options, \
				select one option, and indicate that selection to another person. Difficulties may arise in \
				any one of these steps, or in all three. By providing the individual with a choice board, she \
				or he may be better able to make choices. \
				</p> \
				<p> \
				A choice board is a visual representation of all possible, appropriate choices. By providing \
				visual choices, the individual does not have to think of the options on his or her own. \
				The visual choices can help the individual focus on the appropriate options rather than \
				get distracted by other options that may not be appropriate or available. The choices \
				on a choice board should be arranged in a shape, not a line. A list of words or pictures \
				presented in a straight line may be mistaken for a schedule, thus the individual may believe \
				she or he must complete each item in order. On a choice board, options are arranged in a \
				more random order, encouraging the individual to select any one of the options. \
				</p> \
				<p><h2>To Make:</h2></p> \
				<ol type = '1'> \
					<li> \
						Begin by considering the situation in which a choice board would be most beneficial. \
						Choice boards may be utilized at mealtimes, leisure times, or any other times in which \
						an option or choice is available. \
					</li> \
					<li> \
						Use one of the templates provided here (or create your own) to create a list of choices. \
					</li> \
					<li> \
						Affix each choice option to a larger board with Velcro in a non-linear order (e.g., square, \
						circle). \
					</li> \
				</ol> \
 \
				<p><h2>To Use:</h2></p> \
				<ol type='1'> \
					<li> \
						When it is time for the individual to make a choice, present him or her with the choice \
						board. \
					</li> \
					<li> \
						Use a simple phrase, such as &quot;make choice&quot; to indicate that the individual can choose \
						any of the options. \
					</li> \
					<li> \
						Consider providing only 2-3 choices initially, and slowly increasing the number of \
						presented choices as the individual is better able to discriminate choices. \
					</li> \
					<li> \
						The individual may need to be supported through prompts to make a choice. \
					</li> \
				</ol> \
				");
			$("#link").html("\
				<a href='Choices.html'>Go To Resource</a> \
			");
		}
		if(link == "first-then"){
			$(".col-link").css("border-color", "grey");
			$(".col-link").css("border-width", "2px");
			$("#first-then").css("border-color", "#114356");
			$("#first-then").css("border-width", "3px");
			$("#title").html(" \
					First Then \
			");
			$("#paragraph").html(" \
				<ul> \
					<li> \
						A first/then board is a specific strategy that shows what is expected of the individual \
						through the use of a picture of the first activity followed by a picture of the following \
						activity. The &quot;first&quot; activity is usually a less desired activity and the “then” activity is a \
						more preferred activity, such as  &quot;choice time&quot;, &quot;break time&quot;, a specific activity (e.g., \
						game), or an object (e.g., book). It is okay to place a concrete object (such as a book) on \
						the &quot;Then&quot; box if no pictures are available. \
					</li> \
					<li> \
						Try using first-then boards to help individuals through non-preferred tasks (e.g., home- \
						work, chores, doctors visits). \
					</li> \
					<li> \
						Rewards must be immediately available. \
					</li> \
					<li> \
						Remember, offer rewards prior to negative behavior so the individual does not learn to \
						misbehave in order to have a reward offered. \
					</li> \
				</ul> \
				<h2>To Make:</h2> \
				<ol type='1'> \
					<li> \
						Take photographs or cut out the images available here to represent the &quot;first&quot; task. \
						Text could alternatively be used if appropriate for the individual. Laminate the pic- \
						tures/text if possible or cover with clear contact paper. \
					</li> \
					<li> \
						Think about possible rewards. Use photographs, text, objects, or the attached images \
						to represent the &quot;then&quot;.  Laminate if possible or cover with contact paper. \
					</li> \
					<li> \
						Use the First-Then board included here, or draw and cut out two large squares, one \
						with &quot;First&quot; above it, and one with &quot;Then&quot; above it. \
					</li> \
					<li> \
						Use Velcro to attach pictures on First-Then board in the order shown in the image. \
					</li> \
				</ol");
			$("#link").html("\
				<a href='FirstThen.html'>Go To Resource</a> \
			");
		}
		if(link == "pulley-cards"){
			$(".col-link").css("border-color", "grey");
			$(".col-link").css("border-width", "2px");
			$("#pulley-cards").css("border-color", "#114356");
			$("#pulley-cards").css("border-width", "3px");
			$("#title").html(" \
					Pulley Cards \
			");
			$("#paragraph").html(" \
				<p> \
					Although it is helpful to keep a variety of pictures available for communication with \
					individuals with ASD, it can be difficult managing so many cards. By creating pulley \
					cards, you can keep a few commonly needed cards with you at all times. Pulley cards \
					are small (generally 2&quot;x2&quot;) cards that have been hole-punched and clipped together on \
					a wearable pulley clip (see image). These cards can be worn by the people working with \
					an individual with ASD and accessed as needed by either the person with ASD or by the \
					support person. \
				</p> \
				<p> \
					One common card to include is a &quot;please wait&quot; card. Often, individuals with ASD have a \
					tendency to engage in maladaptive behaviors to gain the attention of their caretakers. \
					&quot;Please wait&quot; cards can be used to prevent disruptive behaviors. Once it is recognized \
					that the individual is displaying signs of becoming agitated, the support person can \
					select the &quot;please wait&quot; card from the pulley, put it in the line of vision of the individual, \
					and point to it. In addition, when the individual is waiting appropriately, verbal praise \
					such as, &quot;good job waiting&quot; should be provided. Such praise should be given every few \
					minutes to encourage the individual to continue displaying appropriate behavior. It may \
					also help to continue to show him or her the &quot;please wait&quot; card at regular intervals to \
					remind the individual that she or he is still waiting. \
				</p> \
				<p> \
					Other common cards that one might want to include are &quot;yes&quot; and &quot;no&quot;. Both can \
					be shown to an individual when she or he is asked a question --this will signal to the \
					individual that they have the opportunity to make a choice. Alternatively, the cards can \
					serve as a cues as to which specific options exist (i.e. &quot;yes, you can do that,&quot; or &quot;no, you \
					cannot&quot;). Additional options for cards are included. \
				</p> \
				<h2>To Make:</h2> \
				<ol type='1'> \
					<li> \
						Take photographs or cut out the images available here to represent appropriate \
						concepts. \
					</li> \
					<li> \
						Punch a hole through an upper corner. \
					</li> \
					<li> \
						Use a clip-on nametag holder, binder ring, or other device to attach the cards together. \
					</li> \
					<li> \
						Wear the pulley cards so they are accessible whenever needed. \
					</li>");
				$("#link").html("\
					<a href='Choices.html'>Go To Resource</a> \
				");
		}
	}
	if(language == "spanish"){
		if(link == "stoplight" || link == "countdown"){
			$("#paragraph").html(" \
			<p> \
				Los tableros de sem&aacute;foros y de conteo regresivo son maneras simples para ayudar a \
				estructurar periodos de tiempo indefinido (ej. cuando no es claro cuanto tiempo dure alguna \
				actividad) \
			</p> \
			<ul> \
				<li> \
				Un lugar ideal para usar esta plantilla es cuando se est&aacute; en la sala de espera. \
				</li> \
				<li> \
				En la plantilla del sem&aacute;foro, la tarjeta roja, amarilla y verde indican el paso del tiempo. \
				</li> \
				<li> \
				En la plantilla del conteo regresivo, los n&uacute;meros 1-5 indican el paso del tiempo. \
				</li> \
				<li> \
				En cualquiera de las dos, el adulto manipula el tablero, reflejando el paso del tiempo. \
				</li> \
				<li> \
				Como pase el tiempo, el adulto quita la tarjeta apropiada (una a la vez) hasta llegar a la \
				ultima tarjeta y la actividad haya terminado. \
				</li> \
			</ul> \
			<h2>Para Hacer:</h2> \
			<ol type='1'> \
				<li> \
				Corte las tarjetas de abajo (o dibuje las suyas), laminarlas si es posible</li> \
				<li> \
				Corte un rectangulo de cartulina que sea mucho m&aacute;s grande que las tarjetas juntas, vea las \
				im&aacute;genes de arriba. \
				</li> \
				<li> \
				Pegue una columna de velcro verticalmente sobre la cartulina. \
				</li> \
				<li> \
				Corte tres pedazos del otro velcro y pegue uno en la parte trasera de cada tarjeta en la \
				orden en que se muestra en las im&aacute;genes de arriba. \
				</li> \
				<li> \
				Pegue otra columna de velcro en la parte trasera de la cartulina para sostener las tarjetas \
				que se quitan. \
				</li> \
			</ol>");
			if(link == "countdown"){
				$("#title").html("Conteo regresivo");
				$("#link").html($("<a href='Choices.html'>Ir a recurso</a>");
			}
			if(link == "stoplight") $("#title").html("Sem&aacute;foro");
		}
		if(link == "choice-boards"){
			$("#paragraph").html(" \
				<p> \
				Tomar decisiones puede ser una tarea dif&iacute;cil de realizar para personas dentro de los \
				trastornos del espectro autista (TEA). Tomar decisiones requiere que la persona considere \
				todas las opciones adecuadas y posibles, escoger una, e indicar la selecci&oacute;n a otra \
				persona. Pueden surgir dificultades en cualquiera de estos o hasta en todos los pasos. Al \
				proporcionar a la persona con un tablero de elegir, el o ella podr&aacute;n ser m&aacute;s capaces de \
				tomar mejores decisiones. \
				</p> \
				<p> \
				El tablero de elegir es una representaci&oacute;n visual de todas las opciones posibles. Al ofrecer \
				opciones visuales, la persona no tiene que pensar en las opciones por si misma. Las \
				opciones visuales pueden ayudar a la persona a enforcarse en las opciones adecuadas en \
				lugar de distraerse con otras opciones que no sean apropiadas o est&eacute;n disponibles. Las \
				opciones en el tablero de elegir deben de estar acomodadas en forma de algúna figura o \
				salteadas y no puestas en l&iacute;nea. Una lista de palabras o de im&acute;genes puestas en una l&iacute;nea \
				pueden ser confundidas por un horario, en consecuencia la persona va a creer que tiene \
				que terminar cada actividad en orden. En el tablero de elegir, las opciones son arregladas \
				de manera salteada, estimulando que la persona seleccione cualquiera de las opciones. \
				</p> \
				<p> \
				Depende del nivel de funcionamiento de cada persona, el o ella puede indicar verbalmente \
				la opci&oacute;n o puede fis&iacute;camente remover la tarjeta de elegir del tablero y entregarla al \
				adulto. La tarjeta de elegir tambi&eacute;n puede ser colocada en el espacio designado para \
				indicar la opci&oacute;n. \
				</p> \
				<p><h2>Para Hacer:</h2></p> \
				<ol type = '1'> \
					<li> \
						Empiece tomando en cuenta cu&aacute;l situaci&oacute;n seria la m&aacute;s beneficiosa para usar en el \
						tablero de elegir. El tablero de elegir puede ser utilizado a la hora de comer, descansar, \
						o en cualquier otro momento en el que una opci&oacute;n est&aacute; disponible. \
					</li> \
					<li> \
						Use una de las plantillas dispuestas aqu&iacute; (o crea la suya) para hacer una lista de opciones. \
					</li> \
					<li> \
						Fije cada opci&oacute;n de elegir a un tablero m&aacute;s grande usando velcro de manera salteada \
						(no en l&iacute;nea) o de alguna forma, por ejemplo en un cuadrado o c&iacute;rculo. \
					</li> \
				</ol> \
 \
				<p> \
					<h2>Como Usar:</h2> \
				</p> \
				<ol type='1'> \
					<li> \
						Cuando es hora de que la persona elija una opci&oacute;n, demuestre el tablero de eligir. \
					</li> \
					<li> \
						Use frases simples, como &quot;escoge&quot; o &quot;elige&quot; para indicarle a la persona que puede \
						escoger cualquiera de las opciones. \
					</li> \
					<li> \
						Inicialmente considere usar solo 2-3 opciones, y poco a poco aumente el numero de \
						opciones presentadas como la persona vaya mejorando en su manera de discriminar las \
						elecciones \
					</li> \
					<li> \
						La persona puede necesitar su apoyo a trav&eacute;s de instrucciones para tomar una decisi&oacute;n. \
					</li> \
				</ol> \
				");
			$("#title").html("Tableros de elegir");
		}
		if(link == "first-then"){
			$("#paragraph").html(" \
				<ol> \
					<li> \
						Esta estrategia desmuestra una expectaci&oacute;n seguida por una actividad preferida (ej. \
						primero trabajo y despu&eacute;s video juegos). \
					</li> \
					<li> \
						El tablero demuestra la primera actividad (usualmente una menos preferida) que tiene que \
						ocurrir antes que la siguiente actividad (la m&aacute;s preferida) puede ocurrir. \
					</li> \
					<li> \
						Trate de usar este tablero para ayudar a individuos hacer las actividades no preferidas (ej. \
						tarea, quehaceres, visitas al doctor). \
					</li> \
					<li> \
						Una recompensa tiene que ser disponible imediatamente. \
					</li> \
					<li> \
						La caja de &quot;Despu&eacute;s&quot; puede representar una opci&oacute;n de tiempo, recreo, u otra actividad \
						especifica (ej. gameboy), o un objecto ( ej. libro). Se puede poner en lugar el objecto (como un \
						libro) en la caja de &quot;Despu&eacute;s&quot;, si la foto del objecto no esta disponible. \
					</li> \
					<li> \
						Recuerde de ofrecer una recompensa antes de que alg&uacute;n comportamiento negativo \
						suceda, asi el individuo no aprender&aacute; a comportarse mal con el fin de tener la recompensa. \
					</li> \
				<ol> \
				<h2>Para Hacer:</h2> \
				<ol type='1'> \
					<li> \
						Tome fotografias o corte las im&aacute;genes disponibles aqui para representar la caja de \
						&quot;Primero&quot;, laminarlas si es posible. \
					</li> \
					<li> \
						Piense en las posibles recompensas. Use fotografias, objectos, o las im&aacute;genes adjuntas \
						para representar la caja de &quot;Despu&eacute;s&quot;, laminarlas si es posible.					</li> \
					<li> \
						Use al tablero de Primero-y-Despu&eacute;s incluido aqui, o dibuje y corte dos cuadros grandes. \
						Uno va a decir &quot;Primero&quot; en la parte superior y el otro va a decir &quot;Despu&eacute;s&quot; en la parte \
						superior. \
					</li> \
					<li> \
						Use velcro para pegar las fotografias en el tablero de Primero-y-Despu&eacute;s (asi como se \
						muestra abajo). \
					</li> \
				</ol");
			$("#title").html("Primero y Despu&eacute;s");
		}
		if(link == "pulley-cards"){
			$("#paragraph").html(" \
				<p> \
					Aunque ayuda mucho mantener disponible una variedad de fotos para comunicar con los con TEA, puede ser dif&iacute;cil manejar tantas tarjetas. \
					Con tarjetas poleas, se puede tener unas tarjetas necesarias a su lado todo el tiempo. \
					Tarjetas poleas son peque&ntildeos (generalmente 2&quot x 2&quot). \
					Tienen agujeros y se est&aacute;n atacados en un clip polea usable (mira el imagen). \
					Las personas trabajando con un individuo con TEA pueden llevar estas tarjetas, y o el individuo o el suporto puede accederlas. \
				</p> \
				<p> \
					Una tarjeta muy com&uacute;n se llama &quot;por favor espere&quot;. \
					A menudo, individuos con TEA suelen interrumpir para que ganen la atenci&oacute;n de sus cuidadores. \
					&quot;Por favor espere&quot; tarjetas pueden ser utilizadas para prevenir estos comportamientos. \
					Cuando est&aacute; reconocido que el individuo se est&eacute; enojando o se ponga agitado, la cuidadora puede elegir la tarjeta &quot;por favor espere&quot; \
					desde la polea, ponerla en la vista del individuo, y se&ntildealarla. \
					Adem&aacute;s, cuando el individuo est&aacute; esperando apropiadamente, elogio verbal como &quot;buen trabajo&quot; se debe proveer. \
					Elogio as&iacute; se debe dar de vez en cuando para animar el individuo para que siga comport&aacute;ndose en la misma forma. \
					Tal vez ayudara seguir mostrando al individuo la tarjeta &quot;por favor espere&quot; para recordarlo que todav&iacute;a est&aacute; esperando. \
				</p> \
				<p> \
					Otras tarjetas comunes son &quot;s&iacute;&quot; y &quot;no&quot;. Las dos se pueden mostrar a un individuo cuando &eacute;l o ella ha preguntado algo - \
					esto indicar&aacute; que tiene la oportunidad de escoger. Alternativamente, las tarjetas pueden ser pistas de los opciones disponibles (e.g. &quot;s&iacute;, se puede&quot; o &quot;no, no se puede&quot;). \
				</p> \
				<h2>Para hacer:</h2> \
				<ol type='1'> \
					<li> \
						Tome fotos o corte los im&aacute;genes disponibles aqu&iacute; para representar conceptos adecuados. \
					</li> \
					<li> \
						Haga un agujero por la esquina alta. \
					</li> \
					<li> \
						Use una porta-tarjetas, un aro de una carpeta, o algo diferente para atacar juntas las tarjetas. \
					</li> \
					<li> \
						Lleve las tarjetas poleas para que sean accesibles \
					</li> \
				</ol>");
			$("#title").html("Tableros poleas");
		}
		if(link == "main"){
			$("#paragraph").html("");
			$("#title").html("&iquest;Qu&eacute; es el autismo?");
			$("#link").html("");
			$("#video").html("\
			 	<iframe width='420' height='315' src='https://www.youtube.com/embed/Wxxo4PFXW0Y' frameborder='0' allowfullscreen> \
				</iframe> \
			");
			$("belowVideo").html("");
		}
	}
	if(link == "stoplight"){
		$("#video").html(" \
			<video controls> \
  				<source class='vid' src='How_to_Video_Stop_Light.mp4' type='video/mp4'> \
  				Your browser does not support HTML5 video. \
			</video> \
			");
		$("#belowVideo").html(" \
			<a href='How_to_Video_Stop_Light.mp4' download>Download</a> \
			");
	}
	if(link == "countdown"){
		$("#video").html(" \
			<video controls> \
  				<source class='vid' src='How_to_Video_Count_Down.mp4' type='video/mp4'> \
  				Your browser does not support HTML5 video. \
			</video> \
			");
		$("#belowVideo").html(" \
			<a href='How_to_Video_Count_Down.mp4' download>Download</a> \
		");
	}
	if(link == "choice-boards"){
		$("#video").html(" \
			<video controls> \
  				<source class='vid' src='How_to_Video_Choice_Boards.mp4' type='video/mp4'> \
  				Your browser does not support HTML5 video. \
			</video> \
			");
		$("#belowVideo").html(" \
			<a href='How_to_Video_Choice_Boards.mp4' download>Download</a> \
			");
	}
	if(link == "first-then"){
		$("#video").html(" \
			<video controls> \
  				<source class='vid' src='How_to_Video_First_Then.mp4' type='video/mp4'> \
  				Your browser does not support HTML5 video. \
			</video> \
			");
		$("#belowVideo").html(" \
			<a href='How_to_Video_First_Then.mp4' download>Download</a> \
			");
	}
	if(link == "pulley-cards"){
		$("#video").html(" \
			<video controls> \
  				<source class='vid' src='How_to_Video_Pulley_Card.mp4' type='video/mp4'> \
  				Your browser does not support HTML5 video. \
			</video> \
			");
		$("#belowVideo").html(" \
			<a href='How_to_Video_Pulley_Card.mp4' download>Download</a> \
			");
	}
}