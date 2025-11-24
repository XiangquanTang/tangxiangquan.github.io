# File Browser 配置说明

## 功能说明
在"已上传的数据集*"右侧添加了"访问原始数据"链接，用于通过 File Browser 访问本地 F 盘共享的原始数据。

## 配置步骤

### 1. 安装 File Browser

```bash
# Windows 系统
# 下载 File Browser: https://github.com/filebrowser/filebrowser/releases
# 或使用 Chocolatey 安装
choco install filebrowser
```

### 2. 配置 File Browser

创建配置文件 `filebrowser.json`:

```json
{
  "port": 8080,
  "baseURL": "",
  "address": "0.0.0.0",
  "log": "stdout",
  "database": "filebrowser.db",
  "root": "F:/your-data-folder"
}
```

### 3. 启动 File Browser

```bash
# 使用配置文件启动
filebrowser -c filebrowser.json

# 或直接指定参数
filebrowser -r F:/your-data-folder -p 8080
```

### 4. 修改前端配置

编辑 `rawDataAccess.js` 文件中的配置：

```javascript
const FILE_BROWSER_CONFIG = {
  // File Browser 服务器地址
  baseUrl: 'http://localhost:8080',
  // 共享的文件夹路径（相对于 File Browser 根目录）
  sharedPath: '/raw-data',
  // 是否在新窗口打开
  openInNewWindow: true
};
```

### 5. 配置示例

#### 示例 1: 本地开发环境
```javascript
baseUrl: 'http://localhost:8080',
sharedPath: '/'
```

#### 示例 2: 局域网访问
```javascript
baseUrl: 'http://192.168.1.100:8080',
sharedPath: '/datasets'
```

#### 示例 3: 使用域名
```javascript
baseUrl: 'https://files.yourdomain.com',
sharedPath: '/raw-data'
```

## 使用方法

1. 启动 File Browser 服务
2. 在浏览器中打开数据管理页面
3. 点击"访问原始数据"按钮
4. 将自动跳转到 File Browser 界面

## 安全建议

1. **设置访问密码**: File Browser 默认用户名/密码为 `admin/admin`，请及时修改
2. **限制访问IP**: 在生产环境中建议配置防火墙规则
3. **使用 HTTPS**: 生产环境建议配置 SSL 证书
4. **权限控制**: 在 File Browser 中设置合适的用户权限

## 常见问题

### Q: 无法访问 File Browser
A: 检查防火墙设置，确保端口 8080 已开放

### Q: 路径配置错误
A: 确保 F 盘路径存在且 File Browser 有访问权限

### Q: 跨域问题
A: 如果前端和 File Browser 不在同一域名，需要配置 CORS

## 更多信息

File Browser 官方文档: https://filebrowser.org/
