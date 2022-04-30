-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 18, 2022 at 10:06 AM
-- Server version: 10.4.18-MariaDB-cll-lve
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wvjknepv_jaiswalapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `userid` int(11) NOT NULL,
  `username` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(255) NOT NULL,
  `lastlogin` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`userid`, `username`, `email`, `password`, `lastlogin`) VALUES
(1, 'admin', 'admin@123.in', '827ccb0eea8a706c4c34a16891f84e7b', '2021-03-23 13:39:13');

-- --------------------------------------------------------

--
-- Table structure for table `caste`
--

CREATE TABLE `caste` (
  `id` int(11) NOT NULL,
  `religion_id` int(20) NOT NULL,
  `caste` varchar(200) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `caste`
--

INSERT INTO `caste` (`id`, `religion_id`, `caste`, `status`, `added_at`, `updated_at`) VALUES
(1, 5, 'kurmi', 1, '2021-03-30 06:06', '2021-03-30 06:20');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `city` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `country_id`, `state_id`, `city`, `status`, `added_at`, `updated_at`) VALUES
(2, 8, 1, 'raipur', 1, '2021-05-05 12:09', '2021-05-07 10:54'),
(3, 8, 1, 'bhilai', 1, '2021-05-05 12:11', ''),
(5, 8, 1, 'janjgir', 1, '2021-05-05 12:09', '2021-05-07 10:54'),
(6, 8, 1, 'bilaspur', 1, '2021-05-05 12:11', ''),
(7, 8, 1, 'durg', 1, '2021-05-05 12:09', '2021-05-07 10:54'),
(8, 8, 1, 'rajnandgav', 1, '2021-05-05 12:11', ''),
(9, 8, 1, 'bastar', 1, '2021-05-05 12:09', '2021-05-07 10:54'),
(10, 8, 1, 'raigjhar', 1, '2021-05-05 12:11', ''),
(11, 8, 1, 'korba', 1, '2022-01-09 01:15', ''),
(12, 8, 1, 'jaijaipur', 1, '2022-01-09 01:15', ''),
(13, 8, 1, 'bhatapara', 1, '2022-01-09 01:18', ''),
(14, 8, 1, 'Dongargarh', 1, '2022-01-09 01:18', '');

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `timestamp` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `data` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`id`, `ip_address`, `user_agent`, `timestamp`, `data`) VALUES
('069pk0nsm1epc23vr4ucarmm63auqme0', '49.35.236.63', '', 1646408981, '__ci_last_regenerate|i:1646408981;'),
('0fpas3k29dijej0uhlkntvsg7rd2duqb', '49.35.236.63', '', 1646410791, '__ci_last_regenerate|i:1646410791;'),
('19neg8bajkmll3e764234dl6ul2bgf6b', '27.62.234.151', '', 1646409483, '__ci_last_regenerate|i:1646409483;'),
('3er0279rj8udqem3t9a32fp38tru31tg', '157.34.233.89', '', 1647575693, '__ci_last_regenerate|i:1647575692;'),
('3pt6gvi6g1sboi46pd6c9tpsiehliglp', '27.62.234.151', '', 1646409788, '__ci_last_regenerate|i:1646409788;'),
('6bna8e8ec2otqrf9bd0o4jg2290nn5iv', '49.35.236.63', '', 1646408308, '__ci_last_regenerate|i:1646408308;'),
('6jo1t4qjrofquvie249de6r2qf15kc6q', '157.34.171.236', '', 1646469775, '__ci_last_regenerate|i:1646469775;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('6vobhtrfh2kf2eod7hutparq4r8smpcr', '27.62.234.151', '', 1646410848, '__ci_last_regenerate|i:1646410848;'),
('8jvmf2djr99bkvlhd5naa4u3ag2reqro', '49.35.236.63', '', 1646411097, '__ci_last_regenerate|i:1646411097;'),
('acmbc8ki0fpg0csu7d7lg3erhb9092fm', '27.62.234.151', '', 1646408555, '__ci_last_regenerate|i:1646408555;'),
('bt76rijgqnns56s4obi3jvfjb5kd1b9j', '49.35.232.209', '', 1647401161, '__ci_last_regenerate|i:1647401097;'),
('dg3f8s5knnn6skfpqamo08q0tdkbl6am', '49.35.232.209', '', 1647401097, '__ci_last_regenerate|i:1647401097;'),
('e15dcbp14hle9anfbqoq4c9t5lm33r5l', '157.34.171.236', '', 1646468663, '__ci_last_regenerate|i:1646468663;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('ea3uibmc6jqkfki376ennm6r41qo825s', '49.35.253.139', '', 1646818530, '__ci_last_regenerate|i:1646818529;'),
('egonhdv3r3fb75l63kog5nfqd9h0tomc', '157.34.171.236', '', 1646469392, '__ci_last_regenerate|i:1646469392;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('ekpfkmgn3e1v6tb4m1ljcljbsru2239k', '27.62.234.151', '', 1646410543, '__ci_last_regenerate|i:1646410543;'),
('eqgfslfdi805mduhvp72ep5vhp7kkim6', '49.35.236.63', '', 1646411137, '__ci_last_regenerate|i:1646411097;'),
('fnevhn92rngvgfe5rovtjhl7fmbqhfd1', '49.35.236.63', '', 1646408679, '__ci_last_regenerate|i:1646408679;'),
('fsplcu05113qt9ltiv99rmted9sv47gu', '27.62.234.151', '', 1646408555, '__ci_last_regenerate|i:1646408555;'),
('go4i52uifh88r419cmnblk4l805goblv', '49.35.236.63', '', 1646408308, '__ci_last_regenerate|i:1646408308;'),
('gpr34aul7ene6d6oco74ldks639qphim', '49.35.232.209', '', 1647401097, '__ci_last_regenerate|i:1647401097;'),
('h8usah4jquuj52oefbvufgj1s7ad6jdv', '157.34.171.236', '', 1646471567, '__ci_last_regenerate|i:1646471567;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('iaq5ontrj5qdhfbrsqnq46sudgh1meg0', '157.34.233.89', '', 1647575692, '__ci_last_regenerate|i:1647575692;'),
('iefff9rh8qgb4b96fo6bn6blps8dbrac', '49.35.236.63', '', 1646410463, '__ci_last_regenerate|i:1646410463;'),
('jj62i4rrlvjf3q9hl5rttoio9lr8ibd3', '157.34.171.236', '', 1646468161, '__ci_last_regenerate|i:1646468161;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('jro4kcvb2t16ecvomriepr55hu58blh4', '49.35.236.63', '', 1646409856, '__ci_last_regenerate|i:1646409856;'),
('kdqrmkh6guk8vk4fqml6pal0i5mrjgm4', '49.35.236.63', '', 1646408308, '__ci_last_regenerate|i:1646408308;'),
('l9n55vd1r8i4nnmjqppb53qfqgpb26hl', '157.34.233.89', '', 1647575717, '__ci_last_regenerate|i:1647575692;'),
('mj7agm23peh6gbnf32il9226nrlv8jp5', '157.34.171.236', '', 1646470182, '__ci_last_regenerate|i:1646470182;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('qsjb6sdsnai6biptnbi9psfrbb7tqsf5', '49.35.236.63', '', 1646409458, '__ci_last_regenerate|i:1646409458;'),
('r3foeqt1cm4ergg3og4c15thvd9repvt', '157.34.233.89', '', 1647575692, '__ci_last_regenerate|i:1647575692;'),
('rp5k5astlp4nop62oqpqfirp7hcnnjar', '27.62.234.151', '', 1646410241, '__ci_last_regenerate|i:1646410241;'),
('rv1uub32t8u4fu06sge06rbbkhcltfg6', '27.62.234.151', '', 1646409177, '__ci_last_regenerate|i:1646409177;'),
('rvefadr1hrgt1v9m1m0aj2ticsb4c0f7', '27.62.234.151', '', 1646408864, '__ci_last_regenerate|i:1646408864;'),
('s1744rt3bfoutbdsaau7lj251qqnc87e', '157.34.171.236', '', 1646469003, '__ci_last_regenerate|i:1646469003;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('si5ksbeaucbq80hrkiagjh7v06vf0059', '157.34.171.236', '', 1646471135, '__ci_last_regenerate|i:1646471135;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('t7ud0j8ahm2ag9kqmar91dn2rlmreji7', '27.62.234.151', '', 1646410994, '__ci_last_regenerate|i:1646410848;'),
('te3t2p4d688ae9ve9360u7rutlsg60k3', '157.34.171.236', '', 1646471570, '__ci_last_regenerate|i:1646471567;token|s:4:\"MQ==\";username|s:5:\"admin\";logintype|s:5:\"admin\";'),
('ui17o561vm670vn80p6ip2svpvkv7u11', '49.35.232.209', '', 1647401097, '__ci_last_regenerate|i:1647401097;');

-- --------------------------------------------------------

--
-- Table structure for table `cms`
--

CREATE TABLE `cms` (
  `txt_meta_title` mediumtext NOT NULL,
  `txt_site_address` mediumtext NOT NULL,
  `txt_contact_number` mediumtext NOT NULL,
  `txt_email_address` mediumtext NOT NULL,
  `url_linkedin` mediumtext NOT NULL,
  `url_google_plus` mediumtext NOT NULL,
  `url_facebook` mediumtext NOT NULL,
  `url_whatsapp` mediumtext NOT NULL,
  `url_instagram` mediumtext NOT NULL,
  `url_twitter` mediumtext NOT NULL,
  `url_youtube` mediumtext NOT NULL,
  `txt_aboutus_title` mediumtext NOT NULL,
  `txt_aboutus` mediumtext NOT NULL,
  `txt_terms_and_condition` mediumtext NOT NULL,
  `txt_privacy_policy_title` mediumtext NOT NULL,
  `txt_privacy_policy` mediumtext NOT NULL,
  `txt_faq_title` mediumtext NOT NULL,
  `txt_faq` mediumtext NOT NULL,
  `how_it_works` mediumtext NOT NULL,
  `user_agreement` mediumtext NOT NULL,
  `cookies_policy` mediumtext NOT NULL,
  `txt_site_logo` mediumtext NOT NULL,
  `txt_Favicon` mediumtext NOT NULL,
  `added_at` varchar(30) NOT NULL,
  `updated_at` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cms`
--

INSERT INTO `cms` (`txt_meta_title`, `txt_site_address`, `txt_contact_number`, `txt_email_address`, `url_linkedin`, `url_google_plus`, `url_facebook`, `url_whatsapp`, `url_instagram`, `url_twitter`, `url_youtube`, `txt_aboutus_title`, `txt_aboutus`, `txt_terms_and_condition`, `txt_privacy_policy_title`, `txt_privacy_policy`, `txt_faq_title`, `txt_faq`, `how_it_works`, `user_agreement`, `cookies_policy`, `txt_site_logo`, `txt_Favicon`, `added_at`, `updated_at`) VALUES
('jaiswal sarverigya', 'jaiswalsarverigya.com', '87548811155', 'info@jaiswal.com', '', '', 'http@jaiswalfff', 'http@jaiswalfff', 'http@jaiswalfff', 'http@jaiswalfff', 'http@jaiswalfff', '																																																																																																												<p>fffffff</p>\r\n', '																																																																																																												<p>fdggssdfg</p>\r\n', '																																																																																																												<p>Terms and condition</p>\r\n', '																																																																																																												<p>Terms and condition</p>\r\n', '																																																																																																												<p>Privacy policy Description</p>\r\n', '																																																																																																												<p>FAQ Title</p>\r\n', '																																																																																																												<p>FAQ Description</p>\r\n', '																																																																																																												<p>How does it works ?</p>\r\n', '																																																																																																												<p>User Agreement</p>\r\n', '																																																																																				<p>Cookies Pogglicy</p>\r\n', 'images/cms//2022/jan/09/cms_logo_0acb84f0851dbb735b5343828027dc47.png', 'images/cms//2022/jan/09/cms_favicon_ce250a4001db2ed940800611c9a10353.png', '2022-01-09 01:48', '');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `country`, `status`, `added_at`, `updated_at`) VALUES
(8, 'India', 1, '2021-03-28 10:37', '2021-03-28 11:32');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(20) NOT NULL,
  `txt_title` mediumtext NOT NULL,
  `txt_meta_title` mediumtext NOT NULL,
  `txt_aboutus` mediumtext NOT NULL,
  `txt_link` mediumtext NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `txt_title`, `txt_meta_title`, `txt_aboutus`, `txt_link`, `status`, `added_at`, `updated_at`) VALUES
(2, 'vbcvscvvb', 'cnvbbvcbvcbdsc', '<p><strong><em>cnvbcgvc ncbv dcvdvcv vbchdvbdbvdbfvjmdnfbvdfbvdf vndfbvndbvn</em></strong></p>\r\n', 'dfwseffg', 1, '2021-05-31 06:07', '');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `txt_meta_title` mediumtext NOT NULL,
  `txt_aboutus` mediumtext NOT NULL,
  `txt_Favicon` mediumtext NOT NULL,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `txt_meta_title`, `txt_aboutus`, `txt_Favicon`, `added_at`, `updated_at`) VALUES
(1, 'mhfvbhjfvdf', '<p>nbfvjhzfjkvbkjfvbd,mfvdv,.fmbv,fx fdjnfdu jfinvjfkdnvfkjdbnv</p>\r\n', 'images/notification//2021/may/29/notification_favicon_9d3da58b72705e27394828c484f31e79.jpg', '2021-05-29 04:38', '');

-- --------------------------------------------------------

--
-- Table structure for table `pincode`
--

CREATE TABLE `pincode` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `pincode` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `relation`
--

CREATE TABLE `relation` (
  `id` int(11) NOT NULL,
  `relation` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `relation`
--

INSERT INTO `relation` (`id`, `relation`, `status`, `added_at`, `updated_at`) VALUES
(3, 'father', 1, '2021-04-13 03:19', ''),
(4, 'mother', 1, '2021-04-13 03:19', ''),
(5, 'brother', 1, '2021-04-13 03:20', '2021-04-13 03:20');

-- --------------------------------------------------------

--
-- Table structure for table `religion`
--

CREATE TABLE `religion` (
  `id` int(11) NOT NULL,
  `religion` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `religion`
--

INSERT INTO `religion` (`id`, `religion`, `status`, `added_at`, `updated_at`) VALUES
(5, 'Hindu', 1, '2021-03-27 09:31', ''),
(6, 'muslim', 1, '2021-03-27 09:31', ''),
(7, 'sikh', 1, '2021-03-27 09:31', ''),
(8, 'Christan', 1, '2021-03-27 09:31', '2021-03-27 09:31'),
(9, 'parsi', 1, '2021-03-27 10:35', '');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `id` int(11) NOT NULL,
  `country_id` int(20) NOT NULL,
  `state` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `country_id`, `state`, `status`, `added_at`, `updated_at`) VALUES
(1, 8, 'chhattisgarh', 1, '2021-03-31 03:37', '2021-03-31 03:40'),
(3, 8, 'tamilnadu', 1, '2021-03-31 06:40', ''),
(4, 8, 'bihar', 1, '2021-09-13 08:59', ''),
(5, 8, 'odisa', 1, '2021-09-13 08:59', '');

-- --------------------------------------------------------

--
-- Table structure for table `surname`
--

CREATE TABLE `surname` (
  `id` int(11) NOT NULL,
  `religion_id` int(11) NOT NULL,
  `caste_id` int(11) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `status` int(20) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `surname`
--

INSERT INTO `surname` (`id`, `religion_id`, `caste_id`, `surname`, `status`, `added_at`, `updated_at`) VALUES
(1, 5, 1, 'gotra1', 1, '2021-03-30 07:34', '2021-03-30 07:49'),
(4, 5, 1, 'gotra2', 1, '2021-03-30 07:34', '2021-03-30 07:49'),
(5, 5, 1, 'gotra3', 1, '2021-03-30 07:34', '2021-03-30 07:49'),
(6, 5, 1, 'gotra4', 1, '2021-03-30 07:34', '2021-03-30 07:49');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_allchats`
--

CREATE TABLE `tbl_allchats` (
  `id` int(200) NOT NULL,
  `chatid` text NOT NULL,
  `sender` varchar(200) NOT NULL,
  `reciver` varchar(200) NOT NULL,
  `message` int(11) NOT NULL,
  `sender_seen` int(20) NOT NULL DEFAULT 0,
  `reciver_seen` int(20) NOT NULL DEFAULT 0,
  `sendedat` varchar(200) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_chat`
--

CREATE TABLE `tbl_chat` (
  `id` int(250) NOT NULL,
  `id_one` int(50) NOT NULL,
  `id_two` int(50) NOT NULL,
  `chatid` text NOT NULL,
  `added_at` varchar(100) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_chat`
--

INSERT INTO `tbl_chat` (`id`, `id_one`, `id_two`, `chatid`, `added_at`) VALUES
(1, 1, 2, 'chat12', '2021-12-25 18:25:31'),
(2, 1, 4, 'chat14', '2021-12-25 18:26:48'),
(3, 1, 6, 'chat16', '2021-12-25 18:26:59'),
(4, 1, 3, 'chat13', '2021-12-25 18:29:56'),
(5, 1, 5, 'chat15', '2022-01-02 21:35:30'),
(6, 6, 5, 'chat65', '2022-01-03 15:19:31');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `comment_postid` int(200) NOT NULL,
  `comment_userid` int(100) NOT NULL,
  `comment_text` text NOT NULL,
  `comment_date` varchar(150) NOT NULL,
  `comment_time` varchar(50) NOT NULL,
  `comment_likedbyuser` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_comments`
--

INSERT INTO `tbl_comments` (`comment_postid`, `comment_userid`, `comment_text`, `comment_date`, `comment_time`, `comment_likedbyuser`) VALUES
(35, 1, 'Test', '2022-01-04', '11:54', ''),
(26, 1, 'Wooohhh', '2022-01-04', '11:55', ''),
(35, 1, 'Hey', '2022-01-05', '12:00', ''),
(34, 1, 'Wooowwww', '2022-01-05', '12:00', ''),
(33, 1, '????????', '2022-01-05', '12:02', ''),
(35, 1, 'Loading', '2022-01-05', '12:07', ''),
(35, 1, 'Yoooo', '2022-01-05', '12:15', ''),
(33, 5, 'Road', '2022-01-15', '10:09', ''),
(39, 5, 'Hi', '2022-02-07', '09:16', ''),
(41, 5, 'Love❤????', '2022-02-07', '09:50', ''),
(40, 6, 'Nice pic bhaiya', '2022-02-13', '10:22', ''),
(36, 6, 'Cuite', '2022-02-13', '10:22', ''),
(41, 8, 'Yeee', '2022-02-13', '11:15', ''),
(43, 5, '????????', '2022-02-23', '11:39', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_detailsall`
--

CREATE TABLE `tbl_detailsall` (
  `id` int(50) NOT NULL,
  `title` text NOT NULL,
  `value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_detailsall`
--

INSERT INTO `tbl_detailsall` (`id`, `title`, `value`) VALUES
(1, 'playstorelink', 'http://niylo.com/');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_device_status`
--

CREATE TABLE `tbl_device_status` (
  `user_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `device_name` text NOT NULL,
  `time` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_events`
--

CREATE TABLE `tbl_events` (
  `event_id` int(50) NOT NULL,
  `event_image` text NOT NULL,
  `event_title` varchar(100) NOT NULL,
  `event_price` int(50) NOT NULL DEFAULT 0,
  `event_state` varchar(50) NOT NULL,
  `event_city` varchar(50) NOT NULL,
  `event_date` varchar(50) NOT NULL,
  `event_time` varchar(50) NOT NULL,
  `event_day` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_events`
--

INSERT INTO `tbl_events` (`event_id`, `event_image`, `event_title`, `event_price`, `event_state`, `event_city`, `event_date`, `event_time`, `event_day`) VALUES
(1, 'https://wallpaperaccess.com/full/4524572.jpg', 'Kabaddi', 100, '1', '2', '10/11/2021', '10:30', 'Tuesday'),
(2, 'https://www.kreedon.com/wp-content/uploads/2019/04/s1-kho-kho.jpg', 'KhoKho', 100, '1', '3', '25/11/2025', '11:45', 'Tuesday'),
(3, 'https://www.youngisthan.in/wp-content/uploads/2018/02/gully-cricket.jpg', 'Gully Cricket', 500, '1', '2', '26/55/2025', '11:45', 'Tuesday'),
(4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKCtHR4uwVloK8l3MA8zOy-7lthj2E9Qq8mz-0XLrjgepmLCq_H4h4_54FFutmAZOnMw&usqp=CAU', 'Hockey', 500, '1', '2', '24/88/7854', '11:45', 'Tuesday'),
(5, 'https://www.youngisthan.in/wp-content/uploads/2018/02/gully-cricket.jpg', 'Gully Cricket', 500, '1', '2', '17/12/2021', '11:45', 'Tuesday');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_Family`
--

CREATE TABLE `tbl_Family` (
  `familyreq_id` int(50) NOT NULL,
  `userid` int(100) NOT NULL,
  `firendid` int(100) NOT NULL,
  `relation` varchar(100) NOT NULL,
  `sended_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_Family`
--

INSERT INTO `tbl_Family` (`familyreq_id`, `userid`, `firendid`, `relation`, `sended_at`) VALUES
(10, 2, 3, 'HUSBAND', '2021-11-20 12:08'),
(11, 1, 3, 'OTHER', '2021-11-20 12:51'),
(12, 1, 5, 'OTHER', '2021-11-23 11:22'),
(13, 5, 6, 'BROTHER', '2022-01-03 12:05');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_Familyreq`
--

CREATE TABLE `tbl_Familyreq` (
  `familyreq_id` int(50) NOT NULL,
  `userid` int(100) NOT NULL,
  `firendid` int(100) NOT NULL,
  `relation` varchar(100) NOT NULL,
  `sended_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_Familyreq`
--

INSERT INTO `tbl_Familyreq` (`familyreq_id`, `userid`, `firendid`, `relation`, `sended_at`) VALUES
(23, 1, 2, 'OTHER', '2022-02-18 07:54');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_Friend`
--

CREATE TABLE `tbl_Friend` (
  `id` int(50) NOT NULL,
  `userid` int(50) NOT NULL,
  `firendid` int(50) NOT NULL,
  `sended_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_Friend`
--

INSERT INTO `tbl_Friend` (`id`, `userid`, `firendid`, `sended_at`) VALUES
(12, 2, 1, '2021-11-20 12:47'),
(13, 1, 5, '2021-11-23 11:05'),
(14, 5, 6, '2022-01-03 12:05'),
(15, 6, 1, '2022-01-03 07:02');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_Friendreq`
--

CREATE TABLE `tbl_Friendreq` (
  `id` int(50) NOT NULL,
  `userid` int(50) NOT NULL,
  `firendid` int(50) NOT NULL,
  `sended_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gameintrest`
--

CREATE TABLE `tbl_gameintrest` (
  `id` int(250) NOT NULL,
  `gameid` varchar(250) NOT NULL,
  `userid` varchar(250) NOT NULL,
  `added_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_gameintrest`
--

INSERT INTO `tbl_gameintrest` (`id`, `gameid`, `userid`, `added_at`) VALUES
(1, '3', '2', '2021-12-19 19:48:56'),
(2, '2', '2', '2021-12-19 19:48:58'),
(3, '3', '1', '2021-12-19 19:50:48'),
(4, '2', '6', '2022-01-03 15:26:00'),
(5, '2', '5', '2022-01-04 10:29:22'),
(6, '4', '5', '2022-01-06 10:14:52');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_like_post`
--

CREATE TABLE `tbl_like_post` (
  `userid` int(100) NOT NULL,
  `postid` int(100) NOT NULL,
  `liked_at` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_like_post`
--

INSERT INTO `tbl_like_post` (`userid`, `postid`, `liked_at`) VALUES
(8, 40, '2022-02-13 11:38'),
(8, 41, '2022-02-13 11:52'),
(8, 43, '2022-02-18 11:54'),
(8, 42, '2022-02-18 11:54'),
(1, 43, '2022-02-18 12:06'),
(1, 36, '2022-02-18 01:21'),
(1, 48, '2022-02-18 07:38'),
(1, 35, '2022-02-18 07:58'),
(5, 43, '2022-02-19 12:34'),
(1, 50, '2022-02-19 01:09'),
(1, 41, '2022-02-19 01:14'),
(1, 40, '2022-02-19 01:14'),
(1, 39, '2022-02-19 01:14'),
(5, 50, '2022-02-19 04:26'),
(6, 38, '2022-03-04 09:14'),
(5, 54, '2022-03-04 09:21'),
(5, 41, '2022-03-16 08:55'),
(5, 39, '2022-03-16 08:56');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_MatrimonialProfile`
--

CREATE TABLE `tbl_MatrimonialProfile` (
  `id` varchar(50) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `Weight` varchar(50) NOT NULL,
  `about` text NOT NULL,
  `gotra` varchar(50) NOT NULL,
  `height` varchar(52) NOT NULL,
  `pob` varchar(50) NOT NULL,
  `rashi` varchar(50) NOT NULL,
  `skinclr` varchar(50) NOT NULL,
  `tob` varchar(100) NOT NULL,
  `time_at` text DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_MatrimonialProfile`
--

INSERT INTO `tbl_MatrimonialProfile` (`id`, `img1`, `img2`, `img3`, `Weight`, `about`, `gotra`, `height`, `pob`, `rashi`, `skinclr`, `tob`, `time_at`) VALUES
('8962200006', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F8962200006%2F1641203869108?alt=media&token=8086400f-85fb-43ea-85e1-98af382e5dc6', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F8962200006%2F1641203943606?alt=media&token=73ec92ba-20d0-41e5-9bda-031354885b80', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F8962200006%2F1641203953243?alt=media&token=18dd89a7-93ec-48fc-9eb8-416596344346', '89', 'Business man', 'gotra3', '5&#39;10&#34;', 'Bhilai', 'Virgo', 'Medium', '2:45am', '2022-01-03 15:29:12'),
('9827159130', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F9827159130%2F1641272202674?alt=media&token=a3729db8-3cd8-406c-8d57-2bfea290730d', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F9827159130%2F1641272215128?alt=media&token=3a770cc6-483f-46a6-b09f-7fc8b83473cf', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F9827159130%2F1641272225357?alt=media&token=0ecbb2d6-940d-46e6-93e2-02e2d9ed5a23', '70', 'Anything written ', 'gotra1', '5&#39; 8&#34;', 'BHILAI ', 'Aries', 'Medium', '29.09.1979', '2022-01-03 23:19:59'),
('8226069642', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F8226069642%2F1641413781229?alt=media&token=281bc879-a30f-45d2-a734-391bbd930496', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F8226069642%2F1645213290848?alt=media&token=f4f3397c-7730-40be-a8a7-cef28a0d1f23', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/metrimonialProfile%2F8226069642%2F1645213306056?alt=media&token=69b54dc6-fb6e-4c7b-bcc9-ef4cc1d3999b', '70', 'I am a software developer ', 'gotra1', '5.55', 'Raipur', 'Taurus', 'Fair', '23:09 Am', '2022-01-06 01:47:08');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_notification`
--

CREATE TABLE `tbl_notification` (
  `noti_userid` int(50) NOT NULL,
  `noti_postid` int(50) NOT NULL,
  `noti_status` varchar(100) NOT NULL,
  `noti_time` varchar(50) NOT NULL,
  `added_at` varchar(100) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_notification`
--

INSERT INTO `tbl_notification` (`noti_userid`, `noti_postid`, `noti_status`, `noti_time`, `added_at`) VALUES
(5, 31, 'Liked Your Post', '08:56', '2022-01-08 08:56:13'),
(5, 35, 'Liked Your Post', '10:58', '2022-01-09 10:58:31'),
(5, 37, 'Liked Your Post', '11:16', '2022-01-09 11:16:00'),
(5, 36, 'Liked Your Post', '11:16', '2022-01-09 11:16:06'),
(6, 36, 'Liked Your Post', '12:17', '2022-01-12 12:17:36'),
(5, 33, 'Liked Your Post', '10:09', '2022-01-15 10:09:39'),
(1, 38, 'Liked Your Post', '07:19', '2022-01-16 19:19:37'),
(6, 41, 'Liked Your Post', '10:21', '2022-02-13 10:21:40'),
(8, 35, 'Liked Your Post', '11:08', '2022-02-13 11:08:56'),
(8, 28, 'Liked Your Post', '11:09', '2022-02-13 11:09:17'),
(8, 40, 'Liked Your Post', '11:38', '2022-02-13 11:38:27'),
(8, 43, 'Liked Your Post', '11:54', '2022-02-18 11:54:12'),
(8, 42, 'Liked Your Post', '11:54', '2022-02-18 11:54:15'),
(1, 43, 'Liked Your Post', '12:06', '2022-02-18 12:06:38'),
(1, 48, 'Liked Your Post', '07:38', '2022-02-18 19:38:26'),
(1, 35, 'Liked Your Post', '07:58', '2022-02-18 19:58:20'),
(5, 43, 'Liked Your Post', '12:34', '2022-02-19 00:34:11'),
(1, 50, 'Liked Your Post', '01:09', '2022-02-19 01:09:00'),
(1, 41, 'Liked Your Post', '01:14', '2022-02-19 01:14:02'),
(5, 50, 'Liked Your Post', '04:26', '2022-02-19 16:26:27'),
(6, 38, 'Liked Your Post', '09:14', '2022-03-04 21:14:05'),
(5, 54, 'Liked Your Post', '09:21', '2022-03-04 21:21:00'),
(5, 39, 'Liked Your Post', '08:56', '2022-03-16 08:56:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_otp`
--

CREATE TABLE `tbl_otp` (
  `id` int(100) NOT NULL,
  `phoneno` varchar(50) NOT NULL,
  `opt` int(50) NOT NULL,
  `sended_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_otp`
--

INSERT INTO `tbl_otp` (`id`, `phoneno`, `opt`, `sended_at`) VALUES
(3, '+918770840080', 129574, '2021-10-27 10:16'),
(4, '+918226069642', 134342, '2021-10-27 10:15'),
(5, '8226069642', 220722, '2022-02-19 01:38'),
(6, '8770172940', 534909, '2021-10-30 12:10'),
(7, '8770840080', 560026, '2022-02-19 12:32'),
(8, '7974060670', 811970, '2022-01-02 08:41'),
(9, '9827159130', 152207, '2022-02-19 12:35'),
(10, '8226069643', 581094, '2021-12-12 02:12'),
(11, '8962200006', 907025, '2022-03-04 09:51'),
(12, '8929546524', 152640, '2021-11-19 11:34'),
(13, '8222606964', 925415, '2021-12-22 10:17'),
(14, '9425246699', 336016, '2022-01-03 10:40'),
(15, '9630086907', 347825, '2022-01-03 11:19'),
(16, '94252 4669', 779761, '2022-01-03 11:27'),
(17, '7338934403', 720256, '2022-02-13 11:08'),
(18, '7389344035', 213604, '2022-01-23 12:23'),
(19, '8827159130', 761250, '2022-02-15 12:59'),
(20, 'Hshshshshs', 967409, '2022-02-19 01:28'),
(21, 'Jejejejehe', 966260, '2022-02-19 01:28'),
(22, 'Usuauahaaa', 949423, '2022-02-19 01:34');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_post`
--

CREATE TABLE `tbl_post` (
  `title` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posturl` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posted_at` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` int(200) NOT NULL,
  `user_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_post`
--

INSERT INTO `tbl_post` (`title`, `type`, `posturl`, `time`, `posted_at`, `post_id`, `user_id`) VALUES
('🤣😂😂😂😂😂😂', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F16348409233327cf71fe6-5cad-4dc2-9425-812d16bd536f?alt=media&token=da1fe4b5-852f-47d1-aaa0-5847c7f2bd32', '11:57', '2021-10-21 ', 1, 2),
('मरना भी मुश्किल है जिस शख्श के वगैर, उस शख्स ने ख्वाबों में भी आना छोड़ दिया।????', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1634924470654715f3e60-496d-4890-9ded-d45acd00657a?alt=media&token=af7d30e7-1d83-4984-a7fd-3d9fe7cdd498', '11:09', '2021-10-22 ', 2, 1),
('वो लड़ कर भी सो जाए तोह उसका माथा चूम लू उस से झगड़ा एक तरफ और मोह्हबत एक तरफ!!????', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1634924781277f0fc442a-b382-44ea-9892-4794cca040a5?alt=media&token=78996601-0eaa-45e0-80c7-7aab18fd634e', '11:14', '2021-10-22 ', 3, 1),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1634926002807512a2c63-2f8a-479b-be5c-d7a5b06e9e36?alt=media&token=6cc990ca-34f3-41d2-855a-c4fc0f018d65', '11:35', '2021-10-22 ', 4, 3),
('tis iosshdkjbddk', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F16350645784630d3bbe48-903e-405a-b617-96c454a39062?alt=media&token=1ac09d9d-1d6e-4ac3-ae23-2d6c0a1547fa', '02:04', '2021-10-24 ', 5, 2),
('bnfghnfgnfnfnfgn', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635064734247bf20e334-5146-475a-ab57-bbe5563e9889?alt=media&token=5ed92431-aff1-4d15-a090-ac1e6926a670', '02:07', '2021-10-24 02:07', 6, 2),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F16350650790151c7e77fa-8935-46d5-8ea7-f70b20b81cfb?alt=media&token=4aebf65b-3485-4e78-97a3-9595b0841b5f', '02:14', '2021-10-24 ', 7, 2),
('Ttesttt🙌🤦‍♀️🤦‍♂️🤦‍♂️🤦‍♂️', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635067051288?alt=media&token=4a52084a-cc78-43c1-8de0-5d5983ff751b', '02:46', '2021-10-24 ', 8, 3),
('Test', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635067100543?alt=media&token=2a41cd57-2b03-4659-a1f9-662e0e8edd2c', '02:46', '2021-10-24 ', 9, 1),
('This is testing api😎😎', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635072735812?alt=media&token=6a76abfe-8616-4d85-a3bd-5cc9be934c6e', '04:20', '2021-10-24 ', 11, 2),
('thin is another', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635256851337?alt=media&token=50e40210-b998-4d7e-8bd6-17abbe4507d8', '07:29', '2021-10-26 ', 12, 2),
('everythig is perfect🤷‍♀️🤷‍♀️', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635420857274?alt=media&token=33835e49-ed12-43e8-980e-2e470fb18f73', '05:02', '2021-10-28 ', 13, 3),
('this is vaibhav pandey ', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635453048259?alt=media&token=522c3fda-80f0-4bde-8a4a-a0d9afa79052', '01:59', '2021-10-29 ', 14, 3),
('This js Vaibhav pandey❤️❤️❤️', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635453002929?alt=media&token=67395aaf-3437-454a-b62a-9383c53df4fc', '02:00', '2021-10-29 ', 15, 2),
('Test pick', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635536663267?alt=media&token=8185356b-04e8-49ff-a65b-853baddf287e', '01:12', '2021-10-30', 16, 1),
('Error is the page please help for update????????&#10;', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635537198484?alt=media&token=15bc83f2-c664-42ff-a31d-d629310760e0', '01:21', '2021-10-30', 17, 1),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635602117105?alt=media&token=55541c0e-65bf-42f8-871e-656a369e6a0a', '07:24', '2021-10-30', 19, 5),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635602376397?alt=media&token=a263883d-4279-4e0f-a0c4-87d3662cb958', '07:28', '2021-10-30', 20, 5),
('TESTING FILES 031', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1635789294332?alt=media&token=73316b6b-59df-4b43-80cf-b1392c01997e', '11:23', '2021-11-01', 21, 1),
('tessttt 20-11-2021', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1637347408885?alt=media&token=58b7cee1-284f-4c73-a3da-27533ade08ec', '12:12', '2021-11-20', 22, 2),
('Test22-10-2021❤️❤️', 'image', 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', '10:34', '2021-11-20', 23, 1),
('Hedy223666', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1637686811406?alt=media&token=d8398a69-7993-4495-92b2-94ce9bfbeea5', '10:28', '2021-11-23', 24, 1),
('Testtt&#10;', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1640954581370?alt=media&token=b4827f10-b8e8-4f3d-b0b4-5d12c85e1612', '06:13', '2021-12-31', 25, 1),
('Neww post&#10;', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1640954894973?alt=media&token=bc41561a-5629-474e-8f51-842c816fe171', '06:18', '2021-12-31', 26, 1),
('Swift', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1640955228993?alt=media&token=0070a749-f648-48ab-bc4a-d7320e9f7b26', '06:23', '2021-12-31', 27, 1),
('Newww&#10;', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1640955828579?alt=media&token=791eb4a3-637a-4b11-9d47-b1124ee02ab2', '06:35', '2021-12-31', 28, 1),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641183508814?alt=media&token=6f5b6426-39fe-42ca-a8f3-227a2ce2845e', '09:48', '2022-01-03', 29, 6),
('', 'video', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641183631124?alt=media&token=1a1ad39b-db81-47c9-a51a-923bfdc32865', '09:50', '2022-01-03', 30, 6),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641228671821?alt=media&token=e9516b4b-b82d-44f4-884f-cba75ace0ee0', '10:21', '2022-01-03', 31, 5),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641229204509?alt=media&token=e2466e77-eb9d-4b7c-8fd5-379e3651cf0a', '10:30', '2022-01-03', 32, 5),
('Done', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641270623480?alt=media&token=4ee6ccee-cdd1-42d3-b74a-95e27c80a28f', '10:00', '2022-01-04', 33, 5),
('Test02', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641318980946?alt=media&token=ff858838-3091-4003-a57e-26c467b13c9e', '11:26', '2022-01-04', 35, 1),
('Sunday funday ????', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641706086665?alt=media&token=3b9929a8-d796-4339-9c3b-7aad86e4beb6', '10:58', '2022-01-09', 36, 5),
('????????????❤', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641706621579?alt=media&token=106cb42e-a039-4fb2-8e61-c9b1eeb5b640', '11:06', '2022-01-09', 37, 5),
('', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641970051279?alt=media&token=91b43d6d-0813-4409-abc5-983bb2d81ebe', '12:17', '2022-01-12', 38, 6),
('BNI', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1642222096933?alt=media&token=b69554d5-ea61-4c47-9075-4aea945cae74', '10:19', '2022-01-15', 39, 5),
('🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1644249244108?alt=media&token=82bc4573-cf9e-4d52-b619-75a57efefea3', '09:23', '2022-02-07', 40, 5),
('✨😃😃😃😃😃', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1644250264315?alt=media&token=d8a69542-cc5c-4eec-9dfe-ecdbd4e8d9d1', '09:40', '2022-02-07', 41, 6),
('Testing', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1645165352521?alt=media&token=46737219-b339-4253-bb62-cf6cd94a3ef8', '11:51', '18-02-22', 42, 8),
('Test02', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1645165443608?alt=media&token=814f5f34-be92-4a36-8fd5-a29cbfd4d83a', '11:52', '1818-0202-22222222', 43, 8),
('😜😜😜😜😜', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1645211334412?alt=media&token=29843f70-9146-4c06-b0dc-8cccf68d4895', '12:37', '19-02-22', 50, 5),
('🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1645212566069?alt=media&token=782ea96b-f06e-4224-986f-373be414e15d', '12:58', '19-02-22', 52, 1),
('Check out ????????', 'image', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1646408861108?alt=media&token=56d33715-1c18-432b-a26b-db12d000aaf8', '09:16', '04-03-22', 53, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ppoint`
--

CREATE TABLE `tbl_ppoint` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `point` int(11) NOT NULL DEFAULT 0,
  `auat` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_ppoint`
--

INSERT INTO `tbl_ppoint` (`id`, `userid`, `point`, `auat`) VALUES
(1, 1, 270, 2147483647),
(2, 5, 113, 2147483647),
(3, 6, 32, 2147483647),
(4, 7, 5, 2147483647),
(5, 8, 69, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reportpost`
--

CREATE TABLE `tbl_reportpost` (
  `id` int(255) NOT NULL,
  `postid` int(200) NOT NULL,
  `userid` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_reportpost`
--

INSERT INTO `tbl_reportpost` (`id`, `postid`, `userid`) VALUES
(3, 39, '5'),
(4, 34, '1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shopcategory`
--

CREATE TABLE `tbl_shopcategory` (
  `cat_id` int(100) NOT NULL,
  `eng_shop_category` varchar(250) NOT NULL,
  `hi_shop_category` varchar(250) NOT NULL,
  `added_at` varchar(250) DEFAULT NULL,
  `updated_at` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_shopcategory`
--

INSERT INTO `tbl_shopcategory` (`cat_id`, `eng_shop_category`, `hi_shop_category`, `added_at`, `updated_at`) VALUES
(1, 'department store', 'डिपार्टमेंट स्टोर', NULL, NULL),
(2, 'supermarket', 'सुपरमार्केट', NULL, NULL),
(3, 'grocer', 'बनिया', NULL, NULL),
(4, 'greengrocer', 'फल बेचनेवाला', NULL, NULL),
(5, 'butcher', 'कसाई', NULL, NULL),
(6, 'baker', 'बेकर, नानबाई', NULL, NULL),
(7, 'fishmonger', 'मछली बनिया', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shopprofile`
--

CREATE TABLE `tbl_shopprofile` (
  `shopid` int(250) NOT NULL,
  `id` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `whatsappno` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  `category` varchar(250) COLLATE utf8mb4_bin NOT NULL,
  `city` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `friopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `friopentime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `frishopopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `monclosetime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `monopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `monopentime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `satopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `setshopclose` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `setshopopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `shopdesc` text COLLATE utf8mb4_bin NOT NULL,
  `shopfblink` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `shopinstalink` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `shoplocation` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `shopname` text COLLATE utf8mb4_bin NOT NULL,
  `state` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `sunopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `sunshopclose` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `sunshopopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `thusclosetime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `thusopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `thusopentime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `tueclosetime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `tueopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `tueopentime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `webopen` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `webopentime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `wedclosetime` varchar(150) COLLATE utf8mb4_bin NOT NULL,
  `shopimg` text COLLATE utf8mb4_bin NOT NULL,
  `added_at` text COLLATE utf8mb4_bin NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `tbl_shopprofile`
--

INSERT INTO `tbl_shopprofile` (`shopid`, `id`, `whatsappno`, `category`, `city`, `friopen`, `friopentime`, `frishopopen`, `monclosetime`, `monopen`, `monopentime`, `satopen`, `setshopclose`, `setshopopen`, `shopdesc`, `shopfblink`, `shopinstalink`, `shoplocation`, `shopname`, `state`, `sunopen`, `sunshopclose`, `sunshopopen`, `thusclosetime`, `thusopen`, `thusopentime`, `tueclosetime`, `tueopen`, `tueopentime`, `webopen`, `webopentime`, `wedclosetime`, `shopimg`, `added_at`) VALUES
(4, '8226069642', NULL, '1', '3', '1', '10:00 AM', '05:00PM', '05:00 PM', '1', '10:00 AM', '0', '05:00 PM', '10:00 AM', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Fb.link', 'Instagram.link', 'Md-rode, Raipur, Chhattisgarh ', 'THE FOOD FACTOR IN', '1', '0', '0', '0', '05:00 PM', '1', '10:00 PM', '05:00 PM', '1', '10:00 AM', '1', '10:00 AM', '05:00 PM', 'data:image/jpeg;base64,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', '2022-02-06 20:19:45'),
(5, '8226069642', NULL, '1', '3', '1', '10:00 AM', '05:00PM', '05:00 PM', '1', '10:00 AM', '1', '05:00 PM', '10:00 AM', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'Fb.link', 'Instagram.link', 'Md-rode, Raipur, Chhattisgarh ', 'SHEFF BAKERY', '1', '0', '0', '0', '05:00 PM', '1', '10:00 PM', '05:00 PM', '1', '10:00 AM', '1', '10:00 AM', '05:00 PM', 'https://media-cdn.tripadvisor.com/media/photo-s/17/54/89/b5/photo1jpg.jpg', '2022-02-06 20:19:45'),
(6, '9827159130', NULL, '1', '3', '1', '10', '20', '20', '1', '10', '1', '20', '10 ', 'Bathroom fittings & assessories ', '0', '0', 'Near sapna talkies &#10;Nandini road BHILAI ', 'AMITA SANITARY ', '1', '0', '0', '0', '20', '1', '10', '20', '1', '10', '1', '10', '20', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/shop%2Fshopimage%2F1644222031006?alt=media&token=556f1d58-8dee-464d-81c3-888f35ecec80', '2022-02-07 13:52:49'),
(9, '9827159130', NULL, '5', '3', '1', '0', '0', '0', '1', '0', '1', '0', '0', 'Ashirwad , waterflo, parryware, jaquar, sandoz, mesco, chesta, shyam, pramukh, ', '0', '0', 'BHILAI ', 'AMITA BATH CARE ', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '1', '0', '0', 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/shop%2Fshopimage%2F1644251987731?alt=media&token=74a801a2-d207-4d2e-8e17-be129b759ce4', '2022-02-07 22:11:41');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_token`
--

CREATE TABLE `tbl_token` (
  `user_id` int(50) NOT NULL,
  `token` text NOT NULL,
  `added_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_token`
--

INSERT INTO `tbl_token` (`user_id`, `token`, `added_at`) VALUES
(1, 'ExponentPushToken[3qtbJtGO9V3Ux_KNib7Ddm]', '2021-11-23 20:24:41'),
(7, 'ExponentPushToken[3qtbJtGO9V3Ux_KNib7Ddm]', '2022-01-19 22:42:28'),
(8, 'ExponentPushToken[3qtbJtGO9V3Ux_KNib7Ddm]', '2022-01-19 22:47:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `gender` int(20) DEFAULT 1,
  `status` int(5) NOT NULL DEFAULT 1,
  `profilepic` longtext COLLATE utf8mb4_bin NOT NULL,
  `bio` longtext COLLATE utf8mb4_bin NOT NULL,
  `email` text COLLATE utf8mb4_bin NOT NULL DEFAULT '----',
  `work` text COLLATE utf8mb4_bin NOT NULL DEFAULT '------',
  `phone` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `age` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `bloodgroup` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `address` longtext COLLATE utf8mb4_bin NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `dob` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `materialstatus` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `educationlevel` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `hobbies` varchar(200) COLLATE utf8mb4_bin NOT NULL,
  `jobstatus` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `profiletype` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `metrimonyshare` int(20) NOT NULL DEFAULT 0,
  `directoryshare` int(20) NOT NULL DEFAULT 0,
  `subscribtion` int(20) NOT NULL DEFAULT 1,
  `added_at` longtext COLLATE utf8mb4_bin NOT NULL,
  `updated_at` longtext COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `gender`, `status`, `profilepic`, `bio`, `email`, `work`, `phone`, `age`, `bloodgroup`, `address`, `country_id`, `state_id`, `city_id`, `dob`, `materialstatus`, `educationlevel`, `hobbies`, `jobstatus`, `profiletype`, `metrimonyshare`, `directoryshare`, `subscribtion`, `added_at`, `updated_at`) VALUES
(1, 'VAIBHAV PANDEY', 1, 1, 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1641318019632?alt=media&token=cb73d561-03f6-442f-9c31-dcb7ea52c14d', '', 'Vaibhavpandey373@gmail.com ', 'Freelance developer', '8226069642', '25', 'O+', 'near , hp wrolds , old colony rode puni', 8, 1, 3, '2021-10-29', 'UnMarried', 'Educated', '', 'Employeed', '', 1, 2, 1, '2022-02-19 01:38', ''),
(2, 'YOGESH', 1, 1, 'data:image/png;base64,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aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5KUzwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5uaWtpdGEga2FzaHlhcDwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PkXFB4YAAAAASUVORK5CYII=', '', 'vaibhav pandey372@gm', '', '8226069643', '54', 'O+', 'fgfgdfg', 8, 1, 3, '1993-11-24', 'Married', 'UnEducated', '', 'UnEmployeed', '', 2, 1, 0, '2021-12-12 02:13', ''),
(3, 'RAJESH KUMAR', 1, 1, 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', '', 'vaibhav pandey372@gm', '', '8929546524', '54', 'O+', 'fgfgdfg', 8, 1, 3, '1993-11-24', 'Married', 'UnEducated', '', 'UnEmployeed', '', 1, 1, 1, '2021-11-19 11:34', ''),
(4, 'ADITYA ', 1, 1, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg==', '', 'Ads6245@gmail.com ', '', '7974060670', '24', 'A-', '... ', 8, 1, 2, '1997-10-30', 'UnMarried', 'Educated', '', 'Employeed', '', 1, 1, 0, '2022-01-02 08:41', ''),
(5, 'AJAY JAISWAL', 1, 1, 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max', '', 'azyjaiswal@gmail.com', 'Sanitary ware shop ', '9827159130', '42', 'B+', 'Nandini road BHILAI ', 8, 1, 3, '1979-9-29', 'Married', 'Educated', '', 'Employeed', '', 1, 1, 1, '2022-02-19 12:35', ''),
(6, 'PRASHANT NIRMALA CHOUDHARY', 1, 1, 'data:image/jpeg;base64,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', '', 'jaisprashant86@gmail', 'Business man', '8962200006', '35', 'B+', 'Bhilai', 8, 1, 3, '2022-3-31', 'Married', 'Educated', '', 'Employeed', '', 1, 1, 0, '2022-03-04 09:51', ''),
(8, 'ANJALI SINGH CHANDEL', 2, 1, 'https://firebasestorage.googleapis.com/v0/b/jaiswalsarwarigya.appspot.com/o/post%2Fpostimage%2F1642612578788?alt=media&token=777fb7ae-d445-4b74-b27e-2be78e25e297', '', 'Anjali@123.com', 'Frontend developer', '7338934403', '24', 'O+', 'Nehru nagar bilaspur', 8, 1, 2, '1998-1-19', 'UnMarried', 'Educated', '', 'Employeed', '', 2, 2, 1, '2022-02-13 11:08', '');

-- --------------------------------------------------------

--
-- Table structure for table `yourpost`
--

CREATE TABLE `yourpost` (
  `id` int(11) NOT NULL,
  `txt_meta_title` mediumtext NOT NULL,
  `txt_aboutus` mediumtext NOT NULL,
  `txt_Favicon` mediumtext NOT NULL,
  `status` int(20) NOT NULL DEFAULT 1,
  `added_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `caste`
--
ALTER TABLE `caste`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ci_sessions`
--
ALTER TABLE `ci_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `last_activity_idx` (`timestamp`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pincode`
--
ALTER TABLE `pincode`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `relation`
--
ALTER TABLE `relation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `religion`
--
ALTER TABLE `religion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surname`
--
ALTER TABLE `surname`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_allchats`
--
ALTER TABLE `tbl_allchats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_detailsall`
--
ALTER TABLE `tbl_detailsall`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_events`
--
ALTER TABLE `tbl_events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `tbl_Family`
--
ALTER TABLE `tbl_Family`
  ADD PRIMARY KEY (`familyreq_id`);

--
-- Indexes for table `tbl_Familyreq`
--
ALTER TABLE `tbl_Familyreq`
  ADD PRIMARY KEY (`familyreq_id`);

--
-- Indexes for table `tbl_Friend`
--
ALTER TABLE `tbl_Friend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_Friendreq`
--
ALTER TABLE `tbl_Friendreq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_gameintrest`
--
ALTER TABLE `tbl_gameintrest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_otp`
--
ALTER TABLE `tbl_otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_post`
--
ALTER TABLE `tbl_post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `tbl_ppoint`
--
ALTER TABLE `tbl_ppoint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_reportpost`
--
ALTER TABLE `tbl_reportpost`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_shopcategory`
--
ALTER TABLE `tbl_shopcategory`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `tbl_shopprofile`
--
ALTER TABLE `tbl_shopprofile`
  ADD PRIMARY KEY (`shopid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `yourpost`
--
ALTER TABLE `yourpost`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `caste`
--
ALTER TABLE `caste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pincode`
--
ALTER TABLE `pincode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `relation`
--
ALTER TABLE `relation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `religion`
--
ALTER TABLE `religion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `surname`
--
ALTER TABLE `surname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_allchats`
--
ALTER TABLE `tbl_allchats`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_detailsall`
--
ALTER TABLE `tbl_detailsall`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_events`
--
ALTER TABLE `tbl_events`
  MODIFY `event_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_Family`
--
ALTER TABLE `tbl_Family`
  MODIFY `familyreq_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_Familyreq`
--
ALTER TABLE `tbl_Familyreq`
  MODIFY `familyreq_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_Friend`
--
ALTER TABLE `tbl_Friend`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_Friendreq`
--
ALTER TABLE `tbl_Friendreq`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `tbl_gameintrest`
--
ALTER TABLE `tbl_gameintrest`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_otp`
--
ALTER TABLE `tbl_otp`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `tbl_post`
--
ALTER TABLE `tbl_post`
  MODIFY `post_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `tbl_ppoint`
--
ALTER TABLE `tbl_ppoint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_reportpost`
--
ALTER TABLE `tbl_reportpost`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_shopcategory`
--
ALTER TABLE `tbl_shopcategory`
  MODIFY `cat_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_shopprofile`
--
ALTER TABLE `tbl_shopprofile`
  MODIFY `shopid` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `yourpost`
--
ALTER TABLE `yourpost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
