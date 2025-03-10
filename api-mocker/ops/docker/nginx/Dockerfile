FROM nginx:alpine

# 拷贝 nginx 全局配置文件
COPY nginx.conf /etc/nginx/

# apk 国内源
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories

# 安装 ssl
RUN apk update \
    && apk upgrade \
    && apk add --no-cache openssl \
    && apk add --no-cache bash

# 暴露 80 端口
EXPOSE 80 443 8018
