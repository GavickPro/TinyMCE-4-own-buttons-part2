<?php

if ( ! defined( 'ABSPATH' ) )
    exit;

if ( ! class_exists( '_WP_Editors' ) )
    require( ABSPATH . WPINC . '/class-wp-editor.php' );

function gk_tc_button_translation() {
    $strings = array(
        'button_label' => __('My test button I', 'gk_tc_button2'),
        'msg' => __('Hello World!', 'gk_tc_button2')
    );

    $locale = _WP_Editors::$mce_locale;
    $translated = 'tinyMCE.addI18n("' . $locale . '.gk_tc_button", ' . json_encode( $strings ) . ");\n";

    return $translated;
}

$strings = gk_tc_button_translation();