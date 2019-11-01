//1b Understanding ES6 Modules – import and export

import React from 'react';
import upper, {text1,text2,text3} from "./file1";

function App1() {
    return (
        <div>
            <p>Exercise 1</p>
            <p>text1</p>
            <p>text2</p>
            <p>text3</p>
            <p>{upper("please uppercase me")}</p>
        </div>
    );
}

export default App1;
