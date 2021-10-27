-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-09-2021 a las 16:58:52
-- Versión del servidor: 5.6.44-86.0
-- Versión de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo7rh_g-cigo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `video`
--

CREATE TABLE `video` (
  `id` int(10) UNSIGNED NOT NULL,
  `medico` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `miniatura` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `estado` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `video`
--

INSERT INTO `video` (`id`, `medico`, `miniatura`, `descripcion`, `video`, `fecha`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Médico', 'video1.jpg', 'descripcion', 'video1.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(2, 'Dra. Lína María Trujillo Sánchez', 'video2.jpg', 'Situción del cáncer de ovario en Colombia, pasado, presente y futuro.', 'video2.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(3, 'Dr. Daniel Sanabria', 'video3.jpg', 'Preservación de la fertilidad en cáncer de ovario', 'video3.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(4, 'Dr. Pedro Ramirez ', 'video4.jpg', 'Advanced Ovarian Cancer Laparoscopic Assessment', 'video4.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(5, 'Dr. René Pareja ', 'video5.jpg', 'Cáncer epitelial de ovario en estado avazado ¿Cúando y a quién operar? ', 'video5.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(6, 'Dr Gonzalo H. Giornelli ', 'video6.jpg', 'Manejo De La Recaída Platino Sensible', 'video6.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(7, 'Dr. Andres Poveda', 'video7.jpg', 'Cáncer de ovario primer línea de tratamiento ', 'video7.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(8, 'Dr. José Palacios ', 'video8.jpg', 'Histopatología del cáncer de ovario ', 'video8.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(9, 'Dr. Marc Edy Pierre ', 'video9.jpg', 'Cáncer de ovario avanzado: panoráma áctual ', 'video9.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(10, 'Dr. Sergio Martínez Roman ', 'video10.jpg', 'Cáncer Epitelial De Ovario. Recaída Cirugía De Rescate', 'video10.mp4', '2020-06-01', '1', '2020-06-01 05:51:04', '2020-06-01 05:51:04'),
(11, 'Dr. Juan Carlos Velasquez ', 'video11.jpg', 'Incidencia del cáncer de ovario ', 'video11.mp4', '2020-06-12', '1', '2020-06-12 00:00:00', '2020-06-12 00:00:00'),
(12, 'Dr. Fredy Quintero Rincón ', 'video12.jpg', 'Existe indicación de HIPEC en cáncer de ovario ', 'video12.mp4', '2020-06-12', '1', '2020-06-12 00:00:00', '2020-06-12 00:00:00'),
(13, 'medico', 'video13.jpg', 'descripcion', 'video13.mp4', '2020-06-16', '1', '2020-06-16 00:00:00', '2020-06-16 00:00:00'),
(14, 'Dr. Marc Edy Pierre ', 'video14.jpg', 'Manejo de pacientes de cáncer en tiempos de Covid - 19', 'video14.mp4', '2020-06-16', '1', '2020-06-16 00:00:00', '2020-06-16 00:00:00'),
(15, 'Dra. Adriana Castaño Mejía ', 'video15.jpg', 'Uso de antitumorales en cáncer ginecológico durante la pandemia por COVID-19', 'video15.mp4', '2020-06-16', '1', '2020-06-16 00:00:00', '2020-06-16 00:00:00'),
(16, 'Dra. Juliana Lucia Rodriguez', 'video16.jpg', '¿Qué sugiere Latinoamérica sobre el manejo del cáncer ginecológico en la pandemia del COVID-19? Resultados de LATAM survey', 'video16.mp4', '2020-06-16', '1', '2020-06-16 00:00:00', '2020-06-16 00:00:00'),
(17, ' Dr. Antonio Gonzalez', 'video17.jpg', 'Manejo De Pacientes Con Cáncer En La Clínica Navarra De Madrid En Tiempos De Covid -19', 'video17.mp4', '2020-06-16', '1', '2020-06-16 00:00:00', '2020-06-16 00:00:00'),
(18, 'Dr. Marc Edy Pierre ', 'video18.jpg', 'Revisión Multidisiplinaria de Casos Ginecología grupo GCIGO', 'video18.mp4', '2020-06-16', '1', '2020-06-16 00:00:00', '2020-06-16 00:00:00'),
(19, 'Dra. Gloria Palazuelos', 'video19.jpg', 'Imágenes diagnósticas en masas ováricas', 'video19.mp4', '2020-07-29', '1', NULL, NULL),
(20, 'Dr. Jaime Prat ', 'video20.jpg', 'Tumores ováricos borderline', 'video20.mp4', '2020-07-29', '1', NULL, NULL),
(21, 'Dr. Alejandro Rauh- Hain', 'video21.jpg', 'Cirugía profiláctica para reducir el riesgo de cánceres ginecológicos', 'video21.mp4', '2020-07-29', '1', NULL, NULL),
(22, 'Dr. Kathleen Moore', 'video22.jpg', 'Decision Making in Ovarian Cancer', 'video22.mp4', '2020-10-02', '1', NULL, NULL),
(23, ' Dr. Christina Fotopoulou', 'video24-4.jpg', ' Secondary\r\n cyto-reduction in platinum sensitive epithelial ovarian cancer. ', 'video23.mp4', '0000-00-00', '1', NULL, NULL),
(24, 'Dr. Daniel Sanabria', 'video24.jpg', ' Casos clínicos.', 'video24.mp4', '0000-00-00', '1', NULL, NULL),
(25, 'Dr. Luis Manso', 'video25.jpg', 'Ca epitelial avanzado de ovario: Nuevas evidencias. Post ASCO 2020. Hospital Universitario 12 de Octubre. Madrid', 'video25.mp4', '0000-00-00', '1', NULL, NULL),
(26, 'Dra.Eva Muñoz', 'video26.jpg', 'Melanoma vulvar en Colombia', 'video26.mp4', '0000-00-00', '1', NULL, NULL),
(27, 'Dr. Michael J Seckl', 'video27.jpg', ' Enfermedad trofoblastica gestacional', 'video27.mp4', '2020-11-12', '1', NULL, NULL),
(28, 'Profesor Denis Querleu', 'video28.jpg', 'Minimally invasive in endometrial cancer', 'video28.mp4', '2020-11-12', '1', NULL, NULL),
(29, 'Profesor Philippe Morice', 'video29.jpg', 'The conservative treatment of ovarian tumors', 'video29.mp4', '2020-11-13', '1', NULL, NULL),
(30, ' Dr. Andreas Duvois', 'video30.jpg', 'Citoreducción secundario en cáncer de Ovario  ', 'video30.mp4', '2020-11-19', '1', NULL, NULL),
(31, 'Instituto Nacional De Cancerología De México', 'video31.jpg', 'Cirugía preservadora de fertilidad en Cáncer Epitelial de Ovario, revisión de la literatura a propósito de un caso', 'video31.mp4', '2021-08-18', '1', NULL, NULL),
(32, 'Dr. Pedro Barrios y Dr. Zapardiel', 'video32.jpg', 'Indicación de HIPEC en manejo primario de carcinoma epitelial de ovario.', 'video32.mp4', '2021-08-18', '1', NULL, NULL),
(33, 'Dra. Gabriela Cinat', 'video33.jpg', 'Melanoma de mucosa. Casos Clínicos y revisión de la literatura', 'video33.mp4', '2021-08-18', '1', NULL, NULL),
(34, 'Dr. Bradly J. Monk', 'video34.jpg', 'Post ASCO ', 'video34.mp4', '2021-08-19', '1', NULL, NULL),
(35, 'Dr. Robert Coleman', 'video35.jpg', 'The Best of SGO 2021', 'video35.pm4', '2021-08-19', '1', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `video`
--
ALTER TABLE `video`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
