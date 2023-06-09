function fizzBuzz(start, end) {
  const arr=[];
	let temp=start;
	for(let i=0;temp<=end;i++){
	if(temp%5==0&&temp%3==0){
		arr[i]="FizzBuzz";
		temp++;}
		else if(temp%5==0){
		arr[i]="Buzz";
		temp++;}
		else if(temp%3==0){
		arr[i]="Fizz";
		temp++;}
	else{
		arr[i]=temp;
		temp++;}}
	return arr;


}

// Do not edit this line;
module.exports = fizzBuzz;
