export interface Ejercicio {
	pregunta: string;
	respuestaEsperada: string;
	solucion?: string;
}

export interface Leccion {
	id: string;
	titulo: string;
	descripcion: string;
	comandos: string[];
	conceptos?: string[];
	contenido?: string[];
	secciones?: { titulo: string; contenido: string[]; tabla?: { etiqueta: string; descripcion: string }[] }[];
	dificultad?: 'principiante' | 'intermedio' | 'avanzado';
	ejercicios?: Ejercicio[];
}

export const lecciones: Leccion[] = [
	{
		id: "pilares",
		titulo: "Lección 1: Los Pilares de Linux",
		descripcion: "Entiende la filosofía y estructura fundamental de Linux",
		dificultad: "principiante",
		contenido: [
			"Para dominar Linux, no necesitas memorizar cientos de comandos de inmediato. Lo que necesitas es entender cómo piensa el sistema. Linux no es una \"caja negra\"; es un entorno diseñado para ser transparente y lógico."
		],
		secciones: [
			{
				titulo: "La Filosofía: \"Todo es un archivo\"",
				contenido: [
					"Esta es la frase más famosa del mundo Linux, y por una buena razón. En otros sistemas, el hardware y el software se gestionan de formas totalmente distintas. En Linux, la arquitectura simplifica esto: casi todo se representa como un archivo.",
					"¿Qué significa en la práctica? Tu disco duro es un archivo, tu teclado es un archivo, e incluso la configuración de tu red es un archivo de texto.",
					"¿Por qué es una ventaja? Porque si sabes cómo leer, escribir y editar un archivo, tienes el poder de configurar cualquier parte del sistema. No necesitas herramientas propietarias ni menús ocultos; solo necesitas acceso al archivo correcto.",
					"En resumen: La transparencia es total. El sistema no te oculta cómo funciona; te da los archivos para que tú mismo lo veas."
				]
			},
			{
				titulo: "El Kernel y el Shell: El Motor y el Intérprete",
				contenido: [
					"Imagina que Linux está dividido en capas de cebolla. Para que tú puedas hacer algo, la información debe viajar entre estas capas:",
					"El Kernel (El Núcleo) es la capa más profunda. Es el software que gestiona directamente el hardware. El Kernel decide quién recibe memoria RAM, cómo se guardan los datos en el disco y cómo se procesan las tareas. Es extremadamente eficiente, pero no \"habla\" directamente contigo.",
					"El Shell (La Interfaz) es la capa que te rodea a ti, el usuario. El Shell es un programa que interpreta tus órdenes. Cuando escribes un comando en la terminal, el Shell lo traduce en una petición que el Kernel pueda entender.",
					"Dato clave: Puedes cambiar de Shell (Bash, Zsh, Fish) según tus gustos, pero el Kernel seguirá siendo el mismo motor confiable debajo de todo."
				]
			},
			{
				titulo: "El Árbol de Directorios: Una Estructura Única",
				contenido: [
					"Olvida las letras de unidad como C: o D:. En Linux, todo el sistema de archivos se organiza como un árbol invertido. Todo nace de un único punto de origen llamado Raíz, representado por una diagonal: /.",
					"Desde esa raíz, el sistema se ramifica en carpetas con propósitos específicos. Conocer estas carpetas es como tener el mapa de una ciudad:"
				],
				tabla: [
					{ etiqueta: "/", descripcion: "La Raíz - El inicio de todo. No hay nada \"fuera\" de aquí." },
					{ etiqueta: "/home", descripcion: "Usuarios - Donde viven tus documentos, fotos y descargas. Es tu espacio personal." },
					{ etiqueta: "/etc", descripcion: "Configuración - El \"cerebro\" administrativo. Aquí cambias cómo se comporta el sistema." },
					{ etiqueta: "/bin", descripcion: "Binarios - Aquí residen los programas esenciales que usas en la terminal (como ls o cp)." },
					{ etiqueta: "/root", descripcion: "Superusuario - El espacio privado del administrador del sistema." }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "¿Cómo se llama la capa de Linux que gestiona el hardware directamente?",
				respuestaEsperada: "kernel",
				solucion: "El Kernel es el núcleo que gestiona el hardware"
			},
			{
				pregunta: "¿Qué símbolo representa la raíz del sistema de archivos en Linux?",
				respuestaEsperada: "/",
				solucion: "La diagonal / representa la raíz del sistema"
			},
			{
				pregunta: "¿Qué significa que en Linux \"todo es un archivo\"?",
				respuestaEsperada: "todo",
				solucion: "Casi todo en el sistema se representa como archivos (dispositivos, hardware, configuración)"
			}
		]
	},
	{
		id: "navegacion",
		titulo: "Lección 2: Tu Primera Conversación con el Sistema",
		descripcion: "Aprende a moverte por el sistema de archivos",
		dificultad: "principiante",
		comandos: [],
		secciones: [
			{
				titulo: "Descifrando el Prompt",
				contenido: [
					"Cuando abres una terminal, lo primero que ves es una línea de texto similar a esta:",
					"usuario@linux-pc:~$",
					"No es ruido visual, es información crítica:",
					"usuario: Quién eres tú en este momento.",
					"linux-pc: El nombre de la máquina en la que estás trabajando.",
					"~ (la tilde): Este símbolo representa tu carpeta personal (/home/usuario). Es tu \"base de operaciones\".",
					"$: Indica que eres un usuario normal. Si vieras un #, significa que tienes poderes de administrador (Root). ¡Cuidado ahí!"
				]
			},
			{
				titulo: "La Trinidad de la Navegación",
				contenido: [
					"Para moverte por el sistema de archivos, solo necesitas dominar tres comandos básicos. Piénsalos como tus sentidos dentro del árbol de directorios:"
				],
				tabla: [
					{ etiqueta: "pwd", descripcion: "Print Working Directory - Te dice dónde estás parado. Ejemplo: /home/usuario/Documentos" },
					{ etiqueta: "ls", descripcion: "List - Muestra los archivos y carpetas. Usa ls -l para detalles o ls -a para ver ocultos" },
					{ etiqueta: "cd", descripcion: "Change Directory - Navega entre carpetas. cd .. sube un nivel, cd - vuelve a la anterior" }
				]
			},
			{
				titulo: "Rutas Absolutas vs. Relativas",
				contenido: [
					"Este es el concepto donde muchos principiantes se confunden, pero es más sencillo de lo que parece:",
					"Ruta Absoluta: Es la dirección completa desde la raíz. Siempre empieza con /. Ejemplo: /home/usuario/Fotos/vacaciones.jpg. No importa dónde estés, esta ruta siempre funciona.",
					"Ruta Relativa: Es la dirección partiendo de donde estás ahora. Ejemplo: Si ya estás en /home/usuario, para ir a Fotos solo escribes cd Fotos.",
					"Analogía: Una ruta absoluta es como dar una dirección postal con calle, número y ciudad. Una ruta relativa es como decir \"dobla a la derecha en la siguiente esquina\"."
				]
			},
			{
				titulo: "El Súper Poder: Autocompletado con Tabulador",
				contenido: [
					"Si hay algo que separa a los novatos de los profesionales es la tecla Tab.",
					"No escribas nombres largos de carpetas. Escribe las primeras dos o tres letras y presiona la tecla Tab. Linux completará el nombre por ti.",
					"Si hay varias opciones, presiona Tab dos veces y te las mostrará todas.",
					"Si no autocompleta, es que la carpeta no existe o la escribiste mal."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "¿Qué comando muestra tu directorio actual?",
				respuestaEsperada: "pwd",
				solucion: "Usa pwd (Print Working Directory) para ver dónde estás"
			},
			{
				pregunta: "Lista los archivos de tu carpeta actual",
				respuestaEsperada: "ls",
				solucion: "Usa ls para listar archivos"
			},
			{
				pregunta: "Navega a tu carpeta personal",
				respuestaEsperada: "cd ~",
				solucion: "El símbolo ~ representa tu carpeta home"
			}
		]
	},
	{
		id: "archivos-basico",
		titulo: "Lección 3: El Arte de Manipular Archivos",
		descripcion: "Crear, copiar, mover y eliminar archivos con precisión",
		comandos: [],
		secciones: [
			{
				titulo: "Crear Espacios: touch y mkdir",
				contenido: [
					"Antes de organizar, necesitamos contenido. Linux nos da dos herramientas fundamentales:",
					"touch [archivo]: Crea un archivo vacío. Se usa mucho para \"marcar\" que algo existe o para preparar un archivo de configuración que editaremos luego. Ejemplo: touch notas.txt",
					"mkdir [carpeta]: (Make Directory) Crea una carpeta nueva.",
					"Tip Profesional: Si quieres crear una estructura profunda de una vez (ejemplo: una carpeta dentro de otra que no existe), usa el parámetro -p. Ejemplo: mkdir -p proyectos/web/imagenes (Crea las tres carpetas de un solo golpe)."
				],
				tabla: [
					{ etiqueta: "touch archivo", descripcion: "Crea un archivo vacío" },
					{ etiqueta: "mkdir carpeta", descripcion: "Crea un directorio" },
					{ etiqueta: "mkdir -p ruta", descripcion: "Crea estructura completa" }
				]
			},
			{
				titulo: "El Movimiento: cp y mv",
				contenido: [
					"Aquí es donde Linux se vuelve elegante. Los comandos de movimiento tienen una lógica sencilla: [Origen] [Destino].",
					"cp (Copy): Copia un archivo de un lugar a otro manteniendo el original. Uso: cp archivo.txt carpeta_destino/",
					"Nota importante: Para copiar una carpeta entera con todo su contenido, debes usar el modo \"recursivo\" con -r. Ejemplo: cp -r carpeta_fotos/ respaldo/",
					"mv (Move): Este comando tiene una doble función que suele confundir a los principiantes: Mover y Renombrar.",
					"Para mover: mv archivo.txt documentos/",
					"Para renombrar: mv nombre_viejo.txt nombre_nuevo.txt. ¿Por qué? Porque para Linux, renombrar un archivo es simplemente \"moverlo\" de un nombre a otro dentro del mismo lugar."
				],
				tabla: [
					{ etiqueta: "cp origen destino", descripcion: "Copia un archivo" },
					{ etiqueta: "cp -r origen destino", descripcion: "Copia una carpeta" },
					{ etiqueta: "mv origen destino", descripcion: "Mueve o renombra" }
				]
			},
			{
				titulo: "El Punto de No Retorno: rm",
				contenido: [
					"En la terminal de Linux no existe la Papelera de Reciclaje. Cuando borras algo, desaparece. Por eso, el comando rm (Remove) debe usarse con respeto.",
					"Borrar un archivo: rm notas.txt",
					"Borrar una carpeta y todo lo que tiene: rm -rf carpeta/",
					"¡ALERTA!: La combinación -rf (recursivo y forzado) es extremadamente potente. Nunca la uses si no estás 100% seguro de qué hay dentro de esa carpeta.",
					"Consejo de seguridad: Si tienes miedo de borrar algo por error, usa rm -i. Linux te preguntará \"¿Seguro?\" antes de proceder con cada archivo."
				],
				tabla: [
					{ etiqueta: "rm archivo", descripcion: "Elimina un archivo" },
					{ etiqueta: "rm -rf carpeta", descripcion: "Elimina carpeta y contenido" },
					{ etiqueta: "rm -i archivo", descripcion: "Pide confirmación" }
				]
			},
			{
				titulo: "Visualizar sin Editar: cat y less",
				contenido: [
					"A veces solo quieres leer el contenido de un archivo sin modificarlo (y sin abrir un editor pesado).",
					"cat: Escupe todo el contenido del archivo en la terminal. Útil para archivos cortos.",
					"less: Abre el archivo de forma que puedes navegar por él (subir y bajar con las flechas). Presiona la tecla Q para salir. Es el estándar para leer documentos largos o manuales."
				]
			},
			{
				titulo: "Resumen de la Caja de Herramientas",
				contenido: [
					"Acción - Comando - Nota",
					"Crear archivo - touch - Rápido y limpio.",
					"Crear carpeta - mkdir - Usa -p para estructuras complejas.",
					"Copiar - cp - No olvides -r para carpetas.",
					"Mover / Renombrar - mv - Versatilidad total.",
					"Borrar - rm - Cuidado: Es permanente."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Crea un archivo vacío llamado \"notas.txt\"",
				respuestaEsperada: "touch notas.txt",
				solucion: "Usa touch para crear archivos vacíos"
			},
			{
				pregunta: "Crea una carpeta llamada \"proyectos\"",
				respuestaEsperada: "mkdir proyectos",
				solucion: "Usa mkdir para crear directorios"
			},
			{
				pregunta: "Copia el archivo \"datos.txt\" a una carpeta llamada \"respaldo\"",
				respuestaEsperada: "cp datos.txt respaldo/",
				solucion: "Usa cp para copiar archivos"
			},
			{
				pregunta: "Mueve el archivo \"viejo.txt\" a la carpeta \"documentos\"",
				respuestaEsperada: "mv viejo.txt documentos/",
				solucion: "Usa mv para mover archivos"
			},
			{
				pregunta: "Elimina el archivo \"temporal.txt\"",
				respuestaEsperada: "rm temporal.txt",
				solucion: "Usa rm para eliminar archivos"
			}
		]
	},
	{
		id: "leer-archivos",
		titulo: "Lección 4: Leer Archivos",
		descripcion: "Ver el contenido de archivos de texto",
		comandos: [],
		secciones: [
			{
				titulo: "Ver el Contenido Completo",
				contenido: [
					"Hay varias formas de ver el contenido de archivos en Linux, cada una con su propósito específico.",
					"cat: Muestra todo el contenido del archivo en la terminal. Es ideal para archivos pequeños. Ejemplo: cat archivo.txt",
					"Nota: Si el archivo es muy largo, cat mostrará todo de golpe y no podrás ver el principio. Para archivos grandes, usa less."
				],
				tabla: [
					{ etiqueta: "cat archivo", descripcion: "Muestra todo el contenido" },
					{ etiqueta: "tac archivo", descripcion: "Muestra contenido invertido" },
					{ etiqueta: "nl archivo", descripcion: "Muestra con números de línea" }
				]
			},
			{
				titulo: "Ver Parte del Archivo",
				contenido: [
					"head: Muestra las primeras líneas de un archivo. Por defecto, las primeras 10. Ejemplo: head -n 20 archivo.txt (muestra las primeras 20 líneas)",
					"tail: Muestra las últimas líneas de un archivo. Muy útil para ver logs recientes. Ejemplo: tail -f /var/log/syslog (muestra logs en tiempo real)"
				],
				tabla: [
					{ etiqueta: "head -n 10", descripcion: "Primeras 10 líneas" },
					{ etiqueta: "tail -n 10", descripcion: "Últimas 10 líneas" },
					{ etiqueta: "tail -f log", descripcion: "Ver logs en tiempo real" }
				]
			},
			{
				titulo: "Navegar Archivos Grandes: less",
				contenido: [
					"less abre el archivo de forma interactiva. Puedes subir y bajar con las flechas o teclas Avance/Página.",
					"Comandos dentro de less:",
					"Espacio o AvPág: Bajar una página",
					"b o RePág: Subir una página",
					"/texto: Buscar hacia adelante",
					"n: Siguiente resultado de búsqueda",
					"q: Salir de less",
					"less es el estándar para leer manuales, documentos largos o cualquier archivo que no quieras ver completo de una vez."
				],
				tabla: [
					{ etiqueta: "Espacio", descripcion: "Bajar una página" },
					{ etiqueta: "b", descripcion: "Subir una página" },
					{ etiqueta: "/texto", descripcion: "Buscar hacia adelante" },
					{ etiqueta: "q", descripcion: "Salir" }
				]
			},
			{
				titulo: "Contar Líneas, Palabras y Caracteres: wc",
				contenido: [
					"wc (Word Count) cuenta líneas, palabras y caracteres de un archivo.",
					"wc -l: Número de líneas",
					"wc -w: Número de palabras",
					"wc -c: Número de caracteres",
					"Sin parámetros, wc muestra las tres métricas juntas."
				],
				tabla: [
					{ etiqueta: "wc -l", descripcion: "Cuenta líneas" },
					{ etiqueta: "wc -w", descripcion: "Cuenta palabras" },
					{ etiqueta: "wc -c", descripcion: "Cuenta caracteres" }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Muestra todo el contenido de un archivo llamado \"documento.txt\"",
				respuestaEsperada: "cat documento.txt",
				solucion: "Usa cat para ver el contenido completo"
			},
			{
				pregunta: "Muestra las primeras 10 líneas de un archivo",
				respuestaEsperada: "head",
				solucion: "Usa head para ver las primeras líneas"
			},
			{
				pregunta: "Muestra las últimas 5 líneas de un archivo",
				respuestaEsperada: "tail -n 5",
				solucion: "Usa tail -n para ver las últimas líneas"
			},
			{
				pregunta: "Cuenta el número de líneas de un archivo",
				respuestaEsperada: "wc -l",
				solucion: "Usa wc -l para contar líneas"
			}
		]
	},
	{
		id: "busqueda",
		titulo: "Lección 5: Búsqueda",
		descripcion: "Buscar archivos y texto",
		comandos: [],
		secciones: [
			{
				titulo: "Buscar Archivos: find",
				contenido: [
					"find es el comando más potente para buscar archivos en el sistema.",
					"Búsqueda básica: find . -name \"archivo.txt\" (busca en el directorio actual)",
					"Buscar por extensión: find . -name \"*.log\"",
					"Buscar por tipo: find . -type d (directorios) o find . -type f (archivos)",
					"Buscar por tamaño: find . -size +100M (mayores a 100MB)",
					"Buscar por fecha: find . -mtime -7 (modificados en los últimos 7 días)"
				],
				tabla: [
					{ etiqueta: "find . -name archivo", descripcion: "Buscar por nombre" },
					{ etiqueta: "find . -name *.log", descripcion: "Buscar por extensión" },
					{ etiqueta: "find . -type f", descripcion: "Buscar solo archivos" },
					{ etiqueta: "find . -size +100M", descripcion: "Buscar mayores a 100MB" }
				]
			},
			{
				titulo: "Buscar Texto en Archivos: grep",
				contenido: [
					"grep busca patrones de texto dentro de archivos.",
					"Uso básico: grep \"texto\" archivo.txt",
					"Búsqueda recursiva: grep -r \"texto\" carpeta/",
					"Ignorar mayúsculas: grep -i \"texto\" archivo.txt",
					"Mostrar número de línea: grep -n \"texto\" archivo.txt",
					"Combinar con otros comandos: ls | grep \".txt\" (filtrar resultados)"
				],
				tabla: [
					{ etiqueta: "grep texto archivo", descripcion: "Buscar en archivo" },
					{ etiqueta: "grep -r texto carpeta", descripcion: "Buscar recursivamente" },
					{ etiqueta: "grep -i texto archivo", descripcion: "Ignorar mayúsculas" },
					{ etiqueta: "ls | grep .txt", descripcion: "Filtrar lista" }
				]
			},
			{
				titulo: "Búsqueda Rápida: locate",
				contenido: [
					"locate es más rápido que find porque usa una base de datos indexada.",
					"Uso: locate archivo.txt",
					"Primero debes actualizar la base de datos: sudo updatedb",
					"Nota: No busca en tiempo real, pero es instantánea para búsquedas generales."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Busca todos los archivos con extensión \".txt\" en el directorio actual",
				respuestaEsperada: "find . -name *.txt",
				solucion: "Usa find con la opción -name"
			},
			{
				pregunta: "Busca la palabra \"error\" dentro de un archivo llamado \"log.txt\"",
				respuestaEsperada: "grep error log.txt",
				solucion: "Usa grep para buscar texto en archivos"
			},
			{
				pregunta: "Busca archivos modificados en los últimos 7 días",
				respuestaEsperada: "find . -mtime -7",
				solucion: "Usa find con -mtime para buscar por fecha"
			}
		]
	},
	{
		id: "permisos",
		titulo: "Lección 6: Permisos",
		descripcion: "Control de acceso a archivos",
		comandos: [],
		conceptos: ["permisos"],
		secciones: [
			{
				titulo: "Los Tres Tipos de Permisos",
				contenido: [
					"Carpeta en Linux tiene una \"etiqueta\" de seguridad que define qué se puede hacer con él. Estos permisos se dividen en tres acciones:",
					"r (Read / Lectura): Permiso para ver el contenido del archivo o listar los archivos de una carpeta.",
					"w (Write / Escritura): Permiso para modificar el archivo o crear/borrar archivos dentro de una carpeta.",
					"x (Execute / Ejecución): Permiso para correr un archivo como un programa o para \"entrar\" en una carpeta con el comando cd."
				],
				tabla: [
					{ etiqueta: "r (4)", descripcion: "Lectura - ver contenido" },
					{ etiqueta: "w (2)", descripcion: "Escritura - modificar" },
					{ etiqueta: "x (1)", descripcion: "Ejecución - ejecutar" }
				]
			},
			{
				titulo: "¿A quién pertenecen los permisos?",
				contenido: [
					"Los permisos no son generales; se aplican a tres niveles de usuarios distintos:",
					"U (Owner / Propietario): El usuario que creó el archivo.",
					"G (Group / Grupo): Un conjunto de usuarios que comparten acceso (útil en entornos de trabajo).",
					"O (Others / Otros): Cualquier otra persona que tenga acceso al sistema.",
					"Cuando haces un ls -l, verás algo como esto: -rwxr-xr--.",
					"Parece un jeroglífico, pero es simple: los primeros tres son para el dueño, los siguientes tres para el grupo y los últimos tres para el resto."
				],
				tabla: [
					{ etiqueta: "Propietario (u)", descripcion: "Usuario que creó el archivo" },
					{ etiqueta: "Grupo (g)", descripcion: "Conjunto de usuarios" },
					{ etiqueta: "Otros (o)", descripcion: "Cualquier otro usuario" }
				]
			},
			{
				titulo: "Cambiando las reglas: chmod y chown",
				contenido: [
					"A veces necesitas que un archivo que acabas de crear sea ejecutable o que otro usuario pueda leerlo.",
					"chmod (Change Mode): Cambia los permisos. Ejemplo: chmod +x script.sh (Le das permiso de ejecución a un archivo).",
					"chown (Change Owner): Cambia quién es el dueño del archivo. Solo el administrador puede hacer esto."
				],
				tabla: [
					{ etiqueta: "chmod +x archivo", descripcion: "Añadir permiso de ejecución" },
					{ etiqueta: "chmod 755 archivo", descripcion: "Permisos estándar rwx" },
					{ etiqueta: "chmod -r archivo", descripcion: "Quitar permiso de lectura" }
				]
			},
			{
				titulo: "El Gran Poder: sudo",
				contenido: [
					"En Windows, solemos usar la cuenta de administrador para todo. En Linux, eso es un pecado capital. Tú siempre trabajas como un usuario normal por seguridad. Pero, ¿qué pasa cuando necesitas instalar un programa o editar un archivo del sistema en /etc?",
					"Ahí entra sudo (SuperUser DO).",
					"Al poner sudo antes de cualquier comando, le estás diciendo al sistema: \"Sé que esto es peligroso, pero autorízame con mis poderes de administrador por un momento\".",
					"Ejemplo: sudo apt update",
					"La Regla de Oro: Solo usa sudo cuando sea estrictamente necesario. Si un comando funciona sin sudo, no lo uses. Es el cinturón de seguridad de tu sistema operativo."
				],
				tabla: [
					{ etiqueta: "sudo comando", descripcion: "Ejecutar como administrador" },
					{ etiqueta: "sudo -i", descripcion: "Abrir shell como root" },
					{ etiqueta: "sudo su", descripcion: "Cambiar a usuario root" }
				]
			},
			{
				titulo: "El Usuario Root: El \"Dios\" del Sistema",
				contenido: [
					"Existe un usuario especial llamado root. Él tiene permiso para hacer todo: borrar el sistema entero, ver los archivos privados de otros y cambiar cualquier configuración.",
					"Usar sudo es como pedirle las llaves al conserje del edificio para abrir una puerta específica. Ser root es ser el dueño de todo el edificio y caminar con una sierra eléctrica por los pasillos. ¡Mucho cuidado!"
				]
			}
		]
	},
	{
		id: "procesos",
		titulo: "Lección 7: Procesos",
		descripcion: "Gestionar procesos del sistema",
		comandos: [],
		conceptos: ["procesos"],
		secciones: [
			{
				titulo: "¿Qué es un Proceso?",
				contenido: [
					"Un proceso es un programa en ejecución. Cada proceso tiene un PID (Process ID) único.",
					"Linux permite múltiples procesos ejecutándose simultáneamente (multitarea).",
					"Puedes visualizar todos los procesos del sistema con ps aux."
				],
				tabla: [
					{ etiqueta: "PID", descripcion: "Identificador único del proceso" },
					{ etiqueta: "CPU", descripcion: "Porcentaje de uso de CPU" },
					{ etiqueta: "MEM", descripcion: "Porcentaje de uso de memoria" }
				]
			},
			{
				titulo: "Monitorear Procesos: top y htop",
				contenido: [
					"top: Muestra los procesos en tiempo real, consumo de CPU y memoria.",
					"htop: Versión mejorada de top con interfaz más amigable (si está instalado).",
					"Dentro de top: Presiona k para matar un proceso, q para salir."
				],
				tabla: [
					{ etiqueta: "top", descripcion: "Ver procesos en tiempo real" },
					{ etiqueta: "htop", descripcion: "Versión mejorada (interactiva)" },
					{ etiqueta: "q", descripcion: "Salir de top/htop" }
				]
			},
			{
				titulo: "Control de Procesos",
				contenido: [
					"kill [PID]: Envía señal para terminar un proceso.",
					"kill -9 [PID]: Fuerza la terminación inmediata (úsalo como último recurso).",
					"pkill nombre: Mata procesos por nombre.",
					"killall nombre: Mata todos los procesos de un programa."
				],
				tabla: [
					{ etiqueta: "kill PID", descripcion: "Terminar proceso suavemente" },
					{ etiqueta: "kill -9 PID", descripcion: "Forzar terminación" },
					{ etiqueta: "pkill nombre", descripcion: "Matar por nombre" },
					{ etiqueta: "killall nombre", descripcion: "Matar todos los procesos" }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Muestra todos los procesos en ejecución",
				respuestaEsperada: "ps aux",
				solucion: "Usa ps aux para ver todos los procesos"
			},
			{
				pregunta: "Muestra los procesos en tiempo real con uso de recursos",
				respuestaEsperada: "top",
				solucion: "Usa top para ver procesos en tiempo real"
			},
			{
				pregunta: "Termina un proceso con PID 1234",
				respuestaEsperada: "kill 1234",
				solucion: "Usa kill seguido del PID"
			}
		]
	},
	{
		id: "red",
		titulo: "Lección 8: Red",
		descripcion: "Comandos de red esenciales",
		comandos: [],
		conceptos: ["red"],
		secciones: [
			{
				titulo: "Verificar Conectividad: ping",
				contenido: [
					"ping verifica si un host está reachable.",
					"Uso: ping google.com",
					"ping -c 4 google.com: Hacer solo 4 pings (para pruebas)",
					"Ctrl+C para detener"
				],
				tabla: [
					{ etiqueta: "ping host", descripcion: "Verificar conectividad" },
					{ etiqueta: "ping -c 4 host", descripcion: "Solo 4 intentos" },
					{ etiqueta: "ping -i 2 host", descripcion: "Intervalo de 2 segundos" }
				]
			},
			{
				titulo: "Ver Configuración de Red: ip",
				contenido: [
					"ip addr: Ver direcciones IP de todas las interfaces.",
					"ip link set eth0 up/down: Activar/desactivar interfaz.",
					"ip route: Ver tabla de rutas."
				],
				tabla: [
					{ etiqueta: "ip addr", descripcion: "Ver direcciones IP" },
					{ etiqueta: "ip link", descripcion: "Ver interfaces" },
					{ etiqueta: "ip route", descripcion: "Ver rutas" }
				]
			},
			{
				titulo: "Conexiones: ss y netstat",
				contenido: [
					"ss -tuln: Ver puertos en escucha (TCP/UDP).",
					"netstat -tuln: Comando equivalente (más antiguo).",
					"ss -tn: Ver conexiones TCP activas."
				],
				tabla: [
					{ etiqueta: "ss -tuln", descripcion: "Ver puertos abiertos" },
					{ etiqueta: "netstat -tuln", descripcion: "Versión clásica" },
					{ etiqueta: "ss -tn", descripcion: "Conexiones activas" }
				]
			},
			{
				titulo: "Transferencia y Acceso Remoto",
				contenido: [
					"curl: Descargar contenido de URLs. curl -O archivo.txt url",
					"wget: Similar a curl pero para descargas. wget url",
					"ssh: Conectar a servidores remotos. ssh usuario@servidor",
					"scp: Copiar archivos por SSH. scp archivo usuario@servidor:/ruta"
				],
				tabla: [
					{ etiqueta: "curl url", descripcion: "Descargar contenido" },
					{ etiqueta: "wget url", descripcion: "Descargar archivo" },
					{ etiqueta: "ssh user@host", descripcion: "Conectar remoto" },
					{ etiqueta: "scp origen destino", descripcion: "Copiar por SSH" }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Verifica si google.com está accesible",
				respuestaEsperada: "ping google.com",
				solucion: "Usa ping para verificar conectividad"
			},
			{
				pregunta: "Descarga un archivo desde una URL",
				respuestaEsperada: "wget",
				solucion: "Usa wget seguido de la URL"
			},
			{
				pregunta: "Muestra las conexiones de red activas",
				respuestaEsperada: "netstat",
				solucion: "Usa netstat para ver conexiones de red"
			}
		]
	},
	{
		id: "compresion",
		titulo: "Lección 9: Compresión",
		descripcion: "Comprimir y descomprimir archivos",
		comandos: [],
		secciones: [
			{
				titulo: "tar: El Formato Linux",
				contenido: [
					"tar crea archivos comprimidos o sin comprimir (extensión .tar, .tar.gz, .tar.bz2).",
					"Crear: tar -cvf archivo.tar carpeta/",
					"Extraer: tar -xvf archivo.tar",
					"Crear comprimido: tar -czvf archivo.tar.gz carpeta/",
					"Extraer comprimido: tar -xzvf archivo.tar.gz"
				],
				tabla: [
					{ etiqueta: "tar -cvf archivo.tar", descripcion: "Crear archivo tar" },
					{ etiqueta: "tar -xvf archivo.tar", descripcion: "Extraer tar" },
					{ etiqueta: "tar -czvf archivo.tar.gz", descripcion: "Crear comprimido" },
					{ etiqueta: "tar -xzvf archivo.tar.gz", descripcion: "Extraer comprimido" }
				]
			},
			{
				titulo: "zip y unzip",
				contenido: [
					"zip archivo.zip archivos: Comprimir archivos.",
					"zip -r archivo.zip carpeta/: Comprimir carpeta recursivamente.",
					"unzip archivo.zip: Extraer.",
					"unzip -l archivo.zip: Ver contenido sin extraer."
				],
				tabla: [
					{ etiqueta: "zip archivo.zip archivos", descripcion: "Comprimir archivos" },
					{ etiqueta: "zip -r archivo.zip carpeta", descripcion: "Comprimir carpeta" },
					{ etiqueta: "unzip archivo.zip", descripcion: "Extraer ZIP" },
					{ etiqueta: "unzip -l archivo.zip", descripcion: "Ver contenido" }
				]
			},
			{
				titulo: "gzip",
				contenido: [
					"gzip archivo: Comprime (crea archivo.gz, elimina original).",
					"gzip -k archivo: Mantiene el archivo original.",
					"gzip -d archivo.gz: Descomprimir.",
					"gunzip archivo.gz: Alternativa para descomprimir."
				],
				tabla: [
					{ etiqueta: "gzip archivo", descripcion: "Comprimir archivo" },
					{ etiqueta: "gzip -k archivo", descripcion: "Mantener original" },
					{ etiqueta: "gzip -d archivo.gz", descripcion: "Descomprimir" }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Crea un archivo comprimido llamado \"datos.tar\"",
				respuestaEsperada: "tar -cvf datos.tar",
				solucion: "Usa tar -cvf para crear archivos tar"
			},
			{
				pregunta: "Extrae el contenido de un archivo \".tar.gz\"",
				respuestaEsperada: "tar -xzvf",
				solucion: "Usa tar -xzvf para extraer archivos comprimidos"
			},
			{
				pregunta: "Comprime un archivo llamado \"documento.txt\" con gzip",
				respuestaEsperada: "gzip documento.txt",
				solucion: "Usa gzip para comprimir archivos"
			}
		]
	},
	{
		id: "variables-entorno",
		titulo: "Lección 10: Variables de Entorno",
		descripcion: "Configuración del entorno",
		comandos: [],
		conceptos: ["variables-entorno"],
		secciones: [
			{
				titulo: "¿Qué son las Variables de Entorno?",
				contenido: [
					"Las variables de entorno almacenan información del sistema como rutas, usuario actual, etc.",
					"PATH: Indica al sistema dónde buscar ejecutables.",
					"HOME: Ruta del directorio personal del usuario.",
					"USER: Nombre del usuario actual."
				],
				tabla: [
					{ etiqueta: "PATH", descripcion: "Rutas de ejecutables" },
					{ etiqueta: "HOME", descripcion: "Directorio personal" },
					{ etiqueta: "USER", descripcion: "Usuario actual" },
					{ etiqueta: "PWD", descripcion: "Directorio actual" }
				]
			},
			{
				titulo: "Ver y Usar Variables",
				contenido: [
					"env: Lista todas las variables de entorno.",
					"echo $VARIABLE: Muestra el valor de una variable.",
					"Ejemplo: echo $PATH"
				],
				tabla: [
					{ etiqueta: "env", descripcion: "Lista todas las variables" },
					{ etiqueta: "echo $VAR", descripcion: "Muestra valor de variable" },
					{ etiqueta: "printenv VAR", descripcion: "Otra forma de mostrar" }
				]
			},
			{
				titulo: "Crear Variables",
				contenido: [
					"export VARIABLE=valor: Crea una variable (temporal).",
					"export PATH=$PATH:/ruta/nueva: Añadir al PATH.",
					"Para hacer permanentes, agrégalas a ~/.bashrc o /etc/environment."
				],
				tabla: [
					{ etiqueta: "export VAR=valor", descripcion: "Crear variable" },
					{ etiqueta: "export PATH=$PATH:/ruta", descripcion: "Añadir al PATH" }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Muestra todas las variables de entorno",
				respuestaEsperada: "env",
				solucion: "Usa env para ver todas las variables"
			},
			{
				pregunta: "Crea una variable llamada \"MI_VAR\" con valor \"hola\"",
				respuestaEsperada: "export MI_VAR=hola",
				solucion: "Usa export para crear variables"
			}
		]
	},
	{
		id: "usuarios",
		titulo: "Lección 11: Gestión de Usuarios",
		descripcion: "Administrar usuarios y grupos",
		comandos: [],
		conceptos: ["usuarios"],
		secciones: [
			{
				titulo: "Linux es Multiusuario",
				contenido: [
					"Linux permite que varios usuarios usen el sistema simultáneamente.",
					"Cada usuario tiene su propio directorio home y permisos específicos.",
					"whoami: Muestra tu usuario actual."
				],
				tabla: [
					{ etiqueta: "whoami", descripcion: "Ver usuario actual" },
					{ etiqueta: "who", descripcion: "Ver usuarios activos" },
					{ etiqueta: "id", descripcion: "Ver UID y grupos" }
				]
			},
			{
				titulo: "Gestión de Usuarios",
				contenido: [
					"useradd -m usuario: Crear usuario con home.",
					"passwd usuario: Cambiar contraseña.",
					"usermod -aG grupo usuario: Agregar usuario a grupo.",
					"userdel -r usuario: Eliminar usuario y su home."
				],
				tabla: [
					{ etiqueta: "useradd -m usuario", descripcion: "Crear usuario" },
					{ etiqueta: "passwd usuario", descripcion: "Cambiar contraseña" },
					{ etiqueta: "usermod -aG grupo user", descripcion: "Añadir a grupo" },
					{ etiqueta: "userdel -r usuario", descripcion: "Eliminar usuario" }
				]
			},
			{
				titulo: "Privilegios: sudo",
				contenido: [
					"sudo permite ejecutar comandos con privilegios de administrador (root).",
					"sudo comando: Ejecutar como admin.",
					"sudo -i: Abrir shell como root.",
					"¡Cuidado! Con grandes poderes vienen grandes responsabilidades."
				],
				tabla: [
					{ etiqueta: "sudo comando", descripcion: "Ejecutar como admin" },
					{ etiqueta: "sudo -i", descripcion: "Shell como root" },
					{ etiqueta: "sudo su", descripcion: "Cambiar a root" }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Crea un nuevo usuario llamado \"juan\"",
				respuestaEsperada: "sudo useradd juan",
				solucion: "Usa useradd para crear usuarios"
			},
			{
				pregunta: "Cambia la contraseña del usuario \"juan\"",
				respuestaEsperada: "sudo passwd juan",
				solucion: "Usa passwd para cambiar contraseñas"
			},
			{
				pregunta: "Cambia al usuario \"juan\"",
				respuestaEsperada: "su - juan",
				solucion: "Usa su para cambiar de usuario"
			}
		]
	},
	{
		id: "paquetes",
		titulo: "Lección 12: Gestión de Paquetes",
		descripcion: "Instalar y administrar software",
		comandos: [],
		conceptos: ["gestion-paquetes"],
		secciones: [
			{
				titulo: "Sistemas de Paquetes",
				contenido: [
					"Las distribuciones Linux usan sistemas de paquetes para instalar software.",
					"apt: Debian, Ubuntu, Linux Mint.",
					"dnf: Fedora, RHEL 8+.",
					"yum: RHEL/CentOS (versiones antiguas).",
					"pacman: Arch Linux."
				],
				tabla: [
					{ etiqueta: "apt", descripcion: "Debian, Ubuntu" },
					{ etiqueta: "dnf", descripcion: "Fedora, RHEL 8+" },
					{ etiqueta: "yum", descripcion: "CentOS antiguo" },
					{ etiqueta: "pacman", descripcion: "Arch Linux" }
				]
			},
			{
				titulo: "Comandos Básicos (apt)",
				contenido: [
					"sudo apt update: Actualizar lista de paquetes.",
					"sudo apt upgrade: Actualizar paquetes instalados.",
					"sudo apt install nombre: Instalar paquete.",
					"sudo apt remove nombre: Desinstalar.",
					"apt search palabra: Buscar paquete."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Actualiza la lista de paquetes disponibles",
				respuestaEsperada: "sudo apt update",
				solucion: "Usa apt update para actualizar la lista"
			},
			{
				pregunta: "Instala un paquete llamado \"curl\"",
				respuestaEsperada: "sudo apt install curl",
				solucion: "Usa apt install para instalar paquetes"
			}
		]
	},
	{
		id: "servicios",
		titulo: "Lección 13: Servicios del Sistema",
		descripcion: "Gestionar servicios con systemd",
		comandos: [],
		conceptos: ["systemd"],
		secciones: [
			{
				titulo: "Systemd",
				contenido: [
					"systemd es el sistema de gestión de servicios en distribuciones modernas.",
					"Cada servicio tiene una 'unit file' (.service).",
					"systemctl es la herramienta principal para manage services."
				],
				tabla: [
					{ etiqueta: "systemd", descripcion: "Sistema de servicios moderno" },
					{ etiqueta: "systemctl", descripcion: "Comando para gestionar servicios" },
					{ etiqueta: "unit file", descripcion: "Archivo de configuración del servicio" }
				]
			},
			{
				titulo: "Comandos systemctl",
				contenido: [
					"systemctl status servicio: Ver estado.",
					"systemctl start servicio: Iniciar.",
					"systemctl stop servicio: Detener.",
					"systemctl restart servicio: Reiniciar.",
					"systemctl enable servicio: Habilitar al arranque.",
					"systemctl disable servicio: Deshabilitar."
				]
			},
			{
				titulo: "Ver Logs: journalctl",
				contenido: [
					"journalctl: Ver todos los logs del sistema.",
					"journalctl -u servicio: Logs de un servicio específico.",
					"journalctl -f: Modo follow (logs en tiempo real).",
					"journalctl --since '1 hour ago': Logs de la última hora."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Verifica el estado del servicio \"nginx\"",
				respuestaEsperada: "sudo systemctl status nginx",
				solucion: "Usa systemctl status para ver el estado"
			},
			{
				pregunta: "Reinicia el servicio \"apache2\"",
				respuestaEsperada: "sudo systemctl restart apache2",
				solucion: "Usa systemctl restart para reiniciar"
			}
		]
	},
	{
		id: "disco",
		titulo: "Lección 14: Gestión de Disco",
		descripcion: "Espacio en disco y montaje",
		comandos: [],
		conceptos: ["filesystem"],
		secciones: [
			{
				titulo: "Ver Espacio: df",
				contenido: [
					"df: Muestra espacio usado y disponible en disco.",
					"df -h: Formato legible (KB, MB, GB).",
					"df -h /carpeta: Espacio de un directorio específico.",
					"df -T: Muestra tipo de sistema de archivos."
				],
				tabla: [
					{ etiqueta: "df -h", descripcion: "Espacio legible" },
					{ etiqueta: "df -h /directorio", descripcion: "Espacio de directorio" },
					{ etiqueta: "df -T", descripcion: "Con tipo de sistema" }
				]
			},
			{
				titulo: "Ver Tamaño de Carpetas: du",
				contenido: [
					"du: Muestra tamaño de archivos y directorios.",
					"du -sh carpeta: Tamaño total de una carpeta.",
					"du -h: Formato legible.",
					"du -h --max-depth=1: Solo primer nivel."
				]
			},
			{
				titulo: "Montaje de Dispositivos",
				contenido: [
					"mount: Lista montajes actuales.",
					"sudo mount /dev/sdb1 /mnt: Montar dispositivo.",
					"sudo umount /mnt: Desmontar.",
					"mount -o loop archivo.iso /mnt: Montar imagen ISO."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Muestra el espacio usado en disco por las particiones",
				respuestaEsperada: "df -h",
				solucion: "Usa df -h para ver espacio en disco"
			},
			{
				pregunta: "Muestra el tamaño de una carpeta llamada \"documentos\"",
				respuestaEsperada: "du -sh documentos",
				solucion: "Usa du para ver tamaño de directorios"
			}
		]
	},
	{
		id: "text-processing",
		titulo: "Lección 15: Procesamiento de Texto",
		descripcion: "Herramientas avanzadas de texto",
		comandos: [],
		secciones: [
			{
				titulo: "sed: Editor de Flujo",
				contenido: [
					"sed permite buscar y reemplazar texto en archivos.",
					"sed 's/old/new/' archivo: Reemplaza primera ocurrencia por línea.",
					"sed 's/old/new/g' archivo: Reemplaza todas las ocurrencias.",
					"sed -i 's/old/new/g' archivo: Edita el archivo directamente."
				],
				tabla: [
					{ etiqueta: "sed 's/old/new/'", descripcion: "Reemplazar primera ocurrencia" },
					{ etiqueta: "sed 's/old/new/g'", descripcion: "Reemplazar todas" },
					{ etiqueta: "sed -i", descripcion: "Editar in-place" }
				]
			},
			{
				titulo: "awk: Procesamiento de Texto",
				contenido: [
					"awk es un lenguaje de programación para procesamiento de texto.",
					"awk '{print $1}' archivo: Imprime primer campo.",
					"awk -F: '{print $1}' archivo: Usa : como delimitador.",
					"awk '$1 > 100' archivo: Filtra por condición."
				]
			},
			{
				titulo: "Otras Herramientas",
				contenido: [
					"cut -f1 archivo: Extrae campos.",
					"sort archivo: Ordena líneas.",
					"uniq archivo: Elimina líneas duplicadas.",
					"tr 'a-z' 'A-Z': Convierte a mayúsculas.",
					"diff archivo1 archivo2: Compara archivos."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Muestra solo la primera columna de un archivo separado por tabuladores",
				respuestaEsperada: "cut -f1",
				solucion: "Usa cut -f para extraer campos"
			},
			{
				pregunta: "Ordena las líneas de un archivo alfabéticamente",
				respuestaEsperada: "sort",
				solucion: "Usa sort para ordenar líneas"
			},
			{
				pregunta: "Reemplaza todas las \"a\" por \"e\" en un texto",
				respuestaEsperada: "tr a e",
				solucion: "Usa tr para transponer caracteres"
			}
		]
	},
	{
		id: "tareas-programadas",
		titulo: "Lección 16: Tareas Programadas",
		descripcion: "Automatizar tareas con cron",
		comandos: [],
		secciones: [
			{
				titulo: "¿Qué es cron?",
				contenido: [
					"cron permite programar tareas para que se ejecuten automáticamente en horarios específicos.",
					"Perfecto para backups, limpiezas, notificaciones y tareas de mantenimiento.",
					"crontab -e: Editar el crontab del usuario."
				],
				tabla: [
					{ etiqueta: "cron", descripcion: "Demonio de tareas programadas" },
					{ etiqueta: "crontab", descripcion: "Archivo de configuración" }
				]
			},
			{
				titulo: "Formato de cron",
				contenido: [
					"El formato es: minuto hora día mes día_semana comando",
					"* * * * * = cada minuto",
					"0 * * * * = cada hora",
					"0 0 * * * = cada día a medianoche",
					"0 9 * * 1 = cada lunes a las 9am"
				]
			},
			{
				titulo: "Comandos relacionados",
				contenido: [
					"crontab -e: Editar crontab.",
					"crontab -l: Listar tareas.",
					"crontab -r: Eliminar todas las tareas.",
					"crontab -u usuario -e: Editar crontab de otro usuario."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Edita el crontab del usuario actual",
				respuestaEsperada: "crontab -e",
				solucion: "Usa crontab -e para editar tareas"
			},
			{
				pregunta: "Lista las tareas programadas del usuario actual",
				respuestaEsperada: "crontab -l",
				solucion: "Usa crontab -l para listar tareas"
			}
		]
	},
	{
		id: "permisos",
		titulo: "Lección 17: Permisos y Propietarios",
		descripcion: "Controla quién puede acceder a tus archivos",
		dificultad: "intermedio",
		comandos: ["chmod", "chown"],
		secciones: [
			{
				titulo: "Entendiendo los Permisos",
				contenido: [
					"En Linux, cada archivo tiene tres tipos de permisos: lectura (r), escritura (w) y ejecución (x).",
					"Estos permisos se aplican a tres grupos: propietario (u), grupo (g) y otros (o).",
					"Usa ls -l para ver los permisos de un archivo. Verás algo como: -rwxr-x---",
					"El primer carácter indica el tipo (-=archivo, d=directorio). Los siguientes 9 caracteres son los permisos."
				],
				tabla: [
					{ etiqueta: "rwx", descripcion: "Propietario: leer, escribir, ejecutar" },
					{ etiqueta: "r-x", descripcion: "Grupo: leer, ejecutar (no escribir)" },
					{ etiqueta: "r--", descripcion: "Otros: solo leer" }
				]
			},
			{
				titulo: "Cambiar Permisos con chmod",
				contenido: [
					"chmod (change mode) permite cambiar los permisos de un archivo.",
					"Método numérico: chmod 755 archivo",
					"Método simbólico: chmod +x archivo (añadir ejecución)",
					"chmod -x archivo (quitar ejecución)",
					"chmod u+w,g-r archivo (añadir escritura a usuario, quitar lectura a grupo)"
				],
				tabla: [
					{ etiqueta: "chmod 777", descripcion: "Todos pueden todo (peligroso)" },
					{ etiqueta: "chmod 755", descripcion: "Propietario todo, resto ejecutar/leer" },
					{ etiqueta: "chmod 644", descripcion: "Propietario leer/escribir, resto solo leer" }
				]
			},
			{
				titulo: "Cambiar Propietario con chown",
				contenido: [
					"chown (change owner) cambia el propietario de un archivo o directorio.",
					"chown usuario archivo: Cambia el propietario.",
					"chown usuario:grupo archivo: Cambia propietario y grupo.",
					"chown -R usuario carpeta: Cambia recursivamente."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Haz que un archivo sea ejecutable",
				respuestaEsperada: "chmod +x",
				solucion: "Usa chmod +x archivo para añadir permiso de ejecución"
			}
		]
	},
	{
		id: "procesos",
		titulo: "Lección 18: Gestión de Procesos",
		descripcion: "Monitorea y controla los programas en ejecución",
		dificultad: "intermedio",
		comandos: ["ps", "top", "kill"],
		secciones: [
			{
				titulo: "Ver Procesos con ps",
				contenido: [
					"ps muestra los procesos en ejecución.",
					"ps: Procesos del usuario actual.",
					"ps aux: Todos los procesos del sistema.",
					"ps -ef: Formato completo.",
					"grep se usa para filtrar: ps aux | grep firefox"
				],
				tabla: [
					{ etiqueta: "ps", descripcion: "Procesos del usuario" },
					{ etiqueta: "ps aux", descripcion: "Todos los procesos" },
					{ etiqueta: "ps -ef", descripcion: "Formato completo" }
				]
			},
			{
				titulo: "Monitor en Tiempo Real con top/htop",
				contenido: [
					"top: Muestra procesos en tiempo real, uso de CPU y memoria.",
					"htop: Versión mejorada de top (si está instalado).",
					"Presiona 'q' para salir de top.",
					"Presiona 'k' para matar un proceso desde top."
				],
				tabla: [
					{ etiqueta: "top", descripcion: "Procesos en tiempo real" },
					{ etiqueta: "htop", descripcion: "Versión mejorada" }
				]
			},
			{
				titulo: "Terminar Procesos con kill",
				contenido: [
					"kill PID: Envía señal SIGTERM (pedir que termine).",
					"kill -9 PID: Fuerza la terminación inmediata.",
					"killall nombre: Termina todos los procesos con ese nombre.",
					"pkill nombre: Similar a killall (más flexible)."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Muestra todos los procesos del sistema",
				respuestaEsperada: "ps aux",
				solucion: "Usa ps aux para ver todos los procesos"
			},
			{
				pregunta: "Muestra los procesos en tiempo real",
				respuestaEsperada: "top",
				solucion: "Usa top para ver procesos en tiempo real"
			},
			{
				pregunta: "Fuerza la terminación de un proceso con PID 5678",
				respuestaEsperada: "kill -9 5678",
				solucion: "Usa kill -9 para forzar la terminación"
			}
		]
	},
	{
		id: "redes",
		titulo: "Lección 19: Redes Básicas",
		descripcion: "Configura y diagnostica conexiones de red",
		dificultad: "intermedio",
		comandos: ["ping", "ip", "curl", "ssh"],
		secciones: [
			{
				titulo: "Verificar Conexión con ping",
				contenido: [
					"ping dominio: Envía paquetes para verificar conectividad.",
					"ping -c 4 google.com: Hacer solo 4 pings.",
					"Ctrl+C para detener.",
					"Si responses, hay conexión. Si no, hay problema de red."
				],
				tabla: [
					{ etiqueta: "ping host", descripcion: "Verificar conectividad" },
					{ etiqueta: "ping -c 4 host", descripcion: "Solo 4 intentos" }
				]
			},
			{
				titulo: "Información de Red con ip",
				contenido: [
					"ip addr: Ver direcciones IP.",
					"ip link: Ver interfaces de red.",
					"ip route: Ver tabla de enrutamiento.",
					"ip neigh: Ver tabla ARP (vecinos)."
				],
				tabla: [
					{ etiqueta: "ip addr", descripcion: "Ver direcciones IP" },
					{ etiqueta: "ip link", descripcion: "Ver interfaces" },
					{ etiqueta: "ip route", descripcion: "Ver rutas" }
				]
			},
			{
				titulo: "Descargar Archivos con curl/wget",
				contenido: [
					"wget url: Descargar archivo.",
					"curl url: Mostrar contenido en terminal.",
					"curl -O url: Descargar archivo.",
					"curl -o nombre.txt url: Guardar con nombre específico."
				]
			},
			{
				titulo: "Conexión Remota con ssh",
				contenido: [
					"ssh usuario@servidor: Conectar a servidor remoto.",
					"ssh -p 2222 usuario@servidor: Conectar por puerto específico.",
					"exit: Cerrar sesión SSH."
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Conecta al servidor \"servidor.com\" como usuario \"admin\"",
				respuestaEsperada: "ssh admin@servidor.com",
				solucion: "Usa ssh usuario@servidor para conectar"
			},
			{
				pregunta: "Copia el archivo \"datos.txt\" al servidor \"192.168.1.10\"",
				respuestaEsperada: "scp datos.txt root@192.168.1.10:/root/",
				solucion: "Usa scp para copiar por SSH"
			},
			{
				pregunta: "Muestra tu dirección IP actual",
				respuestaEsperada: "ip addr",
				solucion: "Usa ip addr para ver direcciones IP"
			}
		]
	},
	{
		id: "scripts",
		titulo: "Lección 20: Scripts Básicos",
		descripcion: "Automatiza tareas con scripts de shell",
		dificultad: "avanzado",
		comandos: [],
		secciones: [
			{
				titulo: "Tu Primer Script",
				contenido: [
					"Un script es un archivo que contiene comandos que se ejecutan automáticamente.",
					"Guarda el archivo con extensión .sh: mi_script.sh",
					"chmod +x mi_script.sh: Hazlo ejecutable.",
					"./mi_script.sh: Ejecútalo."
				],
				codigos: [
					{
						titulo: "mi_script.sh",
						codigo: `#!/bin/bash
# Mi primer script
echo "¡Hola Mundo!"`
					}
				]
			},
			{
				titulo: "Variables",
				contenido: [
					"nombre=\"Carlos\": Crear variable (sin espacios alrededor de =).",
					"echo \"Hola $nombre\": Usar variable.",
					"$1, $2, ...: Argumentos pasados al script.",
					"$#: Número de argumentos.",
					"$?: Código de salida del último comando."
				],
				codigos: [
					{
						titulo: "variables.sh",
						codigo: `#!/bin/bash
nombre="Carlos"
edad=25

echo "Hola $nombre"
echo "Tienes $edad años"
echo "Total de argumentos: $#"`
					},
					{
						titulo: "Argumentos",
						codigo: `#!/bin/bash
echo "Primer argumento: $1"
echo "Segundo argumento: $2"
echo "Todos los argumentos: $@"`
					}
				]
			},
			{
				titulo: "Condicionales",
				contenido: [
					"if [ condición ]; then ... fi",
					"[ $edad -gt 18 ] && echo \"mayor\" || echo \"menor\"",
					"-eq (igual), -ne (diferente), -gt (mayor), -lt (menor)",
					"-z (string vacío), -n (string no vacío)"
				],
				codigos: [
					{
						titulo: "condicional.sh",
						codigo: `#!/bin/bash
edad=20

if [ $edad -ge 18 ]; then
    echo "Eres mayor de edad"
else
    echo "Eres menor de edad"
fi

# Forma resumida
[ $edad -ge 18 ] && echo "Mayor" || echo "Menor"`
					},
					{
						titulo: "Condiciones con strings",
						codigo: `#!/bin/bash
nombre=""

if [ -z "$nombre" ]; then
    echo "El nombre está vacío"
fi

if [ -n "$nombre" ]; then
    echo "El nombre tiene contenido"
fi

if [ "$nombre" = "Carlos" ]; then
    echo "¡Hola Carlos!"
fi`
					}
				]
			},
			{
				titulo: "Bucles",
				contenido: [
					"for i in 1 2 3; do echo $i; done",
					"for archivo in *.txt; do echo $archivo; done",
					"while true; do ... done (bucle infinito)",
					"break: Salir del bucle.",
					"continue: Ir a la siguiente iteración."
				],
				codigos: [
					{
						titulo: "Bucle for",
						codigo: `#!/bin/bash
# Bucle simple
for i in 1 2 3 4 5; do
    echo "Número: $i"
done

# Bucle sobre archivos
for archivo in *.txt; do
    echo "Procesando: $archivo"
done

# Bucle con secuencia
for i in {1..10}; do
    echo $i
done`
					},
					{
						titulo: "Bucle while",
						codigo: `#!/bin/bash
contador=1

while [ $contador -le 5 ]; do
    echo "Contador: $contador"
    contador=$((contador + 1))
done

# Bucle infinito con break
while true; do
    echo "Presiona Ctrl+C para salir"
    sleep 1
done`
					}
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Crea un script que muestre \"Hola Mundo\"",
				respuestaEsperada: "echo 'Hola Mundo'",
				solucion: "Usa echo para imprimir texto"
			}
		]
	},
	{
		id: "pipelines",
		titulo: "Lección 21: Pipelines y Combos de Comandos",
		descripcion: "Domina el poder de encadenar comandos",
		dificultad: "intermedio",
		comandos: [],
		secciones: [
			{
				titulo: "Redirecciones: Guardar y Leer Archivos",
				contenido: [
					"Una de las características más poderosas de la terminal es poder redirigir la entrada y salida de los comandos. Esto significa que en lugar de ver el resultado en pantalla, puedes guardarlo en un archivo o usar un archivo como entrada.",
					"Cuando ejecutas un comando, este tiene tres flujos: Entrada Estándar (stdin), Salida Estándar (stdout) y Error Estándar (stderr). Por defecto, stdin viene del teclado y stdout/stderr van a la pantalla.",
					"Con las redirecciones, puedes cambiar estos flujos predeterminados."
				],
				tabla: [
					{ etiqueta: "comando > archivo", descripcion: "Guarda salida a archivo (sobrescribe)" },
					{ etiqueta: "comando >> archivo", descripcion: "Agrega salida al final del archivo" },
					{ etiqueta: "comando < archivo", descripcion: "Usa archivo como entrada" },
					{ etiqueta: "comando 2> error.log", descripcion: "Guarda solo errores" },
					{ etiqueta: "comando > out.log 2>&1", descripcion: "Guarda salida y errores" }
				]
			},
			{
				titulo: "El Pipeline (|): Encadenar Comandos",
				contenido: [
					"El pipeline es quizás la característica más poderosa de la terminal Linux. Te permite tomar la salida de un comando y pasarla como entrada a otro.",
					"Imagínalo como una línea de producción: cada comando hace una tarea específica y pasa su resultado al siguiente.",
					"La sintaxis es simple: comando1 | comando2 | comando3",
					"Esto crea \"combo\" extremadamente poderosos que pueden hacer tareas complejas en una sola línea."
				],
				tabla: [
					{ etiqueta: "ls | sort", descripcion: "Lista archivos ordenada" },
					{ etiqueta: "ls | sort -r", descripcion: "Lista ordenada inversamente" },
					{ etiqueta: "cat archivo | grep palabra", descripcion: "Busca texto en archivo" },
					{ etiqueta: "ps aux | grep chrome", descripcion: "Busca proceso específico" },
					{ etiqueta: "cat archivo | wc -l", descripcion: "Cuenta líneas" },
					{ etiqueta: "du -h | sort -h", descripcion: "Ordena por tamaño" }
				]
			},
			{
				titulo: "Combos de Comandos Más Utilizados",
				contenido: [
					"Aquí tienes algunos de los combos más útiles que usarás a diario en tu trabajo con Linux."
				],
				tabla: [
					{ etiqueta: "ls -la | grep \"^d\"", descripcion: "Lista solo directorios" },
					{ etiqueta: "ls -la | grep \"^-\"", descripcion: "Lista solo archivos" },
					{ etiqueta: "cat log.txt | tail -100", descripcion: "Últimas 100 líneas" },
					{ etiqueta: "cat archivo | sort | uniq", descripcion: "Ordena y elimina duplicados" },
					{ etiqueta: "find . -name \"*.log\" | xargs rm", descripcion: "Elimina todos los .log" },
					{ etiqueta: "history | grep git", descripcion: "Busca comandos anteriores" }
				]
			},
			{
				titulo: " tee: Ver y Guardar a la Vez",
				contenido: [
					"tee es un comando muy útil que permite ver la salida en pantalla Y guardarla en un archivo al mismo tiempo.",
					"Imagina que quieres monitorear algo en tiempo real pero también quieres un registro para después.",
					"Sintaxis: comando | tee archivo.txt"
				],
				tabla: [
					{ etiqueta: "comando | tee log.txt", descripcion: "Guarda y muestra salida" },
					{ etiqueta: "comando | tee -a log.txt", descripcion: "Agrega al final del archivo" }
				]
			},
			{
				titulo: " xargs: Convertir Líneas en Argumentos",
				contenido: [
					"xargs toma la entrada estándar y la convierte en argumentos para un comando.",
					"Esto es extremadamente útil cuando quieres usar el resultado de un comando como argumentos de otro.",
					"Por ejemplo: encontrar archivos y eliminarlos, o buscar y copiar."
				],
				tabla: [
					{ etiqueta: "find . -name \"*.tmp\" | xargs rm", descripcion: "Elimina archivos encontrados" },
					{ etiqueta: "ls | xargs -I {} cp {} /backup/", descripcion: "Copia cada archivo" },
					{ etiqueta: "cat usuarios.txt | xargs -n1 useradd", descripcion: "Crea usuarios desde lista" }
				]
			}
		],
		ejercicios: [
			{
				pregunta: "Guarda la lista de archivos en un archivo llamado \"lista.txt\"",
				respuestaEsperada: "ls > lista.txt",
				solucion: "Usa > para redirigir la salida"
			},
			{
				pregunta: "Ordena el contenido de un archivo alfabéticamente",
				respuestaEsperada: "sort",
				solucion: "Usa sort para ordenar líneas"
			},
			{
				pregunta: "Busca la palabra \"error\" en un archivo y cuenta las líneas",
				respuestaEsperada: "grep error archivo | wc -l",
				solucion: "Usa grep con pipeline y wc"
			},
			{
				pregunta: "Muestra los procesos de forma ordenada por uso de memoria",
				respuestaEsperada: "ps aux --sort=-%mem",
				solucion: "Usa ps con sort por memoria"
			}
		]
	}
];
