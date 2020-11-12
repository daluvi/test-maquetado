/*jslint node: true, indent:4, browser: true, plusplus: true, unparam: true*/
/*global $:false, jQuery: false, requirejs: false, define: false*/
'use strict';

function css_browser_selector(a) {
    var b = {
            orientation: "",
            maxw: 0
        },
        c = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
        d = c.length,
        e = a.toLowerCase(),
        f = function (a) {
            return new RegExp(a, "i").test(e);
        },
        g = "gecko",
        h = "webkit",
        i = "chrome",
        j = "firefox",
        k = "safari",
        l = "opera",
        m = "mobile",
        n = "android",
        o = "blackberry",
        p = "lang_",
        /*q = "device_",*/
        r = document.documentElement,
        s = [!/opera|webtv/i.test(e) && /msie\s(\d+)/.test(e) ? "ie ie" + (/trident\/4\.0/.test(e) ? "8" : RegExp.$1) : f("firefox/") ? g + " " + j + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(e) ? " " + j + RegExp.$2 + " " + j + RegExp.$2 + "_" + RegExp.$4 : "") : f("gecko/") ? g : f("opera") ? l + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(e) ? " " + l + RegExp.$2 + " " + l + RegExp.$2 + "_" + RegExp.$4 : /opera(\s|\/)(\d+)\.(\d+)/.test(e) ? " " + l + RegExp.$2 + " " + l + RegExp.$2 + "_" + RegExp.$3 : "") : f("konqueror") ? "konqueror" : f("blackberry") ? o + (/Version\/(\d+)(\.(\d+)+)/i.test(e) ? " " + o + RegExp.$1 + " " + o + RegExp.$1 + RegExp.$2.replace(".", "_") : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(e) ? " " + o + RegExp.$2 + (RegExp.$3 ? " " + o + RegExp.$2 + RegExp.$3 : "") : "") : f("android") ? n + (/Version\/(\d+)(\.(\d+))+/i.test(e) ? " " + n + RegExp.$1 + " " + n + RegExp.$1 + RegExp.$2.replace(".", "_") : "") + (/Android ([\w\W]+); ([\w\W]+) Build/i.test(e) ? " device_" + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_") : "") : f("chrome") ? h + " " + i + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(e) ? " " + i + RegExp.$2 + (RegExp.$4 > 0 ? " " + i + RegExp.$2 + "_" + RegExp.$4 : "") : "") : f("iron") ? h + " iron" : f("applewebkit/") ? h + " " + k + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(e) ? " " + k + RegExp.$2 + " " + k + RegExp.$2 + RegExp.$3.replace(".", "_") : / Safari\/(\d+)/i.test(e) ? RegExp.$1 === "419" || RegExp.$1 === "417" || RegExp.$1 === "416" || RegExp.$1 === "412" ? " " + k + "2_0" : RegExp.$1 === "312" ? " " + k + "1_3" : RegExp.$1 === "125" ? " " + k + "1_2" : RegExp.$1 === "85" ? " " + k + "1_0" : "" : "") : f("mozilla/") ? g : "", f("mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk") ? m : "", f("j2me") ? "j2me" : f("iphone") ? "iphone" : f("ipod") ? "ipod" : f("ipad") ? "ipad" : f("playbook") ? "playbook" : f("kindle|silk") ? "kindle" : f("mac") ? "mac" + (/mac os x ((\d+)[.|_](\d+))/.test(e) ? " mac" + RegExp.$1.replace(".", "_") : "") : f("win") ? "win" + (f("windows nt 6.2") ? " win8" : f("windows nt 6.1") ? " win7" : f("windows nt 6.0") ? " vista" : f("windows nt 5.2") || f("windows nt 5.1") ? " win_xp" : f("windows nt 5.0") ? " win_2k" : f("windows nt 4.0") || f("WinNT4.0") ? " win_nt" : "") : f("freebsd") ? "freebsd" : f("x11|linux") ? "linux" : "", /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(e) ? (p + RegExp.$2).replace("-", "_") + (RegExp.$3 !== "" ? (" " + p + RegExp.$1).replace("-", "_") : "") : ""],
        u = s.join(" ").replace(/ +/g, " ") + " js ";


    function t() {
        var v = window.outerWidth || r.clientWidth,
            x = window.outerHeight || r.clientHeight,
            ww,
            widthClasses = "",
            z;
        b.orientation = (v < x) ? "portrait" : "landscape";
        r.className = r.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "");
        for (ww = d - 1; ww >= 0; ww--) {
            if (v >= c[ww]) {
                b.maxw = c[ww];
                break;
            }
        }
        for (z in b) {
            if (b.hasOwnProperty(z)) {

                widthClasses += " " + z + "_" + b[z];
            }
        }
        r.className = r.className + widthClasses;

        return widthClasses;
    }
    window.onresize = t;
    t();
    r.className = (u + r.className.replace(/(no[\-|_]?)?js/g, "")).replace(/^ /, "");
    return u;
}
var showLog = false;

