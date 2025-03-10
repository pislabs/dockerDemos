## 容器配置

```bash
cd api-mocker

# 启动容器
docker compose up -d

# 查看进程
docker ps

# 进入容器(方法1)
docker exec -it <name> bash

# 进入容器(方法2)
docker compose exec <name> bash

# 停止所有容器
docker compose down

# 删除所有相关本地镜像
docker rmi $(docker images --filter "reference=api-*" -q)
```

## 流量监控

```bash
sudo iftop -i en0 -P
```

参考：

- [Linux 流量监控工具 – iftop (最全面的 iftop 教程)](https://www.itzyz.cn/archives/3849)
- [从零开始学习 iftop 流量监控（找出服务器耗费流量最多的 ip 和端口）](https://www.cnblogs.com/chenqionghe/p/10680075.html)
