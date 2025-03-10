# 这里我用的镜像是 node 的稳定版
FROM node:14.21.3-alpine

# 拷贝项目文件进行构建
WORKDIR /opt/apps
COPY ./app/package.json ./
RUN npm install --registry=https://registry.npmmirror.com

# 拷贝项目文件
COPY ./app/* ./

# 启动服务
CMD ["npm","start"]

# 暴露 3000 端口到宿主机
EXPOSE 3000
