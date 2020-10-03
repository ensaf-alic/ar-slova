(function() {
    tinymce.create('tinymce.plugins.ArSlova', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {

            ed.addButton('slovo-dad', {
                title : 'Slovo ض',
                cmd : 'dodaj-dad',
                image : url + '/images/dad.png'
            });
            ed.addCommand('dodaj-dad', function(){
                var letter = "Ḍ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            });            

            ed.addButton('slovo-dha', {
                title : 'Slovo ظ',
                cmd : 'dodaj-dha',
                image : url + '/images/dha.png'
            });
            ed.addCommand('dodaj-dha', function(){
                var letter = "Ẓ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            }); 

            ed.addButton('slovo-dhal', {
                title : 'Slovo ذ',
                cmd : 'dodaj-dhal',
                image : url + '/images/dhal.png'
            });
            ed.addCommand('dodaj-dhal', function(){
                var letter = "Ẕ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            }); 

            ed.addButton('slovo-ghayn', {
                title : 'Slovo غ',
                cmd : 'dodaj-ghayn',
                image : url + '/images/ghayn.png'
            });
            ed.addCommand('dodaj-ghayn', function(){
                var letter = "Ġ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            }); 

            ed.addButton('slovo-ha', {
                title : 'Slovo ح',
                cmd : 'dodaj-ha',
                image : url + '/images/ha.png'
            });
            ed.addCommand('dodaj-ha', function(){
                var letter = "Ḫ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            }); 

            ed.addButton('slovo-kha', {
                title : 'Slovo خ',
                cmd : 'dodaj-kha',
                image : url + '/images/kha.png'
            });
            ed.addCommand('dodaj-kha', function(){
                var letter = "Ḥ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            });

            ed.addButton('slovo-sad', {
                title : 'Slovo ص',
                cmd : 'dodaj-sad',
                image : url + '/images/sad.png'
            });
            ed.addCommand('dodaj-sad', function(){
                var letter = "Ṣ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            }); 

            ed.addButton('slovo-ta', {
                title : 'Slovo ط',
                cmd : 'dodaj-ta',
                image : url + '/images/ta.png'
            });
            ed.addCommand('dodaj-ta', function(){
                var letter = "Ṭ";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            }); 

            ed.addButton('slovo-tha', {
                title : 'Slovo ث',
                cmd : 'dodaj-tha',
                image : url + '/images/tha.png'
            });
            ed.addCommand('dodaj-tha', function(){
                var letter = "Ş";
                var selected_text = ed.selection.getContent();
                if(selected_text == selected_text.toUpperCase() ){
                    ed.execCommand('mceInsertContent', 0, letter);
                }else{
                    ed.execCommand('mceInsertContent', 0, letter.toLowerCase());
                }
            }); 


 
        },
 
        /**
         * Creates control instances based in the incomming name. This method is normally not
         * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
         * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
         * method can be used to create those.
         *
         * @param {String} n Name of the control to create.
         * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
         * @return {tinymce.ui.Control} New control instance or null if no control was created.
         */
        createControl : function(n, cm) {
            return null;
        },
 
        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'Arapska Slova',
                author : 'Ensaf',
                authorurl : 'http://wp.tutsplus.com/author/leepham',
                infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/example',
                version : "0.1"
            };
        }
    });
 
    // Register plugin
    tinymce.PluginManager.add( 'ar-slova', tinymce.plugins.ArSlova );
})();