# NodeJs-RESTful-API
RESTful API using Node.js and MySQL

-- Host: localhost    Database: employeedb
-- ------------------------------------------------------
-- Table structure for table `employee`
DROP TABLE IF EXISTS `employee`;

CREATE TABLE `employee` (
  `EmpID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `EmpCode` varchar(45) NOT NULL,
  `Salary` int(11) NOT NULL,
  PRIMARY KEY (`EmpID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `employee`
INSERT INTO `employee` VALUES (1,'Mathu','EMP001',50000),(3,'Kathir','EMP003',60000),(4,'Sharma_updated','EMP015',50000);

#NodeJs
--> npm init
create a file called package.json 

--> Install dependencies (https://www.npmjs.com/package/package)
npm install --save express mysql body-parser
with latest version
1. Express (node.js framework)

2. MySQL (MySQL driver for node.js)

3. Body-parser (middleware to handle post body request)

