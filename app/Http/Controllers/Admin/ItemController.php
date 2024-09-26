<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BasicController;
use App\Models\Item;
use Illuminate\Http\Request;
use SoDe\Extend\File;
use SoDe\Extend\JSON;

class ItemController extends BasicController
{
    public $model = Item::class;
    public $reactView = 'Admin/Courses';
    public $imageFields = ['image'];

    public function setReactViewProperties(Request $request)
    {
        $icons = JSON::parse(File::get('../storage/app/utils/icons.json'));
        return [
            'icons' => $icons
        ];
    }
}