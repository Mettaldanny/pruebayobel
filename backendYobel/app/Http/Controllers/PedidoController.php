<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function index()
    {
        $data = Pedido::get();
        return response()->json($data,200);
    }

    public function create(Request $request)
    {
      $cliente = Cliente::all();
      $data['fecha'] = $request['fecha'];
      $data['codigo'] = $request['codigo'];
      $data['cliente_id'] = $request['cliente_id'];
      Pedido::create($data);
      return response()->json([
          'message' => "Creado exitosamente",
          'success' => true
      ], 200);
    }

    public function update(Request $request, Pedido $pedido)
    {
      $data['fecha'] = $request['fecha'];
      $data['codigo'] = $request['codigo'];
      $data['usuario_id'] = $request['usuario_id'];
      Pedido::find($id)->update($data);
      return response()->json([
          'message' => "Actualizado exitosamente",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Pedido::find($id);
      return response()->json($data, 200);
    }
}
