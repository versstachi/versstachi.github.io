<?
    require_once('utils.php');

    class Player
    {
        private $players_file = __DIR__.'/players/list.json';
        private $players = false;

        public function findOrCreate($player)
        {
            if( $player['user_phone'] )
            {
                $changed = true;
                if( $player_old = $this->findPlayer($player) )
                {
                    // print_r(['Player found']);
                    $changed = false;
                    // если где-то увидели, что попытка использована, значит использована
                    foreach(['free_run_used', 'ticket_taken', 'share_taken', 'ticket_used', 'share_used'] as $c)
                        if( intval(arr($player, $c, 0)) !== intval(arr($player_old, $c, 0)) )  
                        {
                            $player[$c] = 1;
                            $changed = true;
                            // print_r(['tryes changed']);
                        }

                    // если имя изменилось, значит надо обновить в базе
                    if( arr($player, 'user_name', '') !== arr($player_old, 'user_name', '') )
                    {
                        // print_r(['Name changed']);
                        $changed = true;
                    }

                    // если последний приз изменился, значит надо обновить в базе
                    if( arr($player, 'last_prize', '') !== arr($player_old, 'last_prize', '') )
                    {
                        // print_r(['Prize changed']);
                        $changed = true;
                    }

                    // если список призов изменился, значит надо обновить в базе
                    if( count(arr($player_old, 'prizes', [])) != count( arr($player, 'prizes', []) ) )
                    {
                        // print_r(['Prizes list changed']);
                        // $player['prizes'] = $prizes;
                        $changed = true;
                    }

                }
                // else
                    // print_r(['No user found. Creating new...']);

                if( $changed )
                    $this->savePlayer($player);
            }

            return $player;
        }

        private function savePlayer($player)
        {
            $player['date'] = date('Y-m-d H:i:s');
            $write = file_put_contents($this->players_file, ','.json_encode($player), LOCK_EX | FILE_APPEND);
            $this->players[] = $player;

            return $write ? 'OK' : 'Ошибка записи! Обратитесь к администратору!';
        }

        private function findPlayer($player)
        {
            $tries = array_reverse( $this->findTries($player['user_phone']) );
            $player_old = [];

            if ($tries)
                foreach ($tries as $try) {
                    foreach ($try as $k=>$v) {
                        if( empty($player_old[$k]) && $v)
                            $player_old[$k] = $v;
                    }
                }
                
            return $player_old;
        }

        private function findTries($phone)
        {
            $tries = [];
            if($phone)
                foreach($this->registeredPlayers() as $k=>$player)
                    if( arr($player, 'user_phone', '') === $phone )
                        $tries[] = $player;

            // print_r(['findTries', $phone, $tries]);

            return $tries;
        }


        public function registeredPlayers()
        {
            if( $this->players === false )
            {
                $players_txt = file_get_contents($this->players_file, LOCK_EX );
                $this->players =  $players_txt ? json_decode('['.$players_txt.']', true) : [];
                // print_r(['registeredPlayers', $players_txt]);
            }
            return $this->players;
        }

    }
