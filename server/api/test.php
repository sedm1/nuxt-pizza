<?php
include 'connect.php';

$sql = 'SELECT 
pizza.id, ingridients.ingridientsTitle, ingridients.ingridientsSlug
from `pizza_ingridients` 
JOIN `pizza` ON pizza_ingridients.pizzaId = pizza.id
JOIN `ingridients` ON pizza_ingridients.ingridientsId = ingridients.id
'

;


$sqlResult = $pdo->query($sql);
$sqlResult = $sqlResult->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($sqlResult, JSON_UNESCAPED_UNICODE);