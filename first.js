let count = 0 ;




function increment()
{

  count = count + 1;
  document.getElementById("count-el").textContent = count;


};



function save()
{
  
 let saveEll = document.getElementById("save-el"); 
 
saveEll.textContent +=  count + ' - ' ;



};


function setzero()
{

count = 0;
document.getElementById("count-el").textContent = count;

}