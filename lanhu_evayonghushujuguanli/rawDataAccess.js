/**
 * 访问原始数据功能
 * 用于通过 File Browser 访问本地 F 盘共享的原始数据
 */

// File Browser 配置
const FILE_BROWSER_CONFIG = {
  // File Browser 服务器地址
  baseUrl: 'http://10.6.13.130:8081',
  // 共享的文件夹路径（相对于 File Browser 根目录）
  sharedPath: '',
  // 是否在新窗口打开
  openInNewWindow: true
};

/**
 * 访问原始数据
 */
function accessRawData() {
  const url = FILE_BROWSER_CONFIG.baseUrl + FILE_BROWSER_CONFIG.sharedPath;
  
  if (FILE_BROWSER_CONFIG.openInNewWindow) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}

// 页面加载完成后绑定事件
document.addEventListener('DOMContentLoaded', function() {
  const rawDataLink = document.getElementById('rawDataLink');
  
  if (rawDataLink) {
    rawDataLink.addEventListener('click', function(e) {
      e.preventDefault();
      accessRawData();
    });
  }
});

/**
 * 更新 File Browser 配置
 * @param {string} baseUrl - File Browser 服务器地址
 * @param {string} sharedPath - 共享文件夹路径
 */
function updateFileBrowserConfig(baseUrl, sharedPath) {
  FILE_BROWSER_CONFIG.baseUrl = baseUrl;
  FILE_BROWSER_CONFIG.sharedPath = sharedPath;
  console.log('File Browser 配置已更新:', FILE_BROWSER_CONFIG);
}
