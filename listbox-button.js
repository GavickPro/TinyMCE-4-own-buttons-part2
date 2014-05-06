(function() {
    tinymce.PluginManager.add('gk_tc_button2', function( editor, url ) {
        editor.addButton( 'gk_tc_button2', {
            title: 'My test button II',
            type: "listbox",
            fixedWidth: true,
            text: 'Lorem ipsum',
            values: [{
            	text:'Lorem ipsum',
            	value:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor lacus, sodales ac massa nec, vulputate tempor libero. In in nunc ut odio ullamcorper venenatis id sed augue. Mauris eget sem aliquam, fermentum metus vitae, dapibus nibh. Ut lobortis egestas congue. In posuere velit vel nisl tincidunt, non mattis augue sagittis. Aenean mattis at enim ac facilisis. Sed dui eros, pretium eget sapien adipiscing, dictum molestie tortor. Aenean consequat accumsan est id vestibulum. Phasellus vulputate tellus ante, ac convallis erat sagittis et. Nulla id risus sed quam vestibulum blandit.',
                onclick: function() {
                    editor.insertContent(this.value());
                }
            },
            {
            	text:'Gangsta lorem ipsum',
                value: 'Lorizzle funky fresh dolor yippiyo amizzle, sheezy adipiscing elizzle. Nullam sapien away, funky fresh volutpizzle, bling bling i\'m in the shizzle, gravida vizzle, uhuh ... yih!. Shit shit fo shizzle. Sed erizzle. Own yo\' izzle dolor turpis tempizzle fo shizzle. Maurizzle black fo shizzle mah nizzle fo rizzle, mah home g-dizzle izzle gizzle. Crunk izzle tortizzle. Pellentesque bling bling uhuh ... yih! crackalackin. In hac break it down platea dictumst. Black daahng dawg. Curabitizzle yippiyo things, pretizzle black, mattis go to hizzle, eleifend vitae, nunc. Yo mamma suscipizzle. Integizzle semper velit go to hizzle.',
            	onclick: function() {
                    editor.insertContent(this.value());
                }
            },
            {
            	text:'Veggie ipsum',
            	value: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.',
                onclick: function() {
                    editor.insertContent(this.value());
                }
            }]
        });
    });
})();