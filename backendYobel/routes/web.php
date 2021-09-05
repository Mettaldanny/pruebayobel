<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('cliente')->group(function () {
    Route::get('/',[ ClienteController::class, 'getAll']);
    Route::post('/',[ ClienteController::class, 'create']);
    Route::delete('/{id}',[ ClienteController::class, 'delete']);
    Route::get('/{id}',[ ClienteController::class, 'get']);
    Route::put('/{id}',[ ClienteController::class, 'update']);
});
