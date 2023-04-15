-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 15 avr. 2023 à 14:49
-- Version du serveur : 8.0.30
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `social_media_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'nihil', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(2, 'in', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(3, 'et', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(4, 'voluptas', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(5, 'veniam', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(6, 'sit', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(7, 'a', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(8, 'reprehenderit', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(9, 'aliquid', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(10, 'magnam', '2023-04-15 12:48:24', '2023-04-15 12:48:24');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `post_id`, `body`, `created_at`, `updated_at`) VALUES
(1, 3, 2, 'Similique possimus esse deserunt a voluptas. Recusandae dolorum et libero nostrum. Quo placeat sunt est harum ad quia.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(2, 10, 9, 'Ipsa vel et omnis velit. Consequuntur libero quas nihil voluptatem ducimus. Eveniet illum voluptates et dolorum quibusdam quasi et.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(3, 8, 3, 'Eum voluptas assumenda nihil adipisci aut earum molestiae. Fugiat qui sed autem itaque fuga et aut. Ut autem perferendis vitae consequatur.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(4, 8, 10, 'Quibusdam aperiam sit corrupti quo dicta quae rerum. Tempora dolorum quaerat sit. Totam eum repudiandae sed fuga consequatur nulla voluptatem ut.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(5, 8, 3, 'Ad quas corporis provident eligendi earum. Eos occaecati qui laborum aperiam velit. Dolores et est sunt. Dolorem labore qui explicabo consequatur consequatur.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(6, 1, 3, 'Ea omnis ullam consequatur error architecto et nemo in. Veniam voluptatem deserunt dignissimos autem id. Sed delectus dolorum aspernatur culpa beatae rerum consequuntur. Vel aliquid ut qui ipsam provident ipsam.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(7, 5, 1, 'A est dolor voluptatem nihil. Omnis distinctio nulla deserunt distinctio dolorem quo iste. Voluptas quae laborum ut at. Nihil doloremque molestias officiis dicta reiciendis facere occaecati.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(8, 6, 10, 'Suscipit nemo non quod ipsum. Laudantium neque impedit aut aliquid suscipit sit. Sed architecto expedita ab at praesentium et sed voluptatibus. Ut non qui culpa quia praesentium.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(9, 6, 7, 'Veniam sed est esse dicta exercitationem. Nam rerum quos aliquam fuga maxime atque quasi. Ea excepturi dignissimos fugit quia atque repellat ipsum.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(10, 2, 5, 'Dolorem autem non magnam aut sint. Temporibus itaque error nihil quia veritatis molestiae eligendi velit. Expedita facere id sapiente accusamus quam consequatur cupiditate. Corporis delectus ipsum harum sit in autem.', '2023-04-15 12:48:24', '2023-04-15 12:48:24');

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `likeable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `likeable_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `likeable_type`, `likeable_id`, `created_at`, `updated_at`) VALUES
(1, 3, 'App\\Models\\Comment', 9, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(2, 10, 'App\\Models\\Comment', 2, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(3, 7, 'App\\Models\\Post', 7, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(4, 2, 'App\\Models\\Comment', 7, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(5, 10, 'App\\Models\\Comment', 2, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(6, 5, 'App\\Models\\Post', 2, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(7, 1, 'App\\Models\\Comment', 3, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(8, 4, 'App\\Models\\Comment', 7, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(9, 7, 'App\\Models\\Post', 10, '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(10, 9, 'App\\Models\\Post', 4, '2023-04-15 12:48:24', '2023-04-15 12:48:24');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `video_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `category_id`, `video_url`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 6, 10, 'http://www.sipes.com/distinctio-debitis-culpa-et-officia-maiores-sequi.html', 'Omnis et earum assumenda nostrum aperiam aut.', 'Vel enim dolor sunt blanditiis in. Suscipit autem sit temporibus voluptatibus est quam velit soluta. Quos inventore iure ratione provident quam.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(2, 9, 3, 'http://www.ritchie.com/', 'Voluptatem repellat aspernatur consequatur commodi dolorem sed quasi.', 'In autem libero pariatur et culpa. Qui sint nesciunt excepturi laudantium cumque quia atque voluptas. Aliquam quam officia quidem quisquam voluptatem. Iure ab vero sed omnis molestias placeat. Aliquam tenetur reprehenderit consectetur voluptas totam non.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(3, 2, 3, 'http://leannon.com/quibusdam-odio-aliquid-accusamus-magnam-consequatur-at', 'Et repellat maxime officia rerum iure iusto sit.', 'Est repellat sed qui voluptas. Sint ea possimus voluptatum vitae aperiam eligendi rerum quo. Voluptate commodi ad quam aliquid id magni. Ut sed cum odit debitis ad adipisci quas.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(4, 2, 10, 'http://www.koch.com/quia-debitis-aliquid-quia', 'Minima eum aut ea consectetur.', 'Minima nemo ut quae fuga accusantium ducimus id. Sequi voluptatem vel aut et. Nulla non et id quis et similique.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(5, 3, 7, 'https://www.wilkinson.biz/voluptatem-perferendis-optio-corrupti-quis-sit', 'Nihil maxime doloribus ex omnis est odit esse placeat.', 'Illum commodi alias ut officia quae aut aspernatur. Dicta velit laboriosam est. Id ratione id unde. Ad aut ipsum non eos.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(6, 5, 4, 'http://veum.com/laborum-ea-rerum-fuga-sit-temporibus-mollitia', 'Molestias qui velit repellendus impedit.', 'Fuga amet recusandae non sint dolor. Deserunt pariatur odio nemo rerum. Perspiciatis numquam dolor voluptatem. Facilis incidunt deserunt ex ea eaque sint quibusdam fugiat.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(7, 9, 6, 'https://www.mosciski.com/labore-qui-delectus-tempora-est-qui-ut', 'Dolores nihil consectetur est nostrum similique.', 'Sequi velit eum consequatur voluptatum. Voluptas neque sed ullam veritatis. Similique quod reiciendis nemo unde quae error aut.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(8, 4, 3, 'https://www.kuhn.com/placeat-quia-in-vel-iste-ut', 'Voluptatum quae qui tempore ut blanditiis neque temporibus.', 'Commodi magnam hic consequatur voluptatem iste quia consequuntur. Libero sed sed nam aut. Quae voluptas tenetur reprehenderit numquam. Et nam autem ut perspiciatis.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(9, 5, 4, 'http://www.mckenzie.com/dolor-aspernatur-quis-dolore-officia-qui', 'Saepe molestias minus iusto.', 'Quia repellat sequi ut nulla hic error ex. Deserunt blanditiis quam cum dolores voluptates et autem. Voluptatem et laboriosam ratione nesciunt error.', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(10, 9, 3, 'https://www.fahey.com/enim-laboriosam-ea-aperiam-autem-aperiam-odio-officia', 'Ut molestias id nisi qui aut maxime in facilis.', 'Provident ad nisi sunt labore inventore corporis aut facere. Maiores explicabo rerum id dolor at harum. Ut ad architecto qui corrupti enim ut velit. Quia eos qui fugiat ut. Sunt velit temporibus nemo doloremque possimus molestias quas.', '2023-04-15 12:48:24', '2023-04-15 12:48:24');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pfp_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `email`, `email_verified_at`, `password`, `phone`, `pfp_url`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Alison', 'Waters', 'daren97', 'rhea24@example.org', '2023-04-15 12:48:23', '$2y$10$K.mxlmL6Dncvmlz9kIcHNO9qvW3ocj.RNu0KNjK08LrmH4jmmnptm', '+1 (614) 982-1457', 'https://via.placeholder.com/640x480.png/00eeff?text=et', 'SrsqIG9WN4', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(2, 'Wellington', 'Davis', 'lebert', 'tblock@example.net', '2023-04-15 12:48:23', '$2y$10$pPrtOSfgykCx/MIflhir2O8yYZ5dyPjIqBdg6X8fK28jBBfl3Adv.', '762.449.6835', 'https://via.placeholder.com/640x480.png/002266?text=ducimus', '3eD0g3V41y', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(3, 'Zoie', 'Goodwin', 'king.okon', 'orval.schaden@example.com', '2023-04-15 12:48:23', '$2y$10$rv0geEeFWaqc1xhqrK/..uNd8KRKfr6rHgoEGrMGJMQMHm3zhuoqe', '1-413-701-2661', 'https://via.placeholder.com/640x480.png/00bb66?text=quasi', '03yo33EKTe', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(4, 'Emery', 'Jerde', 'lisandro68', 'lisette.bernhard@example.com', '2023-04-15 12:48:24', '$2y$10$Iz/T7QE2onOsd7JFT3gC8eyS17xRu2faTn1WfCxCmtvj5VQicfKqS', '773-868-4605', 'https://via.placeholder.com/640x480.png/000033?text=id', 'WWecPhypEU', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(5, 'Rowena', 'Blick', 'eliane21', 'caitlyn.west@example.net', '2023-04-15 12:48:24', '$2y$10$xQUv52nDvegW21b4U8wI9.djVRbUPKPZPJnyw/kPPwuMpw.pdGDsK', '+1-616-532-4723', 'https://via.placeholder.com/640x480.png/00aaff?text=velit', 'jbx80p9TnT', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(6, 'Zion', 'Smitham', 'adelle14', 'cordelia.gibson@example.org', '2023-04-15 12:48:24', '$2y$10$G3UrUAG1o4885pRdp3rTaOdSwHYtV7FncfvSvOxvCnFoPGPVPA9im', '(480) 663-0739', 'https://via.placeholder.com/640x480.png/00ee22?text=asperiores', 'WqREWeBMjM', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(7, 'Kiarra', 'Schamberger', 'deckow.jennie', 'prohaska.lucius@example.com', '2023-04-15 12:48:24', '$2y$10$mQHKglYVuQPVtjmiExTwm.c47UzGDMTo/bnwP5dn5d78sLDGtPOqC', '+1.640.976.7030', 'https://via.placeholder.com/640x480.png/001122?text=mollitia', 'tbOPifxx1t', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(8, 'Jewel', 'Tremblay', 'joshuah.oreilly', 'paula.quitzon@example.org', '2023-04-15 12:48:24', '$2y$10$XdJk9/iuhX1XUqvtGmwBH.orelTu1r6yXJAFPhL3NngrHKoWL8h0e', '408.678.7725', 'https://via.placeholder.com/640x480.png/00ee66?text=ea', 'TavMJUGjiX', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(9, 'Emilia', 'Goyette', 'malcolm73', 'rwindler@example.net', '2023-04-15 12:48:24', '$2y$10$NUsNYonmQRJP0Xy7YOS13Oev50oCLaXC.b0N/lNCs.AKAM23n2Pwi', '(330) 619-0592', 'https://via.placeholder.com/640x480.png/00ee99?text=corrupti', 'laBYFWNd9t', '2023-04-15 12:48:24', '2023-04-15 12:48:24'),
(10, 'Justina', 'Conroy', 'allan.torp', 'thelma08@example.net', '2023-04-15 12:48:24', '$2y$10$uaTn9zF8iTMs2qChy74/0uyMPlhDJqVnBDT4a8jfTw8YzJSvyI5eO', '+1 (601) 955-9396', 'https://via.placeholder.com/640x480.png/00dd33?text=sed', 'QTWZ3UoyzU', '2023-04-15 12:48:24', '2023-04-15 12:48:24');

-- --------------------------------------------------------

--
-- Structure de la table `user_followers`
--

CREATE TABLE `user_followers` (
  `user_id` bigint UNSIGNED NOT NULL,
  `following_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user_followers`
--

INSERT INTO `user_followers` (`user_id`, `following_id`) VALUES
(5, 1),
(6, 4),
(4, 4),
(1, 2),
(1, 3),
(1, 8),
(6, 6),
(1, 6),
(8, 8),
(7, 6);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_post_id_foreign` (`post_id`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_user_id_foreign` (`user_id`),
  ADD KEY `likes_likeable_type_likeable_id_index` (`likeable_type`,`likeable_id`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`),
  ADD KEY `posts_category_id_foreign` (`category_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- Index pour la table `user_followers`
--
ALTER TABLE `user_followers`
  ADD KEY `user_followers_user_id_foreign` (`user_id`),
  ADD KEY `user_followers_following_id_foreign` (`following_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_followers`
--
ALTER TABLE `user_followers`
  ADD CONSTRAINT `user_followers_following_id_foreign` FOREIGN KEY (`following_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_followers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
