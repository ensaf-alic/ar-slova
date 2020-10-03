<?php
/**
 * Plugin Name: Ekstra Slova
 * Author: Ensaf Alic
 * Author URI: https://ensafalic.se
 */


add_action('init', 'ar_slova_dugmad');

function ar_slova_dugmad(){
    add_filter('mce_external_plugins', 'dodaj_ar_dugmad');
    add_filter('mce_buttons', 'register_dugmad');
}
function dodaj_ar_dugmad( $plugin_array ){
    $plugin_array['ar-slova'] = plugin_dir_url( __FILE__ ) . 'ar-slova.js';
    return $plugin_array;
}
function register_dugmad($buttons){
    array_push($buttons, 'slovo-tha', 'slovo-ha', 'slovo-kha', 'slovo-dhal', 'slovo-sad', 'slovo-dad', 'slovo-ta', 'slovo-dha', 'slovo-ghayn');
    return $buttons;
}