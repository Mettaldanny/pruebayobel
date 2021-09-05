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
    $data['name'] = $request['name'];
    $data['email'] = $request['email'];
    $data['phone'] = $request['phone'];
    Cliente::create($data);
    return response()->json([
        'message' => "Successfully created",
        'success' => true
    ], 200);
  }

  public function delete($id){
    $res = Cliente::find($id)->delete();
    return response()->json([
        'message' => "Successfully deleted",
        'success' => true
    ], 200);
  }

  public function get($id){
    $data = Cliente::find($id);
    return response()->json($data, 200);
  }

  public function update(Request $request,$id){
    $data['name'] = $request['name'];
    $data['email'] = $request['email'];
    $data['phone'] = $request['phone'];
    Cliente::find($id)->update($data);
    return response()->json([
        'message' => "Successfully updated",
        'success' => true
    ], 200);
  }
}
