class  person{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    hello =(a,b)=>{
        return a+b;
    }
    detail(){
        console.log(`First name ${this.a} and  last name "${this.b}"`);
    }
}
p=new person("shubham","maurya");
p.detail();
console.log(p.hello(4,5));