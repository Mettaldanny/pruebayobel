<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
  public function getAll(){
    $data = Cliente::get();
    return response()->json($data, 200);
  }

  public function create(Request $request){
    $data['nombre'] = $request['nombre'];
    $data['apellido'] = $request['apellido'];
    $data['dni'] = $request['dni'];
    Cliente::create($data);
    return response()->json([
        'message' => "Creado exitosamente",
        'success' => true
    ], 200);
  }

  public function delete($id){
    $res = Cliente::find($id)->delete();
    return response()->json([
        'message' => "Eliminado exitosamente",
        'success' => true
    ], 200);
  }

  public function get($id){
    $data = Cliente::find($id);
    return response()->json($data, 200);
  }

  public function update(Request $request,$id){
    $data['nombre'] = $request['nombre'];
    $data['apellido'] = $request['apellido'];
    $data['dni'] = $request['dni'];
    Cliente::find($id)->update($data);
    return response()->json([
        'message' => "Actualizado exitosamente",
        'success' => true
    ], 200);
  }
}
