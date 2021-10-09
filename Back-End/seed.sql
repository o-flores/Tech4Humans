DROP DATABASE IF EXISTS `Tech4Humans`;
CREATE DATABASE `Tech4Humans` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `Tech4Humans`;

CREATE TABLE `weather` (
  `id` varchar(50) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `count` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;