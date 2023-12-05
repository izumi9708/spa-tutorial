<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserEntrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_entry')->insert([
            [
                'title' => '肩トレ',
                'body' => '午前中に行う'
            ],
            [
                'title' => '掃除',
                'body' => 'リビング、風呂、トイレ'
            ],
            [
                'title' => '仕事',
                'body' => '１４時締め切りの確認'
            ]
        ]);
    }
}
