var oldString = 'Languaje',
    newString = '<span>Languaje</span>',
    newText = $('h4').text().replace(RegExp(oldString,"gi"),newString);

$('h4').html(newText);