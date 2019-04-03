function generateHashtag(str){
      return str.lenth > 140 || str == '' ? false: '#' + str.split(' ').map(capitalize).join(' ')
    
       if(str.length >140 || str == ''){
             return false;
       }
        
      
       str = str.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
       
        str= '#' +str;
       return str;
    }


console.log( generateHashtag('hello miss dong'));