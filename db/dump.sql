BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `words` (
	`id`	integer PRIMARY KEY AUTOINCREMENT UNIQUE,
	`keyword`	text NOT NULL UNIQUE,
	`response`	text NOT NULL
);
CREATE TABLE IF NOT EXISTS `users` (
	`id`	TEXT NOT NULL UNIQUE,
	`name`	TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS `talk_log` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`user_id`	TEXT NOT NULL,
	`start_time`	INTEGER NOT NULL,
	`end_time`	INTEGER NOT NULL,
	`talk_time`	INTEGER NOT NULL,
	FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
);
CREATE TABLE IF NOT EXISTS `game_log` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`user_id`	TEXT NOT NULL,
	`start_time`	INTEGER NOT NULL,
	`end_time`	INTEGER NOT NULL,
	`play_time`	INTEGER NOT NULL,
	FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
);
COMMIT;
