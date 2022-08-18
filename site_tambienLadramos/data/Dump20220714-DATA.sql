CREATE DATABASE  IF NOT EXISTS `tambienladramos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tambienladramos`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: tambienladramos
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Perro'),(2,'Gato');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `defaultpics`
--

LOCK TABLES `defaultpics` WRITE;
/*!40000 ALTER TABLE `defaultpics` DISABLE KEYS */;
INSERT INTO `defaultpics` VALUES (1,'perro-cocinero.jfif',1),(2,'gato-cocinero.jpg',2);
/*!40000 ALTER TABLE `defaultpics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'perro-eukanuba-1kg.webp',1),(2,'perro-eukanuba-3kg.webp',2),(3,'perro-eukanuba-15kg.webp',3),(4,'perro-proplan-3kg.webp',4),(5,'perro-proplan-7.5kg.webp',5),(6,'perro-proplan-15kg.webp',6),(7,'gato-excelent-1kg.png',7),(8,'gato-excelent-3kg.png',8),(9,'gato-excelent-7.5kg.png',9),(10,'gato-proplan-3kg.webp',10),(11,'gato-proplan-7.5kg.webp',11),(12,'gato-proplan-15kg.webp',12);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Eukanuba 1 kg',0,'PERRO',5,1),(2,'Eukanuba 3 kg',7209,'PERRO',4,1),(3,'Eukanuba 15 kg',8675,'PERRO',6,1),(4,'Pro Plan 3 kg',7861,'PERRO',2,1),(5,'Pro Plan 7.5 kg',4577,'PERRO',10,1),(6,'Pro Plan 15 kg',9038,'PERRO',12,1),(7,'Excellent 1 kg',4209,'GATO',0,2),(8,'Excellent 3 kg',4884,'GATO',20,2),(9,'Excellent 7.5 kg',5618,'GATO',15,2),(10,'Pro Plan 3 kg',2675,'GATO',3,2),(11,'Pro Plan 7.5 kg',3153,'GATO',5,2),(12,'Pro Plan 15 KG',3250,'GATO',5,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'Admin'),(2,'User');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'cristian','','cr@gmail.com','$2a$10$S6TxhQP/UkvhZTIz99LqFOL4uoTC0Srf7nDP3NFIcZQi06x2fTRta','perro-informatico.png',1),(2,'alejandro','','aleja@gmail.com','$2a$10$EMYJCZRIX.yhhIHVN1CO3uGQTfa/9NIlJwCtVXRPnJAscZ.ar6L9e','perro-informatico.png',1),(3,'ale','','ale@gmail.com','$2a$10$SfuqluV0EB7VEls4LsbEQ.Gwxmp9wTWAm0nSNVocgCoWZsjtAnW.6','perro-informatico.png',2),(4,'Eric','','menaericdaniel@gmail.com','$2a$10$DiHBFMCVKFkfy/4mgRViCOxGh5l72Z8DxOe6WVWQWD28HUe8AeqzK','perro-informatico.png',1),(5,'Jorge','','jorge@gmail.com','$2a$10$AuBQbZEIs1aKEGdPST7qwufPf6b5EgGZG8BvMWttdNdGh9d5EfYUu','perro-informatico.png',2),(12,'Ruben','ruben','ruben@ruben.com','$2a$10$MtdDwUWpY5MtyxueZLXo7uvkP3LETzfTMUZzpx1inrsEX/P8DILYK','perro-informatico.png',2),(14,'asd','asd','asd@asd.com','$2a$10$Wa.6t5XRBJz3WKLKlR3sKeByJANB6i2NBuQj97MYPaXu.7HHlJfky','perro-informatico.png',1),(15,'prueba','prueba','prueba@prueba.com','$2a$10$Q9oHxVTWI3.mY0w0eHR.pu1mGEYtmRbMqdXuu7qtcH6hVzNVwFxIK','perro-informatico.png',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-14 13:44:13
