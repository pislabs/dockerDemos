FROM golang:1.24-alpine

WORKDIR /go

# apk 国内源
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories

RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash

# 保持容器运行
CMD ["tail", "-f", "/dev/null"]
