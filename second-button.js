(function() {
    tinymce.PluginManager.add('gk_tc_button2', function( editor, url ) {
        editor.addButton( 'gk_tc_button2', {
            title: 'My test button II',
            icon: 'icon dashicons-wordpress',
            onclick: function() {
                editor.insertContent('Hello World II');
            }
        });
    });
})();