(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{250:function(t,_,d){"use strict";d.r(_);var v=d(7),e=Object(v.a)({},function(){var t=this,_=t.$createElement,d=t._self._c||_;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("h1",{attrs:{id:"nginx-编译参数"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#nginx-编译参数","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx 编译参数")]),t._v(" "),d("h2",{attrs:{id:"命令"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),d("ul",[d("li",[d("code",[t._v("./sbin/nginx -V")]),t._v(" - 查看当前已安装版本的编译参数")]),t._v(" "),d("li",[d("code",[t._v("src/nginx-x.x.x/configure --help")]),t._v(" - 显示提示信息")])]),t._v(" "),d("h2",{attrs:{id:"参数详情"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#参数详情","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数详情")]),t._v(" "),d("table",[d("thead",[d("tr",[d("th",[t._v("参数名称")]),t._v(" "),d("th",[t._v("备注")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[d("code",[t._v("--prefix=value")])]),t._v(" "),d("td",[t._v("指向安装目录")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--sbin-path")])]),t._v(" "),d("td",[t._v("指向（执行）程序文件（"),d("code",[t._v("nginx")]),t._v("）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--conf-path=")])]),t._v(" "),d("td",[t._v("指向配置文件（"),d("code",[t._v("nginx.conf")]),t._v("）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--error-log-path=")])]),t._v(" "),d("td",[t._v("指向错误日志目录")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--pid-path=")])]),t._v(" "),d("td",[t._v("指向 "),d("code",[t._v("pid")]),t._v(" 文件（"),d("code",[t._v("nginx.pid")]),t._v("）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--lock-path=")])]),t._v(" "),d("td",[t._v("指向 "),d("code",[t._v("lock")]),t._v(" 文件（"),d("code",[t._v("nginx.lock")]),t._v("）（安装文件锁定，防止安装文件被别人利用，或自己误操作。）进程ID文件")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--user=")])]),t._v(" "),d("td",[t._v("指定程序运行时的用户名")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--group=")])]),t._v(" "),d("td",[t._v("指定程序运行时的用户组名")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--builddir=")])]),t._v(" "),d("td",[t._v("指向编译目录")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-rtsig_module")])]),t._v(" "),d("td",[t._v("启用 rtsig 模块支持（实时信号）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-select_module")])]),t._v(" "),d("td",[t._v("启用 select 模块支持（一种轮询模式,不推荐在高载环境下使用）禁用："),d("code",[t._v("--without-select_module")])])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-poll_module")])]),t._v(" "),d("td",[t._v("启用 poll 模块支持（功能与 select 相同，与 select 特性相同，为一种轮询模式,不推荐在高载环境下使用）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-file-aio")])]),t._v(" "),d("td",[t._v("启用 file aio 支持（一种 APL 文件传输格式）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-ipv6")])]),t._v(" "),d("td",[t._v("启用 ipv6 支持")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--add-module=")])]),t._v(" "),d("td",[t._v("启用外部模块支持")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-cc=")])]),t._v(" "),d("td",[t._v("指向 C 编译器路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-cpp=")])]),t._v(" "),d("td",[t._v("指向 C 预处理路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-cc-opt=")])]),t._v(" "),d("td",[t._v("设置 C 编译器参数")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-ld-opt=")])]),t._v(" "),d("td",[t._v("设置连接文件参数")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-cpu-opt=")])]),t._v(" "),d("td",[t._v("指定编译的 CPU，可用的值为：pentium, pentiumpro, pentium3, pentium4, athlon, opteron, amd64, sparc32, sparc64, ppc64")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-pcre")])]),t._v(" "),d("td",[t._v("禁用 PCRE 库")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-pcre")])]),t._v(" "),d("td",[t._v("启用 PCRE 库")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-pcre=")])]),t._v(" "),d("td",[t._v("指向 PCRE 库文件目录")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-pcre-opt=")])]),t._v(" "),d("td",[t._v("在编译时为 PCRE 库设置附加参数")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-md5=")])]),t._v(" "),d("td",[t._v("指向 MD5 库文件目录（消息摘要算法第五版，用以提供消息的完整性保护）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-md5-opt=")])]),t._v(" "),d("td",[t._v("在编译时为 MD5 库设置附加参数")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-md5-asm")])]),t._v(" "),d("td",[t._v("使用 MD5 汇编源")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-sha1=")])]),t._v(" "),d("td",[t._v("指向 sha1 库目录（数字签名算法，主要用于数字签名）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-sha1-opt=")])]),t._v(" "),d("td",[t._v("在编译时为 sha1 库设置附加参数")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-sha1-asm")])]),t._v(" "),d("td",[t._v("使用 sha1 汇编源")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-perl=")])]),t._v(" "),d("td",[t._v("设定 perl 库文件路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-zlib=")])]),t._v(" "),d("td",[t._v("指向 zlib 库目录")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-zlib-opt=")])]),t._v(" "),d("td",[t._v("在编译时为 zlib 设置附加参数")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-zlib-asm=")])]),t._v(" "),d("td",[t._v("为指定的 CPU 使用 zlib 汇编源进行优化，CPU 类型为 pentium, pentiumpro")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-libatomic")])]),t._v(" "),d("td",[t._v("为原子内存的更新操作的实现提供一个架构")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-libatomic=")])]),t._v(" "),d("td",[t._v("指向 libatomic_ops 安装目录")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-openssl=")])]),t._v(" "),d("td",[t._v("指向 openssl 安装目录")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-openssl-opt")])]),t._v(" "),d("td",[t._v("在编译时为 openssl 设置附加参数")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-debug")])]),t._v(" "),d("td",[t._v("启用 debug 日志")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_ssl_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_ssl_module 支持（使支持 HTTPS 请求，需已安装 openssl）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_realip_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_realip_module 支持（这个模块允许从请求标头更改客户端的 IP 地址值，默认为关）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_addition_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_addition_module 支持（作为一个输出过滤器，支持不完全缓冲，分部分响应请求）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_xslt_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_xslt_module 支持（过滤转换 XML 请求）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_image_filter_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_image_filter_module 支持（传输 JPEG/GIF/PNG 图片的一个过滤器）（默认为不启用。GD 库要用到）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_geoip_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_geoip_module 支持（该模块创建基于与 MaxMind GeoIP 二进制文件相配的客户端 IP 地址的 ngx_http_geoip_module 变量）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_sub_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_sub_module 支持（允许用一些其他文本替换 Nginx 响应中的一些文本）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_dav_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_dav_module 支持（增加 PUT、DELETE、MKCOL 创建集合，COPY 和 MOVE 方法）默认情况下为关闭，需编译开启")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_flv_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_flv_module 支持（提供寻求内存使用基于时间的偏移量文件）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_gzip_static_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_gzip_static_module 支持（在线实时压缩输出数据流）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_random_index_module")])]),t._v(" "),d("td",[t._v("启用 "),d("code",[t._v("ngx_http_random_index_module")]),t._v(" 支持（从目录中随机挑选一个目录索引）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_secure_link_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_secure_link_module 支持（计算和检查要求所需的安全链接网址）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_degradation_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_degradation_module 支持（允许在内存不足的情况下返回204或444码）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_stub_status_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_stub_status_module 支持（获取 Nginx 自上次启动以来的工作状态）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_charset_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_charset_module 支持（重新编码 WEB 页面，但只能是一个方向--服务器端到客户端，并且只有一个字节的编码可以被重新编码）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_gzip_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_gzip_module 支持（该模块同 "),d("code",[t._v("--with-http_gzip_static_module")]),t._v(" 功能一样）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_ssi_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_ssi_module 支持（该模块提供了一个在输入端处理处理服务器包含文件（SSI）的过滤器，目前支持 SSI 命令的列表是不完整的）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_userid_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_userid_module 支持（该模块用来处理用来确定客户端后续请求的 "),d("code",[t._v("cookie")]),t._v(" ）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_access_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_access_module 支持（该模块提供了一个简单的基于主机的访问控制。允许/拒绝基于 IP 地址）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_auth_basic_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_auth_basic_module（该模块是可以使用用户名和密码基于 HTTP 基本认证方法来保护你的站点或其部分内容）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_autoindex_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_autoindex_module 支持（该模块用于自动生成目录列表，只在 "),d("code",[t._v("ngx_http_index_module")]),t._v(" 模块未找到索引文件时发出请求。）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_geo_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_geo_module 支持（创建一些变量，其值依赖于客户端的IP地址）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_map_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_map_module 支持（使用任意的键/值对设置配置变量）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_split_clients_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_split_clients_module 支持（该模块用来基于某些条件划分用户。条件如：ip地址、报头、cookies等等）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_referer_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_referer_module支持（该模块用来过滤请求，拒绝报头中 Referer 值不正确的请求）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_rewrite_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_rewrite_module ，链接重写")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_proxy_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_proxy_module 支持（有关代理服务器）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_fastcgi_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_fastcgi_module 支持（该模块允许 Nginx 与 FastCGI 进程交互，并通过传递参数来控制 FastCGI 进程工作。 ）FastCGI 一个常驻型的公共网关接口。")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_uwsgi_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_uwsgi_module 支持（该模块用来医用uwsgi协议，uWSGI服务器相关）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_scgi_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_scgi_module支持")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_memcached_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_memcached_module 支持（该模块用来提供简单的缓存，以提高系统效率）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("-without-http_limit_zone_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_limit_zone_module 支持（该模块可以针对条件，进行会话的并发连接数控制）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_limit_req_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_limit_req_module 支持（该模块允许你对于一个地址进行请求数量的限制用一个给定的session或一个特定的事件）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_empty_gif_module")])]),t._v(" "),d("td",[t._v("禁用 "),d("code",[t._v("ngx_http_empty_gif_module")]),t._v(" 支持（该模块在内存中常驻了一个1*1的透明GIF图像，可以被非常快速的调用）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_browser_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_browser_module 支持")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http_upstream_ip_hash_module")])]),t._v(" "),d("td",[t._v("禁用 ngx_http_upstream_ip_hash_module 支持（该模块用于简单的负载均衡）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-http_perl_module")])]),t._v(" "),d("td",[t._v("启用 ngx_http_perl_module 支持（该模块使nginx可以直接使用perl或通过ssi调用perl）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-perl_modules_path=")])]),t._v(" "),d("td",[t._v("设定 perl 模块路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--http-log-path=")])]),t._v(" "),d("td",[t._v("设定 access log 路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--http-client-body-temp-path=")])]),t._v(" "),d("td",[t._v("设定 HTTP 客户端请求临时文件路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--http-proxy-temp-path=")])]),t._v(" "),d("td",[t._v("设定 HTTP 代理临时文件路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--http-fastcgi-temp-path=")])]),t._v(" "),d("td",[t._v("设定 HTTP Fastcgi 临时文件路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--http-uwsgi-temp-path=")])]),t._v(" "),d("td",[t._v("设定 HTTP uwsgi 临时文件路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--http-scgi-temp-path=")])]),t._v(" "),d("td",[t._v("设定 HTTP scgi 临时文件路径")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http")])]),t._v(" "),d("td",[t._v("禁用 HTTP server 功能")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-http-cache")])]),t._v(" "),d("td",[t._v("禁用 HTTP Cache 功能")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-mail")])]),t._v(" "),d("td",[t._v("启用 POP3/IMAP4/SMTP 代理模块支持")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-mail_ssl_module")])]),t._v(" "),d("td",[t._v("启用 ngx_mail_ssl_module 支持")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-mail_pop3_module")])]),t._v(" "),d("td",[t._v("禁用 POP3 协议")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-mail_imap_module")])]),t._v(" "),d("td",[t._v("禁用 IMAP 协议")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--without-mail_smtp_module")])]),t._v(" "),d("td",[t._v("禁用 SMTP 协议")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-google_perftools_module")])]),t._v(" "),d("td",[t._v("启用 ngx_google_perftools_module 支持（调试用，剖析程序性能瓶颈）")])]),t._v(" "),d("tr",[d("td",[d("code",[t._v("--with-cpp_test_module")])]),t._v(" "),d("td",[t._v("启用 ngx_cpp_test_module 支持")])])])]),t._v(" "),d("blockquote",[d("p",[t._v("部分摘自："),d("a",{attrs:{href:"http://www.ttlsa.com/nginx/nginx-configure-descriptions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ttlsa.com/nginx/nginx-configure-descriptions/"),d("OutboundLink")],1)])])])},[],!1,null,null,null);_.default=e.exports}}]);