import { readConsole } from "./readConsole";
import { writeAndRead } from "./writeAndReadObject";

rc.readConsole((test.json)) => {
    wr.writeAndReadObject('./test.json', test.json, (test) => {
        console.log('Name : ', test.name);
        console.log('Surname : ', test.username);
        console.log('Age : ', test.age);
    });
};