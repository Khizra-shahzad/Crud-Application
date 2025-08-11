      document.addEventListener('DOMContentLoaded', function() {
      
      var form=document.querySelector('#form');
       var table=document.querySelector('#table');

       form.addEventListener('submit',function(event){
        event.preventDefault();
        var name=document.querySelector('#name').value;
        var age=document.querySelector('#age').value;
        var country=document.querySelector('#country').value;

        var data=createList(name,age,country);
        table.appendChild(data);
       })
       function createList(name,age,country){
        var row=document.createElement('tr');

        var nameColumn=document.createElement('td');
        nameColumn.innerText=name;

        var ageColumn=document.createElement('td');
        ageColumn.innerText=age;

        var countryColumn=document.createElement('td');
        countryColumn.innerText=country;

        var actionColumn=document.createElement('td');

       var editButton=document.createElement('button');
       editButton.innerText='Edit';
       editButton.addEventListener('click',function(){
        var updatedName=prompt('Edit name:',name);
        var updatedAge=prompt('Edit age:',age);
        var updatedCountry=prompt('Edit country:',country);

        if(updatedName!==null
        && updatedAge!==null
        && updatedCountry!==null){
            nameColumn.innerText=updatedName;
            ageColumn.innerText=updatedAge;
            countryColumn.innerText=updatedCountry;
        }
       })
       var deleteButton=document.createElement('button');
       deleteButton.innerText='Delete';
       deleteButton.addEventListener('click',function(){
        table.removeChild(row);
       })
       actionColumn.appendChild(editButton);
       actionColumn.appendChild(deleteButton);

       row.appendChild(nameColumn);
       row.appendChild(ageColumn);
       row.appendChild(countryColumn);
       row.appendChild(actionColumn);

       return row;
    }
      });