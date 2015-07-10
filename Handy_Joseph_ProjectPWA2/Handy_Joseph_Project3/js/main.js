/*  
	Your Project Title
	Author: You
*/

(function($) {

/* ================== Log In ==================*/
    $('#signinButton').click(function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        console.log("This notifies you if the password is working");

        $.ajax({
            url:'xhr/login.php',
            type:'post',
            dataType:'json',
            data:{
                username: user,
                password: pass
            },
            success:function(response){
                console.log("test user");

                if (response.error){
                    alert(response.error);

                }else{
                    window.location.assign('admin.html')
                };
            }
        })
    });
/* ===================== Register ====================*/
    $('#register').on('click', function(){
        var firstname= $('#firstname').val(),
            lastname= $('#lastname').val(),
            username= $('#username').val(),
            email= $('#email').val(),
            password= $('#password').val();
        console.log(firstname+''+lastname+''+username+''+email+''+password);

        $.ajax({
            url:'xhr/register.php',
            type:'post',
            dataType:'json',
            data: {
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: password
            },
            success: function(response){
                if(response.error){
                    alert(response.error);
                }else{
                    window.location.assign('admin.html');
                }
            }
        });

    });
/* ==================== Go to project page ====================== */
    $('.projectsbtn').on('click', function(e){
        e.preventDefault();
        window.location.assign('projects.html');
    });

/* ==================== Go to profile page ====================== */
    $('#profilebtn').on('click', function(e){
        e.preventDefault();
        window.location.assign('profile.html');
    });

/* ==================== Go to profile page ====================== */
    $('.dashboard').on('click', function(e){
        e.preventDefault();
        window.location.assign('admin.html');
    });
/* ==================== Log Out ====================== */
    $('#logOut').click(function(e){
        e.preventDefault;
        $.get('xhr/logout.php', function(){
            window.location.assign('index.html')
        })
    });
/* ==================== Display username ====================== */
    $.getJSON("xhr/check_login.php", function(data){
        console.log(data);
        $.each(data, function(key, val){
            console.log(val.firstname);
            $(".userid").html("welcome User: " + val.first_name);
        })
    });

/* ====================  tooltip  ========================= */

 $('.masterTooltip').hover(function(){
 //Hover over code
      var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
  $('<p class="tooltip"></p>')
    .text(title)
  .appendTo('body')
.fadeIn('slow')
  }, function() {
//Hover out code
    $(this).attr('title', $(this).data('tipText'));
  $('.tooltip').remove();
}).mousemove(function(e) {
 var mousex = e.pageX + 20; //Get X coordinates
var mousey = e.pageY + 10; //Get Y coordinates
$('.tooltip')
    .css({ top: mousey, left: mousex })
});

    /* ===================   Tabbed Accordion For Projects Page ============================= */
$('#tabs p').hide().eq(0).show();
$('#tabs p:not(:first)').hide();

$('#tabs-nav li').click(function(e) {
e.preventDefault();
$('#tabs p').hide();
$('#tabs-nav .current').removeClass("current");
$(this).addClass('current');
var clicked = $(this).find('a:first').attr('href');
$('#tabs ' + clicked).fadeIn('fast');
}).eq(0).addClass('current');

 /* ============ Fading Status ================ */
    $('.mystatus').mouseover(function(){
        $(this).fadeTo(100, .3);

    });

    $('.mystatus').mouseover(function(){
        $(this).fadeTo(100,  1);

    });


/* =========== New Project Page ====================== */
    $('#addButton').on('click', function() {

        var proName =  $('#projectName').val(),
        projDec = $('#projectDescription').val(),
        projDue = $('#projectDueDate').val(),
        status = $('input[name = "status"]:checked').prop("id");

        $.ajax({
            url: "xhr/new_project.php",
            type:"post",
            dataType:"json",
            data:{
                projectName:proName,
                projectDescription:projDec,
                dueDate:projDue,
                status:status
            },
            success: function(response){
                console.log('Testing for success');

                if(response.error){
                    alert(response.error);

                }else{
                    window.location.assign("projects.html");
                };
            }
        });
    });
/* =========== Project Page ====================== */
$('.modalClick').on('click', function(event){
event.preventDefault();
$('#overlay')
 .fadeIn()
 .find('#modal')
 .fadeIn();
});

$('.close').on('click', function(event){
 event.preventDefault();
$('#overlay')
 .fadeOut()
 .find('#modal')
 .fadeOut();

});

/* =========== Get Project ====================== */
    var projects = function(){

        $.ajax({
            url:'xhr/get_projects.php',
            type:'get',
            dataType:'json',
            success:function(response){
                if(response.error){
                    console.log(response.error);

                }else{
                    for(var i=0, j=response.projects.length; i < j; i++){
                        var result = response.projects[i];

                        $(".projects").append(
                            '<div style="border:1px solid black">' +
                                "<input class='projectid' type='hidden' value='" + result.id + "'>" +
                                "Project Name: " + result.projectName + "<br>" +
                                "Project Description: " + result.projectDescription + "<br>" +
                                "Project Status: " + result.status + "<br>"
                                + '<button class="deletebtn">Delete</button>'
                                + '<button class="editbtn">edit</button>'
                                + '</div> <br>'

                        );
                    };
                    $('.deletebtn').on('click', function(e){
                        console.log('test delete');
                        $.ajax({
                            url:'xhr/delete_project.php',
                            data:{
                                projectID: result.id
                            },
                            type:'POST',
                            dataType:'json',
                            success:function(response){
                                console.log('Testing for success');

                                if(reponse.error){
                                    alert(response.error);
                                    //console.log(result.id);
                                    window.location.assign("projects.html");
                                };
                            }
                        });
                    });//End Delete
                }
            }
        })
    }
    projects();


	
})(jQuery); // end private scope






