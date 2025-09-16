export class Panel{
    constructor(sor) {
        let data = sor.split(";")
        this.Ev = Number(data[0])
        this.Datum = data[1]
        this.Monolog = data[2]
        this.kepurl = data[3].split(",")
        
    }
}