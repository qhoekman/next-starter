# Deployment

This document describes how to deploy the application to production. We make use of Next.js as a framework, which has a built-in server.

## Static export

To export the application as static HTML run the following command:

```sh

npm run export
```

## Server setup

The server is setup using [PM2](https://pm2.keymetrics.io/). This is a process manager for Node.js applications. It allows us to run the application in the background and restart it when it crashes.

### Installation

To install PM2 run the following command:

```sh

npm install pm2 -g
```

### Starting the application

To start the application run the following command:

```sh

pm2 start npm --name "<project>" -- start
```

This will start the application in the background. To view the logs run:

```sh

pm2 logs <project>
```

### Stopping the application

To stop the application run the following command:

```sh

pm2 stop <project>
```

### Restarting the application

To restart the application run the following command:

```sh

pm2 restart <project>
```

### Updating the application

To update the application run the following command:

```sh

pm2 stop <project>
pm2 start npm --name "<project>" -- start
```

### SFTP deployment

The script for deployment with Exonet could look like:

```sh
#!/bin/sh
git pull
npm ci
npm build
npm start
sudo supervisorctl restart <project>

```

Deployment of `.next` packages is not needed, because the application is running in production mode.

### Reverse proxy

To make the application available on port 80 we make use of a reverse proxy. This is a server that forwards requests to the application. We use [Nginx](https://www.nginx.com/) as a reverse proxy.

#### Installation

To install Nginx run the following command:

```sh

brew install nginx
```

#### Configuration

To configure Nginx open the following file:

```sh

sudo nano /usr/local/etc/nginx/nginx.conf
```

Add the following configuration to the `http` block:

```sh

server {
  listen 80;
  server_name <domain>;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
  }
}
```

Replace `<domain>` with the domain of the application.

#### Starting the reverse proxy

To start the reverse proxy run the following command:

```sh

sudo nginx
```

#### Let's Encrypt

To enable HTTPS we make use of [Let's Encrypt](https://letsencrypt.org/). This is a free, automated, and open certificate authority. It allows us to generate a SSL certificate for the application.

##### Installation

To install Let's Encrypt run the following command:

```sh

brew install certbot
```

##### Configuration

To configure Let's Encrypt open the following file:

```sh

sudo nano /usr/local/etc/nginx/nginx.conf
```

Add the following configuration to the `http` block:

```sh

server {
  listen 80;
  server_name <domain>;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
  }

  location ~ /.well-known/acme-challenge {
    allow all;
    root /usr/local/var/www;
  }
}
```

Replace `<domain>` with the domain of the application.

##### Generating a certificate

To generate a certificate run the following command:

```sh

sudo certbot certonly --webroot -w /usr/local/var/www -d <domain>
```

Replace `<domain>` with the domain of the application.
