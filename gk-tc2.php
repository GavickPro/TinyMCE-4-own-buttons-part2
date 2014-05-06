<?php
/**
 * @package GK-TC2
 * @version 1.0
 */
/*
Plugin Name: GK TC2
Plugin URI: 
Description: 
Author: GavickPro
Version: 1.0
Author URI: http://www.gavick.com
*/

add_action('admin_head', 'gk_add_my_tc2_button');
add_action('admin_enqueue_scripts', 'gk_tc2_css');

function gk_add_my_tc2_button() {
    global $typenow;
    
    if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
   		return;
    }
    
    if( ! in_array( $typenow, array( 'post', 'page' ) ) )
        return;
	
	if ( get_user_option('rich_editing') == 'true') {
		add_filter("mce_external_plugins", "gk_add_tinymce_plugin2");
		add_filter('mce_buttons', 'gk_register_my_tc2_button');
	}
}

function gk_add_tinymce_plugin2($plugin_array) {
   	$plugin_array['gk_tc_button1'] = plugins_url( '/custom-icon-button.js', __FILE__ );
   	$plugin_array['gk_tc_button2'] = plugins_url( '/listbox-button.js', __FILE__ ); // CHANGE THE BUTTON SCRIPT HERE

   	return $plugin_array;
}

function gk_register_my_tc2_button($buttons) {
   array_push($buttons, "gk_tc_button1");
   array_push($buttons, "gk_tc_button2");
   
   unset($buttons[0]);
   unset($buttons[1]);
   unset($buttons[2]);
   return $buttons;
}

function gk_tc2_css() {
	wp_enqueue_style('gk-tc2', plugins_url('/style.css', __FILE__));
}

function gk_add_my_tc2_button_lang($locales) {
    $locales['gk_tc_button2'] = plugin_dir_path ( __FILE__ ) . 'translations.php';
    return $locales;
}

add_filter( 'mce_external_languages', 'gk_add_my_tc2_button_lang');

// EOF