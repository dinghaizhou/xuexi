#### package.json 版本号规则
* 第一位 大版本（major version） 
    大改版，无法兼容之前的版本，增加第一位数字，如：2.0.0
* 第二位 小版本（minor version） 
    增加了新特性，同时不会影响之前的版本，增加中间一位数据，如：1.1.0
* 第三位 补丁版本（patch version）
    解决了bug或者一些较小的更改，增加最后一位数字，如：1.0.1

#### 包更新
* ^2.3.4 锁定大版本
* ~1.2.2 锁定小版本
* *不锁定 

#### 命令
* npm search [<pkg>] 查找包
* npm update [-g] [<pkg>] 更新包
* npm view <pkg> [versions]
* npm list [|grep <pkg>] 查看包
* npm cache c
* npm outdated 
current 目前版本
wanted 当前可以更新的最新版本
latest 最新版本


 