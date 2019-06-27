SET NAMES UTF8;
DROP DATABASE IF EXISTS xiaomi;
CREATE DATABASE CHARSET UTF8;
USE xiaomi;

-- 用户表
CREATE TABLE `xm_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(25) DEFAULT NULL,
  `upwd` int(32) DEFAULT NULL,
  `phone` varchar(32) DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL,
  `miid` varchar(32) DEFAULT NULL,
  `note` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `xm_user`
--

INSERT INTO `xm_user` (`uid`, `uname`, `upwd`, `phone`, `email`, `miid`, `note`) VALUES
(1, 'tom', 123456, '13222331122', '285943795@qq.com', '1212', 4055),
(2, 'jerry', 123456, '13222331121', '285943795@qq.com', '1212', 4055),
(3, 'll', 554545, '13222222222', '285943795@qq.com', '1212', 4055),
(5, 'admin', 123456, '13265564545', '285943795@qq.com', '1212', 4055);



-- 商品表(首页侧边栏)
CREATE TABLE `xm_img` (
  `mid` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `xm_img`
--

INSERT INTO `xm_img` (`mid`, `title`, `img`) VALUES
(1, '小米9 ', '../image/pms_1537324004.08544830!160.jpg'),
(2, '小米9 SE', '../image/mi9-320.png'),
(3, '小米MIX 3', '../image/pms_1524621350.77238418!220x220.jpg'),
(4, '小米MIX 3', '../image/pms_1524621350.77238418!220x220.jpg'),
(5, '小米8青春版', '../image/pms_1527685277.65255600!220x220.jpg'),
(6, '小米8屏幕指纹版', '../image/pms_1528719461.20891365!220x220.jpg'),
(7, '小米8', '../image/pms_1547020852.30751177!220x220.jpg'),
(8, '小米8 SE', '../image/pms_1547020852.30751177!220x220.jpg'),
(9, '小米MIX', '../image/pms_1547020852.30751177!220x220.jpg'),
(10, '小米MIX 3', '../image/pms_1524621350.77238418!220x220.jpg'),
(11, '小米6X', '../image/pms_1537324004.08544830!160.jpg'),
(12, '黑鲨游戏手机', '../image/pms_1528719461.20891365!220x220.jpg'),
(13, 'Redmi K20 Pro', '../image/pms_1537324004.08544830!160.jpg'),
(14, 'Redmi Note 7 Pro', '../image/mi9-320.png'),
(15, 'Redmi K20', '../image/pms_1524621350.77238418!220x220.jpg'),
(16, 'Redmi 7A', '../image/pms_1527685277.65255600!220x220.jpg'),
(17, 'Redmi Note 7', '../image/pms_1547020852.30751177!220x220.jpg'),
(18, '移动4G+专区', '../img-xm/pic_124.jpg'),
(19, '对比手机', '../img-xm/pic_125.jpg'),
(20, '米粉卡 日租卡', '../img-xm/pic_126.jpg'),
(21, '小米移动 电话卡', '../img-xm/pic_127.jpg'),
(22, '手机上门维修', '../img-xm/pic_128.png'),
(23, '云服务空间月卡', '../img-xm/pic_129.jpg'),
(24, '小米MIX 3', '../image/pms_1524621350.77238418!220x220.jpg');



-- 商品表(product动态加载)
CREATE TABLE `xm_product` (
  `pid` int(255) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `subtitle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(255) NOT NULL,
  `design` mediumtext CHARACTER SET utf8 NOT NULL,
  `autotrophy` varchar(255) CHARACTER SET utf8 NOT NULL,
  `img` mediumtext CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `xm_product`
--

