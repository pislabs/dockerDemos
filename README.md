## 常用 linux 命令

```bash
# 查看当前OS版本
uname -a

# 查看当前用户id
id

# 查看当前OS发现版本
cat /etc/issue

# 查看当前所有进程关系
pstree -pl

# 查看进程uts命名空间
readlink /proc/<pid>/ns/uts

# 查看IPC消息队列
ipcs -q

# 新建IPC消息队列
ipcmk -Q

# 删除IPC消息队列
ipcrm -Q <queue_id>

# 查看进程
ps -ef
```
