export interface Uso {
	comando: string;
	descripcion: string;
	salida?: string;
}

export interface Truco {
	titulo: string;
	descripcion: string;
}

export interface Comando {
	command: string;
	description: string;
	example: string;
	category: string;
	usos: Uso[];
	trucos?: Truco[];
}

export const comandos: Comando[] = [
	{
		command: "ls",
		description: "Lista los archivos y directorios. Es el comando más usado para ver qué hay en tu carpeta actual.",
		example: "ls -la",
		category: "Archivos",
		usos: [
			{ comando: "ls", descripcion: "Lista archivos en el directorio actual", salida: "Descargas  Documentos  Imágenes  Música  Videos" },
			{ comando: "ls -l", descripcion: "Lista con detalles (permisos, tamaño, fecha)", salida: "drwxr-xr-x  2 usuario usuario  4096 may 10 10:30 Descargas\ndrwxr-xr-x  5 usuario usuario  4096 may 12 14:22 Documentos\n-rw-r--r--  1 usuario usuario  2048 may 15 09:15 nota.txt" },
			{ comando: "ls -la", descripcion: "Lista todos los archivos incluyendo ocultos", salida: "total 64\ndrwxr-xr-x  5 usuario usuario 4096 may 12 14:22 .\nddrwxr-xr-x 25 usuario usuario 4096 may 10 08:00 ..\n-rw-r--r--  1 usuario usuario  220 may 10 08:00 .bashrc\ndrwxr-xr-x  2 usuario usuario  4096 may 10 10:30 Descargas" },
			{ comando: "ls -lh", descripcion: "Lista con tamaños legibles (KB, MB, GB)", salida: "total 1.2G\ndrwxr-xr-x  2 usuario usuario  4.0K Descargas\ndrwxr-xr-x  5 usuario usuario  1.2G Documentos\n-rw-r--r--  1 usuario usuario  2.5M imagen.png" },
			{ comando: "ls -la | grep doc", descripcion: "Filtra resultados", salida: "drwxr-xr-x  5 usuario usuario  4096 may 12 14:22 Documentos" },
			{ comando: "ls -S", descripcion: "Ordena por tamaño", salida: "pelicula.mp4  usuario@linux-pc:~$ ls -S\n-rw-r--r--  1 usuario usuario  1.5G pelicula.mp4\n-rw-r--r--  1 usuario usuario  500M fotos.zip\n-rw-r--r--  1 usuario usuario   12K nota.txt" },
			{ comando: "ls -t", descripcion: "Ordena por fecha", salida: "Descargas  Documentos  Imágenes  Música  Videos" },
			{ comando: "ls -R", descripcion: "Lista directorios recursivamente", salida: ".:\nDescargas  Documentos\n\n./Descargas:\narchivo.zip  imagen.png\n\n./Documentos:\ntrabajo  personal" }
		],
		trucos: [
			{ titulo: "Usa alias para comandos frecuentes", descripcion: "Agrega alias como alias ll='ls -la' en tu ~/.bashrc para crear atajos personalizados." },
			{ titulo: "Combina con otros comandos", descripcion: "Usa pipes: ls -la | less para navegar resultados largos." }
		]
	},
	{
		command: "cd",
		description: "Cambia de directorio. Es como navegar entre carpetas.",
		example: "cd Documents",
		category: "Navegación",
		usos: [
			{ comando: "cd carpeta", descripcion: "Entra a una carpeta" },
			{ comando: "cd ..", descripcion: "Sube un nivel en el árbol de directorios" },
			{ comando: "cd ~", descripcion: "Va a tu carpeta personal (home)" },
			{ comando: "cd -", descripcion: "Regresa a la carpeta anterior" },
			{ comando: "cd /", descripcion: "Va a la raíz del sistema" },
			{ comando: "cd /home/usuario", descripcion: "Va a una ruta absoluta" },
			{ comando: "cd .. / ..", descripcion: "Sube dos niveles" }
		]
	},
	{
		command: "pwd",
		description: "Muestra la ruta completa del directorio donde estás actualmente.",
		example: "pwd",
		category: "Navegación",
		usos: [
			{ comando: "pwd", descripcion: "Muestra la ruta actual", salida: "/home/usuario/Documentos/proyectos" },
			{ comando: "pwd -P", descripcion: "Muestra la ruta física sin enlaces simbólicos", salida: "/home/usuario/Documentos/proyectos" }
		]
	},
	{
		command: "mkdir",
		description: "Crea uno o más directorios nuevos.",
		example: "mkdir proyectos",
		category: "Archivos",
		usos: [
			{ comando: "mkdir nombre", descripcion: "Crea una carpeta" },
			{ comando: "mkdir -p ruta/nueva", descripcion: "Crea carpetas intermedias si no existen" },
			{ comando: "mkdir carpeta1 carpeta2", descripcion: "Crea varias carpetas a la vez" },
			{ comando: "mkdir -m 755 nombre", descripcion: "Crea con permisos específicos" }
		]
	},
	{
		command: "touch",
		description: "Crea un archivo vacío o actualiza la fecha de modificación.",
		example: "touch nota.txt",
		category: "Archivos",
		usos: [
			{ comando: "touch archivo.txt", descripcion: "Crea un archivo vacío" },
			{ comando: "touch archivo1.txt archivo2.txt", descripcion: "Crea varios archivos" },
			{ comando: "touch -d '2024-01-01' archivo", descripcion: "Cambia fecha de modificación" },
			{ comando: "touch -a archivo", descripcion: "Actualiza solo fecha de acceso" }
		]
	},
	{
		command: "cat",
		description: "Muestra el contenido completo de uno o varios archivos de texto.",
		example: "cat archivo.txt",
		category: "Texto",
		usos: [
			{ comando: "cat archivo.txt", descripcion: "Muestra el contenido completo" },
			{ comando: "cat -n archivo.txt", descripcion: "Muestra con números de línea" },
			{ comando: "cat archivo1.txt archivo2.txt", descripcion: "Concatena varios archivos" },
			{ comando: "cat > nuevo.txt", descripcion: "Crea un archivo nuevo y escribe en él" },
			{ comando: "cat archivo.txt | more", descripcion: "Muestra página por página" }
		]
	},
	{
		command: "cp",
		description: "Copia archivos o directorios de un lugar a otro.",
		example: "cp origen.txt copia.txt",
		category: "Archivos",
		usos: [
			{ comando: "cp origen destino", descripcion: "Copia un archivo" },
			{ comando: "cp -r carpeta copia", descripcion: "Copia una carpeta recursivamente" },
			{ comando: "cp -i origen destino", descripcion: "Pide confirmación antes de sobrescribir" },
			{ comando: "cp -v origen destino", descripcion: "Muestra lo que está copiando" },
			{ comando: "cp -p origen destino", descripcion: "Preserva permisos y fecha" },
			{ comando: "cp archivo*.txt destino/", descripcion: "Copia archivos con comodines" }
		]
	},
	{
		command: "mv",
		description: "Mueve o renombra archivos y directorios.",
		example: "mv viejo.txt nuevo.txt",
		category: "Archivos",
		usos: [
			{ comando: "mv origen destino", descripcion: "Mueve un archivo" },
			{ comando: "mv viejo.txt nuevo.txt", descripcion: "Renombra un archivo" },
			{ comando: "mv -i origen destino", descripcion: "Pide confirmación antes de sobrescribir" },
			{ comando: "mv -v origen destino", descripcion: "Muestra lo que está moviendo" },
			{ comando: "mv archivo ..", descripcion: "Mueve al directorio padre" }
		]
	},
	{
		command: "rm",
		description: "Elimina archivos o directorios permanentemente.",
		example: "rm archivo.txt",
		category: "Archivos",
		usos: [
			{ comando: "rm archivo", descripcion: "Elimina un archivo" },
			{ comando: "rm -r carpeta", descripcion: "Elimina una carpeta y su contenido" },
			{ comando: "rm -rf carpeta", descripcion: "Fuerza eliminación sin preguntar (¡cuidado!)" },
			{ comando: "rm -i archivo", descripcion: "Pide confirmación antes de eliminar" },
			{ comando: "rm -v archivo", descripcion: "Muestra lo que está eliminando" },
			{ comando: "rm *.txt", descripcion: "Elimina todos los archivos .txt" }
		]
	},
	{
		command: "grep",
		description: "Busca patrones de texto dentro de archivos.",
		example: "grep 'hola' archivo.txt",
		category: "Texto",
		usos: [
			{ comando: "grep 'texto' archivo", descripcion: "Busca texto en un archivo" },
			{ comando: "grep -r 'texto' carpeta", descripcion: "Busca recursivamente en carpetas" },
			{ comando: "grep -i 'texto' archivo", descripcion: "Ignora mayúsculas/minúsculas" },
			{ comando: "grep -n 'texto' archivo", descripcion: "Muestra número de línea" },
			{ comando: "ls | grep '.txt'", descripcion: "Combina con pipe" },
			{ comando: "grep -v 'texto' archivo", descripcion: "Muestra líneas que NO coinciden" },
			{ comando: "grep -c 'texto' archivo", descripcion: "Cuenta las coincidencias" }
		]
	},
	{
		command: "find",
		description: "Busca archivos en el sistema de archivos según criterios.",
		example: "find . -name '*.txt'",
		category: "Archivos",
		usos: [
			{ comando: "find . -name 'archivo'", descripcion: "Busca archivo por nombre" },
			{ comando: "find . -name '*.txt'", descripcion: "Busca todos los archivos .txt" },
			{ comando: "find . -type d", descripcion: "Busca solo directorios" },
			{ comando: "find . -type f", descripcion: "Busca solo archivos" },
			{ comando: "find . -size +100M", descripcion: "Busca archivos mayores a 100MB" },
			{ comando: "find . -mtime -7", descripcion: "Busca archivos modificados en los últimos 7 días" },
			{ comando: "find . -empty", descripcion: "Busca archivos vacíos" },
			{ comando: "find . -perm 755", descripcion: "Busca por permisos" }
		],
		trucos: [
			{ titulo: "Ejecuta comandos en los resultados", descripcion: "Usa -exec: find . -name '*.txt' -exec rm {} \\; para ejecutar comandos en cada resultado." },
			{ titulo: "Busca y elimina en una línea", descripcion: "find . -name '*.tmp' -delete elimina todos los archivos .tmp encontrados." }
		]
	},
	{
		command: "chmod",
		description: "Cambia los permisos de lectura, escritura y ejecución de archivos.",
		example: "chmod 755 script.sh",
		category: "Permisos",
		usos: [
			{ comando: "chmod +x script.sh", descripcion: "Hace ejecutable un script" },
			{ comando: "chmod 755 archivo", descripcion: "Permisos estándar (rwxr-xr-x)" },
			{ comando: "chmod 644 archivo", descripcion: "Permisos normales (rw-r--r--)" },
			{ comando: "chmod -R 755 carpeta", descripcion: "Cambia permisos recursivamente" },
			{ comando: "chmod u+x archivo", descripcion: "Solo el propietario puede ejecutar" },
			{ comando: "chmod g+w archivo", descripcion: "El grupo puede escribir" },
			{ comando: "chmod o-r archivo", descripcion: "Otros no pueden leer" }
		]
	},
	{
		command: "chown",
		description: "Cambia el propietario y grupo de archivos o directorios.",
		example: "chown usuario:grupo archivo",
		category: "Permisos",
		usos: [
			{ comando: "chown usuario archivo", descripcion: "Cambia solo el propietario" },
			{ comando: "chown usuario:grupo archivo", descripcion: "Cambia propietario y grupo" },
			{ comando: "chown -R usuario carpeta", descripcion: "Cambia recursivamente" },
			{ comando: "chown :grupo archivo", descripcion: "Cambia solo el grupo" }
		]
	},
	{
		command: "ps",
		description: "Muestra los procesos en ejecución.",
		example: "ps aux",
		category: "Procesos",
		usos: [
			{ comando: "ps", descripcion: "Procesos del usuario actual" },
			{ comando: "ps aux", descripcion: "Todos los procesos del sistema" },
			{ comando: "ps aux | grep nombre", descripcion: "Busca un proceso específico" },
			{ comando: "ps -u usuario", descripcion: "Procesos de un usuario" },
			{ comando: "ps --forest", descripcion: "Muestra jerarquía de procesos" }
		]
	},
	{
		command: "top",
		description: "Muestra los procesos en ejecución y uso de recursos en tiempo real.",
		example: "top",
		category: "Procesos",
		usos: [
			{ comando: "top", descripcion: "Muestra procesos en tiempo real" },
			{ comando: "top -u usuario", descripcion: "Filtra por usuario" },
			{ comando: "top -p PID", descripcion: "Muestra proceso específico" },
			{ comando: "Presionar 'k'", descripcion: "Matar proceso desde top" },
			{ comando: "Presionar 'q'", descripcion: "Salir de top" }
		]
	},
	{
		command: "kill",
		description: "Envía señales a procesos, usualmente para terminarlos.",
		example: "kill 1234",
		category: "Procesos",
		usos: [
			{ comando: "kill PID", descripcion: "Envía señal para cerrar proceso" },
			{ comando: "kill -9 PID", descripcion: "Fuerza cierre inmediato" },
			{ comando: "kill -15 PID", descripcion: "Señal de terminación suave" },
			{ comando: "kill -l", descripcion: "Lista todas las señales disponibles" }
		]
	},
	{
		command: "tar",
		description: "Comprime y extrae archivos en formato tar.",
		example: "tar -cvf archivo.tar carpeta/",
		category: "Compresión",
		usos: [
			{ comando: "tar -cvf archivo.tar carpeta/", descripcion: "Crea archivo tar" },
			{ comando: "tar -xvf archivo.tar", descripcion: "Extrae archivo tar" },
			{ comando: "tar -czvf archivo.tar.gz carpeta", descripcion: "Crea tar.gz (comprimido)" },
			{ comando: "tar -xzvf archivo.tar.gz", descripcion: "Extrae tar.gz" },
			{ comando: "tar -tvf archivo.tar", descripcion: "Lista contenido sin extraer" },
			{ comando: "tar -czvf archivo.tar.gz carpeta/ --exclude='*.log'", descripcion: "Excluye archivos al comprimir" }
		]
	},
	{
		command: "curl",
		description: "Transfiere datos desde o hacia un servidor.",
		example: "curl -O https://sitio.com/archivo",
		category: "Red",
		usos: [
			{ comando: "curl url", descripcion: "Muestra el contenido de una web" },
			{ comando: "curl -O url", descripcion: "Descarga archivo" },
			{ comando: "curl -o nombre.txt url", descripcion: "Descarga con nombre diferente" },
			{ comando: "curl -I url", descripcion: "Muestra headers HTTP" },
			{ comando: "curl -d 'datos' url", descripcion: "Envía datos POST" },
			{ comando: "curl -L url", descripcion: "Sigue redirecciones" }
		]
	},
	{
		command: "ssh",
		description: "Conecta de forma segura a servidores remotos.",
		example: "ssh usuario@servidor",
		category: "Red",
		usos: [
			{ comando: "ssh usuario@servidor", descripcion: "Conecta a un servidor" },
			{ comando: "ssh -p 2222 usuario@servidor", descripcion: "Conecta a puerto específico" },
			{ comando: "ssh -i clave.pem usuario@servidor", descripcion: "Usa clave SSH específica" },
			{ comando: "ssh usuario@servidor 'comando'", descripcion: "Ejecuta comando remoto sin entrar" }
		]
	},
	{
		command: "clear",
		description: "Limpia la pantalla de la terminal.",
		example: "clear",
		category: "Utilidades",
		usos: [
			{ comando: "clear", descripcion: "Limpia la pantalla" },
			{ comando: "Ctrl + L", descripcion: "Atajo de teclado equivalente" }
		]
	},
	{
		command: "man",
		description: "Muestra el manual de un comando.",
		example: "man ls",
		category: "Utilidades",
		usos: [
			{ comando: "man comando", descripcion: "Muestra el manual completo" },
			{ comando: "comando --help", descripcion: "Ayuda rápida (alternativa)" },
			{ comando: "man -k palabra", descripcion: "Busca en manuales" }
		]
	},
	{
		command: "echo",
		description: "Imprime texto en la pantalla o lo redirige.",
		example: "echo 'Hola mundo'",
		category: "Utilidades",
		usos: [
			{ comando: "echo 'texto'", descripcion: "Imprime texto" },
			{ comando: "echo $VAR", descripcion: "Imprime variable" },
			{ comando: "echo 'texto' > archivo", descripcion: "Escribe a archivo (sobrescribe)" },
			{ comando: "echo 'texto' >> archivo", descripcion: "Agrega al final del archivo" },
			{ comando: "echo -n 'texto'", descripcion: "Sin salto de línea" }
		]
	},
	{
		command: "history",
		description: "Muestra el historial de comandos ejecutados.",
		example: "history",
		category: "Utilidades",
		usos: [
			{ comando: "history", descripcion: "Muestra todos los comandos" },
			{ comando: "history 10", descripcion: "Muestra últimos 10 comandos" },
			{ comando: "!!", descripcion: "Repite el último comando" },
			{ comando: "!n", descripcion: "Repite el comando número n" },
			{ comando: "Ctrl + R", descripcion: "Busca en el historial" }
		]
	},
	{
		command: "whoami",
		description: "Muestra el nombre del usuario actual.",
		example: "whoami",
		category: "Sistema",
		usos: [
			{ comando: "whoami", descripcion: "Muestra el usuario actual", salida: "usuario" }
		]
	},
	{
		command: "ping",
		description: "Verifica conectividad de red enviando paquetes ICMP.",
		example: "ping google.com",
		category: "Red",
		usos: [
			{ comando: "ping google.com", descripcion: "Verifica conectividad" },
			{ comando: "ping -c 4 google.com", descripcion: "Hace solo 4 pings" },
			{ comando: "ping -i 2 google.com", descripcion: "Intervalo de 2 segundos" }
		]
	},
	{
		command: "ip",
		description: "Muestra y configura direcciones IP, rutas y dispositivos de red.",
		example: "ip addr",
		category: "Red",
		usos: [
			{ comando: "ip addr", descripcion: "Muestra direcciones IP" },
			{ comando: "ip addr show", descripcion: "Muestra todas las interfaces" },
			{ comando: "ip link set eth0 up", descripcion: "Activa una interfaz" },
			{ comando: "ip link set eth0 down", descripcion: "Desactiva una interfaz" },
			{ comando: "ip route", descripcion: "Muestra tabla de rutas" },
			{ comando: "ip neigh", descripcion: "Muestra tabla ARP" }
		]
	},
	{
		command: "netstat",
		description: "Muestra conexiones de red, tablas de enrutamiento y estadísticas.",
		example: "netstat -tuln",
		category: "Red",
		usos: [
			{ comando: "netstat -tuln", descripcion: "Muestra puertos en escucha" },
			{ comando: "netstat -a", descripcion: "Muestra todas las conexiones" },
			{ comando: "netstat -tn", descripcion: "Conexiones TCP" },
			{ comando: "netstat -tp", descripcion: "Muestra proceso asociado" }
		]
	},
	{
		command: "ss",
		description: "Muestra estadísticas de red. Reemplazo moderno de netstat.",
		example: "ss -tuln",
		category: "Red",
		usos: [
			{ comando: "ss -tuln", descripcion: "Muestra puertos en escucha" },
			{ comando: "ss -tn", descripcion: "Conexiones TCP" },
			{ comando: "ss -un", descripcion: "Conexiones UDP" },
			{ comando: "ss -tp", descripcion: "Muestra proceso asociado" }
		]
	},
	{
		command: "wget",
		description: "Descarga archivos de la web sin interacción.",
		example: "wget https://sitio.com/archivo",
		category: "Red",
		usable: [
			{ comando: "wget url", descripcion: "Descarga archivo" },
			{ comando: "wget -O nombre.txt url", descripcion: "Guarda con nombre diferente" },
			{ comando: "wget -c url", descripcion: "Continúa descarga interrumpida" },
			{ comando: "wget -r url", descripcion: "Descarga recursivamente" }
		],
		usos: [
			{ comando: "wget url", descripcion: "Descarga archivo" },
			{ comando: "wget -O nombre.txt url", descripcion: "Guarda con nombre diferente" },
			{ comando: "wget -c url", descripcion: "Continúa descarga interrumpida" },
			{ comando: "wget -r url", descripcion: "Descarga recursivamente" }
		]
	},
	{
		command: "scp",
		description: "Copia archivos de forma segura entre sistemas remotos.",
		example: "scp archivo.txt usuario@servidor:/ruta",
		category: "Red",
		usable: [
			{ comando: "scp origen destino", descripcion: "Copia local" },
			{ comando: "scp archivo user@serv:/ruta", descripcion: "Copia a servidor" },
			{ comando: "scp user@serv:/archivo .", descripcion: "Copia desde servidor" },
			{ comando: "scp -r carpeta user@serv:/ruta", descripcion: "Copia carpeta" },
			{ comando: "scp -P 2222 archivo user@serv:/ruta", descripcion: "Usa puerto específico" }
		],
		usos: [
			{ comando: "scp origen destino", descripcion: "Copia local" },
			{ comando: "scp archivo user@serv:/ruta", descripcion: "Copia a servidor" },
			{ comando: "scp user@serv:/archivo .", descripcion: "Copia desde servidor" },
			{ comando: "scp -r carpeta user@serv:/ruta", descripcion: "Copia carpeta" },
			{ comando: "scp -P 2222 archivo user@serv:/ruta", descripcion: "Usa puerto específico" }
		]
	},
	{
		command: "rsync",
		description: "Sincroniza archivos y carpetas eficientemente.",
		example: "rsync -av origen/ destino/",
		category: "Red",
		usable: [
			{ comando: "rsync -av origen/ destino/", descripcion: "Sincroniza carpetas" },
			{ comando: "rsync -avz origen/ destino/", descripcion: "Con compresión" },
			{ comando: "rsync -av --delete origen/ destino/", descripcion: "Elimina archivos extra" },
			{ comando: "rsync -av -e ssh origen/ user@serv:/ruta", descripcion: "Sincroniza por SSH" }
		],
		usos: [
			{ comando: "rsync -av origen/ destino/", descripcion: "Sincroniza carpetas" },
			{ comando: "rsync -avz origen/ destino/", descripcion: "Con compresión" },
			{ comando: "rsync -av --delete origen/ destino/", descripcion: "Elimina archivos extra" },
			{ comando: "rsync -av -e ssh origen/ user@serv:/ruta", descripcion: "Sincroniza por SSH" }
		]
	},
	{
		command: "zip",
		description: "Comprime archivos en formato ZIP.",
		example: "zip archivo.zip archivo.txt",
		category: "Compresión",
		usable: [
			{ comando: "zip archivo.zip archivo.txt", descripcion: "Comprime archivo" },
			{ comando: "zip -r archivo.zip carpeta", descripcion: "Comprime carpeta" },
			{ comando: "zip -e archivo.zip archivos", descripcion: "Comprime con contraseña" }
		],
		usos: [
			{ comando: "zip archivo.zip archivo.txt", descripcion: "Comprime archivo" },
			{ comando: "zip -r archivo.zip carpeta", descripcion: "Comprime carpeta" },
			{ comando: "zip -e archivo.zip archivos", descripcion: "Comprime con contraseña" }
		]
	},
	{
		command: "unzip",
		description: "Extrae archivos de un ZIP.",
		example: "unzip archivo.zip",
		category: "Compresión",
		usable: [
			{ comando: "unzip archivo.zip", descripcion: "Extrae en directorio actual" },
			{ comando: "unzip archivo.zip -d /ruta", descripcion: "Extrae en directorio específico" },
			{ comando: "unzip -l archivo.zip", descripcion: "Lista contenido sin extraer" }
		],
		usos: [
			{ comando: "unzip archivo.zip", descripcion: "Extrae en directorio actual" },
			{ comando: "unzip archivo.zip -d /ruta", descripcion: "Extrae en directorio específico" },
			{ comando: "unzip -l archivo.zip", descripcion: "Lista contenido sin extraer" }
		]
	},
	{
		command: "gzip",
		description: "Comprime archivos usando el algoritmo gzip.",
		example: "gzip archivo.txt",
		category: "Compresión",
		usable: [
			{ comando: "gzip archivo", descripcion: "Comprime archivo" },
			{ comando: "gzip -k archivo", descripcion: "Mantiene original" },
			{ comando: "gzip -d archivo.gz", descripcion: "Descomprime" },
			{ comando: "gunzip archivo.gz", descripcion: "Descomprime (alternativa)" }
		],
		usos: [
			{ comando: "gzip archivo", descripcion: "Comprime archivo" },
			{ comando: "gzip -k archivo", descripcion: "Mantiene original" },
			{ comando: "gzip -d archivo.gz", descripcion: "Descomprime" },
			{ comando: "gunzip archivo.gz", descripcion: "Descomprime (alternativa)" }
		]
	},
	{
		command: "useradd",
		description: "Crea un nuevo usuario en el sistema.",
		example: "sudo useradd nombre",
		category: "Usuarios",
		usable: [
			{ comando: "sudo useradd nombre", descripcion: "Crea usuario básico" },
			{ comando: "sudo useradd -m nombre", descripcion: "Crea con carpeta home" },
			{ comando: "sudo useradd -s /bin/bash nombre", descripcion: "Con shell específica" },
			{ comando: "sudo useradd -G grupo nombre", descripcion: "Agrega a grupo" }
		],
		usos: [
			{ comando: "sudo useradd nombre", descripcion: "Crea usuario básico" },
			{ comando: "sudo useradd -m nombre", descripcion: "Crea con carpeta home" },
			{ comando: "sudo useradd -s /bin/bash nombre", descripcion: "Con shell específica" },
			{ comando: "sudo useradd -G grupo nombre", descripcion: "Agrega a grupo" }
		]
	},
	{
		command: "usermod",
		description: "Modifica las propiedades de un usuario existente.",
		example: "sudo usermod -aG grupo usuario",
		category: "Usuarios",
		usable: [
			{ comando: "sudo usermod -aG grupo usuario", descripcion: "Agrega usuario a grupo" },
			{ comando: "sudo usermod -l nuevo usuario", descripcion: "Cambia nombre de usuario" },
			{ comando: "sudo usermod -s /bin/sh usuario", descripcion: "Cambia shell" },
			{ comando: "sudo usermod -L usuario", descripcion: "Bloquea usuario" }
		],
		usos: [
			{ comando: "sudo usermod -aG grupo usuario", descripcion: "Agrega usuario a grupo" },
			{ comando: "sudo usermod -l nuevo usuario", descripcion: "Cambia nombre de usuario" },
			{ comando: "sudo usermod -s /bin/sh usuario", descripcion: "Cambia shell" },
			{ comando: "sudo usermod -L usuario", descripcion: "Bloquea usuario" }
		]
	},
	{
		command: "userdel",
		description: "Elimina un usuario del sistema.",
		example: "sudo userdel nombre",
		category: "Usuarios",
		usable: [
			{ comando: "sudo userdel nombre", descripcion: "Elimina usuario" },
			{ comando: "sudo userdel -r nombre", descripcion: "Elimina usuario y su home" }
		],
		usos: [
			{ comando: "sudo userdel nombre", descripcion: "Elimina usuario" },
			{ comando: "sudo userdel -r nombre", descripcion: "Elimina usuario y su home" }
		]
	},
	{
		command: "passwd",
		description: "Cambia la contraseña de un usuario.",
		example: "passwd nombreUsuario",
		category: "Usuarios",
		usable: [
			{ comando: "passwd", descripcion: "Cambia tu contraseña" },
			{ comando: "sudo passwd usuario", descripcion: "Cambia contraseña de otro" },
			{ comando: "passwd -l usuario", descripcion: "Bloquea usuario" },
			{ comando: "passwd -u usuario", descripcion: "Desbloquea usuario" }
		],
		usos: [
			{ comando: "passwd", descripcion: "Cambia tu contraseña" },
			{ comando: "sudo passwd usuario", descripcion: "Cambia contraseña de otro" },
			{ comando: "passwd -l usuario", descripcion: "Bloquea usuario" },
			{ comando: "passwd -u usuario", descripcion: "Desbloquea usuario" }
		]
	},
	{
		command: "su",
		description: "Cambia a otro usuario o abre una shell como root.",
		example: "su - usuario",
		category: "Usuarios",
		usable: [
			{ comando: "su - usuario", descripcion: "Cambia a otro usuario" },
			{ comando: "su -", descripcion: "Cambia a root" },
			{ comando: "su -c 'comando'", descripcion: "Ejecuta comando como otro usuario" }
		],
		usos: [
			{ comando: "su - usuario", descripcion: "Cambia a otro usuario" },
			{ comando: "su -", descripcion: "Cambia a root" },
			{ comando: "su -c 'comando'", descripcion: "Ejecuta comando como otro usuario" }
		]
	},
	{
		command: "crontab",
		description: "Gestiona tareas programadas que se ejecutan automáticamente.",
		example: "crontab -e",
		category: "Automación",
		usable: [
			{ comando: "crontab -e", descripcion: "Edita el crontab del usuario" },
			{ comando: "crontab -l", descripcion: "Lista las tareas programadas" },
			{ comando: "crontab -r", descripcion: "Elimina todas las tareas" },
			{ comando: "crontab -u usuario -e", descripcion: "Edita crontab de otro usuario" }
		],
		usos: [
			{ comando: "crontab -e", descripcion: "Edita el crontab del usuario" },
			{ comando: "crontab -l", descripcion: "Lista las tareas programadas" },
			{ comando: "crontab -r", descripcion: "Elimina todas las tareas" },
			{ comando: "crontab -u usuario -e", descripcion: "Edita crontab de otro usuario" }
		]
	},
	{
		command: "alias",
		description: "Crea atajos (aliases) para comandos largos.",
		example: "alias l='ls -la'",
		category: "Utilidades",
		usable: [
			{ comando: "alias nombre='comando'", descripcion: "Crea un alias" },
			{ comando: "alias", descripcion: "Lista todos los alias" },
			{ comando: "unalias nombre", descripcion: "Elimina un alias" }
		],
		usos: [
			{ comando: "alias nombre='comando'", descripcion: "Crea un alias" },
			{ comando: "alias", descripcion: "Lista todos los alias" },
			{ comando: "unalias nombre", descripcion: "Elimina un alias" }
		]
	},
	{
		command: "export",
		description: "Define variables de entorno o las marca para exportar.",
		example: "export PATH=$PATH:/ruta",
		category: "Sistema",
		usable: [
			{ comando: "export VAR=valor", descripcion: "Crea variable" },
			{ comando: "export PATH=$PATH:/ruta", descripcion: "Agrega al PATH" },
			{ comando: "export -p", descripcion: "Lista variables exportadas" }
		],
		usos: [
			{ comando: "export VAR=valor", descripcion: "Crea variable" },
			{ comando: "export PATH=$PATH:/ruta", descripcion: "Agrega al PATH" },
			{ comando: "export -p", descripcion: "Lista variables exportadas" }
		]
	},
	{
		command: "env",
		description: "Muestra o ejecuta comandos con variables de entorno modificadas.",
		example: "env",
		category: "Sistema",
		usable: [
			{ comando: "env", descripcion: "Lista todas las variables" },
			{ comando: "env VAR=valor comando", descripcion: "Ejecuta con variables" },
			{ comando: "env -u VAR comando", descripcion: "Quita variable temporalmente" }
		],
		usos: [
			{ comando: "env", descripcion: "Lista todas las variables" },
			{ comando: "env VAR=valor comando", descripcion: "Ejecuta con variables" },
			{ comando: "env -u VAR comando", descripcion: "Quita variable temporalmente" }
		]
	},
	{
		command: "date",
		description: "Muestra o configura la fecha y hora del sistema.",
		example: "date",
		category: "Utilidades",
		usable: [
			{ comando: "date", descripcion: "Muestra fecha y hora", salida: "sáb may 17 12:30:45 UTC 2025" },
			{ comando: "date '+%Y-%m-%d'", descripcion: "Formato personalizado", salida: "2025-05-17" },
			{ comando: "date '+%H:%M'", descripcion: "Solo hora", salida: "12:30" },
			{ comando: "sudo date -s '2024-01-01 12:00:00'", descripcion: "Cambia fecha del sistema" }
		],
		usos: [
			{ comando: "date", descripcion: "Muestra fecha y hora", salida: "sáb may 17 12:30:45 UTC 2025" },
			{ comando: "date '+%Y-%m-%d'", descripcion: "Formato personalizado", salida: "2025-05-17" },
			{ comando: "date '+%H:%M'", descripcion: "Solo hora", salida: "12:30" },
			{ comando: "sudo date -s '2024-01-01 12:00:00'", descripcion: "Cambia fecha del sistema" }
		]
	},
	{
		command: "cal",
		description: "Muestra un calendario en la terminal.",
		example: "cal",
		category: "Utilidades",
		usable: [
			{ comando: "cal", descripcion: "Muestra mes actual" },
			{ comando: "cal 2024", descripcion: "Muestra año completo" },
			{ comando: "cal -3", descripcion: "Muestra mes anterior, actual y siguiente" },
			{ comando: "cal -m Lunes", descripcion: "Semana empieza en lunes" }
		],
		usos: [
			{ comando: "cal", descripcion: "Muestra mes actual" },
			{ comando: "cal 2024", descripcion: "Muestra año completo" },
			{ comando: "cal -3", descripcion: "Muestra mes anterior, actual y siguiente" },
			{ comando: "cal -m Lunes", descripcion: "Semana empieza en lunes" }
		]
	},
	{
		command: "sleep",
		description: "Pausa la ejecución por un tiempo especificado.",
		example: "sleep 5",
		category: "Utilidades",
		usable: [
			{ comando: "sleep 5", descripcion: "Pausa 5 segundos" },
			{ comando: "sleep 2m", descripcion: "Pausa 2 minutos" },
			{ comando: "sleep 1h", descripcion: "Pausa 1 hora" }
		],
		usos: [
			{ comando: "sleep 5", descripcion: "Pausa 5 segundos" },
			{ comando: "sleep 2m", descripcion: "Pausa 2 minutos" },
			{ comando: "sleep 1h", descripcion: "Pausa 1 hora" }
		]
	},
	{
		command: "exit",
		description: "Cierra la terminal o shell actual.",
		example: "exit",
		category: "Utilidades",
		usable: [
			{ comando: "exit", descripcion: "Cierra la shell" },
			{ comando: "exit 0", descripcion: "Sale con código de éxito" },
			{ comando: "exit 1", descripcion: "Sale con código de error" }
		],
		usos: [
			{ comando: "exit", descripcion: "Cierra la shell" },
			{ comando: "exit 0", descripcion: "Sale con código de éxito" },
			{ comando: "exit 1", descripcion: "Sale con código de error" }
		]
	},
	{
		command: "logout",
		description: "Cierra la sesión del usuario actual.",
		example: "logout",
		category: "Utilidades",
		usable: [
			{ comando: "logout", descripcion: "Cierra sesión" },
			{ comando: "Ctrl + D", descripcion: "Atajo equivalente" }
		],
		usos: [
			{ comando: "logout", descripcion: "Cierra sesión" },
			{ comando: "Ctrl + D", descripcion: "Atajo equivalente" }
		]
	},
	{
		command: "tree",
		description: "Muestra la estructura de directorios en forma de árbol.",
		example: "tree",
		category: "Archivos",
		usable: [
			{ comando: "tree", descripcion: "Muestra árbol de directorio actual" },
			{ comando: "tree -L 2", descripcion: "Limita profundidad a 2 niveles" },
			{ comando: "tree -d", descripcion: "Solo directorios" },
			{ comando: "tree -a", descripcion: "Incluye archivos ocultos" }
		],
		usos: [
			{ comando: "tree", descripcion: "Muestra árbol de directorio actual" },
			{ comando: "tree -L 2", descripcion: "Limita profundidad a 2 niveles" },
			{ comando: "tree -d", descripcion: "Solo directorios" },
			{ comando: "tree -a", descripcion: "Incluye archivos ocultos" }
		]
	},
	{
		command: "ln",
		description: "Crea enlaces (accesos directos) a archivos o directorios.",
		example: "ln -s archivo enlace",
		category: "Archivos",
		usable: [
			{ comando: "ln archivo enlace", descripcion: "Crea enlace duro" },
			{ comando: "ln -s archivo enlace", descripcion: "Crea enlace simbólico (atajo)" },
			{ comando: "ln -s /ruta/real enlace", descripcion: "Enlace simbólico a ruta absoluta" }
		],
		usos: [
			{ comando: "ln archivo enlace", descripcion: "Crea enlace duro" },
			{ comando: "ln -s archivo enlace", descripcion: "Crea enlace simbólico (atajo)" },
			{ comando: "ln -s /ruta/real enlace", descripcion: "Enlace simbólico a ruta absoluta" }
		]
	},
	{
		command: "stat",
		description: "Muestra información detallada de un archivo.",
		example: "stat archivo.txt",
		category: "Archivos",
		usable: [
			{ comando: "stat archivo", descripcion: "Muestra todos los detalles" },
			{ comando: "stat -c '%s %n' archivo", descripcion: "Muestra formato específico" }
		],
		usos: [
			{ comando: "stat archivo", descripcion: "Muestra todos los detalles" },
			{ comando: "stat -c '%s %n' archivo", descripcion: "Muestra formato específico" }
		]
	},
	{
		command: "file",
		description: "Muestra el tipo de archivo.",
		example: "file imagen.png",
		category: "Archivos",
		usable: [
			{ comando: "file archivo", descripcion: "Muestra tipo de archivo" },
			{ comando: "file -z archivo", descripcion: "Detecta dentro de compresión" }
		],
		usos: [
			{ comando: "file archivo", descripcion: "Muestra tipo de archivo" },
			{ comando: "file -z archivo", descripcion: "Detecta dentro de compresión" }
		]
	},
	{
		command: "cut",
		description: "Extrae secciones de cada línea de un archivo.",
		example: "cut -d: -f1 archivo.txt",
		category: "Texto",
		usable: [
			{ comando: "cut -f1 archivo", descripcion: "Extrae primer campo" },
			{ comando: "cut -d: -f1 archivo", descripcion: "Usa : como delimitador" },
			{ comando: "cut -c1-10 archivo", descripcion: "Extrae caracteres 1-10" }
		],
		usos: [
			{ comando: "cut -f1 archivo", descripcion: "Extrae primer campo" },
			{ comando: "cut -d: -f1 archivo", descripcion: "Usa : como delimitador" },
			{ comando: "cut -c1-10 archivo", descripcion: "Extrae caracteres 1-10" }
		]
	},
	{
		command: "sort",
		description: "Ordena líneas de texto.",
		example: "sort archivo.txt",
		category: "Texto",
		usable: [
			{ comando: "sort archivo", descripcion: "Ordena alfabéticamente" },
			{ comando: "sort -r archivo", descripcion: "Ordena inverso" },
			{ comando: "sort -n archivo", descripcion: "Ordena numéricamente" },
			{ comando: "sort -u archivo", descripcion: "Ordena y elimina duplicados" }
		],
		usos: [
			{ comando: "sort archivo", descripcion: "Ordena alfabéticamente" },
			{ comando: "sort -r archivo", descripcion: "Ordena inverso" },
			{ comando: "sort -n archivo", descripcion: "Ordena numéricamente" },
			{ comando: "sort -u archivo", descripcion: "Ordena y elimina duplicados" }
		]
	},
	{
		command: "uniq",
		description: "Elimina o cuenta líneas duplicadas consecutivas.",
		example: "sort archivo.txt | uniq",
		category: "Texto",
		usable: [
			{ comando: "uniq archivo", descripcion: "Elimina líneas duplicadas" },
			{ comando: "sort archivo | uniq", descripcion: "Ordena y elimina duplicados" },
			{ comando: "uniq -c archivo", descripcion: "Cuenta ocurrencias" },
			{ comando: "uniq -d archivo", descripcion: "Solo muestra duplicados" }
		],
		usos: [
			{ comando: "uniq archivo", descripcion: "Elimina líneas duplicadas" },
			{ comando: "sort archivo | uniq", descripcion: "Ordena y elimina duplicados" },
			{ comando: "uniq -c archivo", descripcion: "Cuenta ocurrencias" },
			{ comando: "uniq -d archivo", descripcion: "Solo muestra duplicados" }
		]
	},
	{
		command: "tr",
		description: "Traduce, comprime o elimina caracteres.",
		example: "echo 'hola' | tr 'a-z' 'A-Z'",
		category: "Texto",
		usable: [
			{ comando: "echo 'hola' | tr 'a-z' 'A-Z'", descripcion: "Convierte a mayúsculas" },
			{ comando: "echo 'hola' | tr 'aeiou' 'AEIOU'", descripcion: "Cambia vocales" },
			{ comando: "cat archivo | tr -d '[:punct:]'", descripcion: "Elimina puntuación" }
		],
		usos: [
			{ comando: "echo 'hola' | tr 'a-z' 'A-Z'", descripcion: "Convierte a mayúsculas" },
			{ comando: "echo 'hola' | tr 'aeiou' 'AEIOU'", descripcion: "Cambia vocales" },
			{ comando: "cat archivo | tr -d '[:punct:]'", descripcion: "Elimina puntuación" }
		]
	},
	{
		command: "sed",
		description: "Editor de flujo para transformar texto.",
		example: "sed 's/antiguo/nuevo/g' archivo.txt",
		category: "Texto",
		usable: [
			{ comando: "sed 's/old/new/' archivo", descripcion: "Reemplaza primera ocurrencia" },
			{ comando: "sed 's/old/new/g' archivo", descripcion: "Reemplaza todas las ocurrencias" },
			{ comando: "sed -i 's/old/new/g' archivo", descripcion: "Edita archivo directamente" },
			{ comando: "sed '/palabra/d' archivo", descripcion: "Elimina líneas con palabra" }
		],
		usos: [
			{ comando: "sed 's/old/new/' archivo", descripcion: "Reemplaza primera ocurrencia" },
			{ comando: "sed 's/old/new/g' archivo", descripcion: "Reemplaza todas las ocurrencias" },
			{ comando: "sed -i 's/old/new/g' archivo", descripcion: "Edita archivo directamente" },
			{ comando: "sed '/palabra/d' archivo", descripcion: "Elimina líneas con palabra" }
		]
	},
	{
		command: "awk",
		description: "Lenguaje de programación para procesamiento de texto.",
		example: "awk '{print $1}' archivo.txt",
		category: "Texto",
		usable: [
			{ comando: "awk '{print $1}' archivo", descripcion: "Imprime primer campo" },
			{ comando: "awk -F: '{print $1}' archivo", descripcion: "Usa : como separador" },
			{ comando: "awk '$1 > 100' archivo", descripcion: "Filtra por condición" },
			{ comando: "awk '{sum+=$1} END {print sum}' archivo", descripcion: "Suma columna" }
		],
		usos: [
			{ comando: "awk '{print $1}' archivo", descripcion: "Imprime primer campo" },
			{ comando: "awk -F: '{print $1}' archivo", descripcion: "Usa : como separador" },
			{ comando: "awk '$1 > 100' archivo", descripcion: "Filtra por condición" },
			{ comando: "awk '{sum+=$1} END {print sum}' archivo", descripcion: "Suma columna" }
		]
	},
	{
		command: "diff",
		description: "Compara dos archivos línea por línea.",
		example: "diff archivo1.txt archivo2.txt",
		category: "Texto",
		usable: [
			{ comando: "diff archivo1 archivo2", descripcion: "Compara archivos" },
			{ comando: "diff -u archivo1 archivo2", descripcion: "Formato unificado" },
			{ comando: "diff -r dir1 dir2", descripcion: "Compara directorios" }
		],
		usos: [
			{ comando: "diff archivo1 archivo2", descripcion: "Compara archivos" },
			{ comando: "diff -u archivo1 archivo2", descripcion: "Formato unificado" },
			{ comando: "diff -r dir1 dir2", descripcion: "Compara directorios" }
		]
	},
	{
		command: "mount",
		description: "Monta dispositivos o sistemas de archivos.",
		example: "sudo mount /dev/sdb1 /mnt/usb",
		category: "Sistema",
		usable: [
			{ comando: "mount", descripcion: "Lista montajes actuales" },
			{ comando: "sudo mount /dev/sdb1 /mnt/carpeta", descripcion: "Monta dispositivo" },
			{ comando: "sudo mount -o loop archivo.iso /mnt", descripcion: "Monta imagen ISO" }
		],
		usos: [
			{ comando: "mount", descripcion: "Lista montajes actuales" },
			{ comando: "sudo mount /dev/sdb1 /mnt/carpeta", descripcion: "Monta dispositivo" },
			{ comando: "sudo mount -o loop archivo.iso /mnt", descripcion: "Monta imagen ISO" }
		]
	},
	{
		command: "umount",
		description: "Desmonta dispositivos o sistemas de archivos.",
		example: "sudo umount /mnt/usb",
		category: "Sistema",
		usable: [
			{ comando: "sudo umount /mnt/carpeta", descripcion: "Desmonta dispositivo" },
			{ comando: "sudo umount -l /mnt/carpeta", descripcion: "Desmontaje lazy (forzado)" }
		],
		usos: [
			{ comando: "sudo umount /mnt/carpeta", descripcion: "Desmonta dispositivo" },
			{ comando: "sudo umount -l /mnt/carpeta", descripcion: "Desmontaje lazy (forzado)" }
		]
	},
	{
		command: "lsof",
		description: "Lista archivos abiertos y los procesos que los usan.",
		example: "lsof -i :8080",
		category: "Procesos",
		usable: [
			{ comando: "lsof", descripcion: "Lista todos los archivos abiertos" },
			{ comando: "lsof -i :8080", descripcion: "Procesos usando puerto 8080" },
			{ comando: "lsof -p 1234", descripcion: "Archivos del proceso PID" },
			{ comando: "lsof +D /carpeta", descripcion: "Archivos en directorio" }
		],
		usos: [
			{ comando: "lsof", descripcion: "Lista todos los archivos abiertos" },
			{ comando: "lsof -i :8080", descripcion: "Procesos usando puerto 8080" },
			{ comando: "lsof -p 1234", descripcion: "Archivos del proceso PID" },
			{ comando: "lsof +D /carpeta", descripcion: "Archivos en directorio" }
		]
	},
	{
		command: "pkill",
		description: "Envía señales a procesos por nombre.",
		example: "pkill firefox",
		category: "Procesos",
		usable: [
			{ comando: "pkill nombre", descripcion: "Mata proceso por nombre" },
			{ comando: "pkill -9 nombre", descripcion: "Fuerza muerte del proceso" },
			{ comando: "pkill -f 'patron'", descripcion: "Busca por comando completo" }
		],
		usos: [
			{ comando: "pkill nombre", descripcion: "Mata proceso por nombre" },
			{ comando: "pkill -9 nombre", descripcion: "Fuerza muerte del proceso" },
			{ comando: "pkill -f 'patron'", descripcion: "Busca por comando completo" }
		]
	},
	{
		command: "killall",
		description: "Mata todos los procesos de un programa.",
		example: "killall chrome",
		category: "Procesos",
		usable: [
			{ comando: "killall nombre", descripcion: "Mata todos los procesos" },
			{ comando: "killall -9 nombre", descripcion: "Fuerza muerte" },
			{ comando: "killall -i nombre", descripcion: "Pide confirmación" }
		],
		usos: [
			{ comando: "killall nombre", descripcion: "Mata todos los procesos" },
			{ comando: "killall -9 nombre", descripcion: "Fuerza muerte" },
			{ comando: "killall -i nombre", descripcion: "Pide confirmación" }
		]
	},
	{
		command: "htop",
		description: "Versión mejorada y visual de top.",
		example: "htop",
		category: "Procesos",
		usable: [
			{ comando: "htop", descripcion: "Muestra procesos con interfaz visual" },
			{ comando: "htop -u usuario", descripcion: "Filtra por usuario" },
			{ comando: "F9", descripcion: "Mata proceso seleccionado" },
			{ comando: "F3", descripcion: "Busca proceso" }
		],
		usos: [
			{ comando: "htop", descripcion: "Muestra procesos con interfaz visual" },
			{ comando: "htop -u usuario", descripcion: "Filtra por usuario" },
			{ comando: "F9", descripcion: "Mata proceso seleccionado" },
			{ comando: "F3", descripcion: "Busca proceso" }
		]
	},
	{
		command: "watch",
		description: "Ejecuta un comando periódicamente y muestra su salida.",
		example: "watch -n 1 'ls'",
		category: "Utilidades",
		usable: [
			{ comando: "watch -n 1 'comando'", descripcion: "Ejecuta cada segundo" },
			{ comando: "watch -d 'comando'", descripcion: "Resalta diferencias" },
			{ comando: "watch -n 5 'df -h'", descripcion: "Monitorea disco cada 5 segundos" }
		],
		usos: [
			{ comando: "watch -n 1 'comando'", descripcion: "Ejecuta cada segundo" },
			{ comando: "watch -d 'comando'", descripcion: "Resalta diferencias" },
			{ comando: "watch -n 5 'df -h'", descripcion: "Monitorea disco cada 5 segundos" }
		]
	},
	{
		command: "xargs",
		description: "Construye y ejecuta comandos desde entrada estándar.",
		example: "ls | xargs rm",
		category: "Utilidades",
		usable: [
			{ comando: "ls | xargs rm", descripcion: "Elimina lista de archivos" },
			{ comando: "cat archivos.txt | xargs -n1", descripcion: "Procesa uno por uno" },
			{ comando: "find . -name '*.txt' | xargs rm", descripcion: "Combina con find" }
		],
		usos: [
			{ comando: "ls | xargs rm", descripcion: "Elimina lista de archivos" },
			{ comando: "cat archivos.txt | xargs -n1", descripcion: "Procesa uno por uno" },
			{ comando: "find . -name '*.txt' | xargs rm", descripcion: "Combina con find" }
		]
	},
	{
		command: "read",
		description: "Lee una línea de entrada estándar.",
		example: "read -p 'Nombre: ' nombre",
		category: "Utilidades",
		usable: [
			{ comando: "read variable", descripcion: "Lee entrada a variable" },
			{ comando: "read -p 'Prompt: ' var", descripcion: "Con mensaje" },
			{ comando: "read -s var", descripcion: "Entrada silenciosa (contraseña)" }
		],
		usos: [
			{ comando: "read variable", descripcion: "Lee entrada a variable" },
			{ comando: "read -p 'Prompt: ' var", descripcion: "Con mensaje" },
			{ comando: "read -s var", descripcion: "Entrada silenciosa (contraseña)" }
		]
	},
	{
		command: "printf",
		description: "Imprime texto formateado.",
		example: "printf 'Hola %s' mundo",
		category: "Utilidades",
		usable: [
			{ comando: "printf 'Hola %s' mundo", descripcion: "Imprime con formato" },
			{ comando: "printf '%d\n' 42", descripcion: "Imprime número" },
			{ comando: "printf '%.2f' 3.14159", descripcion: "Con decimales" }
		],
		usos: [
			{ comando: "printf 'Hola %s' mundo", descripcion: "Imprime con formato" },
			{ comando: "printf '%d\n' 42", descripcion: "Imprime número" },
			{ comando: "printf '%.2f' 3.14159", descripcion: "Con decimales" }
		]
	},
	{
		command: "test",
		description: "Evalúa condiciones y devuelve código de salida.",
		example: "test -f archivo && echo 'existe'",
		category: "Utilidades",
		usable: [
			{ comando: "test -f archivo && echo 'si'", descripcion: "Verifica si archivo existe" },
			{ comando: "test -d carpeta && echo 'si'", descripcion: "Verifica si es directorio" },
			{ comando: "test -z '$var' && echo 'vacio'", descripcion: "Verifica si está vacío" },
			{ comando: "test 1 -eq 1 && echo 'igual'", descripcion: "Compara números" }
		],
		usos: [
			{ comando: "test -f archivo && echo 'si'", descripcion: "Verifica si archivo existe" },
			{ comando: "test -d carpeta && echo 'si'", descripcion: "Verifica si es directorio" },
			{ comando: "test -z '$var' && echo 'vacio'", descripcion: "Verifica si está vacío" },
			{ comando: "test 1 -eq 1 && echo 'igual'", descripcion: "Compara números" }
		]
	},
	{
		command: "which",
		description: "Ubica la ubicación de un comando ejecutable.",
		example: "which python",
		category: "Utilidades",
		usable: [
			{ comando: "which comando", descripcion: "Muestra ruta del comando" },
			{ comando: "which -a comando", descripcion: "Muestra todas las coincidencias" }
		],
		usos: [
			{ comando: "which comando", descripcion: "Muestra ruta del comando" },
			{ comando: "which -a comando", descripcion: "Muestra todas las coincidencias" }
		]
	},
	{
		command: "whereis",
		description: "Muestra la ubicación de comandos, manuales y código fuente.",
		example: "whereis ls",
		category: "Utilidades",
		usable: [
			{ comando: "whereis comando", descripcion: "Muestra binario, man y código" },
			{ comando: "whereis -b comando", descripcion: "Solo binarios" },
			{ comando: "whereis -m comando", descripcion: "Solo manuales" }
		],
		usos: [
			{ comando: "whereis comando", descripcion: "Muestra binario, man y código" },
			{ comando: "whereis -b comando", descripcion: "Solo binarios" },
			{ comando: "whereis -m comando", descripcion: "Solo manuales" }
		]
	},
	{
		command: "type",
		description: "Muestra el tipo de comando (alias, función, built-in, etc).",
		example: "type ls",
		category: "Utilidades",
		usable: [
			{ comando: "type comando", descripcion: "Muestra tipo de comando" },
			{ comando: "type -a comando", descripcion: "Muestra todas las definiciones" }
		],
		usos: [
			{ comando: "type comando", descripcion: "Muestra tipo de comando" },
			{ comando: "type -a comando", descripcion: "Muestra todas las definiciones" }
		]
	},
	{
		command: "unalias",
		description: "Elimina un alias definido previamente.",
		example: "unalias gs",
		category: "Utilidades",
		usable: [
			{ comando: "unalias nombre", descripcion: "Elimina un alias" },
			{ comando: "unalias -a", descripcion: "Elimina todos los alias" }
		],
		usos: [
			{ comando: "unalias nombre", descripcion: "Elimina un alias" },
			{ comando: "unalias -a", descripcion: "Elimina todos los alias" }
		]
	}
];
