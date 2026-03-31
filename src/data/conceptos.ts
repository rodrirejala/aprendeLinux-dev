export interface Concepto {
	id: string;
	titulo: string;
	descripcion: string;
	contenido: string[];
	codigos?: { titulo: string; codigo: string }[];
}

export const conceptos: Concepto[] = [
	{
		id: "systemd",
		titulo: "Systemd",
		descripcion: "El sistema de inicio y gestión de servicios moderno para Linux",
		contenido: [
			"Systemd es el sistema de inicialización y gestión de servicios más utilizado en distribuciones Linux modernas.",
			"Fue creado para reemplazar los antiguos sistemas SysV init y proporcionar un inicio más rápido y paralelo.",
			"Gestiona servicios (daemons), monta sistemas de archivos, registra eventos del sistema y mucho más.",
			"Cada servicio en systemd se define mediante una 'unit file' con extensión .service"
		],
		codigos: [
			{ titulo: "Ver estado de un servicio", codigo: "systemctl status nginx" },
			{ titulo: "Iniciar un servicio", codigo: "sudo systemctl start nginx" },
			{ titulo: "Detener un servicio", codigo: "sudo systemctl stop nginx" },
			{ titulo: "Reiniciar un servicio", codigo: "sudo systemctl restart nginx" },
			{ titulo: "Habilitar servicio al inicio", codigo: "sudo systemctl enable nginx" },
			{ titulo: "Deshabilitar servicio", codigo: "sudo systemctl disable nginx" },
			{ titulo: "Ver todos los servicios", codigo: "systemctl list-units --type=service" },
			{ titulo: "Ver servicios fallidos", codigo: "systemctl --failed" },
			{ titulo: "Ver logs de un servicio", codigo: "journalctl -u nginx" },
			{ titulo: "Ver logs en tiempo real", codigo: "journalctl -f" }
		]
	},
	{
		id: "permisos",
		titulo: "Permisos de Archivos",
		descripcion: "Entiende cómo Linux controla el acceso a archivos y directorios",
		contenido: [
			"Cada archivo en Linux tiene permisos de lectura (r), escritura (w) y ejecución (x).",
			"Los permisos se dividen en tres grupos: propietario (u), grupo (g) y otros (o).",
			"Puedes ver los permisos con 'ls -l' que muestra algo como: -rwxr-xr-x",
			"El primer carácter indica el tipo de archivo (-=archivo, d=directorio, l=enlace).",
			"Los permisos se representan con números: r=4, w=2, x=1. Así 755 = rwxr-xr-x"
		],
		codigos: [
			{ titulo: "Ver permisos", codigo: "ls -l archivo.txt" },
			{ titulo: "Cambiar permisos (numérico)", codigo: "chmod 755 script.sh" },
			{ titulo: "Añadir ejecución", codigo: "chmod +x script.sh" },
			{ titulo: "Quitar escritura a grupo", codigo: "chmod g-w archivo" },
			{ titulo: "Cambiar propietario", codigo: "chown usuario:grupo archivo" },
			{ titulo: "Cambiar grupo", codigo: "chgrp grupo archivo" },
			{ titulo: "Permisos recursivos", codigo: "chmod -R 755 carpeta/" },
			{ titulo: "Ver permisos octales", codigo: "stat -c '%a' archivo" }
		]
	},
	{
		id: "procesos",
		titulo: "Gestión de Procesos",
		descripcion: "Aprende a monitorear y controlar procesos en Linux",
		contenido: [
			"Un proceso es un programa en ejecución. Cada proceso tiene un PID (Process ID) único.",
			"Linux es multitarea: puedes ejecutar múltiples programas simultáneamente.",
			" Los procesos pueden ser zombie (terminados pero no esperados) o daemon (servicios en segundo plano).",
			"La prioridad de procesos (nice value) determina cuánto tiempo de CPU recibe un proceso."
		],
		codigos: [
			{ titulo: "Ver procesos", codigo: "ps aux" },
			{ titulo: "Monitor en tiempo real", codigo: "top" },
			{ titulo: "Versión mejorada de top", codigo: "htop" },
			{ titulo: "Buscar proceso", codigo: "ps aux | grep nginx" },
			{ titulo: "Matar proceso por PID", codigo: "kill 1234" },
			{ titulo: "Matar forzosamente", codigo: "kill -9 1234" },
			{ titulo: "Matar por nombre", codigo: "pkill nginx" },
			{ titulo: "Ver árbol de procesos", codigo: "pstree" },
			{ titulo: "Archivos abiertos", codigo: "lsof" },
			{ titulo: "Cambiar prioridad", codigo: "nice -n 10 comando" }
		]
	},
	{
		id: "variables-entorno",
		titulo: "Variables de Entorno",
		descripcion: "Configura y gestiona las variables que afectan el comportamiento del sistema",
		contenido: [
			"Las variables de entorno almacenan información como rutas, preferencias y configuraciones.",
			"PATH indica al sistema dónde buscar ejecutables.",
			"HOME指向用户的主目录。USER存储当前用户名。",
			"Las variables pueden exportarse para que estén disponibles en procesos hijos.",
			"Para hacer permanentes las variables, agrégalas a ~/.bashrc o /etc/environment"
		],
		codigos: [
			{ titulo: "Ver todas las variables", codigo: "env" },
			{ titulo: "Ver una variable", codigo: "echo $PATH" },
			{ titulo: "Crear variable", codigo: "export MIVAR='valor'" },
			{ titulo: "Agregar al PATH", codigo: "export PATH=$PATH:/ruta" },
			{ titulo: "Variable para un comando", codigo: "env VAR=valor comando" },
			{ titulo: "Quitar variable", codigo: "env -u VAR comando" },
			{ titulo: "Ver variables exportadas", codigo: "export -p" }
		]
	},
	{
		id: "red",
		titulo: "Conceptos de Red",
		descripcion: "Fundamentos de redes en Linux",
		contenido: [
			"Linux ofrece potentes herramientas de red integradas en el kernel.",
			"Las interfaces de red pueden ser físicas (eth0, wlan0) o virtuales (docker0, veth).",
			"iptables/nftables se usan para configurar el firewall.",
			" systemd-resolved gestiona la resolución DNS en distribuciones modernas."
		],
		codigos: [
			{ titulo: "Ver IPs", codigo: "ip addr" },
			{ titulo: "Ver rutas", codigo: "ip route" },
			{ titulo: "Ver tablas ARP", codigo: "ip neigh" },
			{ titulo: "Probar conectividad", codigo: "ping google.com" },
			{ titulo: "Ver puertos abiertos", codigo: "ss -tuln" },
			{ titulo: "Ver conexiones", codigo: "ss -tan" },
			{ titulo: "Trace ruta", codigo: "traceroute google.com" },
			{ titulo: "DNS lookup", codigo: "nslookup google.com" }
		]
	},
	{
		id: "gestion-paquetes",
		titulo: "Gestión de Paquetes",
		descripcion: "Cómo instalar, actualizar y eliminar software en Linux",
		contenido: [
			"Las distribuciones Linux usan diferentes sistemas de paquetes: apt (Debian/Ubuntu), dnf/yum (RHEL/Fedora), pacman (Arch).",
			"Cada sistema tiene repositorios que contienen el software disponible.",
			" Los paquetes pueden tener dependencias que se instalan automáticamente.",
			"Es importante mantener el sistema actualizado para seguridad."
		],
		codigos: [
			{ titulo: "Actualizar lista (apt)", codigo: "sudo apt update" },
			{ titulo: "Actualizar paquetes", codigo: "sudo apt upgrade" },
			{ titulo: "Instalar paquete", codigo: "sudo apt install nginx" },
			{ titulo: "Eliminar paquete", codigo: "sudo apt remove nginx" },
			{ titulo: "Buscar paquete", codigo: "apt search nginx" },
			{ titulo: "Ver instalados", codigo: "apt list --installed" },
			{ titulo: "Limpiar caché", codigo: "sudo apt clean" }
		]
	},
	{
		id: "filesystem",
		titulo: "Sistema de Archivos",
		descripcion: "Entiende la jerarquía y estructura de directorios en Linux",
		contenido: [
			"La jerarquía de Linux comienza en '/' (raíz).",
			"/bin - Ejecutables esenciales del sistema",
			"/etc - Archivos de configuración",
			"/home - Directorios de usuarios",
			"/var - Datos variables (logs, caché)",
			"/usr - Programas y librerías",
			"/tmp - Archivos temporales"
		],
		codigos: [
			{ titulo: "Ver espacio disco", codigo: "df -h" },
			{ titulo: "Ver tamaño carpetas", codigo: "du -sh */" },
			{ titulo: "Montar dispositivo", codigo: "sudo mount /dev/sdb1 /mnt" },
			{ titulo: "Desmontar", codigo: "sudo umount /mnt" },
			{ titulo: "Ver tipo FS", codigo: "df -T" },
			{ titulo: "Crear FS", codigo: "sudo mkfs.ext4 /dev/sdb1" },
			{ titulo: "Ver inodos", codigo: "df -i" }
		]
	},
	{
		id: "usuarios",
		titulo: "Gestión de Usuarios",
		descripcion: "Crear, modificar y eliminar usuarios en Linux",
		contenido: [
			"Linux es multiusuario: varios usuarios pueden usar el sistema simultáneamente.",
			"Cada usuario tiene un UID único. El root tiene UID 0.",
			"Los grupos organizan usuarios con permisos compartidos.",
			"/etc/passwd contiene info de usuarios, /etc/shadow tiene contraseñas encriptadas."
		],
		codigos: [
			{ titulo: "Crear usuario", codigo: "sudo useradd -m usuario" },
			{ titulo: "Eliminar usuario", codigo: "sudo userdel -r usuario" },
			{ titulo: "Cambiar contraseña", codigo: "passwd usuario" },
			{ titulo: "Agregar a grupo", codigo: "sudo usermod -aG grupo usuario" },
			{ titulo: "Ver usuario actual", codigo: "whoami" },
			{ titulo: "Cambiar a usuario", codigo: "su - usuario" },
			{ titulo: "Ejecutar como root", codigo: "sudo comando" },
			{ titulo: "Ver usuarios", codigo: "cat /etc/passwd" }
		]
	}
];
