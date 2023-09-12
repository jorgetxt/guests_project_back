-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2023 at 02:32 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guests_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`) VALUES
(1, 'VENTAS'),
(2, 'ADMINISTRACION'),
(3, 'PROVEEDORES'),
(4, 'SERVICIO AL CLIENTE');

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `cedula` varchar(255) NOT NULL,
  `registerDate` datetime NOT NULL,
  `reason` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `departmentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guest`
--

INSERT INTO `guest` (`id`, `date`, `status`, `firstname`, `lastname`, `cedula`, `registerDate`, `reason`, `note`, `departmentId`) VALUES
(2, '2023-09-11 15:39:07', 'Finalizado', 'Luis', ' Morales', '094357986', '2023-09-11 15:39:07', 'Motivo', 'Un suceso', 1),
(3, '2023-09-05 00:00:00', 'En curso', 'Sara', 'Rodriguez', '0927386987', '2023-09-11 15:56:22', 'info', 'una novedad', 1),
(4, '2023-09-20 00:00:00', 'En curso', 'Tania', 'Loreto', '0923455456', '2023-09-11 20:15:15', 'informacion', '', 1),
(5, '2023-09-19 00:00:00', 'En curso', 'jorge', 'Rodriguez', '0927386987', '2023-09-11 20:17:48', 'refr', '', 1),
(6, '2023-09-21 00:00:00', 'En curso', 'Ramiro', 'Sanchez', '0923455456', '2023-09-11 20:19:50', 'info', '', 1),
(7, '2023-09-22 00:00:00', 'Finalizado', 'jorge', 'Rodriguez', '0927386987', '2023-09-11 20:36:20', 'info', '', 1),
(8, '2023-09-11 18:17:32', 'test', 'Luis', ' Morales', '094357986', '2023-09-11 18:17:32', 'Motivo', 'Test', 1),
(9, '2023-09-21 00:00:00', 'Finalizado', 'Carlota', 'Rodriguez', '9898398434', '2023-09-11 20:45:01', 'informacion', '', 1),
(10, '2023-09-16 00:00:00', 'Finalizado', 'Carlota', 'hidalgo', '9898398439', '2023-09-11 20:48:34', 'informacion', '', 1),
(11, '2023-09-08 00:00:00', 'Finalizado', 'Ramiro', 'hi', '0923455456', '2023-09-11 21:57:29', 'info', 'Novedad', 1),
(12, '2023-09-12 05:33:33', 'test', 'Luisa', ' Navarro', '094357986', '2023-09-12 05:33:33', 'Motivo', 'Test', 2),
(13, '2023-09-14 00:00:00', 'En curso', 'Camila', 'Montero', '1234567834', '2023-09-12 05:52:19', 'info', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `roll` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `roll`, `password`) VALUES
(1, 'Juan1', 'supervisor', '$2b$10$ZKK6Fy9yovNnXgHWUU394uJcJR4WvkvMCyjOZyUhy.OqMTyVp1hLe'),
(2, 'Maria1', 'recepcion', '$2b$10$NAX94KDgS.NXR7uCpn6b3eXPtdMKPwgXgzXyJibzyRAgf.HAA.s7C');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_9f3712f58ce9960c92fcb8cef3d` (`departmentId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `guest`
--
ALTER TABLE `guest`
  ADD CONSTRAINT `FK_9f3712f58ce9960c92fcb8cef3d` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
