class dataScheme{
    constructor(classSymbol, className, time, score, professorName){
        this.classSymbol = classSymbol;
        this.className = className;
        this.time = time;
        this.score = score;
        this.professorName = professorName;
    }

    /*Getters*/
    get classSymbol(){
        return this.classSymbol;
    }
    get className(){
        return this.className;
    }
    get time(){
        return this.time;
    }
    get score(){
        return this.score;
    }
    get professorName(){
        return this.professorName;
    }

    /*Setters*/
    
    set className(name){
        this.className = name;
    }
    set classSymbol(symbol){
        this.classSymbol = symbol;
    }
    set time(time){
        this.time = time;
    }
    set score(score){
        this.score = score;
    }
    set professorName(pname){
        this.professorName = pname;
    }
    

}
module.exports = dataScheme;