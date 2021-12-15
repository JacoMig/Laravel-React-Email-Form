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


Route::post('/users/create', function(Request $request){
    
    $request->validate([
        'email' => 'required|email',
        'name' => 'required',
        'surname' => 'required'
    ]);

    $existingUsers = User::where('email',$request->email)->get();

    if(count($existingUsers) > 0){
        throw new \Exception('User already exists');
    } else {
        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email
        ]);
        return 'OK';
    }
});

Route::get('/users', function(){
   return User::all();
});



