<?php

if( isset($_GET['id']) && $_GET['id']==='dk09309324helrejrelrjlcx' )
{
    require_once('../Prizes.class.php');
    require_once('../Player.class.php');

    $prizes = new Prizes;
    $player = new Player;

    $players = array_reverse( $player->registeredPlayers() );

    $prizes_list = $prizes->get_prizes_list();

    $list = [];
   	$is_used = '<span class="is_used">Использована</span>';
   	$is_taken = '<span class="is_taken">Получена</span>';

	foreach ($players as $p) {
		$uname = arr($p, 'user_name');
		$uphone = arr($p, 'user_phone');
		$date = arr($p, 'date');
       	
       	$last_prize = arr($p, 'last_prize', -1);
       	$last_prize =  ($last_prize >=0) 
   			? '<img src="../'.$prizes_list[$last_prize]['image'].'"> ' 
   			  .str_replace('<br>', ' ', implode(' ', $prizes_list[$last_prize]['name']))
   			: '---';

        $tries_count = count(arr($p, 'prizes', []));
        $free_run = arr($p, 'free_run_used', 0) ? $is_used: '';

        $shared = arr($p, 'share_used',  0) ? $is_used : ( arr($p, 'share_taken',  '') ? $is_taken : '');
        $ticket = arr($p, 'ticket_used', 0) ? $is_used : ( arr($p, 'ticket_taken', '') ? $is_taken : '');
        
		$list[] = "
		    <tr>
			<td>$date</td>
			<td>$uname</td>
			<td>$uphone</td>
			<td class='last_prize'>$last_prize</td>
			<td>$tries_count</td>
			<td>$free_run</td>
			<td>$shared</td>
			<td>$ticket</td>
			</tr>";
	}
	$list_table = implode("\n", $list);
	                // <th>Последний приз</th>
	                // <th>Количество попыток</th>
	                // <th>Бесплатная попытка</th>
	                // <th>Поделился</th>
	                // <th>Купил билет</th>		                

	?>

	<!DOCTYPE html>
	<html>
	<head>
		<title></title>
		<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
		<style type="text/css" media="screen">
			body
			{
				font-family: Verdana, Arial, sans-serif;
			}
			.is_used
			{
				background-color: #befbbe;
			}
			.is_taken
			{
				background-color: #f5fbbe;
			}
			.last_prize img
			{
				width: 24px;
			}
			#list
			{
				display: none;
			}
		</style>
		<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
		<script type="text/javascript" src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>


		<script type="text/javascript">
			$(document).ready( function () {
			    $('#list').DataTable({
			    	"pageLength": 100,
			    });
			    $('#list').show();
			} );
		</script>
	</head>
	<body>
		<table id="list" class="display" style="width:100%">
	        <thead>
	            <tr>
	                <th>Дата</th>
	                <th>Телефон</th>
	                <th>Имя</th>
	                <th>Последний приз</th>
	                <th>Количество попыток</th>
	                <th>Бесплатная попытка</th>
	                <th>Поделился</th>
	                <th>Купил билет</th>		                
	            </tr>
	        </thead>
	        <tbody>		
				<?=$list_table;?>
	        </tbody>		
	        <tfoot>
	            <tr>
	                <th>Дата</th>
	                <th>Телефон</th>
	                <th>Имя</th>
	                <th>Последний приз</th>
	                <th>Количество попыток</th>
	                <th>Бесплатная попытка</th>
	                <th>Поделился</th>
	                <th>Купил билет</th>		                
	            </tr>
	        </tfoot>
        </table>
	</body>
	</html>

	<?
}
else echo  "1,2,3,4,5,";

