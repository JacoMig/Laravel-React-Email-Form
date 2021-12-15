<?php

namespace App\DatabaseJson\Models;

use DatabaseJson\Model;

class User extends Model
{
    //
    
    public $id = 0;
    public $name = '';
    public $surname = '';
    public $email = '';
    public $timestamps = false;
}
