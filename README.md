Para poder ejecutar el proyecto:

BACKEND
1) Clonar el repositorio en una ruta de su preferencia
2) Descargar  composer desde el siguiente enlace 
https://getcomposer.org/Composer-Setup.exe

3) Instalar composer
4) Ingresar al directorio del proyecto clonado y abrir la carpeta correspondiente al backend, abrir una terminal y ejecutar el comando: "composer install" para poder instalar las dependencias de Laravel
5) Copiar el archivo .env.example y al pegarlo renombrar con el nombre .env
6) En la terminal ejecutar el comando php artisan key:generate para generar la clave única que corresponde al proyecto.
7) Se crea la base de datos en MySQL que será de destino para el proyecto y se coloca el nombre en el archivo .env
8) En la terminal ejecutar el comando php artisan migrate para crear las tablas correspondientes al proyecto.
9) En la terminal ejecutar el comando php artisan serve para tener activo el servidor


FRONT END
1) Descargar e instalar Node.js desde el siguiente enlace: https://nodejs.org/en/download/
2) Una vez instalado Node.js abrir una terminal de CMD y ejecutar el comando: npm install -g @angular/cli@10
3) Ejecutar en la terminal CMD el comando  ng serve para que se habilite el servidor del frontend.
