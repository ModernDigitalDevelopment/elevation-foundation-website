CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(255) NOT NULL,
	`title` varchar(512) NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`category` varchar(128) NOT NULL DEFAULT 'General',
	`tags` text,
	`readTime` varchar(32),
	`author` varchar(256) NOT NULL DEFAULT 'The Elevation Foundation',
	`coverImage` text,
	`published` boolean NOT NULL DEFAULT false,
	`publishedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
