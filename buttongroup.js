(function() {
    tinymce.PluginManager.add('gk_tc_button2', function( editor, url ) {
        editor.addButton( 'gk_tc_button2', {
            title: 'My test button II',
            type: "buttongroup",
           	items: [
           	        {
           	        	title: 'First button',
           	        	icon: 'icon dashicons-wordpress',
           	        	onclick: function() {
           	        	    editor.insertContent('Hello World I');
           	        	}
           	        },
           	        {
           	        	title: 'Second button',
           	        	type: 'menubutton',
           	        	icon: 'icon dashicons-wordpress-alt',
           	        	menu: [
	           	        	{
	           	        		text: "Item I"
	           	        	},
	           	        	{
	           	        		text: "Item II"
	           	        	}
           	        	]
           	        }
           	    ]
        });
    });
})();