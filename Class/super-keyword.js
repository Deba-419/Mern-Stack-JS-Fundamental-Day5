class parent{

hello1(){
    console.log("Hello Jonogon");
}
hello2(){
    console.log("Hello Jonogon! What's app?");
}

}

class child extends parent{

    demo(){
        super.hello1();
        super.hello2();

    }


}


var obj=new child();


obj.demo();
