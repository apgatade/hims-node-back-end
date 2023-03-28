-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2023 at 08:08 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hims`
--

-- --------------------------------------------------------

--
-- Table structure for table `configurations`
--

CREATE TABLE `configurations` (
  `id` int(11) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `cvalue` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `configurations`
--

INSERT INTO `configurations` (`id`, `cname`, `cvalue`) VALUES
(2, 'Viveksir', 'Pradipsir'),
(3, 'Soyab', 'kolhapuriiii');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`) VALUES
(2, '0PD'),
(4, 'testing lab'),
(5, 'ipd department'),
(6, 'nursing department'),
(12, 'ssss'),
(13, 'aaaaa'),
(14, '');

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `stateid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `name`, `stateid`) VALUES
(1, 'Kolhapur', 1),
(2, 'Satara', 1),
(3, 'Belgaum', 2);

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `name` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

CREATE TABLE `genders` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genders`
--

INSERT INTO `genders` (`id`, `name`) VALUES
(3, 'Female'),
(2, 'Male'),
(4, 'Transgender');

-- --------------------------------------------------------

--
-- Table structure for table `ipdoptions`
--

CREATE TABLE `ipdoptions` (
  `id` int(11) NOT NULL,
  `srno` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `link` varchar(100) NOT NULL,
  `optionfor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ipdoptions`
--

INSERT INTO `ipdoptions` (`id`, `srno`, `title`, `link`, `optionfor`) VALUES
(2, 565, 'fsdfsd', 'dfdsf', 'fsdf'),
(6, 5, 'jkjss', 'ddsd', 'sdssf'),
(7, 3, 'djlkfd', 'change', 'fdff');

-- --------------------------------------------------------

--
-- Table structure for table `ipdservices`
--

CREATE TABLE `ipdservices` (
  `id` int(11) NOT NULL,
  `srno` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `rate` double NOT NULL,
  `toselectdoctor` tinyint(1) NOT NULL,
  `changesasperroom` tinyint(1) NOT NULL,
  `isitroom` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ipdservices`
--

INSERT INTO `ipdservices` (`id`, `srno`, `name`, `rate`, `toselectdoctor`, `changesasperroom`, `isitroom`) VALUES
(1, 1, 'nursing', 2000, 1, 1, 0),
(2, 2, 'Drugs', 5000, 1, 1, 1),
(3, 3, 'as;kldjf', 33333, 1, 1, 1),
(4, 4, 'asdgfs', 4444, 0, 0, 0),
(5, 5, 'gdhh', 4444, 1, 1, 1),
(6, 1, 'aaaaaaaa', 7000, 1, 1, 1),
(7, 2, 'sdg', 22222, 0, 0, 0),
(8, 1, 'sdg', 2222, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `labs`
--

CREATE TABLE `labs` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `labs`
--

INSERT INTO `labs` (`id`, `name`) VALUES
(5, 'X-ray Lab'),
(6, 'Urine Lab'),
(7, 'Blood Lab'),
(8, 'cathlab'),
(17, 'Scan');

-- --------------------------------------------------------

--
-- Table structure for table `labtests`
--

CREATE TABLE `labtests` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `labid` int(11) NOT NULL,
  `testtype` varchar(100) NOT NULL,
  `rate` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `labtests`
--

INSERT INTO `labtests` (`id`, `name`, `labid`, `testtype`, `rate`) VALUES
(1, 'x-ray', 5, 'Parameter', 100),
(2, 'x-ray', 5, 'Template', 200),
(4, 'Urine test', 6, 'Urine', 150),
(5, 'blood ', 7, 'Parameter', 250),
(11, 'blood', 7, 'Parameter', 150),
(12, 'abc', 8, 'xyz', 200),
(13, 'urine test', 6, 'dweffrf', 150),
(14, 'erwr', 7, 'Parameter', 2113),
(15, 'MRI', 17, 'Parameter', 1500),
(16, 'brain', 17, 'Parameter', 1000);

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`) VALUES
(4, 'English'),
(6, 'Marathi');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `canhavechilds` tinyint(1) NOT NULL,
  `menuid` int(11) NOT NULL,
  `srno` int(11) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `title`, `canhavechilds`, `menuid`, `srno`, `icon`, `link`) VALUES
(3, 'Cities', 0, 1, 2, 'fa fa-globe', 'master/cities'),
(4, 'General Masters', 1, 0, 1, 'metismenu-icon pe-7s-rocket', '#'),
(5, 'Cities', 0, 4, 1, '', 'master/cities'),
(7, 'Titles', 0, 4, 1, '', 'master/titles'),
(8, 'iGAP Masters', 1, 0, 10, 'metismenu-icon pe-7s-rocket', '#'),
(9, 'Modules', 0, 8, 1, '#', 'igap/modules'),
(10, 'Menus', 0, 8, 2, '#', 'igap/menus'),
(11, 'Relations', 0, 4, 3, '#', 'master/relations'),
(12, 'Lab', 1, 0, 2, 'metismenu-icon pe-7s-rocket', '#'),
(13, 'OPD Masters', 1, 0, 3, 'metismenu-icon pe-7s-rocket', '#'),
(14, 'Pharmacy Module', 1, 0, 4, 'metismenu-icon pe-7s-rocket', '#'),
(15, 'Items', 0, 14, 1, 'fa-falist', 'pharmacy/items'),
(16, 'States', 0, 4, 4, 'r', 'master/states'),
(17, 'Module Menu Mapping', 0, 8, 3, ' ', 'igap/modulemenus'),
(18, 'Usertype Module Mapping', 0, 8, 4, ' ', 'igap/usertypemodules'),
(19, 'User Types', 0, 8, 1, ' ', 'igap/usertypes'),
(20, 'System Masters', 1, 0, 3, 'metismenu-icon pe-7s-rocket', '#'),
(21, 'Users', 0, 20, 1, ' ', 'system/users');

