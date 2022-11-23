CREATE DATABASE IF NOT EXISTS `test_link`;
USE `test_link`;
CREATE USER 'test_link'@'%' IDENTIFIED BY '1q2w3e4r';
GRANT ALL PRIVILEGES ON test_link.* TO 'test_link'@'%';
FLUSH PRIVILEGES;