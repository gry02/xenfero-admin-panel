function toogle()
{
    var sidebar = document.getElementById("sidebar");

    if(sidebar.style.display == "block")
    {
        sidebar.style.display = "none";
    }
    else
    {
        sidebar.style.display = "block";
        sidebar.style.transition = "all 2s";
    }
}
