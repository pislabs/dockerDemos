# 使用 mongo 最新版镜像
FROM mongo:latest

# 把宿主机的 Mongo 配置文件拷贝到容器内
COPY mongod.conf /etc/mongod.conf

# 启动 mongo
CMD ["mongod", "--config", "/etc/mongod.conf"]

# 暴露 27017 端口到宿主机
EXPOSE 27017
