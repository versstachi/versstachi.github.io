<?php
    require_once('Prizes.class.php');

    $prz = new Prizes;

    // var_dump($prz->registeredPrizess());
    $wins = [0,0,0,0,0,0,0,0,0,0, ];
    
    for ($i=0; $i < 10000; $i++) { 
    	++$wins[$prz->roll()];
    }

    $prizes = [];
    $plist = $prz->get_prizes_list();
    for ($i=0; $i < 10; $i++) { 
    	$prizes[] = str_replace('<br>', '', implode(' ', $plist[$i]['name']));
    }
?>

<pre>
	<b>Призы:</b>
<?
    print_r($prizes);
?>
	<b>Выигрыши:</b>
<?
    print_r($wins);
?>

</pre>
