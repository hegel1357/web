$(document).ready(function() {
    $('button').click(clicked)
        function clicked() {
            var char = $(this).text();
            var result;
            var screen_val = $('p').text();
            if (char == 'C') {
                result = '';
            } else if (char == 'del') {
                result = screen_val.slice(0, screen_val.length - 1);
            }
            else if (char == '=') {
                try {
                    result = eval(screen_val);
                } catch (e) {
                    $('p').text('Error');
                    alert(e)
                }
            } else {
                result = screen_val + char;
            }
            $('p').text(result);
        }
    });