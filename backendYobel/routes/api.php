<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\PedidoController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('clientes')->group(function () {
    Route::get('/',[ ClienteController::class, 'getAll']);
    Route::post('/',[ ClienteController::class, 'create']);
    Route::delete('/{id}',[ ClienteController::class, 'delete']);
    Route::get('/{id}',[ ClienteController::class, 'get']);
    Route::put('/{id}',[ ClienteController::class, 'update']);
});

Route::prefix('pedido')->group(function () {
    Route::get('/',[ PedidoController::class, 'index']);
    Route::post('/',[ PedidoController::class, 'create']);
    Route::get('/{id}',[ PedidoController::class, 'get']);
    Route::put('/{id}',[ PedidoController::class, 'update']);
});