function log(a) {
    if (window.console.log && showLog === true){
        console.log(a);
    }
}
function setClickOut(limit, ejecute) {
    var Node = $('body');
    Node.on('click', function (e) {
        e.stopPropagation();
        var valbool = true,
            target = $(e.target).closest(limit).length > 0;
        if (target) {
            valbool = false;
        }
        if (valbool) {
            ejecute();
            valbool = target = null;
        }
    });
}
css_browser_selector(navigator.userAgent);
/*****jQUERY*****/

/*SKYPE*/
$(document).ready(function () {
    window.setTimeout(function () {
        if ($('.skype_pnh_container').hasClass('skype_pnh_container') || $('.skype_pnh_print_container').hasClass('skype_pnh_print_container')) {
            $('.skype_pnh_container').html('');
            $('.skype_pnh_print_container').removeClass('skype_pnh_print_container');
        }
    }, 800);
});

jQuery.support.placeholder = (function () {
    var retorno = (document.createElement('input').placeholder !== undefined) ? true : false;
    return retorno;
}());

jQuery.placeholder = function () {
    if (!$.support.placeholder) {
        var active = document.activeElement;
        $(':text').focus(function () {
            var $this = $(this);
            if ($this.attr('placeholder') !== '' && $this.val() === $this.attr('placeholder')) {
                $this.val('').removeClass('hasPlaceholder');
            }
        }).blur(function () {
            var $this = $(this);
            if ($this.attr('placeholder') !== '' && ($this.val() === '' || $this.val() === $this.attr('placeholder'))) {
                $this.val($(this).attr('placeholder')).addClass('hasPlaceholder');
            }
        });
        $(':text').blur();
        $(active).focus();
        $('form').submit(function () {
            var $this = $(this);
            $this.find('.hasPlaceholder').each(function () {
                $this.val('');
            });
        });
    }
};

function loadImgComplete(Node, ejecute, bool, num, initSetting) {
    
    if (Node !== 'undefined'){ejecute(); return false}
    var $container = (Node[0] === window) ? $(document) : Node,
        $img,
        time,
        cantImg,
        cant;
    
    bool = bool || false;
    num = num || 0;
    initSetting = initSetting || function () {
        return false;
    };

    if ($container.length > 0) {
        $img = $container.find('img');
        cantImg = $img.length;
        cant = 0;
        if ($img.length > 0) {
            attachBackgroundLoading('open', 'body', {
                opacity: 0.2
            });
            $img.each(function (index, el) {
                if (el.complete) {
                    cant++;
                } else {
                    clearTimeout(time);
                    
                    time = setTimeout(loadImgComplete, 200, Node, ejecute, bool, num, initSetting);
                }
                if (cant === num && bool) {

                    initSetting();
                }
                if (cant === cantImg) {
                    ejecute();
                    attachBackgroundLoading('close', 'body', {});
                }
            });
        } else {
            ejecute();
        }
    }
}

function setMinHeightPage(object) {
    var $$media = function () {
        var windowHeight = window.innerHeight,
            headerHeight = $('header').outerHeight(true),
            footerHeight = $('footer').outerHeight(true);
            object.css('minHeight', windowHeight - headerHeight - footerHeight);
    };
    
    loadImgComplete($(window), $$media);
}
/**************************/
/**
 * 
 * @param {JQuery domNode} node A JQuery node selector
 * @param {Number} width The width of node
 * @param {Number} maxNode the quantity of node to move
 * @param {Number} speed The duration of transition in milliseconds
 */
function settingTouchSwipe(node, nextNode, prevNode, width, maxNode, speed) {
    var currentNode = 0,
        swipeOptions = {
            triggerOnTouchEnd: true,
            swipe: swipe,
            allowPageScroll: "vertical",
            threshold: 75
        };

    function swipe(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
        
        //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
        if (direction == "left" || direction == "right") {
            var duration = 0;

            if (direction == "left") {
                next()
                // scroll((width * currentNode) + distance, duration);
            } else if (direction == "right") {
                previous()
                // scroll((width * currentNode) - distance, duration);
            }
        }
    }

    function previous() {
        currentNode = Math.max(currentNode - 1, 0);
        scroll(width * currentNode, speed);
    }

    function next() {
        currentNode = Math.min(currentNode + 1, maxNode - 1);
        scroll(width * currentNode, speed);
    }

    /**
     * Manually update the position of the Node on drag
     */
    function scroll(distance, duration) {
        node.css("transition-duration", (duration / 1000).toFixed(1) + "s");

        //inverse the number we set in the css
        var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
        node.css("transform", "translate(" + value + "px,0)");
    }

    $(function () {
        node.swipe(swipeOptions);
        nextNode.on('click', function(){
            
            next();
        });
        prevNode.on('click', function(){
            
            previous();
        });
    });
}

