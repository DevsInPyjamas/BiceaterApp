sed -i -E "s/listen 80/listen $PORT/" /etc/nginx/conf.d/default.conf
nginx -g daemon\ off\;