
# production stage
FROM nginx:stable-alpine
LABEL Naveen Chenjigaram<naveencm@rocketmail.com>
RUN rm /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
COPY conf/default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