-- --------------------------------------------------------

--
-- Table structure for table `modulemenus`
--

CREATE TABLE `modulemenus` (
  `id` int(11) NOT NULL,
  `moduleid` int(11) NOT NULL,
  `menuid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modulemenus`
--

INSERT INTO `modulemenus` (`id`, `moduleid`, `menuid`) VALUES
(1, 1, 4),
(2, 1, 12),
(3, 1, 13),
(4, 1, 14),
(5, 1, 20),
(6, 1, 8),
(7, 9, 4),
(10, 9, 12),
(11, 9, 20),
(12, 9, 13),
(13, 9, 14),
(14, 9, 8),
(15, 10, 4),
(16, 10, 12),
(17, 10, 20),
(18, 10, 13),
(19, 10, 14),
(20, 10, 8);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `srno` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `picpath` varchar(100) DEFAULT NULL,
  `link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `srno`, `name`, `picpath`, `link`) VALUES
(1, 1, 'Reception', 'modules/su6p6.png', 'igap/modules'),
(9, 1, 'Pharmacy', 'modules/o2wco.png', 'master/titles'),
(10, 2, 'Lab', 'modules/ufodrj.png', 'master/labs'),
(11, 4, 'MIS', 'modules/d15t1l.png', 'master/states');

-- --------------------------------------------------------

--
-- Table structure for table `paymentmodes`
--

CREATE TABLE `paymentmodes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `paymentmodes`
--

INSERT INTO `paymentmodes` (`id`, `name`) VALUES
(1, 'cash.'),
(3, 'credit'),
(4, 'online');

-- --------------------------------------------------------

--
-- Table structure for table `pha_items`
--

CREATE TABLE `pha_items` (
  `id` int(11) NOT NULL,
  `mtype` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `manu_companyid` int(11) NOT NULL,
  `mark_companyid` int(11) NOT NULL,
  `subquantity` int(11) NOT NULL,
  `allowdiscount` double NOT NULL,
  `gstpercent` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pha_items`
--

INSERT INTO `pha_items` (`id`, `mtype`, `name`, `description`, `manu_companyid`, `mark_companyid`, `subquantity`, `allowdiscount`, `gstpercent`) VALUES
(1, 'k', 'Paracetemol', 'gghggg', 1, 1, 4, 1000, 18);

-- --------------------------------------------------------

--
-- Table structure for table `relations`
--

CREATE TABLE `relations` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `relations`
--

INSERT INTO `relations` (`id`, `name`) VALUES
(1, 'mother'),
(2, 'sister'),
(7, 'dfg'),
(8, 'fgfgf'),
(9, 'fgfgf'),
(10, 'dfdf'),
(11, 'gfgg');

-- --------------------------------------------------------

--
-- Table structure for table `specializations`
--

CREATE TABLE `specializations` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specializations`
--

INSERT INTO `specializations` (`id`, `name`) VALUES
(1, 'MBBS'),
(2, 'DBMS');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`) VALUES
(2, 'Karanataka'),
(1, 'Maharashtra');

-- --------------------------------------------------------

--
-- Table structure for table `titles`
--

CREATE TABLE `titles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `titles`
--

INSERT INTO `titles` (`id`, `name`) VALUES
(6, 'Baby'),
(8, 'baby.'),
(9, 'Lady'),
(5, 'Mr'),
(7, 'Smt');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mobileno` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `usertypeid` int(11) NOT NULL,
  `doctorid` int(11) NOT NULL,
  `labid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `mobileno`, `email`, `usertypeid`, `doctorid`, `labid`) VALUES
(3, 'Abhijit', 'admin', 'admin', '', '', 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `usertypemodules`
--

CREATE TABLE `usertypemodules` (
  `id` int(11) NOT NULL,
  `usertypeid` int(11) NOT NULL,
  `moduleid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usertypemodules`
--

INSERT INTO `usertypemodules` (`id`, `usertypeid`, `moduleid`) VALUES
(5, 1, 9),
(6, 1, 10),
(7, 1, 11),
(8, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usertypes`
--

CREATE TABLE `usertypes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usertypes`
--

INSERT INTO `usertypes` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Doctor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `configurations`
--
ALTER TABLE `configurations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `ipdservices`
--
ALTER TABLE `ipdservices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `labs`
--
ALTER TABLE `labs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `labtests`
--
ALTER TABLE `labtests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_labid` (`labid`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modulemenus`
--
ALTER TABLE `modulemenus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paymentmodes`
--
ALTER TABLE `paymentmodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pha_items`
--
ALTER TABLE `pha_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specializations`
--
ALTER TABLE `specializations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `titles`
--
ALTER TABLE `titles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_username` (`username`);

--
-- Indexes for table `usertypemodules`
--
ALTER TABLE `usertypemodules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usertypes`
--
ALTER TABLE `usertypes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `configurations`
--
ALTER TABLE `configurations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `ipdservices`
--
ALTER TABLE `ipdservices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `labs`
--
ALTER TABLE `labs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `labtests`
--
ALTER TABLE `labtests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `modulemenus`
--
ALTER TABLE `modulemenus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `paymentmodes`
--
ALTER TABLE `paymentmodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pha_items`
--
ALTER TABLE `pha_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `specializations`
--
ALTER TABLE `specializations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `titles`
--
ALTER TABLE `titles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `usertypemodules`
--
ALTER TABLE `usertypemodules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `usertypes`
--
ALTER TABLE `usertypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `labtests`
--
ALTER TABLE `labtests`
  ADD CONSTRAINT `fk_labid` FOREIGN KEY (`labid`) REFERENCES `labs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