INSERT INTO `xm_product` (`pid`, `title`, `subtitle`, `price`, `design`, `autotrophy`, `img`) VALUES
(1, '小米笔记本Pro 15.6\" ', '全新第八代英特尔酷睿处理器 ／ 升级金属双风扇 ／ 带宽提升80% ／ 15.6\"全高清大屏超窄边大视野', 6999, '<p>选择款式</p><span class=\"active-border\"> i7 16G 1050MAX-Q 256G</span><span> i7 16G 1050MAX-Q 256G</span>\r\n<span> i7 16G 1050MAX-Q 256G</span><span> i7 16G 1050MAX-Q 256G</span>', '小米自营', '../image/bijiben1.png,../image/bijiben2.png,../image/bijiben3.png,../image/bijiben4.png,../image/bijiben5.png'),
(2, '小米笔记本Pro 15.6\" GTX版', '全新第八代英特尔酷睿处理器 ／ 升级金属双风扇 ／ 带宽提升80% ／ 15.6\"全高清大屏超窄边大视野', 5499, '<p>选择款式</p><span class=\"active-border\"> i7 16G 1050MAX-Q 256G</span><span> i5 16G 1050MAX-Q 128G</span>\r\n<span> i7 64G 1050MAX-Q 512G</span>\r\n<span> i5 32G 1050MAX-Q 128G</span>', '小米自营', '../image/pms_1.jpg,../image/pms_2.jpg,../image/pms_3.jpg'),
(3, '小米笔记本Pro 14\" GTX版', '全新第八代英特尔酷睿处理器 ／ 升级金属双风扇 ／ 带宽提升80% ／ 15.6\"全高清大屏超窄边大视野', 5499, '<p>选择款式</p><span class=\"active-border\"> i7 16G 1050MAX-Q 256G</span><span> i5 16G 1050MAX-Q 128G</span>\r\n', '小米自营', '../image/pm1.jpg,../image/pm2.jpg,../image/pm3.jpg'),
(4, '小米笔记本Pro ', '全新第八代英特尔酷睿处理器 ／ 升级金属双风扇 ／ 带宽提升80% ／ 15.6\"全高清大屏超窄边大视野', 5599, '<p>选择款式</p><span class=\"active-border\"> i7 16G 1050MAX-Q 256G</span><span> i5 16G 1050MAX-Q 128G</span>\r\n', '小米自营', '../image/pms_1551.jpg,../image/pms_1552.jpg,../image/pms_1553.jpg,../image/pms_1554.jpg,../image/pms_1555.jpg'),
(5, '小米笔记本Pro zz', '全新第八代英特尔酷睿处理器 ／ 升级金属双风扇 ／ 带宽提升80% ／ 15.6\"全高清大屏超窄边大视野', 5499, '<p>选择款式</p><span class=\"active-border\"> i7 16G 1050MAX-Q 256G</span><span> i5 16G 1050MAX-Q 128G</span>\r\n<span> i7 64G 1050MAX-Q 512G</span>\r\n<span> i5 32G 1050MAX-Q 128G</span>', '小米自营', ''),
(7, '小米笔记本 14寸', '全新第八代英特尔酷睿处理器 ／ 升级金属双风扇 ／ 带宽提升80% ／ 15.6\"全高清大屏超窄边大视野', 4999, '<p>选择款式</p><span class=\"active-border\"> i7 16G 1050MAX-Q 256G</span><span> i5 16G 1050MAX-Q 128G</span>\r\n', '小米自营', ''),
(8, '小米笔记本Pro ', '全新第八代英特尔酷睿处理器 ／ 升级金属双风扇 ／ 带宽提升80% ／ 15.6\"全高清大屏超窄边大视野', 5599, '<p>选择款式</p><span class=\"active-border\"> i7 16G 1050MAX-Q 256G</span><span> i7 32G 1050MAX-Q 128G</span>\r\n<span> i7 4G 1050MAX-Q 128G</span>\r\n<span> i7 8G 1050MAX-Q 64G</span>\r\n', '小米自营', '');


--购物车表(加入购物车商品)

