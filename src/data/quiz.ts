export interface PreguntaQuiz {
	id: number;
	pregunta: string;
	opciones: string[];
	respuestaCorrecta: number;
	explicacion: string;
	categoria: string;
}

export const quizQuestions: PreguntaQuiz[] = [
	{
		id: 1,
		pregunta: "¿Qué representa el símbolo '/' en Linux?",
		opciones: [
			"La carpeta home del usuario",
			"La raíz del sistema de archivos",
			"El directorio actual",
			"El directorio anterior"
		],
		respuestaCorrecta: 1,
		explicacion: "El símbolo '/' representa la raíz (root) del sistema de archivos. Es el punto de partida de toda la estructura de directorios en Linux.",
		categoria: "Fundamentos"
	},
	{
		id: 2,
		pregunta: "¿Qué comando muestra el directorio actual?",
		opciones: [
			"cd",
			"ls",
			"pwd",
			"dir"
		],
		respuestaCorrecta: 2,
		explicacion: "pwd (Print Working Directory) muestra la ruta completa del directorio donde te encuentras actualmente.",
		categoria: "Navegación"
	},
	{
		id: 3,
		pregunta: "¿Qué comando se usa para crear un archivo vacío?",
		opciones: [
			"create",
			"new",
			"touch",
			"make"
		],
		respuestaCorrecta: 2,
		explicacion: "El comando 'touch' crea un archivo vacío. Es útil para crear marcadores o preparar archivos de configuración.",
		categoria: "Archivos"
	},
	{
		id: 4,
		pregunta: "¿Qué significa 'todo es un archivo' en Linux?",
		opciones: [
			"Solo los documentos son archivos",
			"Todo en el sistema se representa como un archivo (dispositivos, hardware, configuración)",
			"Los archivos son más importantes que en otros sistemas",
			"Linux solo trabaja con archivos de texto"
		],
		respuestaCorrecta: 1,
		explicacion: "En Linux, casi todo se representa como un archivo: discos duros, teclado, mouse, configuración de red, etc. Esto simplifica la gestión del sistema.",
		categoria: "Fundamentos"
	},
	{
		id: 5,
		pregunta: "¿Qué comando crea un directorio?",
		opciones: [
			"create",
			"newdir",
			"mkdir",
			"mdir"
		],
		respuestaCorrecta: 2,
		explicacion: "mkdir (Make Directory) crea una nueva carpeta. Uso: mkdir nombre_carpeta",
		categoria: "Archivos"
	},
	{
		id: 6,
		pregunta: "¿Qué símbolo representa la carpeta home del usuario?",
		opciones: [
			"/home",
			"~ (tilde)",
			"$",
			"@"
		],
		respuestaCorrecta: 1,
		explicacion: "El símbolo ~ (tilde) representa la carpeta personal del usuario (/home/usuario). Es un atajo muy útil.",
		categoria: "Navegación"
	},
	{
		id: 7,
		pregunta: "¿Qué comando copia un archivo?",
		opciones: [
			"copy",
			"cp",
			"mv",
			"copyr"
		],
		respuestaCorrecta: 1,
		explicacion: "cp (copy) copia archivos y carpetas. Ejemplo: cp archivo.txt destino/",
		categoria: "Archivos"
	},
	{
		id: 8,
		pregunta: "¿Cuál es la diferencia entre ruta absoluta y relativa?",
		opciones: [
			"No hay diferencia",
			"La absoluta starts with /, la relativa es desde donde estás",
			"La relativa es más lenta",
			"La absoluta solo funciona en servers"
		],
		respuestaCorrecta: 1,
		explicacion: "Ruta absoluta: Starts con / y describe la ruta completa desde la raíz. Ruta relativa: Starts desde tu ubicación actual.",
		categoria: "Navegación"
	},
	{
		id: 9,
		pregunta: "¿Qué comando move (mueve) o renombra archivos?",
		opciones: [
			"move",
			"mv",
			"ren",
			"rename"
		],
		respuestaCorrecta: 1,
		explicacion: "mv (move) sirve tanto para mover archivos como para renombrarlos. En Linux, renombrar es simplemente mover dentro del mismo directorio.",
		categoria: "Archivos"
	},
	{
		id: 10,
		pregunta: "¿Qué comando elimina archivos?",
		opciones: [
			"del",
			"erase",
			"rm",
			"remove"
		],
		respuestaCorrecta: 2,
		explicacion: "rm (remove) elimina archivos. ¡Cuidado! En Linux no existe la papelera de reciclaje, lo que borras desaparece para siempre.",
		categoria: "Archivos"
	},
	{
		id: 11,
		pregunta: "¿Qué hace el comando 'ls -a'?",
		opciones: [
			"Muestra archivos en orden alphabetically",
			"Muestra todos los archivos incluyendo ocultos",
			"Muestra archivos con detalles",
			"Muestra archivos grandes"
		],
		respuestaCorrecta: 1,
		explicacion: "La opción -a (all) muestra todos los archivos, incluyendo los que start con punto (.) que son archivos ocultos.",
		categoria: "Navegación"
	},
	{
		id: 12,
		pregunta: "¿Qué permisos representa el dígito '7' en chmod 755?",
		opciones: [
			"Solo lectura",
			"Solo ejecución",
			"Lectura, escritura y ejecución",
			"Escritura y ejecución"
		],
		respuestaCorrecta: 2,
		explicacion: "En chmod, cada dígito representa permisos: 4=lectura(r), 2=escritura(w), 1=ejecución(x). Entonces 7 = 4+2+1 = rwx (todos los permisos).",
		categoria: "Permisos"
	},
	{
		id: 13,
		pregunta: "¿Qué significa el símbolo '#' al final del prompt?",
		opciones: [
			"Que eres un usuario guest",
			"Que tienes permisos de administrador (root)",
			"Que hay errores",
			"Que el sistema está ocupado"
		],
		respuestaCorrecta: 1,
		explicacion: "El símbolo '$' indica usuario normal, mientras que '#' indica que eres root (administrador). ¡Ten cuidado cuando ves #!",
		categoria: "Fundamentos"
	},
	{
		id: 14,
		pregunta: "¿Qué comando muestra el contenido de un archivo de texto completo?",
		opciones: [
			"show",
			"cat",
			"view",
			"read"
		],
		respuestaCorrecta: 1,
		explicacion: "cat (concatenate) muestra todo el contenido de un archivo en la terminal. Ideal para archivos pequeños.",
		categoria: "Archivos"
	},
	{
		id: 15,
		pregunta: "¿Qué comando permite navegar por un archivo grande de forma interactiva?",
		opciones: [
			"cat",
			"more",
			"less",
			"view"
		],
		respuestaCorrecta: 2,
		explicacion: "less permite navegar hacia arriba y abajo en un archivo grande. Presiona 'q' para salir. Es el estándar para manuals y archivos largos.",
		categoria: "Archivos"
	},
	{
		id: 16,
		pregunta: "¿Qué archivo contiene las variables de entorno del sistema?",
		opciones: [
			"/etc/profile",
			"/etc/environment",
			"/etc/bashrc",
			"/etc/vars"
		],
		respuestaCorrecta: 1,
		explicacion: "/etc/environment es el archivo del sistema donde se definen las variables de entorno globales. También ~/.bashrc para el usuario.",
		categoria: "Variables de Entorno"
	},
	{
		id: 17,
		pregunta: "¿Qué hace 'cd -'?",
		opciones: [
			"Sube un nivel de directorio",
			"Va al directorio anterior",
			"Va al directorio home",
			"Lista directorios recientes"
		],
		respuestaCorrecta: 1,
		explicacion: "cd - cambia al directorio donde estabas anteriormente. Es como un 'atrás' en la navegación.",
		categoria: "Navegación"
	},
	{
		id: 18,
		pregunta: "¿Qué comando lista los procesos en ejecución?",
		opciones: [
			"top",
			"ps",
			"process",
			"list"
		],
		respuestaCorrecta: 1,
		explicacion: "ps (process status) muestra los procesos actualmente en ejecución. ps aux muestra todos los procesos del sistema.",
		categoria: "Procesos"
	},
	{
		id: 19,
		pregunta: "¿Qué significa el Kernel en Linux?",
		opciones: [
			"La interfaz gráfica",
			"El núcleo que gestiona el hardware",
			"El shell",
			"El sistema de archivos"
		],
		respuestaCorrecta: 1,
		explicacion: "El Kernel es el núcleo del sistema operativo. Gestiona directamente el hardware (CPU, RAM, disco) y es la capa más profunda del sistema.",
		categoria: "Fundamentos"
	},
	{
		id: 20,
		pregunta: "¿Qué comando mata un proceso?",
		opciones: [
			"stop",
			"kill",
			"end",
			"terminate"
		],
		respuestaCorrecta: 1,
		explicacion: "kill envía una señal a un proceso para terminarlo. Uso: kill PID. kill -9 fuerza la termination.",
		categoria: "Procesos"
	},
	{
		id: 21,
		pregunta: "¿Qué hace 'mkdir -p' ?",
		opciones: [
			"Crea una carpeta oculta",
			"Crea una estructura de carpetas anidadas",
			"Crea una carpeta con permisos",
			"Crea una carpeta temporal"
		],
		respuestaCorrecta: 1,
		explicacion: "La opción -p (parents) crea toda la estructura de directorios necesaria. Ejemplo: mkdir -p a/b/c crea las tres carpetas de una vez.",
		categoria: "Archivos"
	},
	{
		id: 22,
		pregunta: "¿Qué comando busca archivos en el sistema?",
		opciones: [
			"search",
			"find",
			"locate",
			"where"
		],
		respuestaCorrecta: 1,
		explicacion: "find busca archivos en el sistema de archivos. Ejemplo: find /home -name '*.txt' busca todos los archivos .txt en home.",
		categoria: "Búsqueda"
	},
	{
		id: 23,
		pregunta: "¿Qué variable contiene la ruta de los ejecutables?",
		opciones: [
			"$HOME",
			"$USER",
			"$PATH",
			"$SHELL"
		],
		respuestaCorrecta: 2,
		explicacion: "$PATH contiene los directorios donde el sistema busca ejecutables cuando escribes un comando. Separados por ':'.",
		categoria: "Variables de Entorno"
	},
	{
		id: 24,
		pregunta: "¿Qué comando comprime archivos con gzip?",
		opciones: [
			"gzip -c archivo",
			"gzip archivo",
			"compress archivo",
			"zip archivo"
		],
		respuestaCorrecta: 1,
		explicacion: "gzip comprime archivos. gzip archivo.txt crea archivo.txt.gz. gunzip lo descomprime.",
		categoria: "Compresión"
	},
	{
		id: 25,
		pregunta: "¿Qué hace 'chmod +x archivo'?",
		opciones: [
			"Quita todos los permisos",
			"Agrega permiso de ejecución",
			"Cambia el propietario",
			"Crea un enlace"
		],
		respuestaCorrecta: 1,
		explicacion: "+x agrega el permiso de ejecución a un archivo. Necesitas ejecución para poder correr scripts o programas.",
		categoria: "Permisos"
	},
	{
		id: 26,
		pregunta: "¿Qué comando muestra las primeras líneas de un archivo?",
		opciones: [
			"head",
			"top",
			"start",
			"first"
		],
		respuestaCorrecta: 0,
		explicacion: "head muestra las primeras líneas de un archivo. Por defecto 10. head -n 20 archivo muestra las primeras 20.",
		categoria: "Archivos"
	},
	{
		id: 27,
		pregunta: "¿Qué hace 'rm -rf carpeta'?",
		opciones: [
			"Renombra una carpeta",
			"Elimina una carpeta y todo su contenido sin confirmación",
			"Copia una carpeta",
			"Move una carpeta a la papelera"
		],
		respuestaCorrecta: 1,
		explicacion: "-rf significa recursivo y forzado. Elimina la carpeta y TODO su contenido SIN preguntar. ¡MUY PELIGROSO si lo usas mal!",
		categoria: "Archivos"
	},
	{
		id: 28,
		pregunta: "¿Qué comando muestra información de red?",
		opciones: [
			"ifconfig",
			"netstat",
			"ip",
			"network"
		],
		respuestaCorrecta: 2,
		explicacion: "ip es el comando moderno para gestión de red en Linux. Reemplaza a ifconfig. Ejemplo: ip addr show",
		categoria: "Red"
	},
	{
		id: 29,
		pregunta: "¿Qué significa '|' en la terminal?",
		opciones: [
			"Concatenar archivos",
			"Redirección de salida",
			"Pipeline: conectar la salida de un comando como entrada de otro",
			"Commentario"
		],
		respuestaCorrecta: 2,
		explicacion: "El pipe (|) conecta la salida de un comando con la entrada del siguiente. Ejemplo: ls | grep texto",
		categoria: "Fundamentos"
	},
	{
		id: 30,
		pregunta: "¿Qué hace el comando 'top'?",
		opciones: [
			"Muestra los archivos superiores",
			"Muestra procesos en tiempo real con uso de CPU y memoria",
			"Muestra los comandos más usados",
			"Muestra los archivos más grandes"
		],
		respuestaCorrecta: 1,
		explicacion: "top muestra los procesos del sistema en tiempo real, con información de CPU, memoria y tiempo de ejecución.",
		categoria: "Procesos"
	}
];
