 var list= [
    {
    categoryId: 'fruits',
    title: 'mango',
    quantity: 2,
    },
    {
    categoryId: 'fruits',
    title: 'apple',
    quantity: 3,
    },
    {
    categoryId: 'vegetables',
    title: 'potato',
    quantity: 1,
    },
    {
    categoryId: 'vegetables',
    title: 'tomato',
    quantity: 4,
    },
    {
    categoryId: 'seeds',
    title: 'pumpkin seeds',
    quantity: 3,
    },
 ]

const newList=list.map(({categoryId,...data})=>({
        categoryId,
        data
    }));

    console.log(newList)
function uniquearray(element){
       let arr = [];
       for(let i = 0; i < newList.length; i++) {
            if(!arr.includes(newList[i].categoryId)) {
                arr.push(result[i].categoryId);
            }
        }
        return arr; 
       }
       var nonDuplicate=uniquearray(newList)
       console.log(nonDuplicate)
       
       
       var obj3 = []
       
       
       for(var floop1=0;floop1<nonDuplicate.length;floop1++)
       {var obj4={'candidateId':'alok','data':[]}
       for (var innerloop=0;innerloop<newList.length;innerloop++)
       {
       
       if((newList[innerloop].categoryId)==nonDuplicate[floop1]){
       obj4['candidateId']=newList[innerloop].categoryId
        obj4['data'].push(newList[innerloop].data)
       
       
       }
       }
       obj3.push(obj4)
       }
       
       
       console.log(obj3)