<?php
include 'connect.php';
//2 - Неверный запрос, 1 - все ок, 0 - не ок, 
$res = [];
$query = $_POST['query'];

if ($query == 'all'){
    $sql = 'SELECT * FROM `pizza`';
    $sqlResult = $pdo->query($sql);
    if ($sqlResult){
        $res['data'] = $sqlResult->fetchAll(PDO::FETCH_ASSOC);
        $res['status'] = 1;
    } else {
        $res['data'] = [];
        $res['status'] = 0;
    }
} elseif($query == 'ingridients'){
    $sql = 'SELECT * FROM `ingridients`';
    $sqlResult = $pdo->query($sql);
    if ($sqlResult){
        $res['data'] = $sqlResult->fetchAll(PDO::FETCH_ASSOC);
        $res['status'] = 1;
    } else {
        $res['data'] = [];
        $res['status'] = 0;
    }
} 
elseif($query == 'ingridients_to_products'){
    $sql = 'SELECT pizza.id, ingridients.ingridientsSlug
    FROM `pizza_ingridients` 
    JOIN `pizza` ON pizza_ingridients.pizzaId = pizza.id
    JOIN `ingridients` ON pizza_ingridients.ingridientsId = ingridients.id';

    $sqlResult = $pdo->query($sql);
    
    if ($sqlResult){
        $res['data'] = $sqlResult->fetchAll(PDO::FETCH_ASSOC);
        $res['status'] = 1;
    } else {
        $res['data'] = [];
        $res['status'] = 0;
    }
}
elseif($query == 'id'){
    $id = $_POST['id'];
    $sqlResult = $pdo->prepare('SELECT * FROM `pizza` WHERE `id` = :id');
    $sqlResult->execute(array('id' => $id));
    if ($sqlResult){
        $res['data'] = $sqlResult->fetch(PDO::FETCH_ASSOC);
        $res['status'] = 1;
    } else {
        $res['data'] = [];
        $res['status'] = 0;
    }
}
else {
    $res['status'] = 2;
}


echo json_encode($res, JSON_UNESCAPED_UNICODE);