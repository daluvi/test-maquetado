function getInternetExplorerVersion() {

    var rv = -1; // Return value assumes failure.
    //console.log(navigator);
    //console.log(navigator.appName);
    if (navigator.appName == 'Microsoft Internet Explorer') {

        var ua = navigator.userAgent;

        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

        if (re.exec(ua) != null)

            rv = parseFloat(RegExp.$1);

    } else if (navigator.appName == 'Netscape') {

        var ua = navigator.userAgent;

        var re = new RegExp("rv:([0-9]{1,}[\.0-9]{0,})");

        if (re.exec(ua) != null)

            rv = parseFloat(RegExp.$1);
    }

    return rv;

}

function checkVersion() {
    var ver = getInternetExplorerVersion();
    if (ver > -1) {
        if (6 < ver && ver <= 8) {
            document.write('<script type="text/javascript" src="' + CConfig.root + 'scripts/default/basic/html5.js"></script>');
            document.write('<script type="text/javascript" src="' + CConfig.root + 'scripts/default/basic/selectivizr-min.js"></script>');
        }
    }
}

checkVersion();