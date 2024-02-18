-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema MyNFL
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `MyNFL` ;

-- -----------------------------------------------------
-- Schema MyNFL
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MyNFL` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `MyNFL` ;

-- -----------------------------------------------------
-- Table `MyNFL`.`Team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyNFL`.`Team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `state` VARCHAR(45) NULL DEFAULT NULL,
  `conference` VARCHAR(35) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 81
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `MyNFL`.`Player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyNFL`.`Player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `height` FLOAT NULL DEFAULT NULL,
  `weight` FLOAT NULL DEFAULT NULL,
  `handSize` FLOAT NULL DEFAULT NULL,
  `armLength` FLOAT NULL DEFAULT NULL,
  `homeCity` VARCHAR(45) NULL DEFAULT NULL,
  `homeState` VARCHAR(45) NULL DEFAULT NULL,
  `university` VARCHAR(75) NULL DEFAULT NULL,
  `status` VARCHAR(45) NULL DEFAULT NULL,
  `position` VARCHAR(75) NULL DEFAULT NULL,
  `teamId` INT NULL DEFAULT NULL,
  `year_entered_league` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Player_Team_idx` (`teamId` ASC) VISIBLE,
  CONSTRAINT `fk_Player_Team`
    FOREIGN KEY (`teamId`)
    REFERENCES `MyNFL`.`Team` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `MyNFL`.`Combine_Score`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyNFL`.`Combine_Score` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fortyTime` FLOAT NULL DEFAULT NULL,
  `tenYardSplit` FLOAT NULL DEFAULT NULL,
  `twentyYardShuttle` FLOAT NULL DEFAULT NULL,
  `threeCone` FLOAT NULL DEFAULT NULL,
  `verticalLeap` FLOAT NULL DEFAULT NULL,
  `playerId` INT NULL DEFAULT NULL,
  `broadJump` FLOAT(5,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Combine_Score_1_idx` (`playerId` ASC) VISIBLE,
  CONSTRAINT `fk_Combine_Score_1`
    FOREIGN KEY (`playerId`)
    REFERENCES `MyNFL`.`Player` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `MyNFL`.`Pick`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyNFL`.`Pick` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `selectionRound` INT NULL DEFAULT NULL,
  `selectionNumber` INT NULL DEFAULT NULL,
  `selectionYear` VARCHAR(4) NULL DEFAULT NULL,
  `selectionPickFrom` VARCHAR(45) NULL DEFAULT NULL,
  `selectionPickTo` VARCHAR(45) NULL DEFAULT NULL,
  `combineScore` INT NULL DEFAULT NULL,
  `Team_id` INT NOT NULL,
  `Player_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Pick_Team1_idx` (`Team_id` ASC) VISIBLE,
  INDEX `fk_Pick_Player1_idx` (`Player_id` ASC) VISIBLE,
  CONSTRAINT `fk_Pick_Player1`
    FOREIGN KEY (`Player_id`)
    REFERENCES `MyNFL`.`Player` (`id`),
  CONSTRAINT `fk_Pick_Team1`
    FOREIGN KEY (`Team_id`)
    REFERENCES `MyNFL`.`Team` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `MyNFL`.`Player_Award`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyNFL`.`Player_Award` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `playerId` INT NOT NULL,
  `award_name` VARCHAR(45) NULL DEFAULT NULL,
  `year_awarded` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_Player_Awards_idx` (`playerId` ASC) VISIBLE,
  CONSTRAINT `FK_Player_Awards`
    FOREIGN KEY (`playerId`)
    REFERENCES `MyNFL`.`Player` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `MyNFL`.`Post_Season_Result`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyNFL`.`Post_Season_Result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `playoff_year` INT NOT NULL,
  `last_round_reached` VARCHAR(45) NULL DEFAULT NULL,
  `win_lose` VARCHAR(1) NULL DEFAULT NULL,
  `opponent_score` INT NULL DEFAULT NULL,
  `team_score` INT NULL DEFAULT NULL,
  `teamId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Team_idx` (`teamId` ASC) VISIBLE,
  CONSTRAINT `fk_Team`
    FOREIGN KEY (`teamId`)
    REFERENCES `MyNFL`.`Team` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `MyNFL`.`Schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyNFL`.`Schedule` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `opponentId` INT NOT NULL,
  `homeTeamId` INT NULL DEFAULT NULL,
  `scheduleWeek` INT NULL DEFAULT NULL,
  `gameDate` DATE NULL DEFAULT NULL,
  `gameCity` VARCHAR(45) NULL DEFAULT NULL,
  `gameStateProvince` VARCHAR(45) NULL DEFAULT NULL,
  `gameCountry` VARCHAR(45) NULL DEFAULT NULL,
  `gameLocation` VARCHAR(75) NULL DEFAULT NULL,
  `opponentConference` VARCHAR(45) NULL DEFAULT NULL,
  `opponentDivision` VARCHAR(45) NULL DEFAULT NULL,
  `wonLostFlag` VARCHAR(1) NULL DEFAULT NULL,
  `homeOrAway` VARCHAR(1) NULL DEFAULT NULL,
  `opponentScore` INT NULL DEFAULT NULL,
  `homeScore` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Schedule_1_idx` (`opponentId` ASC) VISIBLE,
  INDEX `fk_Schedule_Home_idx` (`homeTeamId` ASC) VISIBLE,
  CONSTRAINT `fk_Schedule_Home`
    FOREIGN KEY (`homeTeamId`)
    REFERENCES `MyNFL`.`Team` (`id`),
  CONSTRAINT `fk_Schedule_Visitor`
    FOREIGN KEY (`opponentId`)
    REFERENCES `MyNFL`.`Team` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