var $$ejectIn = function() {
    $('.account, .search, .shopCart').off('click');
    
    if($('a.linkMenu').length === 0 ) {
        var div1 = $('nav'),
            div2 = $('.subNav'),
            div3 = $('aside .filtered'),
            div4 = $('aside'),
            cloneDiv1  = div1.clone(true),
            cloneDiv2  = div2.clone(true),
            cloneDiv3 = div3.clone(true),
            containerMenu = $('<div>').addClass('mobMenu'),
            itemSwipe = $('<li>'),
            linkMenu = $('<a>').addClass('linkMenu');
            div4.find('.filtered').remove();
        var cloneDiv4 = div4.clone(true),
            item1 = itemSwipe.clone().append('<a href="#" class="nextSwipe">filtro >></a>').append(cloneDiv1),
            item2 = itemSwipe.clone().append('<a href="#" class="nextSwipe">sub navegacion >></a><a href="#" class="prevSwipe"><< navegacion</a>').append(cloneDiv4),
            item3 = itemSwipe.clone().append('<a href="#" class="prevSwipe"><< filtro</a>').append(cloneDiv2),
            containerSwiper = $('<ul>').append(item1).append(item2).append(item3),
            menu = containerMenu.append(containerSwiper);
        
        

        div1.remove();
        div2.remove();
        div3.remove();
        div4.remove();
        

        $('header').append(linkMenu).append(menu);
        $('article').prepend(cloneDiv3);
        $('.linkMenu').off('click');
        $('.linkMenu').on('click', function(e){
            e.preventDefault();
            var nodeDom = $(e.target);
            var has = nodeDom.hasClass('open');
            if(has){
                nodeDom.removeClass('open');
                $('.mobMenu>ul').swipe("disable");
            } else {
                nodeDom.addClass('open');
                setTimeout(() => {
                    $('.mobMenu>ul').swipe("enable");
                }, 1500);
            }
        });
        settingTouchSwipe($('.mobMenu>ul'), $('.mobMenu .nextSwipe'), $('.mobMenu .prevSwipe'),240, 3, 500);
        $('.mobMenu>ul').swipe("disable");
    }
}

var $$ejectOut = function() {
    $('.account, .search, .shopCart').off('click');
    $('.account, .search, .shopCart').on('click', function(e){
        e.preventDefault();
        var nodeDom = $(e.target);
        var has = nodeDom.hasClass('open');
        if(has){
            nodeDom.removeClass('open');
        } else {
            nodeDom.addClass('open');
            setClickOut(e.target, function(){
                nodeDom.removeClass('open');
            });
        }

    });
    if($('a.linkMenu').length !== 0 ) {
        var div1 = $('aside'),
            div2 = $('nav'),
            div3 = $('.subNav'),
            div4 = $('article .filtered'),
            cloneDiv1 = div1.clone(true),
            cloneDiv2 = div2.clone(true),
            cloneDiv3 = div3.clone(true),
            cloneDiv4 = div4.clone(true);
        
        $('.mobMenu').remove();
        $('.linkMenu').remove();
        div4.remove();


        $('header').append(cloneDiv2).append(cloneDiv3);
        $('.container').prepend(cloneDiv1);
        $('aside').prepend(cloneDiv4);
        $('.linkMenu').off('click')
    }
}

function loadingData(){
    jQuery.getJSON('./data.json', function( data ) {
        $.each( data, function( key, val ) {
            var itemData = {
                    type: val.type,
                    color: val.color,
                    talle: val.talle
                },
                li = $('<li data-item="'+escape(JSON.stringify(itemData))+'">'),
                a = $('<a href="' + val.link + '">'),
                fig = $('<figure>'),
                img = $('<img src="'+val.img.src+'" alt="'+val.img.alt+'">'),
                capt = $('<figcaption>').text(val.title),
                em = $('<em>').text(val.price);
                
            capt.append(em)
            fig.append(img).append(capt)
            a.append(fig)
            li.append(a)
            $('.product').append(li);
        });
    });
}

function filterData(filter){
    
    $('.product li').each(function(key, val){
        var data = JSON.parse(unescape($(val).data('item')));
        $.each(filter, function(key1, val1){
            if (data[key1] === val1) {
                $(val).css('display', 'block');
            } else {
                
                $(val).css('display', 'none');
            }
        });
    });
}

/*jQuery Global Functions*/
$(function () {
    /*PLACEHOLDER*/
    $.placeholder();
    /*MIN HEIGHT PAGE*/
    setMinHeightPage($('article, article > .container, article > .container section'));
    /**************************/
    loadingData();
    
    $('.filter a').on('click', function(e){
        filterData($(e.target).data())
    })
    $('.jqtransform').jqTransform();
    $( "aside .filter" ).accordion({
        collapsible: true,
        heightStyle: "content",
    });

    mediaCheck({
        media: '(max-width: 767px)',
        entry: function () {
            $$ejectIn()
        },
        exit: function () {
            $$ejectOut()
        }
    });
});