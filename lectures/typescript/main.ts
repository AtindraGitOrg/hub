import express from 'express';


class main2 {

    main2() {
         let abc = this.name();
       }

    
    /**
     * name
     */
    public name():number {

        const app = express(); 
        

        app.get('/', function (req, res) {
            res.send('Hello World')

        };
    return 20;
}


