$(function() {
    var $navTop = $('#header');
    var $breadcrumb = $('.breadcrumbs-wrapper');
    var topPos = $navTop.height() + $breadcrumb.height();

    $('.toc-wrapper').pushpin({
        top: topPos
    });

    $('.scrollspy').scrollSpy();


    var $dsInput = $('#dsPicker').pickadate({
        "selectYears": true,
        "selectMonths": true,
        "min": new Date(),
        onSet: function(value) {
            dePicker.set('min', new Date(value.select));
        }
    });

    var dsPicker = $dsInput.pickadate('picker');

    var $deInput = $('#dePicker').pickadate({
        "selectYears": true,
        "selectMonths": true,
        "min": new Date(),
        onSet: function(value) {
            // dsPicker.set('max',new Date(value.select));
        }
    });

    var dePicker = $deInput.pickadate('picker');

    // $('#start-time2').timepicker({
    //     lang:{
    //         am:"上午",
    //         pm:"下午",
    //         AM:"上午",
    //         PM:"下午"
    //     }
    // });
    // $('#arrive-time2').timepicker({
    //     lang:{
    //         am:"上午",
    //         pm:"下午",
    //         AM:"上午",
    //         PM:"下午"
    //     }
    // });


    var um = UM.getEditor('myEditor');

    $('.slider').slider({
        full_width: true
    });

    $('.slick-demo').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.select2-tags').select2({
        tags: true,
        theme: "classic"
    });

    $('#tagsinput').tagsInput({
       width:'auto',
       height:'auto',
       defaultText:'添加一个标签'
    });

    $('#tagsinput2').tagsInput({
       width:'auto',
       height:'auto',
       defaultText:'添加一个标签'
    });

    $('#alert-basic').click(function() {
        swal("这是一条基本消息!", "消息内容消息内容,消息内容!");
    });

    $('#alert-success').click(function() {
        swal("这是一条成功提示消息!", "成功提示消息内容!", "success");
    });

    $('#alert-warning').click(function() {
        swal({
            title: "确定删除?",
            text: "如果删除将无法恢复!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，删除！",
            closeOnConfirm: false
        }, function() {
            swal("已删除!", "您选择的内容已被删除！", "success");
        });
    });

    $('#alert-error').click(function() {
        swal("不好...", "有错误产生!", "error");
    });

    $('#alert-slide').click(function() {
        swal({
            title: "输入框测试!",
            text: "填写内容:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "输入框内容"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("还没有输入内容!");
                return false
            }
            swal("不错!", "您填写了: " + inputValue, "success");
        });
    });

    // Standard Dialogs
    $("#dialog-alert").on('click', function() {
        alertify.alert("This is an alert dialog");
        return false;
    });

    $("#dialog-confirm").on('click', function() {
        alertify.confirm("This is a confirm dialog", function(e) {
            if (e) {
                alertify.success("You've clicked OK");
            } else {
                alertify.error("You've clicked Cancel");
            }
        });
        return false;
    });

    $("#dialog-prompt").on('click', function() {
        alertify.prompt("This is a prompt dialog", function(e, str) {
            if (e) {
                alertify.success("You've clicked OK and typed: " + str);
            } else {
                alertify.error("You've clicked Cancel");
            }
        }, "Default Value");
        return false;
    });

    // Standard Notifications
    $("#log-standard").on('click', function() {
        alertify.log("Standard log message");
        return false;
    });

    $("#log-success").on('click', function() {
        alertify.success("Success log message");
        return false;
    });

    $("#log-error").on('click', function() {
        alertify.error("Error log message");
        return false;
    });

    $("#log-persistent").on('click', function() {
        alertify.log("Will stay until clicked", "", 0);
        return false;
    });


    $('.popover').webuiPopover({
        placement: 'auto', //values: auto,top,right,bottom,left,top-right,top-left,bottom-right,bottom-left,auto-top,auto-right,auto-bottom,auto-left
        width: 'auto', //can be set with  number
        height: 'auto', //can be set with  number
        trigger: 'click', //values:  click,hover,manual
        style: '', //values:'',inverse
        constrains: null, // constrains the direction when placement is  auto,  values: horizontal,vertical
        animation: null, //pop with animation,values: pop,fade (only take effect in the browser which support css3 transition)
        delay: { //show and hide delay time of the popover, works only when trigger is 'hover',the value can be number or object
            show: null,
            hide: 300
        },
        async: {
            before: function(that, xhr) {}, //executed before ajax request
            success: function(that, data) {} //executed after successful ajax request
        },
        cache: true, //if cache is set to false,popover will destroy and recreate
        multi: false, //allow other popovers in page at same time
        arrow: true, //show arrow or not
        title: 'WebUI Popover', //the popover title ,if title is set to empty string,title bar will auto hide
        content: '<p>This is webui popover demo.</p><p>just enjoy it and have fun !</p>', //content of the popover,content can be function
        closeable: false, //display close button or not
        padding: true, //content padding
        type: 'html', //content type, values:'html','iframe','async'
        url: '', //if not empty ,plugin will load content by url
        backdrop: false, //if backdrop is set to true, popover will use backdrop on open
        dismissible: true // if popover can be dismissed by  outside click or escape key
    });

    var um1 = UM.getEditor('myEditor1');

    $('#validate-form').validationEngine({});
    $('#validation-btn').on('click', function() {
        if ($('#validate-form').validationEngine('validate')) {
            swal("Good job!", "表单验证通过!", "success");
        } else {
            swal("错误!", "表单验证不通过!", "error");
        }
    });


    $('#my-multiselect').multiSelect({
        selectableHeader: "<div class='ms-header clearfix'>可选城市<a class='right selct-all'>全选</a></div>",
        selectionHeader: "<div class='ms-header clearfix'>已选城市<a class='right deselct-all'>反选</a></div>",
        afterInit: function(ms) {
            var that = this,
                $selectableBtn = that.$selectableUl.prev().find('.selct-all'),
                $selectionBtn = that.$selectionUl.prev().find('.deselct-all');
            $selectableBtn.on('click', function(e) {
                that.select_all();
            });

            $selectionBtn.on('click', function(e) {
                that.deselect_all();
            });

            that.$selectableUl.perfectScrollbar();
            that.$selectionUl.perfectScrollbar();
        }
    });

    $('#my-multiselect1').multiSelect({
        selectableHeader: "<div class='ms-header clearfix'>可选城市</div>",
        selectionHeader: "<div class='ms-header clearfix'>已选城市</div>",
        afterInit: function(ms) {
            var that = this;
            that.$selectableUl.perfectScrollbar();
            that.$selectionUl.perfectScrollbar();
        },
        afterSelect: function(msValue){
            var ms = this.$element,
                values = ms.val();
            values.splice(values.indexOf(msValue[0]),1);
            this.deselect(values);
        }
    });

    var listOptions = {
        valueNames: ['ls-orderno','ls-linename', 'ls-shopname','ls-preorder','ls-touristno','ls-shouldsum','ls-indeedsum','ls-preordertime','ls-startdate']
    };

    var userList = new List('table-from1', listOptions);
});
