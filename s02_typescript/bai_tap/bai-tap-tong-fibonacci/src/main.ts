function fibonacci(n : number) {
    let a = 0;
    let b = 1;
    let total = a+b;
    let sum = 0;
    for (let i = 1; i <= n; i++){
        if (i==1){
            console.log(a);
            sum+=a;
        } else if (i==2){
            console.log(b);
            sum+=b;
        } else {
            console.log(total);
            sum+=total;
            a=b;
            b=total;
            total=a+b;
        }
    }
    console.log("sum of " + n +" fibonacci: "+ sum);
}

fibonacci(10);