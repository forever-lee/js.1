var str="this work is too difficult for me";
	var arr=str.split(" ");
	console.log(arr)
    var b=new Array(i);
	for (var i=0;i<arr.length;i++){
    b[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
    }//转换大写并循环
    str=b.join(" ");//转换一个字符串
    console.log(str)

//    冒泡Test
function  maopao(array) {
    var len = array.length;
    var temp;
    var j;
    while(len>0){
        for (j = 0;j<len-1;j++){
            if(array[j+1]<array[j]){
                temp = array[j]; // 临时储存 交换的时候备用
                array[j] = array[j+1]; //  用第二个数给第一个数赋值。
                array[j+1] = temp; //用第一个数给第二个数赋值
            }
            console.log(array,"---------------");
        }
        len--; // 
        console.log(len,"---------------");
    }
    return array;
}
var arr = [ 5 ,6 ,4 ,2 ,3 ,9 ,8 ];
var arrSorted = maopao(arr);
console.log(arrSorted);

//展平数组
let arr2 = [[ 1 , 2 ] , 3 , [ 4 , [ 5 , 6 ], 7 ]];
function flat(arr2) {
    let result =[];
    arr2.map( item => {
        if (Array.isArray(item)){
            result = result.concat(flat(item));//连接数组
        } else {
          result.push(item);
        }//从末位添加数组
    });
    return result;
}
console.log(flat(arr2 )); 

 

   

