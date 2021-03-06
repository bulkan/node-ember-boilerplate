templates = [
  'application.hdbs',
  'index.hdbs',
  'tasks.hdbs'
]

/*
 * Load an array of handlebar templates and append to body
 */
function loadTemplates(templates) {
    $(templates).each(function() {
        var tempObj = $('<script>');
        tempObj.attr('type', 'text/x-handlebars');

        // remove the extension and use the first part as data-template-name
        var dataTemplateName = this.substring(0, this.indexOf('.'));
        tempObj.attr('data-template-name', dataTemplateName);
        $.ajax({
            async: false,
            type: 'GET',
            url: '/templates/' + this,
            success: function(resp) {
                tempObj.html(resp);
                $('body').append(tempObj);
            }
        });
    });
}

loadTemplates(templates);
