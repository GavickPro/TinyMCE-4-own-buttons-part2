(function() {
    tinymce.PluginManager.add('gk_tc_button2', function( editor, url ) {
        editor.addButton( 'gk_tc_button2', {
            title: 'My test button',
            type: 'menubutton',
            icon: 'icon gk-own-icon',
            menu: [
                {
                    text: 'Menu item I',
                    value: 'Text from menu item I',
                    icon: 'icon dashicons-wordpress',
                    onclick: function() {
                        editor.insertContent(this.value());
                    }
                },
                {
                    text: 'Menu item II',
                    value: 'Text from menu item II',
                    icon: 'icon dashicons-wordpress-alt',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                        {
                            text: 'First submenu item',
                            value: 'Text from sub sub menu',
                            icon: 'icon dashicons-smiley',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.insertContent(this.value());
                            }       
                        },
                        {
                            text: 'Second submenu item',
                            value: 'Text from sub sub menu',
                            icon: 'icon dashicons-edit',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.insertContent(this.value());
                            }       
                        }
                    ]
                },
                {
                    text: 'Menu item III',
                    value: 'Text from menu item III',
                    icon: 'icon dashicons-tickets',
                    onclick: function() {
                        editor.insertContent(this.value());
                    }
                }
           ]
        });
    });
})();