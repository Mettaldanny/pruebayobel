<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable =[
      'fecha',
      'codigo',
      'cliente_id'
    ];

    public function clientes()
    {
      return $this->belongsTo('App\Pedido');
    }
}
