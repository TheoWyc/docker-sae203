# Utiliser l'image debia officielle comme image parent
FROM debian:latest

# Installer des services et des packages
#RUN  apt-get update && \
#    apt-get -y install  \
#    apache2 
RUN apt-get update && \
	apt-get -y install apache2 php libapache2-mod-php 
# Copier les fichiers de l'hôte vers l'image
#Ancien COPY ./Site /usr/local/apache2/htdocs/
COPY ./Site /var/www/html
# Exposer le port 80
EXPOSE 80

# Lancer le service apache au démarrage du conteneur
CMD ["/usr/sbin/apache2ctl","-DFOREGROUND"]


# Utiliser l'image httpd officielle comme image parent
#FROM httpd

# Copier le répertoire html du répertoire parent vers le répertoire de l'image /usr/local/apache2/htdocs/
#COPY ./Site /usr/local/apache2/htdocs/

# Rendre le port 80 accessible au monde en dehors de ce conteneurff858a323a01
#EXPOSE 80