CREATE TABLE `xm_product_car` (
  `cid` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(11) NOT NULL,
  `good_reputation` varchar(255) CHARACTER SET utf8 NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL,
  `total` int(255) NOT NULL,
  `count` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `xm_product_car`
--

INSERT INTO `xm_product_car` (`cid`, `title`, `price`, `good_reputation`, `img`, `total`, `count`) VALUES
(1, '米家激光投影电视 4K', 9999, '90人好评', '../img-xm/pic_190.jpg', 1999, 1),
(2, '米家投影仪 青春版', 2999, '1210人好评', '../img-xm/pic_190.jpg', 1999, 1),
(3, '米家投影仪', 1999, '4.5万好评', '../img-xm/pic_190.jpg', 1999, 1),
(4, '小米电视4 75英寸', 8999, '587人好评', '../img-xm/pic_190.jpg', 8999, 1),
(5, '小米8青春版', 1999, '4.5万好评', '../image/pms_1537324004.08544830!220x220.jpg', 1999, 1),
(6, 'ZMI 投影仪支架转接盘\r\n', 69, '141人好评', '../img-xm/pic_382.jpg', 69, 1),
(7, '小米米家行车记录仪1S', 349, '4.5万好评', '../img-xm/pic_390.jpg', 349, 1),
(8, '小米双单元半入耳式耳机', 65, '1.2万好评', '../img-xm/pic_392.jpg', 65, 1),
(9, '米家飞行员太阳镜', 99, '470人好评', '../img-xm/pic_391.jpg', 99, 1),
(10, '米家空调伴侣2', 79, '4.5万好评', '../img-xm/pic_393.jpg', 79, 1),
(11, '小米8青春版', 1999, '4.5万好评', '../image/pms_1537324004.08544830!220x220.jpg', 1999, 1),
(12, '小米8青春版', 1999, '4.5万好评', '../image/pms_1537324004.08544830!220x220.jpg', 1999, 1),
(13, '小米8青春版', 1999, '4.5万好评', '../image/pms_1537324004.08544830!220x220.jpg', 1999, 1),
(14, '小米8青春版', 1999, '4.5万好评', '../image/pms_1537324004.08544830!220x220.jpg', 1999, 1);


--首页商品

CREATE TABLE `xm_product_index` (
  `id` int(255) NOT NULL,
  `pid` int(255) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(255) NOT NULL,
  `flag` varchar(255) CHARACTER SET utf8 NOT NULL,
  `show` mediumtext CHARACTER SET utf8 NOT NULL,
  `href` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `xm_product_index`
--

INSERT INTO `xm_product_index` (`id`, `pid`, `img`, `title`, `price`, `flag`, `show`, `href`) VALUES
(1, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 7999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=1'),
(2, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 7099, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=2'),
(3, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 5999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=3'),
(4, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 5999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=4'),
(5, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 9999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=5'),
(6, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 7999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=6'),
(7, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 2999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=7'),
(8, 1, '../image/xmad_15350951136177_QUuVm.png', '15.6\"笔记本 i5 4G MX110', 6999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', 'commodity.html?pid=8'),
(9, 2, '../img-xm/pic_191.jpg', '小米全面屏电视', 3249, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(10, 2, '../img-xm/pic_192.jpg', '小米全面屏电视', 3999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(12, 2, '../img-xm/pic_194.jpg', '小米全面屏', 3599, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(13, 2, '../img-xm/pic_195.jpg', '小米全面屏', 5599, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(14, 2, '../img-xm/pic_196.jpg', '小米全面屏', 5999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(15, 2, '../img-xm/pic_197.jpg', '小米全面屏 55', 5999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(16, 3, '../img-xm/pic_201.png', '小米音响', 5999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(17, 3, '../img-xm/pic_202.png', '小米音响', 599, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(18, 3, '../img-xm/pic_203.png', '小米音响', 599, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(19, 3, '../img-xm/pic_204.png', '小米音响', 1355, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(20, 3, '../img-xm/pic_205.png', '小米音响', 355, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(21, 3, '../img-xm/pic_206.png', '小米音响', 3557, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(22, 3, '../img-xm/pic_207.png', '小米扫地机器人', 199, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(23, 4, '../img-xm/pic_222.jpg', '小米电动车', 1999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(24, 4, '../img-xm/pic_223.jpg', '小米电动车', 1999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(25, 4, '../img-xm/pic_224.jpg', '小米电动车', 2999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(26, 4, '../img-xm/pic_226.jpg', '小米电动车', 999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(27, 4, '../img-xm/pic_225.jpg', '小米电动车', 999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(28, 4, '../img-xm/pic_224.jpg', '小米电动车', 2999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(29, 4, '../img-xm/pic_227.jpg', '小米电动车', 2999, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 4356774032 的评价</span>', ''),
(30, 2, '../img-xm/pic_195.jpg', '小米全面屏电视E65A', 3249, '新品', '<p>小小的 喜欢 希望可以用的久一点还是 不错的</p><span>来自于 2156774032 的评价</span>', '');

--
-- Indexes for dumped tables
--

--用户购物车表

CREATE TABLE `xm_shop_car` (
  `pid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `title` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `price` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `total` int(255) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `xm_shop_car`
--

INSERT INTO `xm_shop_car` (`pid`, `uid`, `title`, `price`, `count`, `total`, `img`) VALUES
(6, 1, 'ZMI 投影仪支架转接盘\r\n', 69, 5, 345, '../img-xm/pic_382.jpg'),
(7, 1, '小米米家行车记录仪1S', 349, 1, 349, '../img-xm/pic_390.jpg'),
(8, 2, '小米双单元半入耳式耳机', 65, 1, 65, '../img-xm/pic_392.jpg'),
(9, 1, '米家飞行员太阳镜', 99, 1, 99, '../img-xm/pic_391.jpg'),
(10, 1, '米家空调伴侣2', 79, 1, 79, '../img-xm/pic_393.jpg');

--
-- Indexes for dumped tables
--
--首页商品

CREATE TABLE `xm_x9` (
  `img` varchar(255) CHARACTER SET utf8 NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(32) NOT NULL,
  `flag` varchar(255) CHARACTER SET utf8 NOT NULL,
  `subtitle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `mid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `xm_x9`
--

INSERT INTO `xm_x9` (`img`, `title`, `price`, `flag`, `subtitle`, `mid`) VALUES
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 0),
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 1),
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 2),
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 3),
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 4),
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 5),
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 6),
('../image/pms_1550642182.7527088!160.jpg', '小米9 6G+128G', 2999, '新品', '骁龙855，索尼4800万超广角微距三摄', 7);

--
-- Indexes for dumped tables
--
