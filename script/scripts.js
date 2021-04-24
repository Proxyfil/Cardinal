function burgermenu(){
        try{
                if(document.querySelector(".showmenu")!=null){
                        document.querySelector(".showmenu").classList.toggle("showmenu");
                }
        }
        finally{
                document.querySelector(".is-left-bar").classList.toggle("hide");
                document.querySelector("#is-burger").classList.toggle("hide");
        }
}
function twittermenu(){
        try{
                if(document.querySelector(".showmenu")!=null){
                        document.querySelector(".showmenu").classList.toggle("showmenu");
                }
        }
        finally{
                document.querySelector(".twittermenu").classList.toggle("showmenu");
        }
}
function twitchmenu(){
        try{
                if(document.querySelector(".showmenu")!=null){
                        document.querySelector(".showmenu").classList.toggle("showmenu");
                }
        }
        finally{
                document.querySelector(".twitchmenu").classList.toggle("showmenu");
        }
}
function grafanamenu(){
        try{
                if(document.querySelector(".showmenu")!=null){
                        document.querySelector(".showmenu").classList.toggle("showmenu");
                }
        }
        finally{
                document.querySelector(".grafanamenu").classList.toggle("showmenu");
        }
}
function createWidgetTwitterTimeLine() {
        var el = document.createElement("div"); 
        el.innerHTML = '<a onclick="remove(this);"><img src="../content/cross.svg" width="20vh" style="float: right;"></a><input type="text" name="profil" placeholder="Profil Twitter" onkeyup="$value = value"><input onclick="updateWidgetTwitterTimeLine($value, this);" type="button" value="submit"><br>'
        el.classList.add("brick");
        el.classList.add("twitter");
        el.classList.add("dragging");
        document.getElementById("gridly").appendChild(el);
}

function updateWidgetTwitterTimeLine(value, el) {
        $profil = value
        el.parentNode.innerHTML = ('<a onclick="remove(this);"><img src="../content/cross.svg" width="20vh" style="float: right;"></a><input type="text" name="profil" placeholder="Profil Twitter" onkeyup="$value = value"><input onclick="updateWidgetTwitterTimeLine($value, this);" type="button" value="submit"><br><a width="14vw" height="80vh" class="twitter-timeline" href="https://twitter.com/'+$profil+'">Tweets by '+$profil+'</a>');
        setTimeout(250);
        var script = document.createElement("script");
                script.classList.add("script-twitter");  
                script.type = "text/javascript";  
                script.src = "https://platform.twitter.com/widgets.js";  
        document.body.appendChild(script); 
}
function remove(el) {
        el.parentNode.remove();
        
}
function createWidgetVenastyStatsCG() {
        var el = document.createElement("div");
        el.innerHTML = '<a onclick="remove(this);"><img src="../content/cross.svg" width="20vh" style="float: right;"></a><br><iframe src="https://overlay.gdoc.fr/bundles/venasty/graphics/" width="500vh" height="120vh" frameborder="0"></iframe>'
        el.classList.add("brick");
        el.classList.add("grafana");
        el.classList.add("dragging");
        document.getElementById("gridly").appendChild(el);
}

function createWidgetVenastyStatsStatus() {
        var el = document.createElement("div");
        el.innerHTML = '<a onclick="remove(this);"><img src="../content/cross.svg" width="20vh" style="float: right;"></a><br><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTe6qeqMqKidmWyHWgH4opaVn3do2QtCJHsSrRWkWkQemnqqzdka7wawR9clm4RwYwyq5ULSLQSzCSz/pubhtml?gid=926335710&amp;single=true&amp;widget=true&amp;headers=false" width="430vh" height="250vh"></iframe>'
        el.classList.add("brick");
        el.classList.add("grafana");
        el.classList.add("dragging");
        document.getElementById("gridly").appendChild(el);
}
