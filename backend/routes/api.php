<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\DatabaseJson\Models\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */


Route::get('/users/create', function(){
   
    $user = User::create([
        'name' => 'alvin',
        'surname' => 'alvinozzi',
        'email' => 'alvin@blabla.com'
    ]);
});

Route::get('/users', function(){
   return User::all();
});

Route::get('/users/delete', function(){
    $id = 1;
    $user = User::delete();
});