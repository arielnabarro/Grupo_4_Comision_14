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
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Purina'),(2,'Pro Plan'),(3,'Vital Can'),(4,'Pedegree'),(5,'Nutrique'),(6,'Royal Canin'),(7,'Eukanuba'),(8,'Excellent');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cat_breeds`
--

LOCK TABLES `cat_breeds` WRITE;
/*!40000 ALTER TABLE `cat_breeds` DISABLE KEYS */;
INSERT INTO `cat_breeds` VALUES (1,'Maine Coon',NULL),(2,'Persa',NULL),(3,'Siamés',NULL),(4,'Bengalí',NULL),(5,'Siberiano',NULL),(6,'Exótico',NULL),(7,'Bosque de Noruega',NULL),(8,'Ragdoll',NULL),(9,'Shorthair',NULL),(10,'Himalayo',NULL),(11,'Cartujo',NULL),(12,'Scottish Fold',NULL);
/*!40000 ALTER TABLE `cat_breeds` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `dog_breeds`
--

LOCK TABLES `dog_breeds` WRITE;
/*!40000 ALTER TABLE `dog_breeds` DISABLE KEYS */;
INSERT INTO `dog_breeds` VALUES (1,'Chihuahua','Enano',1),(2,'Pekinés','Enano',1),(3,'Caniche Toy','Enano',1),(4,'Pomerania','Enano',1),(5,'Bull Dog Francés','Pequeño',1),(6,'Pug Carlino','Pequeño',1),(7,'Beagle','Pequeño',1),(8,'Corgi','Pequeño',1),(9,'Bóxer','Mediano',1),(10,'Husky Siberiano','Mediano',1),(11,'Bull Dog Inglés','Mediano',1),(12,'Pit Bull Americano','Mediano',1),(13,'Dogo Argentino','Grande',1),(14,'Pastor Alemán','Grande',1),(15,'Golden Retriever','Grande',1),(16,'Rottweiler','Grande',1),(17,'San Bernardo','Gigante',1),(18,'Gran Danés','Gigante',1),(19,'Terranova','Gigante',1),(20,'Mastín Inglés','Gigante',1);
/*!40000 ALTER TABLE `dog_breeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'perro-eukanuba-1kg.png',1),(2,'image-1659917087158.webp',2),(3,'perro-eukanuba-15kg.webp',3),(4,'perro-proplan-3kg.webp',4),(5,'perro-proplan-7.5kg.webp',5),(6,'perro-proplan-15kg.webp',6),(7,'gato-excelent-1kg.png',7),(8,'gato-excelent-3kg.png',8),(9,'gato-excelent-7.5kg.png',9),(10,'gato-proplan-3kg.webp',10),(11,'gato-proplan-7.5kg.webp',11),(12,'gato-proplan-15kg.webp',12),(25,'balanced-perro-envase-senior-peque-@2x-600x896.png',35),(26,'balanced-perro-envase-senior-medio-@2x-600x896.png',36),(27,'balanced-perro-envase-senior-grande-@2x..png',37),(28,'front-adult-grilled-steak-vegtable.png',38),(29,'pedigree-tender-bites-chicken-steak-front22b00c8ea3f66930bcd1ff28004ce6f7.png',39),(30,'pedigree-dry-dog-food-for-big-dogs-roasted-chicken-rice-vegetable-front.jpg',40),(31,'pack (1).png',41),(32,'pack.png',42),(33,'pack-2020.png',43),(34,'edrrv41an1jimnt7t3ro.jfif',44),(35,'jf8ag9xzafav3ru3l5uy.jfif',45),(36,'zptmk34i2mffbudhtkt7.jfif',46);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES (1,'Negro',12,20,1,1,1),(2,NULL,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL,NULL),(4,NULL,NULL,NULL,NULL,NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL,NULL,NULL),(9,NULL,NULL,NULL,NULL,NULL,NULL),(10,NULL,NULL,NULL,NULL,NULL,NULL),(11,NULL,NULL,NULL,NULL,NULL,NULL),(12,NULL,NULL,NULL,NULL,NULL,NULL),(13,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Eukanuba 1 kg',1001,1,'',15,1,7),(2,'Eukanuba 3 kg',7209,3,'Descripción temporal',6,1,7),(3,'Eukanuba 15 kg',8675,15,'PERRO',6,1,7),(4,'Pro Plan 3 kg',7861,3,'PERRO',2,1,2),(5,'Pro Plan 7.5 kg',4577,7.5,'PERRO',10,1,2),(6,'Pro Plan 15 kg',9038,15,'PERRO',12,1,2),(7,'Excellent 1 kg',4209,1,'GATO',0,2,8),(8,'Excellent 3 kg',4884,3,'GATO',20,2,8),(9,'Excellent 7.5 kg',5618,7.5,'GATO',15,2,8),(10,'Pro Plan 3 kg',2675,3,'GATO',3,2,2),(11,'Pro Plan 7.5 kg',3153,7.5,'GATO',5,2,2),(12,'Pro Plan 15 kg',3250,15,'GATO',3,2,2),(35,'balanced perro senior raza pequeña',6250,3,'PROTEÍNAS DE ALTA CALIDAD',5,1,3),(36,'balanced perro senior raza mediana',7300,7.5,'CONTROL DEL SARRO Y LA HALITOSIS',5,1,3),(37,'balanced perro senior raza grande',8000,15,'SALUD RENAL',5,1,3),(38,'pedegree con bocados tiernos Nutrición completa Alimento seco para perros adultos',4750,3,'Cada perro merece lo mejor',5,1,4),(39,'pedegree Alimento seco para perros adultos',5300,7.5,'Preparado con granos integrales para una digestión saludable, además de proteína de carne real, nuestro alimento seco para perros con sabor a bistec está diseñado para que su perro adulto se sienta lo mejor posible.',5,1,4),(40,'pedegree Alimento seco para perros grandes',6500,15,'Nuestro alimento para perros con sabor a pollo contiene glucosamina y condroitina de origen natural para apoyar la salud de los huesos y las articulaciones.',5,1,4),(41,'Nutrique Gato Joven Mantenimiento Saludable',3000,3,'Antioxidantes naturalesColaboran en la prevención del envejecimiento celular.',5,2,5),(42,'Nutrique Gato Adulto Mantenimiento Saludable',5000,7.5,'Digestive Herbal Blend Un exclusivo mix de hierbas colabora con el correcto funcionamiento del sistema digestivo',5,2,5),(43,'Nutrique Gato Cuidados especiales Urinario gato',8000,15,'EL PAVO Y EL CERDO estos ingredientes naturales aportan proteínas de gran calidad y permiten, junto al agregado de acidificantes y un balance óptimo de minerales, alcanzar un pH urinario óptimo y prevenir la formación de cristales.',5,2,5),(44,'royal canin Alimento seco para gatitos',5500,3,'HUESOS Y ARTICULACIONES: Contenido óptimo de energía y proteínas con vitaminas equilibradas con precisión, incluida la vitamina D, y minerales para ayudar a mantener huesos y articulaciones saludables',5,2,6),(45,'royal canin Alimento seco para gatos jovenes',7300,7.5,'Royal Canin Maine Coon alimento húmedo para gatos específico de la raza está formulado para satisfacer las necesidades nutricionales de este gato de raza pura de 1 año o más',5,2,6),(46,'royal canin Alimento seco para gatos mayores de 12 años esterilizados/castrados',9700,15,'está formulado para ayudar a mantener un peso saludable en gatos mayores de 12 años o más',5,2,6);
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
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Cortes de pelo',NULL),(2,'Baños',NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `turns`
--

LOCK TABLES `turns` WRITE;
/*!40000 ALTER TABLE `turns` DISABLE KEYS */;
INSERT INTO `turns` VALUES (1,'2022-08-15','20:34:15',350,1,14);
/*!40000 ALTER TABLE `turns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'cristian','','cr@gmail.com','$2a$10$S6TxhQP/UkvhZTIz99LqFOL4uoTC0Srf7nDP3NFIcZQi06x2fTRta','perro-informatico.png',1),(2,'alejandro','','aleja@gmail.com','$2a$10$EMYJCZRIX.yhhIHVN1CO3uGQTfa/9NIlJwCtVXRPnJAscZ.ar6L9e','perro-informatico.png',1),(3,'ale','','ale@gmail.com','$2a$10$SfuqluV0EB7VEls4LsbEQ.Gwxmp9wTWAm0nSNVocgCoWZsjtAnW.6','perro-informatico.png',1),(4,'Eric','','menaericdaniel@gmail.com','$2a$10$DiHBFMCVKFkfy/4mgRViCOxGh5l72Z8DxOe6WVWQWD28HUe8AeqzK','perro-informatico.png',1),(5,'Jorge','','jorge@gmail.com','$2a$10$AuBQbZEIs1aKEGdPST7qwufPf6b5EgGZG8BvMWttdNdGh9d5EfYUu','perro-informatico.png',2),(12,'Ruben','ruben','ruben@ruben.com','$2a$10$MtdDwUWpY5MtyxueZLXo7uvkP3LETzfTMUZzpx1inrsEX/P8DILYK','perro-informatico.png',2),(14,'asd','asd','asd@asd.com','$2a$10$Wa.6t5XRBJz3WKLKlR3sKeByJANB6i2NBuQj97MYPaXu.7HHlJfky','perro-informatico.png',1),(15,'a','a','prueba@prueba.com','$2a$10$Q9oHxVTWI3.mY0w0eHR.pu1mGEYtmRbMqdXuu7qtcH6hVzNVwFxIK','perro-informatico.png',1);
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

-- Dump completed on 2022-08-10 11:54:27
