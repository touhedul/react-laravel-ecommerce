<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FrontendProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Product::with('images', 'sizes');

        if ($request->has('categories')) {
            $query->whereIn('category_id', $request->categories);
        }

        return $query->get();
    }

    public function show(Product $product)
    {
        return $product->load('images', 'sizes');
    }
}
