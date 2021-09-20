window.addEventListener('DOMContentLoaded', function (){
    let button = document.getElementById("button");


    button.addEventListener ("click", function(){
        let friends = ["james", "milo", "jack", "steve", "sarah"];

        for (let f = 0; f < friends.length; f++) {
            
                const div = document.createElement('div');
                const h3 = document.createElement('h3')

                document.body.appendChild(div);
                div.className = "Friend";
                div.innerHTML="<h3 class='name'>" + friends[f].toUpperCase() + "</h3>";
                for (let j=99; j>0; j--){
                    if(j===1){
                   const p = document.createElement('p');
                   p.innerHTML = j + " line of code in the file," + j + " line of code;" + friends[f] + " strikes one out, clears it all out, no more lines of codein the file " ;
                   div.appendChild(p);
                        
                    } else{
                        const p = document.createElement("p");
                        p.innerHTML = j + " lines of code in the file, " + j + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file " ;
                        div.appendChild(p);
                    }
                }

                    
                }
            }
                    
        ,
    )





})
