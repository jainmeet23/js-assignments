class User{

    constructor(name,age,email){
        this.name=name
        this.age=age
        this.email=email
        this.coins=0;
        this.courses=[]
    }
    login(){
        console.log(`${this.name} logged in`);
    }
    logout(){
        console.log(`${this.name} logged out`);
    }
}

class Moderator extends User{
    constructor(name,age,email,role) {
        super()
        this.role=role;
    }
    addcoins(nam)
    {
        nam.coins++;
        return nam;
    }
    removecoins(nam)
    {
        nam.coins--;
        return nam;
    }
}

class Admin extends Moderator{
    addcourse(user,course)
    {
        user.courses.push(course)
    }
    removecourse(user,course)
    {
        let index=user.courses.indexOf(course)
        if(index!=-1)
        user.courses.splice(index,1)

    }
}
let user1=new User("meet",20,"m@gmail.com")
let user2=new User("heema",19,"h@gmail.com")
let users=[user1,user2]
let mod1=new Moderator("sai",22,"s@gmail.com","co-ordinator")
mod1.addcoins(user1)
mod1.addcoins(user1)
mod1.removecoins(user1)
console.log(user1.coins)

let ad1=new Admin()
ad1.addcourse(user1,"Python")
ad1.addcourse(user1,"JS")
ad1.removecourse(user1,"JS")
ad1.removecourse(user1,"Python")
ad1.addcourse(user1,"AI & ML")
console.log(user1.courses)
