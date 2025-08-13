<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|nullable|string',
            'price' => 'sometimes|numeric',
            'compare_price' => 'sometimes|nullable|numeric',
            'quantity' => 'sometimes|nullable|integer',
            'category_id' => 'sometimes|exists:categories,id',
            'status' => 'sometimes|boolean',
            'is_featured' => 'sometimes|boolean',
            'image' => 'sometimes|nullable|string',
            'sku' => 'sometimes|nullable|string|max:255',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'sizes' => 'sometimes|nullable|array',
            'sizes.*' => 'exists:sizes,id',
        ];
    }
}
