import { readConsolle } from "./readConsole";
import { writeAndRead } from "./writeAndReadObject";

try {
    readConsolle();

    writeAndRead("test.json");

} catch (err) {

    console.log(err);
}