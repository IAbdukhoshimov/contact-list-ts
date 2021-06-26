let bin = [3,9,8,4,4,8];
let temp=[];
function arr(target){
    if(target==0 && target<0){
        console.log("Error");
    }
    else{
        for(let i =0;i<=bin.length;i++){
            if(bin[i]+bin[i+1]==target){
                temp.push([i,i+1]);
                console.log(temp)
            }
            else{
                console.log("");
            }
        }
    }
}
arr(12);