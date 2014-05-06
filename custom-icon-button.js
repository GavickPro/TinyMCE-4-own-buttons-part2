(function() {
    tinymce.PluginManager.add('gk_tc_button1', function( editor, url ) {
        editor.addButton( 'gk_tc_button1', {
            title: editor.getLang('gk_tc_button.button_label'),
            icon: 'icon gk-own-icon',
            onclick: function() {
                editor.insertContent(editor.getLang('gk_tc_button.msg'));
            }
        });
    });
})();